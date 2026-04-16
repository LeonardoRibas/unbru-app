import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppState, AppStateStatus } from "react-native";
import mobileAds, {
    AdEventType,
    AppOpenAd,
    InterstitialAd,
    TestIds,
    RequestOptions,
} from "react-native-google-mobile-ads";

const INTERSTITIAL_LAST_SHOWN_AT_KEY = "ad:interstitial:lastShownAt";
const INTERSTITIAL_MIN_INTERVAL_MS = 0; // TODO: restore to 1000 * 60 * 2

const APP_OPEN_LAST_SHOWN_AT_KEY = "ad:appOpen:lastShownAt";
const APP_OPEN_MIN_INTERVAL_MS = 1000 * 60 * 5;

const RETRY_BASE_DELAY_MS = 5_000;
const RETRY_MAX_DELAY_MS = 120_000;
const RETRY_MAX_ATTEMPTS = 5;

const adKeywords = [
    "food",
    "cooking",
    "recipe",
    "meal",
    "lunch",
    "dinner",
    "breakfast",
    "snack",
    "cuisine",
    "restaurant",
    "fast food",
    "meal plan",
    "grocery",
    "delivery",
    "healthy eating",
    "nutrition",
    "student",
    "university",
    "Brasília",
];

// ---------------------------------------------------------------------------
// Interstitial Ad
// ---------------------------------------------------------------------------

const interstitialUnitId =
    __DEV__ ? TestIds.INTERSTITIAL : "ca-app-pub-7231147932250814/2635815977";

const interstitial = InterstitialAd.createForAdRequest(interstitialUnitId, {
    keywords: adKeywords,
});

let isInterstitialLoaded = false;
let isInterstitialLoading = false;
let interstitialRetryCount = 0;
let interstitialRetryTimer: ReturnType<typeof setTimeout> | null = null;

function scheduleInterstitialRetry() {
    if (interstitialRetryCount >= RETRY_MAX_ATTEMPTS) {
        return;
    }
    const delay = Math.min(
        RETRY_BASE_DELAY_MS * Math.pow(2, interstitialRetryCount),
        RETRY_MAX_DELAY_MS
    );
    interstitialRetryCount += 1;
    interstitialRetryTimer = setTimeout(() => {
        interstitialRetryTimer = null;
        preloadInterstitialAd();
    }, delay);
}

interstitial.addAdEventListener(AdEventType.LOADED, () => {
    isInterstitialLoaded = true;
    isInterstitialLoading = false;
    interstitialRetryCount = 0;
});

interstitial.addAdEventListener(AdEventType.CLOSED, () => {
    isInterstitialLoaded = false;
    preloadInterstitialAd();
});

interstitial.addAdEventListener(AdEventType.ERROR, () => {
    isInterstitialLoaded = false;
    isInterstitialLoading = false;
    scheduleInterstitialRetry();
});

async function initializeAds() {
    try {
        await mobileAds().initialize();
    } catch (error) {
        console.error("[ads] initialize failed", error);
    }
}

function preloadInterstitialAd() {
    if (isInterstitialLoaded || isInterstitialLoading) {
        return;
    }

    isInterstitialLoading = true;
    interstitial.load();
}

async function canShowInterstitial() {
    try {
        const lastShownAtRaw = await AsyncStorage.getItem(INTERSTITIAL_LAST_SHOWN_AT_KEY);
        const lastShownAt = Number(lastShownAtRaw ?? 0);
        return Date.now() - lastShownAt >= INTERSTITIAL_MIN_INTERVAL_MS;
    } catch (error) {
        return true;
    }
}

async function markInterstitialAsShown() {
    try {
        await AsyncStorage.setItem(INTERSTITIAL_LAST_SHOWN_AT_KEY, Date.now().toString());
    } catch (error) {
        console.error("[ads] failed to persist interstitial timestamp", error);
    }
}

async function maybeShowInterstitialAd() {
    const canShow = await canShowInterstitial();

    if (!canShow || !isInterstitialLoaded) {
        preloadInterstitialAd();
        return false;
    }

    await markInterstitialAsShown();
    interstitial.show();
    return true;
}

// ---------------------------------------------------------------------------
// App Open Ad
// ---------------------------------------------------------------------------

const appOpenUnitId =
    __DEV__ ? TestIds.APP_OPEN : "ca-app-pub-7231147932250814/5057181053";

const appOpenAd = AppOpenAd.createForAdRequest(appOpenUnitId, {
    keywords: adKeywords,
});

let isAppOpenLoaded = false;
let isAppOpenLoading = false;
let appOpenRetryCount = 0;
let appOpenRetryTimer: ReturnType<typeof setTimeout> | null = null;

function scheduleAppOpenRetry() {
    if (appOpenRetryCount >= RETRY_MAX_ATTEMPTS) {
        return;
    }
    const delay = Math.min(
        RETRY_BASE_DELAY_MS * Math.pow(2, appOpenRetryCount),
        RETRY_MAX_DELAY_MS
    );
    appOpenRetryCount += 1;
    appOpenRetryTimer = setTimeout(() => {
        appOpenRetryTimer = null;
        preloadAppOpenAd();
    }, delay);
}

function preloadAppOpenAd() {
    if (isAppOpenLoaded || isAppOpenLoading) {
        return;
    }
    isAppOpenLoading = true;
    appOpenAd.load();
}

appOpenAd.addAdEventListener(AdEventType.LOADED, () => {
    isAppOpenLoaded = true;
    isAppOpenLoading = false;
    appOpenRetryCount = 0;
});

appOpenAd.addAdEventListener(AdEventType.CLOSED, () => {
    isAppOpenLoaded = false;
    preloadAppOpenAd();
});

appOpenAd.addAdEventListener(AdEventType.ERROR, () => {
    isAppOpenLoaded = false;
    isAppOpenLoading = false;
    scheduleAppOpenRetry();
});

let appStateSubscription: ReturnType<typeof AppState.addEventListener> | null = null;

function setupAppOpenAdListener() {
    if (appStateSubscription) {
        return;
    }

    preloadAppOpenAd();

    let lastBackground = 0;

    appStateSubscription = AppState.addEventListener(
        "change",
        (nextState: AppStateStatus) => {
            if (nextState === "background") {
                lastBackground = Date.now();
                return;
            }

            if (nextState === "active" && lastBackground > 0) {
                const elapsed = Date.now() - lastBackground;
                if (elapsed >= 5_000 && isAppOpenLoaded) {
                    canShowAppOpen().then((canShow) => {
                        if (canShow) {
                            markAppOpenAsShown();
                            appOpenAd.show();
                        }
                    });
                }
            }
        }
    );
}

async function canShowAppOpen() {
    try {
        const lastShownAtRaw = await AsyncStorage.getItem(APP_OPEN_LAST_SHOWN_AT_KEY);
        const lastShownAt = Number(lastShownAtRaw ?? 0);
        return Date.now() - lastShownAt >= APP_OPEN_MIN_INTERVAL_MS;
    } catch (error) {
        return true;
    }
}

async function markAppOpenAsShown() {
    try {
        await AsyncStorage.setItem(APP_OPEN_LAST_SHOWN_AT_KEY, Date.now().toString());
    } catch (error) {
        console.error("[ads] failed to persist app open timestamp", error);
    }
}

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------

function getAdRequestOptions(): RequestOptions {
    return {
        keywords: adKeywords,
    };
}

export {
    initializeAds,
    preloadInterstitialAd,
    maybeShowInterstitialAd,
    setupAppOpenAdListener,
    getAdRequestOptions,
};

import AsyncStorage from "@react-native-async-storage/async-storage";
import mobileAds, {
    AdEventType,
    InterstitialAd,
    TestIds,
    RequestOptions,
} from "react-native-google-mobile-ads";

const INTERSTITIAL_LAST_SHOWN_AT_KEY = "ad:interstitial:lastShownAt";
const INTERSTITIAL_MIN_INTERVAL_MS = 1000 * 60 * 2;

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
];

const interstitialUnitId =
    __DEV__ ? TestIds.INTERSTITIAL : "ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy";

const interstitial = InterstitialAd.createForAdRequest(interstitialUnitId, {
    keywords: adKeywords,
});

let isInterstitialLoaded = false;
let isInterstitialLoading = false;

interstitial.addAdEventListener(AdEventType.LOADED, () => {
    isInterstitialLoaded = true;
    isInterstitialLoading = false;
});

interstitial.addAdEventListener(AdEventType.CLOSED, () => {
    isInterstitialLoaded = false;
    preloadInterstitialAd();
});

interstitial.addAdEventListener(AdEventType.ERROR, () => {
    isInterstitialLoaded = false;
    isInterstitialLoading = false;
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

function getAdRequestOptions(): RequestOptions {
    return {
        keywords: adKeywords,
    };
}

export {
    initializeAds,
    preloadInterstitialAd,
    maybeShowInterstitialAd,
    getAdRequestOptions,
};

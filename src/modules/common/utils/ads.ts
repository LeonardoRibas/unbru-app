function initializeAds() {
    return Promise.resolve();
}

function preloadInterstitialAd() {
    return;
}

function maybeShowInterstitialAd() {
    return Promise.resolve(false);
}

function setupAppOpenAdListener() {
    return;
}

function getAdRequestOptions() {
    return {};
}

export {
    initializeAds,
    preloadInterstitialAd,
    maybeShowInterstitialAd,
    setupAppOpenAdListener,
    getAdRequestOptions,
};

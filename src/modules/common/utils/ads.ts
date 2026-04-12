function initializeAds() {
    return Promise.resolve();
}

function preloadInterstitialAd() {
    return;
}

function maybeShowInterstitialAd() {
    return Promise.resolve(false);
}

function getAdRequestOptions() {
    return {};
}

export {
    initializeAds,
    preloadInterstitialAd,
    maybeShowInterstitialAd,
    getAdRequestOptions,
};

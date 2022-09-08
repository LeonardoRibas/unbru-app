module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            [
                "module:react-native-dotenv",
                {
                    moduleName: "react-native-dotenv",
                    path: ".env",
                },
            ],
        ],
    };
};

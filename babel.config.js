module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@configs": ["./src/configs/*"],
          "@modules": ["./src/modules/*"],
          "@shared": ["./src/shared/*"],
          "@database": ["./src/shared/database/*"],
          "@utils": ["./src/shared/utils/*"],
        },
      },
    ],
    "babel-plugin-transform-typescript-metadata",
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
  ],
};

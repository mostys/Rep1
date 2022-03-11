{
  "presets": [
    [
      "@babel/preset-env",
      {
        "bugfixes": true
      }
    ],
    ["@babel/preset-typescript"]
  ],
  "plugins": [
    [
      "@babel/plugin-proposal-class-properties",
      {
        "loose": true
      }
    ],
    [
      "@babel/plugin-proposal-private-methods",
      {
        "loose": true
      }
    ],
    [
      "@babel/plugin-proposal-private-property-in-object",
      {
        "loose": true
      }
    ]
  ]
}

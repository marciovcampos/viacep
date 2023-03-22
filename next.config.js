module.exports = {
  reactStrictMode: true,
  module: {
    rules: [
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
      }
    ]
  }
}

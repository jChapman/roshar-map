module.exports = {
  pwa: {
    name: 'Roshar Map',
    themeColor: '#0f3562',
    msTileColor: '#0f3562',
    manifestOptions: {
      background_color: '#0f3562'
    },
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
      exclude: ['index.html'],
      runtimeCaching: [
        {
          urlPattern: new RegExp('/$'),
          handler: 'NetworkFirst'
        }
      ]
    }
  }
}

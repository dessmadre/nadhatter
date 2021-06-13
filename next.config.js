module.exports = {
  images: {
    domains: ['cdn.chec.io'],
  },
  async headers() {
    return [
      {
        source: '/products',
        headers: [
          {
            key: 'x-decompressed-content-length',
            value: 'Content Length helpes with progress events',
          },
        ],
      },
    ];
  },
};

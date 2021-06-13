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
            key: 'content-length',
            value: 'Content Length helpes with progress events',
          },
        ],
      },
    ];
  },
};

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
            key: 'Content-Length',
            value: 'Content Length helpes with progress events',
          },
        ],
      },
    ];
  },
};

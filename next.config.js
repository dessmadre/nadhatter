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
            value: '10000000',
          },
        ],
      },
    ];
  },
};

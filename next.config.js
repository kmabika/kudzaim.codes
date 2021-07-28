module.exports = {
  images: {
    domains: ['media.graphcms.com'],
  },
  async redirects() {
    return [
      {
        source: '/resume',
        destination:
          'https://bit.ly/3yXp9jF',
        permanent: true,
      },
      {
        source: '/in',
        destination: 'https://bit.ly/3iyK3zl',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://bit.ly/2TlC1kI',
        permanent: true,
      },
    ];
  },
};

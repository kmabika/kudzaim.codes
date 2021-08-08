module.exports = {
  images: {
    domains: ['media.graphcms.com'],
  },
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      // {
      //   source: '/resume',
      //   destination:
      //     'https://bit.ly/3rSOkSt',
      //   permanent: true,
      // },
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

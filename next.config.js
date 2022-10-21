/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["source.unsplash.com"],
  },
  i18n: {
    locales: ["en", "it"],
    defaultLocale: "en",
    localeDetection: false,
  },
  /* async rewrites() {
    return [
      {
        source: "/it/pippo",
        destination: "/it/about",
        locale: false, // Use `locale: false` so that the prefix matches the desired locale correctly
      },
    ];
  } */
};

module.exports = nextConfig;

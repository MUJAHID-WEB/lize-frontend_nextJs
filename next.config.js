/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    localeDetection: false,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'images.pexels.com',
      'res.cloudinary.com',
      'platform-lookaside.fbsbx.com',
      'lh3.googleusercontent.com',
      's3-upload-by.s3.amazonaws.com',
    ],
  },
};

module.exports = nextConfig;

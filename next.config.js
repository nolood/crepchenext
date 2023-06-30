/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://krepcheapi.ru/api/",
  },
  images: {
    domains: ["krepcheapi.ru"],
  },
};

module.exports = nextConfig;

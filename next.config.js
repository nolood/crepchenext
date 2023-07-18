/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "https://krepcheapi.ru/api/",
    PASS: "SADDSA432423",
  },
  images: {
    domains: ["krepcheapi.ru"],
  },
};

module.exports = nextConfig;

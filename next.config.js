/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /**
   * INFO: Uncomment below code to route all api through the python backend
   * only to be used for local testing,make sure the destination is correct.
   * For vercel deployments it is not necessary
   */
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: "http://127.0.0.1:8000/api/:path*",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;

import type { NextConfig } from "next";
import { use } from "react";


const nextConfig: NextConfig = {
  // webpack(config) {
  //   // const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.(".svg")
  //   // );
  //   // config.module.rules.push(
  //   //   {
  //   //     ...fileLoaderRule,
  //   //     test: /\.svg$/i,
  //   //     resourceQuery: /url/, // *.svg?url
  //   //   },
  //   //   {
  //   //     ...fileLoaderRule,
  //   //     test: /\.svg$/i,
  //   //     issuer: fileLoaderRule.issuer,
  //   //     resourceQuery: { not: [...fileLoaderRule, /url/] }, // exclude if *.svg?url
  //   //     use: ["@svgr/webpack"],
  //   //   }
  //   // );
  //   // fileLoaderRule.exclude = /\.svg$/i;
  //   // return config;

  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     issuer: {
  //       and: [/\.(js|ts|jsx|tsx|md)x?$/],
  //     },
  //     use: ["@svgr/webpack"],
  //   });
  //   return config;
  // },

  // experimental: {
  //   turbo: {
  //     rules: {
  //       '*.svg': {
  //         loaders: ["@svgr/webpack"],
  //         as: '*.tsx',
  //       }
  //     }
  //   }
  // },

  images: {
    unoptimized: true,
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   allowedDevOrigins: ["*.preview.same-app.com"],
//   images: {
//     unoptimized: true,
//     domains: [
//       "source.unsplash.com",
//       "images.unsplash.com",
//       "ext.same-assets.com",
//       "ugc.same-assets.com",
//     ],
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "source.unsplash.com",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "ext.same-assets.com",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "ugc.same-assets.com",
//         pathname: "/**",
//       },
//     ],
//   },
// };

// module.exports = nextConfig;
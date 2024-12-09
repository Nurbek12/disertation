/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.SITE_URL ||
    "https://samarkand-veterinariya-med-disertatio.netlify.app",
  generateRobotsTxt: true,
  exclude: ["*/_meta"],
  // ...other options
};

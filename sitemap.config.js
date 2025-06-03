const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || 'http://localhost:3000';

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  exclude: ['/404'],
  generateRobotsTxt: true, // robots.txt 파일도 함께 생성
  changefreq: 'daily', // 기본 갱신 주기
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: ['/404'],
      },
      { userAgent: '*', allow: '/' },
    ],
  },
};

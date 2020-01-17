const config = {
  siteTitle: 'Gatsby Starter Readify', // Site title.
  siteTitleShort: 'Gatsby Readify', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'Gatsby Starter Readify', // Alternative site title for SEO.
  siteName: 'Gatsby Starter Readify',
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://gatsby-starter-readify.netlify.com', // Domain of your website without pathPrefix.
  siteAuthor: 'Kim Lian Lopez',
  siteDeveloper: 'Kim Lian Lopez',
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    'A gatsby advance starter with advance SEO, Theming, and Netlify-CMS', // Website description used for RSS feeds/meta description tag.
  googleAnalyticsID: 'UA-153588035-1', // GA tracking ID.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  // dateFormat: 'DD/MM/YYYY', // Date format for display.
  postsPerPage: 3, // Amount of posts displayed per listing page.
  blogAuthorName: 'Kim Lian Lopez', // Username to display in the author segment.
  // userEmail: 'AdvancedUser@example.com', // Email used for RSS feed's author segment
  // userTwitter: '', // Optionally renders "Follow Me" in the UserInfo segment.
  // userLocation: 'North Pole, Earth', // User location to display in the author segment.
  blogAuthorAvatar: '/img/author-avatar.jpg', // User avatar to display in the author segment.
  // userDecription:
  // "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/kimlianlopez',
      iconClassName: 'fa fa-github'
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/klianlopez96',
      iconClassName: 'fa fa-twitter'
    },
    {
      label: 'Email',
      url: 'mailto:kimlian.dev@gmail.com',
      iconClassName: 'fa fa-envelope'
    }
  ]
  // copyright: 'Copyright © 2019. Advanced User', // Copyright string for the footer of the website and RSS feed.
  // themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  // backgroundColor: '#e0e0e0', // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '';

  // Make sure pathPrefix only contains the first forward slash
} else {
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') {
  config.siteUrl = config.siteUrl.slice(0, -1);
}

// // Make sure siteRss has a starting forward slash
// if (config.siteRss && config.siteRss[0] !== '/')
//   config.siteRss = `/${config.siteRss}`;

module.exports = config;

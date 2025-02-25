module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://kbblog.netlify.app/", // Used for sitemap generation
        manifestSettings: {
          favicon: "./content/images/logo.png", // Path is relative to the root
          siteName: "Kiran Brahmas's Blog", // Used in manifest.json
          shortName: "KB", // Used in manifest.json
          startUrl: "/", // Used in manifest.json
          backgroundColor: "#FFFFFF", // Used in manifest.json
          themeColor: "#000000", // Used in manifest.json
          display: "minimal-ui", // Used in manifest.json
        },
        contentDirectory: "./content",
        blogSettings: {
          path: "/blog", // Defines the slug for the blog listing page
          usePathPrefixForArticles: true, // Default true (i.e. path will be /blog/first-article)
        },
         googleAnalytics: {
          trackingId: "G-HPC4ZY7B1C",
             anonymize: true, // Default true
              environments: ["production"] 
         }
      },
    },
  ],
};

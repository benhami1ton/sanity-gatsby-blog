export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60df37df0456b52089cdff6c",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ajs12cem",
                  apiId: "94761a6e-34bc-4d88-98b1-0e50cae21aed",
                },
                {
                  buildHookId: "60df37df53caab0a3f513741",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-946n2hwa",
                  apiId: "da1cdc75-4344-4390-8206-cee1082a0ce9",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/benhami1ton/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-946n2hwa.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

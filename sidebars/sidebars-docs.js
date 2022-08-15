module.exports = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Guides (new)',
      link: { type: 'doc', id: 'guides-new/overview' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'guides-new',
        },
      ],
    },
    {
      type: 'category',
      label: 'Overview',
      items: [
        {
          type: 'autogenerated',
          dirName: 'overview',
        },
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        {
          type: 'autogenerated',
          dirName: 'guides',
        },
      ],
    },
    {
      type: 'link',
      label: 'SDKs',
      href: '/docs/sdks',
    },
    'code-examples',
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        {
          type: 'autogenerated',
          dirName: 'tutorials',
        },
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        {
          type: 'autogenerated',
          dirName: 'troubleshooting',
        },
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        {
          type: 'autogenerated',
          dirName: 'resources',
        },
      ],
    },
  ],
};

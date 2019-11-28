export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ddfcb3eeb79c55feae1851b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ppu3539y',
                  apiId: '4eff54c6-3ee2-4df1-996b-0eeb5de28c25'
                },
                {
                  buildHookId: '5ddfcb3e9f03ff3fc5742913',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9i6hrc49',
                  apiId: '9988f29c-2ef9-4bc5-93e0-0392c32cd382'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/singkorn/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9i6hrc49.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

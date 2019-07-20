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
                  buildHookId: '5d32fa13f15a5f1b0316470f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-studio-jahgcm8g',
                  apiId: '6cd9e5ce-008e-479b-ba09-312a7d9ba4c1'
                },
                {
                  buildHookId: '5d32fa13f395ba4dd47b85c0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-web-2iheu4wu',
                  apiId: '8177a9fd-4884-4c24-ac57-d45577472957'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/endgerik/sanity-nextjs',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-web-2iheu4wu.netlify.com', category: 'apps'}
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

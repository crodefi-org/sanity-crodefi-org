export default {
  widgets: [
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
                  buildHookId: '6066d84ee6cbcb11d92b9936',
                  title: 'Sanity Studio',
                  name: 'sanity-crodefi-org-studio',
                  apiId: 'ba41fd25-5236-45e9-a884-2eefbfca81f7'
                },
                {
                  buildHookId: '6066d84ebfeb2e15dba08457',
                  title: 'Blog Website',
                  name: 'sanity-crodefi-org',
                  apiId: '4502fc0a-96c5-4578-a844-96fba0a528fc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/crodefi-org/sanity-crodefi-org',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-crodefi-org.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

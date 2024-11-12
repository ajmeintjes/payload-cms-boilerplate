import type { Post } from '../payload-types'

export const post2: Partial<Post> = {
  title: 'Getting Started with Payload CMS Website Template',
  slug: 'getting-started-payload-cms',
  _status: 'published',
  meta: {
    title: 'Getting Started with Payload CMS Website Template',
    description:
      'Learn how to use and customize the Payload CMS Website Template for your projects.',
    image: '{{IMAGE}}'
  },
  authors: ['{{AUTHOR}}'],
  hero: {
    type: 'lowImpact',
    links: null,
    richText: [
      {
        children: [
          {
            text: 'Post 2'
          }
        ],
        type: 'h1'
      }
    ],
    media: null
  },
  layout: [
    {
      blockType: 'content',
      columns: [
        {
          size: 'full',
          richText: [
            {
              children: [
                {
                  text: "Welcome to the Payload CMS Website Template! This powerful and flexible template is designed to help you quickly set up and customize your website. In this guide, we'll walk you through the key features and how to get started."
                }
              ]
            },
            {
              type: 'h2',
              children: [
                {
                  text: 'Key Features'
                }
              ]
            },
            {
              type: 'ul',
              children: [
                {
                  type: 'li',
                  children: [
                    {
                      text: 'Pre-configured Payload Config'
                    }
                  ]
                },
                {
                  type: 'li',
                  children: [
                    {
                      text: 'Authentication and Access Control'
                    }
                  ]
                },
                {
                  type: 'li',
                  children: [
                    {
                      text: 'Premium Content'
                    }
                  ]
                },
                {
                  type: 'li',
                  children: [
                    {
                      text: 'Comments System'
                    }
                  ]
                },
                {
                  type: 'li',
                  children: [
                    {
                      text: 'Layout Builder'
                    }
                  ]
                },
                {
                  type: 'li',
                  children: [
                    {
                      text: 'Draft Preview'
                    }
                  ]
                },
                {
                  type: 'li',
                  children: [
                    {
                      text: 'SEO Tools'
                    }
                  ]
                }
              ]
            },
            {
              type: 'h2',
              children: [
                {
                  text: 'Getting Started'
                }
              ]
            },
            {
              children: [
                {
                  text: 'To get started with the Payload CMS Website Template, follow these steps:'
                }
              ]
            },
            {
              type: 'ol',
              children: [
                {
                  type: 'li',
                  children: [
                    {
                      text: 'Clone the repository from GitHub: '
                    },
                    {
                      type: 'link',
                      url: 'https://github.com/rpuls/payload-cms-boilerplate',
                      children: [
                        {
                          text: 'Payload CMS Boilerplate'
                        }
                      ]
                    }
                  ]
                },
                {
                  type: 'li',
                  children: [
                    {
                      text: 'Install dependencies: Run `yarn install` or `npm install`'
                    }
                  ]
                },
                {
                  type: 'li',
                  children: [
                    {
                      text: 'Set up your environment variables'
                    }
                  ]
                },
                {
                  type: 'li',
                  children: [
                    {
                      text: 'Start the development server: Run `yarn dev` or `npm run dev`'
                    }
                  ]
                }
              ]
            },
            {
              type: 'h2',
              children: [
                {
                  text: 'Customization'
                }
              ]
            },
            {
              children: [
                {
                  text: 'The Payload CMS Website Template is highly customizable. You can modify the existing collections, add new ones, and customize the layout builder to fit your specific needs. Check out the '
                },
                {
                  type: 'link',
                  url: 'https://payloadcms.com/docs',
                  children: [
                    {
                      text: 'Payload CMS documentation'
                    }
                  ]
                },
                {
                  text: ' for detailed information on how to extend and customize your project.'
                }
              ]
            },
            {
              type: 'h2',
              children: [
                {
                  text: 'Deployment'
                }
              ]
            },
            {
              children: [
                {
                  text: "When you're ready to deploy your project, you can use services like Railway for easy deployment. For more information on deployment options and best practices, check out our detailed guide: "
                },
                {
                  type: 'link',
                  url: 'https://funkyton.com/payload-cms/',
                  children: [
                    {
                      text: 'Payload CMS Deployment Guide'
                    }
                  ]
                }
              ]
            }
          ],
          link: {
            reference: null,
            url: '',
            label: ''
          }
        }
      ]
    }
  ],
  enablePremiumContent: false,
  relatedPosts: [] // this is populated by the seed script
}

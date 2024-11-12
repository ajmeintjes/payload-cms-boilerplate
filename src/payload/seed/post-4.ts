import type { Post } from '../payload-types'

export const post4: Partial<Post> = {
  title: 'Vendure: A Powerful Open-Source E-commerce Solution',
  slug: 'vendure-open-source-ecommerce',
  _status: 'published',
  meta: {
    title: 'Vendure: A Powerful Open-Source E-commerce Solution',
    description:
      'Discover how Vendure can revolutionize your e-commerce development and deployment process.',
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
            text: 'Vendure: A Powerful Open-Source E-commerce Solution'
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
                  text: "In the ever-evolving world of e-commerce, finding the right platform can be a game-changer for your business. Today, we're excited to introduce you to Vendure, an open-source e-commerce solution that's been gaining traction in the developer community. Let's explore what makes Vendure stand out and how you can easily deploy it on Railway."
                }
              ]
            },
            {
              type: 'h2',
              children: [
                {
                  text: 'What is Vendure?'
                }
              ]
            },
            {
              children: [
                {
                  text: 'Vendure is a headless e-commerce framework built with TypeScript and Node.js. It provides a solid foundation for any commerce application, including inventory management, orders, customers, taxes, promotions, and more. What sets Vendure apart is its focus on developer experience and extensibility.'
                }
              ]
            },
            {
              type: 'h2',
              children: [
                {
                  text: 'Key Features of Vendure'
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
                      text: 'Headless Architecture: Allows for flexible front-end implementations'
                    }
                  ]
                },
                {
                  type: 'li',
                  children: [
                    {
                      text: 'GraphQL API: Powerful and efficient data querying'
                    }
                  ]
                },
                {
                  type: 'li',
                  children: [
                    {
                      text: 'Admin UI: Intuitive interface for managing your store'
                    }
                  ]
                },
                {
                  type: 'li',
                  children: [
                    {
                      text: 'Extensibility: Easy to add custom features and integrations'
                    }
                  ]
                },
                {
                  type: 'li',
                  children: [
                    {
                      text: 'Multi-channel: Sell across multiple sales channels'
                    }
                  ]
                }
              ]
            },
            {
              type: 'h2',
              children: [
                {
                  text: 'Deploying Vendure on Railway'
                }
              ]
            },
            {
              children: [
                {
                  text: "To make it easier for developers to get started with Vendure, we've created a one-click deploy template for Railway. This template sets up everything you need to run a Vendure store, including:"
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
                      text: 'Vendure backend and admin dashboard'
                    }
                  ]
                },
                {
                  type: 'li',
                  children: [
                    {
                      text: 'Asset storage'
                    }
                  ]
                },
                {
                  type: 'li',
                  children: [
                    {
                      text: 'A storefront (webshop)'
                    }
                  ]
                },
                {
                  type: 'li',
                  children: [
                    {
                      text: 'Pre-installed Stripe payment and Sendgrid email plugins'
                    }
                  ]
                }
              ]
            },
            {
              children: [
                {
                  text: 'Ready to get started? Check out our full tutorial on deploying Vendure on Railway: '
                },
                {
                  type: 'link',
                  url: 'https://funkyton.com/vendure-tutorial/',
                  children: [
                    {
                      text: 'Vendure Deployment Tutorial'
                    }
                  ]
                }
              ]
            },
            {
              children: [
                {
                  text: 'For those who want to explore the code, you can find our Vendure boilerplate on GitHub: '
                },
                {
                  type: 'link',
                  url: 'https://github.com/rpuls/vendure-boilerplate',
                  children: [
                    {
                      text: 'Vendure Railway Boilerplate'
                    }
                  ]
                }
              ]
            },
            {
              type: 'h2',
              children: [
                {
                  text: 'Conclusion'
                }
              ]
            },
            {
              children: [
                {
                  text: "Vendure offers a powerful, flexible solution for businesses looking to build or upgrade their e-commerce platform. With its focus on developer experience and extensibility, it's an excellent choice for teams that want to create unique, tailored shopping experiences. By leveraging our Railway template, you can have a Vendure store up and running in no time, allowing you to focus on what matters most - growing your business."
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

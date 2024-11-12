import type { Post } from '../payload-types'

export const post3: Partial<Post> = {
  title: 'Medusa.js 2.0: A Game-Changer for E-commerce',
  slug: 'medusajs-2-0-game-changer',
  _status: 'published',
  meta: {
    title: 'Medusa.js 2.0: A Game-Changer for E-commerce',
    description:
      'Discover the power of Medusa.js 2.0 and how it revolutionizes e-commerce development.',
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
            text: 'Post 3'
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
                  text: "The e-commerce world is buzzing with excitement as Medusa.js 2.0 has officially been released! This major update brings a host of new features and improvements that are set to revolutionize how we build and manage online stores. In this post, we'll explore what's new in Medusa.js 2.0 and why it's a game-changer for developers and businesses alike."
                }
              ]
            },
            {
              type: 'h2',
              children: [
                {
                  text: "What's New in Medusa.js 2.0?"
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
                      text: 'Reworked Admin Dashboard: A more intuitive and visually appealing interface.'
                    }
                  ]
                },
                {
                  type: 'li',
                  children: [
                    {
                      text: 'Enhanced Inventory Management: Support for multiple warehouses.'
                    }
                  ]
                },
                {
                  type: 'li',
                  children: [
                    {
                      text: 'New Promotions Engine: More flexible and powerful discount configurations.'
                    }
                  ]
                },
                {
                  type: 'li',
                  children: [
                    {
                      text: 'Improved Software Architecture: Easier customization and feature additions.'
                    }
                  ]
                },
                {
                  type: 'li',
                  children: [
                    {
                      text: 'Updated Database Structure: Greater adaptability in the Medusa data model.'
                    }
                  ]
                },
                {
                  type: 'li',
                  children: [
                    {
                      text: 'New Query Tool: Simplified data fetching from the database.'
                    }
                  ]
                }
              ]
            },
            {
              type: 'h2',
              children: [
                {
                  text: 'Why Choose Medusa.js 2.0?'
                }
              ]
            },
            {
              children: [
                {
                  text: "Medusa.js 2.0 offers substantial improvements that benefit both business operations and development processes. Whether you're managing inventory or building custom features, this update provides tools that make your e-commerce journey smoother and more efficient."
                }
              ]
            },
            {
              type: 'h2',
              children: [
                {
                  text: 'Deploy Medusa.js 2.0 on Railway'
                }
              ]
            },
            {
              children: [
                {
                  text: "To make it even easier to get started with Medusa.js 2.0, we've created a one-click deploy template for Railway. This template includes:"
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
                      text: 'Automatic setup of storefront, Redis, and PostgreSQL database'
                    }
                  ]
                },
                {
                  type: 'li',
                  children: [
                    {
                      text: 'Automatic sharing of publishable API key between backend and storefront'
                    }
                  ]
                },
                {
                  type: 'li',
                  children: [
                    {
                      text: 'Internal media storage'
                    }
                  ]
                },
                {
                  type: 'li',
                  children: [
                    {
                      text: 'Health checks for deploys'
                    }
                  ]
                },
                {
                  type: 'li',
                  children: [
                    {
                      text: 'Automatic admin user creation with a unique strong random password'
                    }
                  ]
                }
              ]
            },
            {
              children: [
                {
                  text: 'Ready to get started? Check out our full guide on deploying Medusa.js 2.0 on Railway: '
                },
                {
                  type: 'link',
                  url: 'https://funkyton.com/medusajs-2-0-is-finally-here/',
                  children: [
                    {
                      text: 'Medusa.js 2.0 Deployment Guide'
                    }
                  ]
                }
              ]
            },
            {
              children: [
                {
                  text: 'For those who want to dive deeper into the code, you can find our Medusa.js 2.0 boilerplate on GitHub: '
                },
                {
                  type: 'link',
                  url: 'https://github.com/rpuls/medusajs-2.0-for-railway-boilerplate',
                  children: [
                    {
                      text: 'Medusa.js 2.0 Railway Boilerplate'
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

import type { Post } from '../payload-types'
export const post1: Partial<Post> = {
  title: 'Exploring the Power of Payload CMS',
  slug: 'exploring-payload-cms',
  _status: 'published',
  meta: {
    title: 'Exploring the Power of Payload CMS',
    description:
      'Discover the features and flexibility of Payload CMS for building modern websites.',
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
            text: 'Exploring the Power of Payload CMS'
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
          size: 'twoThirds',
          richText: [
            {
              children: [
                {
                  text: "Payload CMS is a powerful and flexible content management system that empowers developers to build robust and scalable websites. In this post, we'll explore some of its key features and benefits."
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
                      text: 'Headless Architecture'
                    }
                  ]
                },
                {
                  type: 'li',
                  children: [
                    {
                      text: 'TypeScript Support'
                    }
                  ]
                },
                {
                  type: 'li',
                  children: [
                    {
                      text: 'Customizable Admin UI'
                    }
                  ]
                },
                {
                  type: 'li',
                  children: [
                    {
                      text: 'Powerful Access Control'
                    }
                  ]
                }
              ]
            },
            {
              type: 'h2',
              children: [
                {
                  text: 'Why Choose Payload CMS?'
                }
              ]
            },
            {
              children: [
                {
                  text: 'Payload CMS offers a unique combination of flexibility and ease of use. Its headless architecture allows you to use any front-end technology you prefer, while its powerful admin UI makes content management a breeze.'
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
  enablePremiumContent: true,
  premiumContent: [
    {
      blockType: 'content',
      columns: [
        {
          size: 'full',
          richText: [
            {
              type: 'h2',
              children: [
                {
                  text: 'Advanced Payload CMS Techniques'
                }
              ]
            },
            {
              children: [
                {
                  text: "In this premium section, we'll dive deeper into advanced Payload CMS techniques, including custom field types, hooks, and API customization. These insights will help you leverage the full power of Payload CMS in your projects."
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
  relatedPosts: [] // this is populated by the seed script
}

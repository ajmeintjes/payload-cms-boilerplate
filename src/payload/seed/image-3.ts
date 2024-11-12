import type { Media } from '../payload-types'

export const image3: Omit<Media, 'id' | 'createdAt' | 'updatedAt'> = {
  alt: 'Medusa 2.0 on railway Cover',
  caption: [
    {
      children: [
        {
          text: 'Graphic by '
        },
        {
          type: 'link',
          linkType: 'custom',
          url: 'https://funkyton.com/medusajs-2-0-is-finally-here/',
          newTab: true,
          children: [
            {
              text: 'FUNKYTON'
            }
          ]
        },
        {
          text: ' on '
        },
        {
          type: 'link',
          linkType: 'custom',
          url: 'https://res-4.cloudinary.com/hczpmiapo/image/upload/q_auto/v1/ghost-blog-images/Medusa-2.0-official-release-deploy-on-railway-cover.jpg',
          newTab: true,
          children: [
            {
              text: 'FUNKYTON'
            }
          ]
        },
        {
          text: '.'
        }
      ]
    }
  ]
}

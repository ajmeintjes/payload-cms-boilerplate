import type { Media } from '../payload-types'

export const image4: Omit<Media, 'id' | 'createdAt' | 'updatedAt'> = {
  alt: 'Vendure on railway Cover',
  caption: [
    {
      children: [
        {
          text: 'Graphic by '
        },
        {
          type: 'link',
          linkType: 'custom',
          url: 'https://funkyton.com/vendure-tutorial/',
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
          url: 'https://res-1.cloudinary.com/hczpmiapo/image/upload/q_auto/v1/ghost-blog-images/vendure-cover.png',
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

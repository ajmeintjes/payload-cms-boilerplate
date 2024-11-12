import type { Media } from '../payload-types'

export const image1: Omit<Media, 'id' | 'createdAt' | 'updatedAt'> = {
  alt: 'Shirts',
  caption: [
    {
      children: [
        {
          text: 'Graphic by '
        },
        {
          type: 'link',
          linkType: 'custom',
          url: 'https://payloadcms.com/use-cases/headless-cms',
          newTab: true,
          children: [
            {
              text: 'Payload'
            }
          ]
        }
      ]
    }
  ]
}

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'phrase',
  title: 'Phrase',
  type: 'document',
  fields: [
    defineField({
      name: 'phrase',
      title: 'Phrase',
      description: 'Phrase to display "typewriter-style" on the Hero section',
      type: 'string',
    }),
    defineField({
      name: 'sortOrder',
      title: 'SortOrder',
      type: 'number',
    }),
  ],
})

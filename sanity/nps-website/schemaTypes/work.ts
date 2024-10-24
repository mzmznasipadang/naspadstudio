export const work = {
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    {
      name: 'repository',
      title: 'Repository',
      type: 'string',
    },
    {
      name: 'published',
      title: 'Published',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    },
  ],
}
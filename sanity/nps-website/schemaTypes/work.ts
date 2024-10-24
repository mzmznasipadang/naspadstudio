export const work = {
    name: 'work',
    title: 'Work',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        required: true,
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: { source: 'title' },
        required: true,
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        required: true,
      },
      {
        name: 'date',
        title: 'Date',
        type: 'date',
        required: true,
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: { hotspot: true },
        required: true,
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
        default: false,
      },
      {
        name: 'featured',
        title: 'Featured',
        type: 'boolean',
        description: 'Set to true to show this work in the featured section',
        initialValue: false
      },
    ],
  };
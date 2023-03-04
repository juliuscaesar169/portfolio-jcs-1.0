export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of the project',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'finishedAt',
      title: 'Finished At',
      type: 'date',
    },
    {
      name: 'isDeployed',
      title: 'Is Deployed',
      type: 'boolean',
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skill' }}],
    },
    {
      name: 'linktoBuild',
      title: 'Link to Build',
      type: 'url',
    },
  ],
}

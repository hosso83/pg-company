import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
  labels: {
    singular: "Project",
    plural: "Projects",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "sector", "location", "status"],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      unique: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "content",
      type: "richText",
    },
    {
      name: "location",
      type: "text",
    },
    {
      name: "region",
      type: "select",
      options: [
        { label: "North America", value: "North America" },
        { label: "Europe", value: "Europe" },
        { label: "Asia", value: "Asia" },
        { label: "Middle East", value: "Middle East" },
        { label: "Africa", value: "Africa" },
      ],
    },
    {
      name: "sector",
      type: "text",
    },
    {
      name: "services",
      type: "array",
      fields: [
        {
          name: "service",
          type: "text",
        },
      ],
    },
    {
      name: "client",
      type: "text",
    },
    {
      name: "value",
      type: "text",
    },
    {
      name: "duration",
      type: "text",
    },
    {
      name: "status",
      type: "select",
      options: [
        { label: "Completed", value: "Completed" },
        { label: "In Progress", value: "In Progress" },
        { label: "Planning", value: "Planning" },
      ],
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "gallery",
      type: "array",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "alt",
          type: "text",
        },
      ],
    },
    {
      name: "outcomes",
      type: "array",
      fields: [
        {
          name: "outcome",
          type: "text",
        },
      ],
    },
    {
      name: "challenges",
      type: "array",
      fields: [
        {
          name: "challenge",
          type: "text",
        },
      ],
    },
  ],
};

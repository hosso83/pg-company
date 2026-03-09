import type { CollectionConfig } from "payload";

export const Services: CollectionConfig = {
  slug: "services",
  labels: {
    singular: "Service",
    plural: "Services",
  },
  admin: {
    useAsTitle: "title",
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
      name: "icon",
      type: "select",
      options: [
        { label: "Building", value: "building" },
        { label: "Energy", value: "energy" },
        { label: "Transport", value: "transport" },
        { label: "Water", value: "water" },
      ],
    },
    {
      name: "featured",
      type: "checkbox",
    },
    {
      name: "sectors",
      type: "array",
      fields: [
        {
          name: "sector",
          type: "text",
        },
      ],
    },
  ],
};

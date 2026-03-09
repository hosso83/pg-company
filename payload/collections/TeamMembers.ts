import type { CollectionConfig } from "payload";

export const TeamMembers: CollectionConfig = {
  slug: "team-members",
  labels: {
    singular: "Team Member",
    plural: "Team Members",
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      unique: true,
    },
    {
      name: "role",
      type: "text",
      required: true,
    },
    {
      name: "location",
      type: "text",
    },
    {
      name: "bio",
      type: "richText",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "expertise",
      type: "array",
      fields: [
        {
          name: "skill",
          type: "text",
        },
      ],
    },
  ],
};

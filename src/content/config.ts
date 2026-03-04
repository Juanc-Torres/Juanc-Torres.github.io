import { defineCollection, z } from "astro:content";

/* =========================
   Static Data Collection
========================= */

const staticData = defineCollection({
  type: "data",
  schema: z.object({
    /* Perfil */
    profileImage: z.string(),
    profileAlt: z.string(),
    profileLink: z.string(),
    profileTitle: z.string(),
    profileName: z.string(),

    /* Links principales */
    github: z.string().url(),
    linkedin: z.string().url(),
    email: z.string().email(),
    alias: z.string(),

    /* Iconos */
    githubIconName: z.string(),
    linkedinIconName: z.string(),
    emailIconName: z.string(),

    /* Portfolio */
    portfolioImage: z.string(),

    /* Contact Section */
    contactSectionTitle: z.string(),
    contactSectionSubtitle: z.string(),
    contactSectionButtonText: z.string(),
    contactSectionButtonIcon: z.string(),

    /* Tecnologías */
    techsTitle: z.string(),

    /* Hobbies */
    hobbies: z.array(z.string())
  })
});

export const collections = {
  staticData
};
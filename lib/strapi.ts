// Direct JSON file imports for data loading
import pageContentData from "@/strapi-content/page-content.json";
import projectsData from "@/strapi-content/projects.json";
import servicesData from "@/strapi-content/services.json";
import teamMembersData from "@/strapi-content/team-members.json";
import contactPageData from "@/strapi-content/contact-page.json";

export interface StrapiImage {
  id?: number;
  url: string;
  alternativeText: string;
  width?: number;
  height?: number;
}

export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface Global {
  id: number;
  company: string;
  slogan: string;
  logo: StrapiImage;
}

export interface Project {
  id?: number;
  title: string;
  description: string;
  location: string;
  region?: string;
  image: StrapiImage;
  slug: string;
  publishedAt: string;
  sector?: string;
  services?: string[];
  client?: string;
  value?: string;
  duration?: string;
  status?: string;
  featured?: boolean;
  gallery?: Array<{ url: string; alternativeText: string }>;
  outcomes?: string[];
  challenges?: string[];
  content?: string;
}

export interface ProjectPage {
  id: number;
  title: string;
  description: string;
  location: string;
  region: string;
  image: StrapiImage;
  slug: string;
  publishedAt: string;
}

export interface Service {
  id?: number;
  title: string;
  description: string;
  icon: string;
  slug: string;
  featured?: boolean;
  image?: StrapiImage;
  content?: string;
  capabilities?: string[];
  sectors?: string[];
  expertise?: string;
  caseStudies?: string[];
  relatedServices?: string[];
  publishedAt?: string;
}

export interface TeamMember {
  id?: number;
  name: string;
  role: string;
  location: string;
  bio: string;
  image: StrapiImage;
  slug: string;
  title?: string;
  department?: string;
  email?: string;
  expertise?: string[];
  qualifications?: string[];
  achievements?: string[];
  featured?: boolean;
  publishedAt?: string;
}

export interface PageContent {
  heroTitle: string;
  heroSubtitle: string;
  heroImage?: StrapiImage;
  introductionTitle?: string;
  introductionContent?: string;
  aboutTitle?: string;
  aboutDescription?: string;
  id?: number;
}

export interface Address {
  id?: number;
  addressName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  country: string;
}

export interface ContactPage {
  id?: number;
  title?: string;
  description?: string;
  address?: Address[];
  email?: string;
  telephone?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  contactInfo?: {
    headquarters?: { [key: string]: string };
    internationalPhone?: string;
    careersEmail?: string;
    mediaEmail?: string;
    businessHours?: { [key: string]: string };
  };
  offices?: Array<{ [key: string]: string }>;
}

// Load data directly from JSON files
export async function getGlobals(): Promise<Global | null> {
  return null; // Optional - not in JSON files
}

export async function getProjects(
  page = 1,
  pageSize = 5,
  region?: string,
): Promise<StrapiResponse<Project[]>> {
  try {
    const data = projectsData as { data: Project[] };
    const allProjects = Array.isArray(data.data) ? data.data : [];
    const projects = region
      ? allProjects.filter((project) => project.region === region)
      : allProjects;

    // Handle pagination
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginatedProjects = projects.slice(start, end);

    return {
      data: paginatedProjects,
      meta: {
        pagination: {
          page,
          pageSize,
          pageCount: Math.ceil(projects.length / pageSize),
          total: projects.length,
        },
      },
    };
  } catch (error) {
    console.error("Error loading projects from JSON:", error);
    return { data: [], meta: {} };
  }
}

export async function getProjectPage(): Promise<ProjectPage | null> {
  try {
    const data = projectsData as { data: Project[] };
    return (data.data?.[0] as any) || null;
  } catch (error) {
    console.error("Error loading project page from JSON:", error);
    return null;
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const data = projectsData as { data: Project[] };
    const projects = Array.isArray(data.data) ? data.data : [];
    return projects.find((p) => p.slug === slug) || null;
  } catch (error) {
    console.error("Error loading project by slug from JSON:", error);
    return null;
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const data = servicesData as { data: Service[] };
    const services = Array.isArray(data.data) ? data.data : [];
    return services.find((s) => s.slug === slug) || null;
  } catch (error) {
    console.error("Error loading service by slug from JSON:", error);
    return null;
  }
}

export async function getServices(): Promise<StrapiResponse<Service[]>> {
  try {
    const data = servicesData as { data: Service[] };
    const services = Array.isArray(data.data) ? data.data : [];
    return {
      data: services,
      meta: {
        pagination: {
          page: 1,
          pageSize: services.length,
          pageCount: 1,
          total: services.length,
        },
      },
    };
  } catch (error) {
    console.error("Error loading services from JSON:", error);
    return { data: [], meta: {} };
  }
}

export async function getTeamMembers(
  page = 1,
  pageSize = 8,
): Promise<StrapiResponse<TeamMember[]>> {
  try {
    const data = teamMembersData as { data: TeamMember[] };
    const members = Array.isArray(data.data) ? data.data : [];

    // Handle pagination
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginatedMembers = members.slice(start, end);

    return {
      data: paginatedMembers,
      meta: {
        pagination: {
          page,
          pageSize,
          pageCount: Math.ceil(members.length / pageSize),
          total: members.length,
        },
      },
    };
  } catch (error) {
    console.error("Error loading team members from JSON:", error);
    return { data: [], meta: {} };
  }
}

export async function getTeamMemberBySlug(
  slug: string,
): Promise<TeamMember | null> {
  try {
    const data = teamMembersData as { data: TeamMember[] };
    const members = Array.isArray(data.data) ? data.data : [];
    return members.find((m) => m.slug === slug) || null;
  } catch (error) {
    console.error("Error loading team member by slug from JSON:", error);
    return null;
  }
}

export async function getPageContent(): Promise<PageContent | null> {
  try {
    const data = pageContentData as any;
    const hero = data.data?.homepage?.hero;

    if (!hero) return null;

    return {
      heroTitle: hero.title,
      heroSubtitle: hero.subtitle,
      heroImage: hero.backgroundImage
        ? { url: hero.backgroundImage, alternativeText: "Hero background" }
        : undefined,
      introductionTitle: data.data?.homepage?.introduction?.title,
      introductionContent: data.data?.homepage?.introduction?.content,
    };
  } catch (error) {
    console.error("Error loading page content from JSON:", error);
    return null;
  }
}

export async function getContactPage(): Promise<ContactPage | null> {
  try {
    const data = contactPageData as { data: ContactPage };
    return data.data || null;
  } catch (error) {
    console.error("Error loading contact page from JSON:", error);
    return null;
  }
}

export function getStrapiMedia(url: string): string {
  // Return URL as-is since we're using local JSON files
  return url;
}

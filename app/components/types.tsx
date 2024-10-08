export interface Experience {
  title: string;
  company: string;
  company_url: string;
  dates: string;
  description: string;
}

export interface Project {
  tags: string[];
  title: string;
  description: string;
  image: string;
  url?: string;
  github?: string;
}

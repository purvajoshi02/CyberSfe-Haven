export type Resource = {
    id: string;
    title: string;
    description: string;
    icon: string;
    url: string;
    isProtected?: boolean;
  };
  
  export type FAQ = {
    id: string;
    question: string;
    answer: string;
    category?: string;
  };
  
  export type Testimonial = {
    id: string;
    quote: string;
    author: string;
    role?: string;
  };
  
  export type Language = {
    code: string;
    name: string;
    flag: string;
  };
  
  export type NavigationItem = {
    label: string;
    href: string;
    dropdown?: NavigationItem[];
  };
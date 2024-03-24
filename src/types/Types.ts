type LogoType = {
  logo: string;
};

type Projects = {
  id: number;
  name: string;
  img: string;
  lin: string;
  lin_render?: string;
  des: string;
};

type Skills = {
  name: string;
  value: number;
  color: string;
  img: string;
};
export type { LogoType, Projects, Skills };

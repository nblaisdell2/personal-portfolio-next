type SanityBody = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
};

type Image = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
};

type PageInfo = SanityBody & {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
};

type Social = SanityBody & {
  _type: "social";
  title: string;
  url: string;
};

type Technology = SanityBody & {
  _type: "skill";
  skillImage: Image;
  progress: number;
  title: string;
};

type Skill = SanityBody & {
  _type: "skill";
  skillImage: Image;
  progress: number;
  title: string;
};

type Project = SanityBody & {
  _type: "project";
  title: string;
  projectImage: Image;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
};

type Experience = SanityBody & {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: Date;
  dateEnded: Date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
};

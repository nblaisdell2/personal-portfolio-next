const fetchSanityData = async <T>(url: string, prop: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/${url}`);
  const data = await res.json();

  const ret: T = data[prop];

  console.log(`Did i get ${prop}?`, ret);

  return ret;
};

export const fetchPageInfo = async () =>
  await fetchSanityData<PageInfo>("getPageInfo", "pageInfo");

export const fetchSocials = async () =>
  await fetchSanityData<Social[]>("getSocials", "socials");

export const fetchSkills = async () =>
  await fetchSanityData<Skill[]>("getSkills", "skills");

export const fetchProjects = async () =>
  await fetchSanityData<Project[]>("getProjects", "projects");

export const fetchExperiences = async () =>
  await fetchSanityData<Experience[]>("getExperience", "experiences");

import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Link from "next/link";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { GetStaticProps } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const GET_PAGE_INFO = groq`
  *[_type == "pageInfo"][0]
`;
const GET_SOCIALS = groq`
  *[_type == "social"]
`;
const GET_PROJECTS = groq`
  *[_type == "project"] {
    ...,
    technologies[]->
  }
`;
const GET_SKILLS = groq`
  *[_type == "skill"]
`;
const GET_EXPERIENCES = groq`
  *[_type == "experience"] {
    ...,
    technologies[]->
  }
`;
const GET_PHRASES = groq`
  *[_type == "phrase"]
`;

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  phrases: Phrase[];
};

export default function Home({
  pageInfo,
  experiences,
  skills,
  projects,
  socials,
  phrases,
}: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar-custom z-0">
      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} phrases={phrases} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      {/* Footer ("Go Back" button) */}
      {/* <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center filter cursor-pointer group">
            <ChevronUpIcon className="h-10 w-10 border border-[#186bd7] group-hover:bg-[#186bd7] transition-all duration-200 rounded-full" />
          </div>
        </footer>
      </Link> */}
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await sanityClient.fetch(GET_PAGE_INFO);
  const experiences: Experience[] = await sanityClient.fetch(GET_EXPERIENCES);
  const projects: Project[] = await sanityClient.fetch(GET_PROJECTS);
  const skills: Skill[] = await sanityClient.fetch(GET_SKILLS);
  const socials: Social[] = await sanityClient.fetch(GET_SOCIALS);
  const phrases: Phrase[] = await sanityClient.fetch(GET_PHRASES);

  return {
    props: {
      pageInfo,
      experiences,
      projects,
      skills,
      socials,
      phrases,
    },
    revalidate: 10,
  };
};

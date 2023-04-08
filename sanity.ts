import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  apiVersion: "2021-03-25",
  useCdn: process.env.NODE_ENV === "production",
};

// Setup the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

export const urlFor = (source: any) => {
  console.log("source", source);
  if (source == undefined)
    return "https://w7.pngwing.com/pngs/115/800/png-transparent-drum-set-illustration-rock-band-4-the-beatles-rock-band-computer-icons-musical-ensemble-drum-stick-drum-area-music-festival.png";
  return createImageUrlBuilder(config).image(source).url();
};

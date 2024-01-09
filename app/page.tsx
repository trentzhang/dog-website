import Link from "next/link";
import DogCards from "./DogCards";

import React, { Children } from "react";
import path from "path";
import { promises as fs } from "fs";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
// const importAll = (r: any) => r.keys().map(r);

// const imageContext = require.context(
//   "@public/puppy",
//   false,
//   /\.(png|jpe?g|svg)$/
// );

// const images = importAll(imageContext);

export default async function Home() {
  //   const relativeImageDirectory = "public/puppy";
  //   const imageDirectory = path.join(process.cwd(), relativeImageDirectory);
  //   const imageFilenames = await fs.readdir(imageDirectory);
  //   console.log(imageFilenames);
  return (
    <div className=" flex  flex-col items-center justify-between min-h-[70vh] px-5 sm:px-10 md:px-30 ">
      <AboutUs />
      <section className="text-center m-24">
        <p className="text-gray-700">Ready to find your new best friend?</p>
        <div
          //   href="/dogs"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full inline-block mt-4"
        >
          Explore Dogs
        </div>
      </section>

      <DogCards />

      <ContactUs />
    </div>
  );
}

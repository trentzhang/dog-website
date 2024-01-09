import { breedImages } from "@/public/data";
import DogCards from "./DogCards";
import { Image } from "@nextui-org/react";

export function Puppies() {
  return (
    <section
      className="text-center my-12 scroll-mt-40 items-center justify-center flex flex-col"
      id="puppies"
    >
      <h2 className="text-3xl font-bold  text-center font-cursive">
        Image Gallery
      </h2>
      <div
        //   href="/dogs"
        className="bg-pink-500/90 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-full inline-block my-8"
      >
        Explore Dogs
      </div>
      <p className="text-gray-700 font-cursive text-2xl">
        Our breeding dogs: Luca, Mia, Owen & Moon
      </p>
      <div>
        {breedImages.map((item, index) => {
          return (
            <div key={index}>
              <h3 className="text-xl font-bold mb-6 text-center font-cursive">
                {item.name}:{item.description}
              </h3>

              <div className="flex items-center justify-center gap-3">
                {item.src.map((s, ind) => (
                  <Image key={ind} src={s} alt="dog" className="w-[400px] " />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="max-w-5xl text-gray-700"></div>

      <p className="text-gray-700 font-cursive text-2xl">
        Ready to find your new best friend?
      </p>

      <DogCards />
    </section>
  );
}

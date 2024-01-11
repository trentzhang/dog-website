import { breedImages } from "@/public/data";
import DogCards from "./DogCards";
import { Image } from "@nextui-org/react";
import PreviousDogs from "./PreviousDogs";

export function Puppies() {
  return (
    <section className="text-center my-12 scroll-mt-40 items-center justify-center flex flex-col">
      <h2 className="text-3xl font-bold  text-center font-cursive">
        Image Gallery
      </h2>
      <div
        //   href="/dogs"
        className="bg-pink-500/90 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-full inline-block my-8"
      >
        Explore Dogs
      </div>
      <p className="text-gray-700 font-cursive text-2xl mb-10" id="our-dogs">
        Our breeding dogs: Luca, Mia, Owen & Moon
      </p>
      <div>
        {breedImages.map((item, index) => {
          return (
            <div key={index}>
              <div className="flex items-center justify-center gap-3">
                {item.src.map((s, ind) => (
                  <Image key={ind} src={s} alt="dog" className="w-[400px] " />
                ))}
              </div>
              <h3 className="text-xl font-bold mb-6 text-center font-cursive">
                {item.name}:{item.description}
              </h3>
            </div>
          );
        })}
      </div>

      <p className="text-gray-700 font-cursive text-3xl mt-8">
        Ready to find your new best friend?
      </p>

      <DogCards />

      <p className="text-gray-700 font-cursive text-3xl mt-8">
        Our previous puppies
      </p>

      <PreviousDogs />
    </section>
  );
}

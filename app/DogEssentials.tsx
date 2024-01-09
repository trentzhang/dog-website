import { listOfDogEssentialImages } from "@/public/data";
import { Image } from "@nextui-org/react";

export default function DogEssentials() {
  //   const listOfImages = importAll(
  //     require.context("/essentials", false, /\.(png|jpe?g|svg)$/)
  //   );

  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Dog Essentials</h2>
      <div className="flex flex-wrap gap-10 justify-center">
        {/* {listOfImages.map((item, index) => {
          return (
            <div className="flex justify-center gap-5 " key={index}>
              <Image
                alt={item.default.src}
                src={item.default.src}
                width="200"
              />
            </div>
          );
        })}
         */}
        {listOfDogEssentialImages.map((item, index) => (
          <div className="flex justify-center gap-5" key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <Image src={item.src} alt={item.src} width="200" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

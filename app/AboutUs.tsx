import { Image } from "@nextui-org/react";

export default function AboutUs() {
  return (
    <section
      className="my-8 max-w-5xl  scroll-mt-40 flex-col items-center justify-center"
      id="about-us"
    >
      <Image src="logo.png" className="" alt="logo" />

      {/* 
      <div className="absolute">
        <Image src="logo.png" className="w-full" alt="logo" />
      </div> */}
      <h2 className="text-3xl font-bold mb-6 text-center font-cursive">
        About Us
      </h2>
      <p className="text-gray-700">
        Paw Hills is a family breeding enterprise located in Buckley,
        Washington, just 45 minutes away from downtown Seattle. Our primary goal
        is to create an exceptional living environment for dogs and facilitate
        the discovery of responsible and affectionate homes for our puppies.
        Breeding is a complex and time-consuming endeavor that requires
        expertise in genetics and a genuine love for animals. Each breed has
        undergone extensive development throughout history, adapting to the
        evolving needs and aesthetic preferences of people. As conscientious
        breeders, we prioritize perpetuating high-quality genetic traits while
        minimizing the likelihood of congenital diseases, controlling defects,
        carefully selecting bloodlines, and striving towards perfection and
        optimal health within each breed&apos;s standards. The well-being of our
        dogs always takes precedence; therefore, we provide sanitary breeding
        facilities with weekly disinfection protocols, along with nutritionally
        balanced diets, to ensure their overall health and happiness.
      </p>
      <p className="text-gray-700 mt-4">
        Driven by our passion for canines, we are continually expanding our
        knowledge on dog behavior training techniques, proper feeding practices,
        and grooming methods, constantly refining our theoretical understanding
        while safely implementing it into practice. As dedicated breeders, we
        wholeheartedly cherish every life that comes into this world through our
        efforts. Witnessing their growth brings us immense joy as they embark on
        their own &quot;adventure&quot; towards a contented existence. This
        commitment remains true to our original purpose as breeders: promoting
        animal welfare while pursuing an ideal standard within the field.
      </p>
    </section>
  );
}

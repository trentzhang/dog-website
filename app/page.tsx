import Link from "next/link";
import DogCards from "./DogCards";

export default function Home() {
  return (
    <div className="grow flex  flex-col items-center justify-between px-48 min-h-[70vh]">
      <section className="my-8" id="about-us">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700">
          Welcome to Dog Sale Paradise, your go-to destination for finding the
          perfect canine companion. Our mission is to connect loving families
          with happy and healthy dogs. At Dog Sale Paradise, we carefully select
          and showcase a variety of breeds, ensuring that each dog is raised
          with care and love.
        </p>
        <p className="text-gray-700 mt-4">
          Whether you&apos;re looking for a playful puppy or a loyal companion,
          our diverse range of dogs is sure to meet your preferences. We believe
          in responsible breeding practices and prioritize the well-being of our
          dogs.
        </p>
      </section>

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
    </div>
  );
}

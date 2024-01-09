import DogCards from "./DogCards";

export function Puppies() {
  return (
    <section className="text-center my-12 scroll-mt-40" id="puppies">
      <p className="text-gray-700">Ready to find your new best friend?</p>
      <div
        //   href="/dogs"
        className="bg-pink-500/90 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-full inline-block mt-4"
      >
        Explore Dogs
      </div>
      <DogCards />
    </section>
  );
}

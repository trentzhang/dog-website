import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import DogEssentials from "./DogEssentials";
import { Puppies } from "./Puppies";

export default async function Home() {
  return (
    <div className=" flex  flex-col items-center justify-between min-h-[70vh] px-5 sm:px-10 md:px-30 ">
      <AboutUs />
      <Puppies />

      <DogEssentials />

      <ContactUs />
    </div>
  );
}

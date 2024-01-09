import { socialMediaLink } from "@/public/data";
import { Card } from "@nextui-org/react";
import { CiInstagram } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function ContactUs() {
  return (
    <section className="my-8 max-w-5xl scroll-mt-40" id="contact-us">
      <h2 className="text-3xl font-bold mb-6 text-center font-cursive">
        Contact Us
      </h2>
      {/* <p className="text-gray-700 py-5">
        We are here 24/7 for your <u>puppies</u>. Feel free to reach out to us
        through any of the following channels:
      </p> */}
      <div className="flex justify-center gap-5">
        <Card className="w-10 h-10 items-center justify-center p-2">
          <a
            href={socialMediaLink.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg" />
          </a>
        </Card>
        <Card className="w-10 h-10 items-center justify-center p-2">
          <a
            href={socialMediaLink.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://cdn.worldvectorlogo.com/logos/facebook-4.svg" />
          </a>
        </Card>
        <Card className="w-10 h-10 items-center justify-center p-2">
          <a
            href={socialMediaLink.tiktok}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://cdn.worldvectorlogo.com/logos/tiktok-icon-2.svg" />
          </a>
        </Card>
        <Card className="w-10 h-10 items-center justify-center p-2">
          <a
            href={socialMediaLink.phone}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPhone />
          </a>
        </Card>
        <Card className="w-10 h-10 items-center justify-center p-2 text-xl">
          <a
            href={socialMediaLink.email}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail />
          </a>
        </Card>
      </div>
    </section>
  );
}

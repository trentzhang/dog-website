import { email } from "@/public/data";
import { Card } from "@nextui-org/react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow  dark:bg-gray-800  m-4 sticky">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="#" className="hover:underline">
            Paw Hills
          </a>
          . All Rights Reserved.
        </span>

        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          {/* <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li> */}
          {/* <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li> */}
          {/* <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li> */}
          <li>
            Created by{" "}
            <span className="italic	">
              <a href="https://trentzhang.vercel.app/">Trent Zhang</a>
            </span>
          </li>
        </ul>
      </div>
    </footer>
  );
}

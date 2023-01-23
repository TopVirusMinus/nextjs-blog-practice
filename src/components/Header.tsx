import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
const Header = () => {
  return (
    <>
      <nav
        className="relative rounded-lg

 flex flex-wrap  items-center justify-between px-2 py-3 bg-zinc-900 border-b-2 drop-shadow-md border-zinc-700 mb-3"
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#"
            >
              Marzouk Blog
            </a>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/mustafa-walid-273b951a9/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/TopVirusMinus"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

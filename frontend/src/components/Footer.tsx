import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 px-3 mt-16">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full  md:text-center md:mb-0 mb-8">
          <p className="text-xs text-gray-400 md:text-sm text-center">
            Copyright 2020 &copy; All Rights Reserved
          </p>
          <p className="text-xs text-gray-400 md:text-sm text-center">
            <a
              href="https://pl.freepik.com/darmowe-zdjecie/dwie-dziewczyny-szczesliwy-gospodarstwa-pieniadze-i-raduja-sie-z-bialej-sciany_6730119.htm#query=happy%20people%20money&position=6&from_view=search&track=ais"
              target="_blank"
              rel="noopener noreferrer"
            >
              Landing Page Image by drobotdean on Freepik
            </a>
          </p>
          <p className="text-xs text-gray-400 md:text-sm text-center">
            <a
              href="https://github.com/pigment/fake-logos"
              target="_blank"
              rel="noopener noreferrer"
            >
              James and Sons logo taken from github: pigment/fake-logos&nbsp;
            </a>
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              on Creative Commons Attribution-Share Alike
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

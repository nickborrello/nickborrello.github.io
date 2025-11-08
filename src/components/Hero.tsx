import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import type { Character } from "../types";

interface HeroProps {
  character: Character;
  prefersReducedMotion: boolean;
}

const Hero = ({ character, prefersReducedMotion }: HeroProps) => {
  return (
    <div className="pb-20 pt-36" id="home">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.02] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className="flex justify-center relative my-20 z-10 gap-8">
        <div className="max-w-[75vw] md:max-w-xl lg:max-w-[34vw] flex flex-col items-left justify-center">
          <TextGenerateEffect
            className="text-left text-[40px] md:text-5xl lg:text-6xl"
            words={`Hi, I'm ${character.name}.`}
          />
          <p className="text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            {character.bio}
          </p>
          <a href="#about">
            <MagicButton
              title="More about me."
              icon={<FaLocationArrow />}
              position="right"
            ></MagicButton>
          </a>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={character.avatar}
            alt="Avatar"
            className="w-500 h-500 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
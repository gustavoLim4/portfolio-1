import { useSelector } from "react-redux";
import { RootState } from "../../store/redux";
import Marquee from "react-fast-marquee";
import js from "../../img/js.png";
import ts from "../../img/ts.png";
import redux from "../../img/redux.png";
import csharp from "../../img/csharp.png";
import sass from "../../img/sass.png";
import node from "../../img/node.png";
import php from "../../img/php.png";
import html from "../../img/html.png";
import css from "../../img/css.png";
import react from "../../img/react.png";
import mysql from "../../img/mysql.png";
import bootstrap from "../../img/bootstrap.png";
import tailwind from "../../img/tailwinds.png";
import figma from "../../img/figma.png";
import wordpress from "../../img/wordpress.png";

export const Skills: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  interface Tema {
    h1Skills: string;
    DivImg: string;
    CssImg: string;
    corfund: string;
  }

  const claro: Tema = {
    h1Skills: "text-[#7f5af0] transition duration-300 ease-in-out",
    corfund: "bg-[#fff] transition duration-400 ease-in-out",
    DivImg: "p-2 shadow-[0px_1px_15px_#333333bd] rounded-2xl bg-[#fff] transition duration-400 ease-in-out",
    CssImg: "w-24 sm:w-32 md:w-36 lg:w-40 object-contain transition duration-400 ease-in-out",
  };

  const escuro: Tema = {
    h1Skills: "text-[#0400ff] transition duration-300 ease-in-out",
    corfund: "bg-[#1f1f1f] transition duration-400 ease-in-out",
    DivImg: "p-2 shadow-[0px_1px_15px_rgba(255,255,255,0.50)] rounded-2xl transition duration-400 ease-in-out",
    CssImg: "w-24 sm:w-32 md:w-36 lg:w-40 object-contain transition duration-400 ease-in-out",
  };

  return (
    <main>
      <div className={darkMode ? claro.corfund : escuro.corfund}>
        <h1 className={`${darkMode ? claro.h1Skills : escuro.h1Skills} text-3xl sm:text-4xl md:text-5xl py-5 flex justify-center`}>
          Skills
        </h1>
        <Marquee speed={165} pauseOnHover={true}>
          <div className="flex items-center gap-3 sm:gap-5 m-3 py-6 sm:py-8 md:py-10 lg:py-16">
            {[html, css, js, ts, react, sass, node, redux, csharp, php, mysql, wordpress, bootstrap, tailwind, figma].map((imgSrc, index) => (
              <div key={index} className={darkMode ? claro.DivImg : escuro.DivImg}>
                <img src={imgSrc} alt={`Skill ${index}`} className={darkMode ? claro.CssImg : escuro.CssImg} />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </main>
  );
};

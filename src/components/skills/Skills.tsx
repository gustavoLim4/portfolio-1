
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
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
        DivImg: "p-2 shadow-[0px_10px_20px_#333333bd] rounded-2xl bg-[#fff] transition duration-400 ease-in-out",
        CssImg: "w-40 object-contain transition duration-400 ease-in-out"
    };

    const escuro: Tema = {
        h1Skills: "text-[#0400ff] transition duration-300 ease-in-out",
        corfund: "bg-[#1f1f1f] transition duration-400 ease-in-out",
        DivImg: "p-2 shadow-[0px_5px_15px_rgba(255,255,255,0.50)] rounded-2xl transition duration-400 ease-in-out",
        CssImg: "w-40 object-contain transition duration-400 ease-in-out"
    };

    return (
        <main className={darkMode ? claro.corfund : escuro.corfund}>
            <h1 className={`${darkMode ? claro.h1Skills : escuro.h1Skills} text-5xl py-5 flex justify-center`}>
                Skills
            </h1>
            <Marquee speed={165}>
                <div className="flex justify-center gap-5 m-3 py-10">
                    {[html, css, js, ts, react, sass, node, redux, csharp, php, mysql, wordpress, bootstrap, tailwind, figma].map((imgSrc, index) => (
                        <div key={index} className={darkMode ? claro.DivImg : escuro.DivImg}>
                            <img src={imgSrc} alt="" className={darkMode ? claro.CssImg : escuro.CssImg} />
                        </div>
                    ))}
                </div>
            </Marquee>
        </main>
    );
};

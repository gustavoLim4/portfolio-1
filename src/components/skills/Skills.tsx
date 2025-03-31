
import js from "../../img/js.png"
import ts from "../../img/ts.png"
import redux from "../../img/redux.png"
import csharp from "../../img/csharp.png"
import sass from "../../img/sass.png"
import node from "../../img/node.png"
import php from "../../img/php.png"
import html from "../../img/html.png"
import css from "../../img/css.png"
import react from "../../img/react.png"
import mysql from "../../img/mysql.png"
import bootstrap from "../../img/bootstrap.png"
import tailwind from "../../img/tailwinds.png"
import figma     from "../../img/figma.png"
import jquery from "../../img/jquery.png"
import wordpress from "../../img/wordpress.png"
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Marquee from "react-fast-marquee";

export const Skills: React.FC = () => {

    const darkMode = useSelector((state: RootState) => state.theme.darkMode);

    interface Tema {
        DivImg: string,
        CssImg: string
    }

    const claro: Tema = {
        DivImg: "p-2 shadow-[0px_10px_20px_#333333bd] rounded-2xl",
        CssImg: "w-45 object-contain"
    }

    return (
        <main>
            <h1 className={`${darkMode ? "text-[#7f5af0]" : "text-[#0400ff]"} text-5xl py-10 flex justify-center`}>Skills</h1>
            <Marquee speed={130}>
                <div className="flex justify-center gap-5 m-5 ">
                    <div className={claro.DivImg}>
                        <img src={html} alt="" className={claro.CssImg} />
                    </div>
                    <div className={claro.DivImg}>
                        <img src={css} alt="" className={claro.CssImg} />
                    </div>
                    <div className={claro.DivImg}>
                        <img src={js} alt="" className={claro.CssImg} />
                    </div>
                    <div className={claro.DivImg}>
                        <img src={ts} alt="" className={claro.CssImg} />
                    </div>
                    <div className={claro.DivImg}>
                        <img src={react} alt="" className={claro.CssImg} />
                    </div>
                    <div className={claro.DivImg}>
                        <img src={node} alt="" className={claro.CssImg} />
                    </div>
                    <div className={claro.DivImg}>
                        <img src={redux} alt="" className={claro.CssImg} />
                    </div>
                    <div className={claro.DivImg}>
                        <img src={csharp} alt="" className={claro.CssImg} />
                    </div>
                    <div className={claro.DivImg}>
                        <img src={php} alt="" className={claro.CssImg} />
                    </div>
                    <div className={claro.DivImg}>
                        <img src={wordpress} alt="" className={claro.CssImg} />
                    </div>
                    <div className={claro.DivImg}>
                        <img src={mysql} alt="" className={claro.CssImg} />
                    </div>
                    <div className={claro.DivImg}>
                        <img src={sass} alt="" className={claro.CssImg} />
                    </div>
                    <div className={claro.DivImg}>
                        <img src={tailwind} alt="" className={claro.CssImg} />
                    </div>
                    <div className={claro.DivImg}>
                        <img src={jquery} alt="" className={claro.CssImg} />
                    </div>
                    <div className={claro.DivImg}>
                        <img src={bootstrap} alt="" className={claro.CssImg} />
                    </div>
                    <div className={claro.DivImg}>
                        <img src={figma} alt="" className={claro.CssImg} />
                    </div>
                </div>
            </Marquee>
        </main >
    )
}

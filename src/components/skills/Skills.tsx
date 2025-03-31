
import js from "../../img/js.png"
import ts from "../../img/ts.png"
import redux from "../../img/redux.png"
import csharp from "../../img/csharp.png"
import sass from "../../img/sass.png"
import node from "../../img/node.png"
import php from "../../img/php.png"
import react from "../../img/react.png"
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const Skills: React.FC = () => {

    const darkMode = useSelector((state: RootState) => state.theme.darkMode);

    interface Tema {
        DivImg: string,
        CssImg: string,
        corfund: string
    }

    const claro: Tema = {
        corfund: "bg-[#fff] transition duration-300 ease-in-out",
        DivImg: "p-2 shadow-[0px_10px_20px_#333333bd] rounded-2xl bg-[#fff] transition duration-300 ease-in-out",
        CssImg: "w-50 object-contain"
    }

    const escuro: Tema = {
        corfund: "bg-[#1f1f1f] transition duration-300 ease-in-out",
        DivImg: "p-2  shadow-[0px_5px_15px_rgba(255,255,255,0.50)] rounded-2xl transition duration-300 ease-in-out",
        CssImg: "w-50 object-contain "
    }

    return (
        <main className={darkMode ? claro.corfund : escuro.corfund}>
            <h1 className={`${darkMode ? "text-[#7f5af0]" : "text-[#0400ff]"} text-5xl py-10 flex justify-center`}>Skills</h1>
            <div className="flex justify-center gap-5 my-7 mx-10">
                <div className={darkMode ? claro.DivImg : escuro.DivImg}>
                    <img src={js} alt="" className={darkMode ? claro.CssImg : escuro.CssImg} />
                </div>
                <div className={darkMode ? claro.DivImg : escuro.DivImg}>
                    <img src={ts} alt="" className={darkMode ? claro.CssImg : escuro.CssImg} />
                </div>

                <div className={darkMode ? claro.DivImg : escuro.DivImg}>
                    <img src={react} alt="" className={darkMode ? claro.CssImg : escuro.CssImg} />
                </div>
                <div className={darkMode ? claro.DivImg : escuro.DivImg}>
                    <img src={sass} alt="" className={darkMode ? claro.CssImg : escuro.CssImg} />
                </div>
                <div className={darkMode ? claro.DivImg : escuro.DivImg}>
                    <img src={node} alt="" className={darkMode ? claro.CssImg : escuro.CssImg} />
                </div>
                <div className={darkMode ? claro.DivImg : escuro.DivImg}>
                    <img src={redux} alt="" className={darkMode ? claro.CssImg : escuro.CssImg} />
                </div>
                <div className={darkMode ? claro.DivImg : escuro.DivImg}>
                    <img src={csharp} alt="" className={darkMode ? claro.CssImg : escuro.CssImg} />
                </div>
                <div className={darkMode ? claro.DivImg : escuro.DivImg}>
                    <img src={php} alt="" className={darkMode ? claro.CssImg : escuro.CssImg} />
                </div>

            </div>
        </main >
    )
}

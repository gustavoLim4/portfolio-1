
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
        CssImg: string
    }

    const claro: Tema = {
        DivImg: "p-2 shadow-[0px_10px_20px_#333333bd] rounded-2xl",
        CssImg: "w-50 object-contain"
    }

    return (
        <main>
            <h1 className={`${darkMode ? "text-[#7f5af0]" : "text-[#0400ff]"} text-5xl py-10 flex justify-center`}>Skills</h1>
            <div className="flex justify-center gap-5 my-7 mx-10">
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
                    <img src={sass} alt="" className={claro.CssImg} />
                </div>
            </div>
        </main >
    )
}

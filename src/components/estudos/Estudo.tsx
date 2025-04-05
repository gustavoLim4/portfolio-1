
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const Estudo = () => {

    const darkMode = useSelector((state: RootState) => state.theme.darkMode);

    interface Tema {
        bgColor: string;
        h1educacao: string;
        iconbooks: string;
        linha: string;
        spantext: string;
        cursoTxt: string;
    }

    const claro: Tema = {
        h1educacao: "text-5xl py-7 flex justify-center text-[#7f5af0] transition duration-400 ease-in-out",
        bgColor: "bg-[#fff] transition duration-400 ease-in-out",
        iconbooks: `bg-[#7f5af0] py-1 pr-1 rounded-full relative bottom-2 left-6 text-3xl h-12 icons-timeline transition 
        duration-400 hover:shadow-[0px_1px_15px_#7f5af0] hover:bg-[#fff] transition duration-400 ease-in-out `,
        linha: "border-l-[4px] border-l-[#7f5af0] px-10 py-1 gap-4 flex flex-col transition duration-400 ease-in-out",
        spantext: `p-3 rounded-3xl shadow-[0px_5px_15px_rgba(0,0,0,0.30)] hover:shadow-[0px_1px_15px_#7f5af0]
        text-[#000] w-40 text-center transition duration-400 ease-in-out`,
        cursoTxt: "text-2xl text-[#000] transition duration-400 ease-in-out ",
    }
    const escuro: Tema = {
        h1educacao: "text-5xl py-7 flex justify-center text-[#0400ff] transition duration-400 ease-in-out",
        bgColor: "bg-[#1f1f1f] transition duration-400 ease-in-out",
        iconbooks: `bg-[#0400ff] py-1 pr-1 rounded-full relative bottom-2 left-6 text-3xl h-12 icons-timeline transition 
        duration-400 hover:shadow-[0px_1px_15px_#0400ff] hover:bg-[#fff] transition duration-400 ease-in-out `,
        linha: "border-l-[4px] border-l-[#0400ff] px-10 py-1 gap-5 flex flex-col transition duration-400 ease-in-out",
        spantext: `p-3 rounded-3xl shadow-[0px_5px_15px_rgba(255,255,255,0.10)] hover:shadow-[0px_1px_15px_#0400ff]
        text-[#fff] w-40 text-center transition duration-400 ease-in-out `,
        cursoTxt: "text-2xl text-[#fff] transition duration-400 ease-in-out ",
    }

    return (
        <main>
            <div className={darkMode ? claro.bgColor : escuro.bgColor}>
                <h1 className={darkMode ? claro.h1educacao : escuro.h1educacao}>Educação</h1>
                <div className="flex mx-15">
                    <div className="flex h-70">
                        <i className={darkMode ? claro.iconbooks : escuro.iconbooks}>📚</i>
                        <div className={darkMode ? claro.linha : escuro.linha}>
                            <span className={darkMode ? claro.spantext : escuro.spantext}>2024 - Cursando</span>
                            <h3 className={darkMode ? claro.cursoTxt : escuro.cursoTxt}>Analise e Desenvolvimento de Sistemas</h3>
                        </div>
                    </div>
                </div>
                <div className="flex mx-15">
                    <div className="flex h-70">
                        <i className={darkMode ? claro.iconbooks : escuro.iconbooks}>📚</i>
                        <div className={darkMode ? claro.linha : escuro.linha}>
                            <span className={darkMode ? claro.spantext : escuro.spantext}>2024 - Cursando</span>
                            <h3 className={darkMode ? claro.cursoTxt : escuro.cursoTxt}>Analise e Desenvolvimento de Sistemas</h3>
                        </div>
                    </div>
                </div>
                <div className="flex mx-15">
                    <div className="flex h-70">
                        <i className={darkMode ? claro.iconbooks : escuro.iconbooks}>📚</i>
                        <div className={darkMode ? claro.linha : escuro.linha}>
                            <span className={darkMode ? claro.spantext : escuro.spantext}>2024 - Cursando</span>
                            <h3 className={darkMode ? claro.cursoTxt : escuro.cursoTxt}>Analise e Desenvolvimento de Sistemas</h3>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

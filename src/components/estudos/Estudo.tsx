
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Estudo: React.FC = () => {

    const darkMode = useSelector((state: RootState) => state.theme.darkMode);

    interface Tema {
        bgColor: string;
        h1educacao: string;
        iconbooks: string;
        linha: string;
        spantext: string;
        cursoTxt: string;
        texto: string;
    }

    const claro: Tema = {
        h1educacao: "text-5xl py-7 flex justify-center text-[#7f5af0] transition duration-400 ease-in-out",
        bgColor: "bg-[#fff] transition duration-400 ease-in-out",
        iconbooks: `bg-[#7f5af0] py-1 pr-2 rounded-full relative bottom-5 left-7.5 text-4xl h-14 icons-timeline transition 
        duration-400 hover:shadow-[0px_1px_15px_#7f5af0] hover:bg-[#fff] transition duration-400 ease-in-out `,
        linha: "border-l-[4px] border-l-[#7f5af0] px-10 py-1 gap-4 flex flex-col transition duration-400 ease-in-out",
        spantext: `p-3 rounded-3xl shadow-[0px_5px_15px_rgba(0,0,0,0.20)] hover:shadow-[0px_1px_15px_#7f5af0]
        text-[#000] w-40 text-center transition duration-400 ease-in-out font-bold`,
        cursoTxt: "text-3xl text-[#000] transition duration-400 ease-in-out font-bold ",
        texto: "text-[#000] text-justify w-180 text-lg transition duration-400 ease-in-out"
    }
    const escuro: Tema = {
        h1educacao: "text-5xl py-7 flex justify-center text-[#0400ff] transition duration-400 ease-in-out",
        bgColor: "bg-[#1f1f1f] transition duration-400 ease-in-out",
        iconbooks: `bg-[#0400ff] py-1 pr-2 rounded-full relative bottom-5 left-7.5 text-4xl h-14 icons-timeline transition 
        duration-400 hover:shadow-[0px_1px_15px_#7f5af0] hover:bg-[#fff] transition duration-400 ease-in-out `,
        linha: "border-l-[4px] border-l-[#0400ff] px-10 py-1 gap-5 flex flex-col transition duration-400 ease-in-out",
        spantext: `p-3 rounded-3xl shadow-[0px_5px_15px_rgba(255,255,255,0.10)] hover:shadow-[0px_1px_15px_#0400ff]
        text-[#fff] w-40 text-center transition duration-400 ease-in-out font-bold bg-[#0000006e]`,
        cursoTxt: "text-3xl text-[#fff] font-bold transition duration-400 ease-in-out",
        texto: "text-[#fff] text-justify w-180 text-lg transition duration-400 ease-in-out"
    }

    return (
        <main >
            <div className={darkMode ? claro.bgColor : escuro.bgColor}>
                <h1 className={darkMode ? claro.h1educacao : escuro.h1educacao}>Educação</h1>
                <div className="flex mx-15">
                    <div className="flex h-65">
                        <i className={darkMode ? claro.iconbooks : escuro.iconbooks}>📚</i>
                        <div className={darkMode ? claro.linha : escuro.linha}>
                            <span className={darkMode ? claro.spantext : escuro.spantext}>2025 - 2027 </span>
                            <h3 className={darkMode ? claro.cursoTxt : escuro.cursoTxt}>Analise e Desenvolvimento de Sistemas.</h3>
                            <p className={darkMode ? claro.texto : escuro.texto}>Ensino superior na faculdade Uninove, em uma graduação tecnológica voltada para a criação,
                                manutenção e gerenciamento de sistemas computacionais. O curso tem um foco prático e prepara
                                para atuar no desenvolvimento de software, banco de dados, segurança da
                                informação e infraestrutura de TI. </p>
                        </div>
                    </div>
                </div>
                <div className="flex mx-15">
                    <div className="flex h-60">
                        <i className={darkMode ? claro.iconbooks : escuro.iconbooks}>📚</i>
                        <div className={darkMode ? claro.linha : escuro.linha}>
                            <span className={darkMode ? claro.spantext : escuro.spantext}>2023 - 2024</span>
                            <h3 className={darkMode ? claro.cursoTxt : escuro.cursoTxt}>Técnico da informação.</h3>
                            <p className={darkMode ? claro.texto : escuro.texto}>
                                Curso Técnico em TI no Senac, onde adquiri conhecimentos em diversas áreas da tecnologia,
                                incluindo hardware e software, configuração de redes, programação e banco de dados.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex mx-15">
                    <div className="flex h-50">
                        <i className={darkMode ? claro.iconbooks : escuro.iconbooks}>📚</i>
                        <div className={darkMode ? claro.linha : escuro.linha}>
                            <span className={darkMode ? claro.spantext : escuro.spantext}>2024 - 2024</span>
                            <h3 className={darkMode ? claro.cursoTxt : escuro.cursoTxt}>Desenvolvimento front-end em JS.</h3>
                            <p className={darkMode ? claro.texto : escuro.texto}>
                                Curso complementar de JavaScript para front-end na instituição do Senac.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex mx-15">
                    <div className="flex h-50">
                        <i className={darkMode ? claro.iconbooks : escuro.iconbooks}>📚</i>
                        <div className={darkMode ? claro.linha : escuro.linha}>
                            <span className={darkMode ? claro.spantext : escuro.spantext}>2024 - Cursando</span>
                            <h3 className={darkMode ? claro.cursoTxt : escuro.cursoTxt}>Montagem e Formatação de Computadores.</h3>
                            <p className={darkMode ? claro.texto : escuro.texto}>
                                Informática profissionalizante na Udemy e aprendendo desde da montagem
                                do Hardware até a formatação e instalação do Windows 10 </p>
                        </div>
                    </div>
                </div>
                <div className="flex mx-15">
                    <div className="flex ">
                        <i className={darkMode ? claro.iconbooks : escuro.iconbooks}>📚</i>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Estudo;
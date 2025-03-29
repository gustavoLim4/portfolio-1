import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const Aprecentacao: React.FC = () => {
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);

    interface Tema {
        devCaixa: string
        bgColor: string;
        textColor: string;
        buttonBg: string;
        apresentar: string;
    }

    // Definindo o tema claro
    const claro: Tema = {
        devCaixa: "text-[#fff] font-bold tracking-wide px-2 py-1 bg-gradient-to-r from-[#7f5af0] to-[#0400ff] border-white/50 text-[20px] rounded-2xl",
        bgColor: "bg-[#fff] py-10",
        textColor: "text-7xl text-[#7f5af0]",
        apresentar: "text-3xl text-center text-[#000]",
        buttonBg: "text-3xl bg-[#7f5af0] py-3  text-[#fff] px-10 rounded-2xl flex items-center"

    };
    const escuro: Tema = {
        devCaixa: "text-[#fff] font-bold tracking-wide px-2 py-1 bg-gradient-to-r from-[#0400ff] to-[#7f5af0] border-white/50 text-[20px] rounded-2xl",
        bgColor: "bg-[#1f1f1f] py-10",
        textColor: "text-7xl text-[#0400ff] ",
        apresentar: "text-3xl text-center text-[#fff]",
        buttonBg: "text-3xl bg-[#0400ff] py-3  text-[#fff] px-10 rounded-2xl flex items-center"
    };

    return (
        <main >
            <div className={`${darkMode ? claro.bgColor : escuro.bgColor} transition duration-300 ease-in-out`}>
                <div className="w-1/2 p-10 flex flex-col items-center gap-10">
                    <h1 className={darkMode ? claro.textColor : escuro.textColor}>Gustavo Lima Dev.</h1>
                    <span className={darkMode ? claro.devCaixa : escuro.devCaixa}>Welcome to my Portfolio</span>
                    <h3 className={darkMode ? claro.apresentar : escuro.apresentar}>
                        Olá! Sou um desenvolvedor Front-End Jr. apaixonado por
                        criar interfaces incríveis. Explore meu trabalho e veja minhas criações!</h3>
                    <div className="gap-5 flex ">
                        <a href="#" className={darkMode ? claro.buttonBg : escuro.buttonBg}>Projetos</a>
                        <a href="#" className={darkMode ? claro.buttonBg : escuro.buttonBg}>Curriculo</a>

                    </div>
                </div>
                <div>

                </div>
            </div>
        </main>
    );
};

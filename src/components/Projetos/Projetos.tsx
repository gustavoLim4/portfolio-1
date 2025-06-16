import { useSelector } from "react-redux";
import { RootState } from "../../store/redux";


const Projetos: React.FC = () => {

    const darkMode = useSelector((state: RootState) => state.theme.darkMode);


    interface Tema {
        bgcolor: string;
        h1projetos: string;
    }
    const claro: Tema = {
        bgcolor: "bg-[#fff] transition duration-400 ease-in-out",
        h1projetos: "text-5xl py-15 flex justify-center text-[#7f5af0] transition duration-400 ease-in-out"
    }
    const escuro: Tema = {
        bgcolor: "bg-[#1f1f1f] transition duration-400 ease-in-out",
        h1projetos: "text-5xl py-15 flex justify-center text-[#0400ff] transition duration-400 ease-in-out"
    }
    return (
        <main>
            <div className={`${darkMode ? claro.bgcolor : escuro.bgcolor}`}>
                <h1 className={`${darkMode ? claro.h1projetos : escuro.h1projetos}`}>
                    Projetos
                </h1>
                <div>
                    <div>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default Projetos;
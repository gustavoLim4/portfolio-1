import { useSelector } from "react-redux";
import { RootState } from "../../store/redux";

const Footer: React.FC = () => {

    const darkMode = useSelector((state: RootState) => state.theme.darkMode);

    interface Tema {
        bgColor: string;
        textp: string;
    }

    const claro: Tema = {
        bgColor: "bg-[#7f5af0] transition duration-400 ease-in-out py-15 px-19",
        textp: "text-[#fff] font-bold transition duration-400 ease-in-out"
    }
    const escuro: Tema = {
        bgColor: "bg-[#0400ff] transition duration-400 ease-in-out py-15 px-19",
        textp: "text-[#fff] font-bold transition duration-400 ease-in-out" 
    }

    return (
        <footer className={darkMode ? claro.bgColor : escuro.bgColor}>
            <div className="flex items-center gap-5">
                <p className={darkMode ? claro.textp : escuro.textp}>Copyright © 2025 - gustavodev | All rights reserved...</p>
            </div>
        </footer>
    )
}

export default Footer

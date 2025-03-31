import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { TrocaCor } from "../store/slices/themeSlice";
import logoClara from "../../img/loco-claro.png";
import logoEscura from "../../img/logo-escuro.png";

const NavBar = () => {
    const dispatch = useDispatch<AppDispatch>();
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);

    interface Tema {
        bgColor: string;
        textColor: string;
        buttonBg: string;
    }

    // Definindo o tema claro
    const claro: Tema = {

        bgColor: "bg-[#ffffff]",
        textColor: "text-[#7f5af0] hover:text-[#a48bee] text-xl  px-6 py-2",
        buttonBg: "bg-[#7f5af0] text-[#fff] py-1 px-3 rounded-lg",

    };

    // Definindo o tema escuro
    const escuro: Tema = {

        bgColor: "bg-[#000]",
        textColor: "text-[#0400ff] hover:text-[#fff] text-xl  px-6 py-2",
        buttonBg: "bg-[#0400ff] text-[#fff] py-1 px-3 rounded-lg",

    };

    return (
        <nav>
            {/* Aplica as classes do tema de acordo com o darkMode */}
            <div className={`${darkMode ? claro.bgColor : escuro.bgColor} transition duration-300 ease-in-out`}>
                <div className="flex items-center justify-between py-5 px-30">
                    <img
                        src={darkMode ? logoClara : logoEscura}
                        alt="Logo"
                        className="w-50  transition duration-300 ease-in-out"
                    />

                    <div className="flex items-center gap-10">
                        <div>
                            <a
                                href="#home"
                                className={`${darkMode ? claro.textColor : escuro.textColor}`}
                            >
                                Home
                            </a>
                            <a
                                href="#about"
                                className={`${darkMode ? claro.textColor : escuro.textColor} `}
                            >
                                About
                            </a>
                            <a
                                href="#projects"
                                className={`${darkMode ? claro.textColor : escuro.textColor} `}
                            >
                                Projects
                            </a>
                            <a
                                href="#contact"
                                className={`${darkMode ? claro.textColor : escuro.textColor} `}
                            >
                                Contact
                            </a>
                        </div>
                        <div className={`${darkMode ? claro.buttonBg : escuro.buttonBg}`}>
                            <button onClick={() => dispatch(TrocaCor())}>
                                Modo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

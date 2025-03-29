import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { TrocaCor } from "../../store/slices/themeSlice";
import logoClara from "../../img/loco-claro.png"
import logoEscura from "../../img/logo-escuro.png";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

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
        textColor: "text-[#7f5af0] hover:text-[#a48bee] text-xl  px-6 py-2 ",
        buttonBg: "w-10 h-10 text-[#7f5af0] border-2 p-1 rounded-full"

    };

    // Definindo o tema escuro
    const escuro: Tema = {

        bgColor: "bg-[#000]",
        textColor: "text-[#0400ff] hover:text-[#fff] text-xl  px-6 py-2 ",
        buttonBg: "w-10 h-10 text-[#0400ff] border-2 p-1 rounded-full",

    };



    return (
        <nav>
            {/* Aplica as classes do tema de acordo com o darkMode */}
            <div className={`${darkMode ? claro.bgColor : escuro.bgColor} transition duration-300 ease-in-out`}>
                <div className="flex items-center justify-between py-5 px-30 ">
                    <a href="#">
                        <img
                            src={darkMode ? logoClara : logoEscura}
                            alt="Logo"
                            className="w-50  transition duration-300 ease-in-out"
                        />
                    </a>

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
                        <div className="">
                            <button onClick={
                                () => dispatch(TrocaCor())} >
                                {darkMode ? <MdOutlineLightMode className={claro.buttonBg} /> : <MdOutlineDarkMode className={escuro.buttonBg} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

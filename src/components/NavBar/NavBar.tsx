import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { TrocaCor } from "../../store/slices/themeSlice";
import logoClara from "../../img/loco-claro.png";
import logoEscura from "../../img/logo-escuro.png";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const NavBar: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    interface Tema {
        bgColor: string;
        textColor: string;
        buttonBg: string;
    }

    const claro: Tema = {
        bgColor: "bg-[#fff] shadow-[0px_5px_15px_rgba(1,0,0,0.1)]",
        textColor: "text-[#7f5af0] hover:text-[#a48bee] text-xl px-6 py-2",
        buttonBg: "w-10 h-10 text-[#1f1f1f] border-2 p-1 rounded-full"
    };

    const escuro: Tema = {
        bgColor: "bg-[#1f1f1f] shadow-[0px_5px_15px_rgba(255,255,255,0.1)]",
        textColor: "text-[#0400ff] hover:text-[#fff] text-xl px-6 py-2",
        buttonBg: "w-10 h-10 text-[#fff] border-2 p-1 rounded-full"
    };

    return (
        <nav className={`${isFixed ? "fixed top-0 w-full  z-50 transition-all duration-500" : ""}`}>
            <div className={`${darkMode ? claro.bgColor : escuro.bgColor} transition duration-300 ease-in-out`}>
                <div className="flex items-center justify-between py-5 px-10">
                    <a href="#">
                        <img
                            src={darkMode ? logoClara : logoEscura}
                            alt="Logo"
                            className="w-50 transition duration-300 ease-in-out"
                        />
                    </a>

                    <div className="flex items-center gap-10">
                        <div>
                            <a href="#home" className={`${darkMode ? claro.textColor : escuro.textColor}`}>
                                Home
                            </a>
                            <a href="#about" className={`${darkMode ? claro.textColor : escuro.textColor}`}>
                                About
                            </a>
                            <a href="#projects" className={`${darkMode ? claro.textColor : escuro.textColor}`}>
                                Projects
                            </a>
                            <a href="#contact" className={`${darkMode ? claro.textColor : escuro.textColor}`}>
                                Contact
                            </a>
                        </div>
                        <div>
                            <button onClick={() => dispatch(TrocaCor())}>
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

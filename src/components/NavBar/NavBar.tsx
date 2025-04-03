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
    const [navfixo, setNavFixo] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setNavFixo(true);
            } else {
                setNavFixo(false);
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
        bgColor: "bg-[#fff] shadow-[0px_5px_15px_rgba(1,0,0,0.1)] transition duration-400 ease-in-out",
        textColor: `text-[#7f5af0] text-xl hover:text-[#a48bee] 
        relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 
        after:h-[2px] after:bg-[#a48bee] after:transition-all after:duration-300 hover:after:w-full`,

        buttonBg: "w-10 h-10 text-[#1f1f1f]  p-1 rounded-full transition duration-400 ease-in-out hover:scale-110"
    };

    const escuro: Tema = {
        bgColor: "bg-[#1f1f1f] shadow-[0px_5px_15px_rgba(255,255,255,0.1)] transition duration-400 ease-in-out",
        textColor: `text-[#0400ff] text-xl hover:text-[#423eff] 
        relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 
        after:h-[2px] after:bg-[#423eff] after:transition-all after:duration-300 hover:after:w-full`,
        buttonBg: "w-10 h-10 text-[#fff] p-1 rounded-full hover:scale-125 transition duration-400 ease-in-out hover:scale-110"
    };

    return (
        <nav className={`transition-all duration-400 ease-in-out ${navfixo ? "fixed top-0 w-full z-50 translate-y-0 shadow-lg" :""
            }`}>
            <div className={`${darkMode ? claro.bgColor : escuro.bgColor} transition duration-400 ease-in-out`}>
                <div className="flex items-center justify-between py-5 px-10">
                    <a href="#">
                        <img
                            src={darkMode ? logoClara : logoEscura}
                            alt="Logo"
                            className="w-50 transition duration-400 ease-in-out"
                        />
                    </a>

                    <div className="flex items-center gap-10">
                        <div className="flex gap-15">
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

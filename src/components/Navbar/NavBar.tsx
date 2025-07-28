import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/redux";
import { TrocaCor } from "../../store/slices/themeSlice";
import logoClara from "../../img/loco-claro.png";
import logoEscura from "../../img/logo-escuro.png";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { IoMenu, IoClose } from "react-icons/io5";

const NavBar: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);
    const [navFixo, setNavFixo] = useState(false);
    const [menuAberto, setMenuAberto] = useState(false);

    useEffect(() => {
        const scroll = () => setNavFixo(window.scrollY > 20);
        window.addEventListener("scroll", scroll);
        return () => window.removeEventListener("scroll", scroll);
    }, []);

    const tema = darkMode
        ? {
              logo: logoClara,
              bg: "bg-white shadow-md",
              text: "text-[#7f5af0] hover:text-[#a48bee]",
              border: "after:bg-[#a48bee]",
              button: "text-[#1f1f1f]",
              menuBg: "bg-white",
          }
        : {
              logo: logoEscura,
              bg: "bg-[#1f1f1f] shadow-md",
              text: "text-[#0400ff] hover:text-[#423eff]",
              border: "after:bg-[#423eff]",
              button: "text-white",
              menuBg: "bg-[#1f1f1f]",
          };

    const handleLinkClick = () => setMenuAberto(false);

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#skills", label: "Skills" },
        { href: "#educacao", label: "Educação" },
        { href: "#projetos", label: "Projetos" },
        { href: "#contato", label: "Contato" },
    ];

    return (
        <nav className={`transition-all duration-300 ease-in-out ${navFixo ? "fixed top-0 w-full z-50" : ""}`}>
            <div className={`${tema.bg} transition duration-300`}>
                <div className="flex justify-between items-center px-5 md:px-10 py-5">
                    <a href="#home" onClick={handleLinkClick}>
                        <img src={tema.logo} alt="Logo" className="w-40 md:w-48" />
                    </a>

                    {/* Menu mobile */}
                    <div className="lg:hidden">
                        <button
                            className={`text-3xl ${tema.button}`}
                            onClick={() => setMenuAberto(!menuAberto)}
                        >
                            {menuAberto ? <IoClose /> : <IoMenu />}
                        </button>
                    </div>

                    {/* Menu desktop */}
                    <div className="hidden lg:flex gap-10 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`text-xl relative group ${tema.text}`}
                            >
                                <span className={`after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] group-hover:after:w-full after:transition-all ${tema.border}`}>
                                    {link.label}
                                </span>
                            </a>
                        ))}
                        <button onClick={() => dispatch(TrocaCor())}>
                            {darkMode ? (
                                <MdOutlineLightMode className="w-10 h-10 p-2 rounded-full hover:scale-110 transition" />
                            ) : (
                                <MdOutlineDarkMode className="w-10 h-10 p-2 rounded-full hover:scale-110 transition" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Menu mobile aberto */}
                {menuAberto && (
                    <>
                        <div
                            className={`lg:hidden fixed top-0 right-0 h-full w-64 z-50 p-8 shadow-lg flex flex-col items-center gap-6 transition-transform duration-300 ${tema.menuBg}`}
                        >
                            <div className="mt-20 flex flex-col items-center gap-6">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={handleLinkClick}
                                        className={`text-xl ${tema.text}`}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                                <button onClick={() => { dispatch(TrocaCor()); handleLinkClick(); }}>
                                    {darkMode ? (
                                        <MdOutlineLightMode className="w-10 h-10 p-2 rounded-full hover:scale-110 transition" />
                                    ) : (
                                        <MdOutlineDarkMode className="w-10 h-10 p-2 rounded-full hover:scale-110 transition" />
                                    )}
                                </button>
                            </div>
                        </div>
                        {/* Overlay */}
                        <div
                            className="fixed inset-0 bg-black opacity-50 z-40"
                            onClick={() => setMenuAberto(false)}
                        />
                    </>
                )}
            </div>
        </nav>
    );
};

export default NavBar;

import { useSelector } from "react-redux";
import { RootState } from "../../store/redux";
import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Contato: React.FC = () => {


    const darkMode = useSelector((state: RootState) => state.theme.darkMode);


    interface Tema {
        title: string;
        bgcolor: string;
        formcaixao: string;
        inputs: string;
        textarea: string;
        btnEnv: string;
        icons: string;
        TituloCont: string;
        textoTR: string;

    }
    const claro: Tema = {
        bgcolor: "bg-[#fff] w-full transition duration-400 ease-in-out pt-20 pb-10 flex ",
        title: "text-[#7f5af0] transition duration-400 ease-in-out text-4xl",
        formcaixao: "flex flex-col py-8 gap-5 rounded-md mx-auto sm:mr-20 items-center sm:items-start w-full sm:w-auto",
        inputs: "w-full p-2 rounded-md border-0 shadow-[0px_1px_5px_rgba(0,0,0,0.40)] focus:outline-none transition duration-400 ease-in-out",
        textarea: "w-full resize-none p-2 rounded-md border-0 shadow-[0px_1px_5px_rgba(0,0,0,0.40)] focus:outline-none transition duration-400 ease-in-out h-32",
        btnEnv: "bg-[#7f5af0] w-25 text-white focus:outline-none p-2 rounded-md hover:bg-[#6b4fdb] transition duration-400 ease-in-out text-lg ",
        icons: "text-5xl text-[#7f5af0] transition duration-400 ease-in-out hover:text-[#a48bee] hover:-translate-y-1",
        TituloCont: "text-[#7f5af0] transition duration-400 ease-in-out text-5xl md:text-7xl",
        textoTR: "text-[#000] transition duration-400 ease-in-out",

    }
    const escuro: Tema = {
        bgcolor: "bg-[#1f1f1f] w-full transition duration-400 ease-in-out flex sm:flex-row flex pt-20 pb-10",
        title: "text-[#0400ff] transition duration-400 ease-in-out text-4xl",
        formcaixao: "flex flex-col py-8 gap-5 rounded-md mx-auto sm:mr-20 items-center sm:items-start w-full sm:w-auto",
        inputs: "w-full p-2 rounded-md border-0  shadow-[0px_1px_25px_rgba(255,255,255,0.10)] transition duration-300 ease-in-out placeholder:text-[#fff]",
        textarea: "w-full resize-none p-2 rounded-md border-0  shadow-[0px_1px_25px_rgba(255,255,255,0.10)] transition duration-400 ease-in-out h-32 placeholder:text-[#fff]",
        btnEnv: "bg-[#0400ff] w-25 text-white focus:outline-none p-2 rounded-md hover:bg-[#0300cc] transition duration-400 ease-in-out text-lg ",
        icons: "text-5xl text-[#0400ff] hover:text-[#423eff] transition duration-400 ease-in-out hover:-translate-y-1",
        TituloCont: "text-[#0400ff] transition duration-400 ease-in-out text-7xl",
        textoTR: "text-[#fff] transition duration-400 ease-in-out",
    }
    return (
        <main >
            <div className={`${darkMode ? claro.bgcolor : escuro.bgcolor} flex-col sm:flex-row`}>
                {/* Lado Esquerdo: Texto e ícones */}
                <div className="w-full sm:w-1/2 py-5 sm:ml-20 px-5 flex flex-col gap-7 items-center sm:items-start text-center sm:text-left">
                    <h1 className={darkMode ? claro.TituloCont : escuro.TituloCont}>Contato</h1>
                    <div className="w-full sm:w-130">
                        <p className={darkMode ? claro.textoTR : escuro.textoTR}>
                            Gostou do meu trabalho como Front-End e Designer UI/UX?
                            Entre em contato comigo para colaborações ou projetos!
                            Estou disponível para novos desafios 💬.
                        </p>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-3">
                        <a href="https://github.com/gustavoLim4">
                            <FaGithub className={darkMode ? claro.icons : escuro.icons} />
                        </a>
                        <a href="https://www.linkedin.com/in/gustavo-dvp/">
                            <FaLinkedin className={darkMode ? claro.icons : escuro.icons} />
                        </a>
                        <a href="https://wa.me/5511944892012">
                            <IoLogoWhatsapp className={darkMode ? claro.icons : escuro.icons} />
                        </a>
                        <a href="https://www.instagram.com/bskm_02/">
                            <FaInstagramSquare className={darkMode ? claro.icons : escuro.icons} />
                        </a>
                    </div>
                </div>

                {/* Lado Direito: Formulário */}
                <div className="w-full sm:w-1/2 px-5">
                    <form className={darkMode ? claro.formcaixao : escuro.formcaixao}>
                        <input type="text" placeholder="Nome :" className={darkMode ? claro.inputs : escuro.inputs} />
                        <input type="text" placeholder="Email :" className={darkMode ? claro.inputs : escuro.inputs} />
                        <textarea placeholder="Mensagem :" className={darkMode ? claro.textarea : escuro.textarea}></textarea>
                        <div className="w-full flex justify-end">
                            <button className={darkMode ? claro.btnEnv : escuro.btnEnv}>
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </main>
    )
}

export default Contato;
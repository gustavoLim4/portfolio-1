import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import eulogo from "../../img/eu-anime.png";
import { Typewriter } from "react-simple-typewriter";

export const Aprecentacao: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  interface Tema {
    bgColor: string;
    textColor: string;
    textColor2: string;
    buttonBg: string;
    apresentar: string;
    githubButton: string;
    linkedinButton: string;
  }

  const claro: Tema = {
    bgColor: "bg-[#fff] ",
    textColor: "text-6xl flex w-full text-[#1f1f1f]",
    textColor2: "text-6xl text-[#7f5af0] flex justify-end",
    apresentar: "text-3xl text-[#000]",
    buttonBg: "text-3xl bg-[#7f5af0] py-3 text-[#fff] px-10 rounded-2xl hover:bg-[#a48bee]",
    githubButton: "text-[#7f5af0] h-15 w-15 hover:text-[#a48bee]",
    linkedinButton: "text-[#7f5af0] h-15 w-15 hover:text-[#a48bee]",
  };

  const escuro: Tema = {
    bgColor: "bg-[#1f1f1f] ",
    textColor: "text-6xl text-[#fff] flex w-full",
    textColor2: "text-6xl text-[#0400ff] flex justify-end",
    apresentar: "text-3xl text-[#fff]",
    buttonBg: "text-3xl bg-[#0400ff] hover:bg-[#423eff] py-3 text-[#fff] px-10 rounded-2xl",
    githubButton: "text-[#0400ff] h-15 w-15 hover:text-[#423eff]",
    linkedinButton: "text-[#0400ff] h-15 w-15 hover:text-[#423eff]",
  };

  return (
    <main>
      <div className={`${darkMode ? claro.bgColor : escuro.bgColor} flex`}>
        <div className="w-1/2 p-10 flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <div>
              <h1 className={darkMode ? claro.textColor : escuro.textColor}>Gustavo Lima</h1>
            </div>
            <div>
              <h1 className={darkMode ? claro.textColor2 : escuro.textColor2}>
                <Typewriter
                  words={["Dev front-end"]}
                  loop={false} // Se quiser que repita, mude para true
                  cursor
                  cursorStyle="|"
                  typeSpeed={100} // Velocidade da digitação
                  deleteSpeed={100} // Velocidade ao apagar (caso precise)
                  delaySpeed={1000} // Tempo antes de recomeçar (se loop=true)
                />
              </h1>
            </div>
          </div>

          <h3 className={darkMode ? claro.apresentar : escuro.apresentar}>
            Olá! Bem-vindo ao meu portfólio. Sinta-se à vontade para explorar!
          </h3>
          <div className="gap-5 flex">
            <a href="projects" className={darkMode ? claro.buttonBg : escuro.buttonBg}>
              Projetos
            </a>
            <a href="https://www.linkedin.com/in/gustavo-dvp/" className="flex items-end">
              <FaLinkedin className={darkMode ? claro.linkedinButton : escuro.linkedinButton} />
            </a>
            <a href="https://github.com/gustavoLim4" className="flex items-end">
              <FaGithub className={darkMode ? claro.githubButton : escuro.githubButton} />
            </a>
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <img src={eulogo} alt="eu logo" />
        </div>
      </div>
    </main>
  );
}
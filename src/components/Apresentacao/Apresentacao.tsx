import { useSelector } from "react-redux";
import { RootState } from "../../store/redux";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import eulogo from "../../img/eu-anime.png";
import { Typewriter } from "react-simple-typewriter";

const Aprecentacao: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  interface Tema {
    bgColor: string;
    textColor: string;
    textColor2: string;
    buttonBg: string;
    apresentar: string;
    BotaosLinks: string;
  }

  const claro: Tema = {
    bgColor: "bg-[#fff] transition duration-400 ease-in-out",
    textColor: "w-full text-[#1f1f1f] transition duration-400 ease-in-out text-4xl md:text-6xl",
    textColor2: "text-[#7f5af0] flex justify-end transition duration-400 ease-in-out text-4xl md:text-6xl",
    apresentar: " text-[#000] transition duration-400 ease-in-out md:text-3xl",
    buttonBg: "text-3xl bg-[#7f5af0] text-[#fff]  rounded-2xl hover:bg-[#a48bee] transition duration-400 ease-in-out hover:-translate-y-1 px-8 py-2 md:px-10 py-3",
    BotaosLinks: "text-[#7f5af0] hover:text-[#a48bee] transition duration-400 ease-in-out hover:-translate-y-1 h-15 w-15",
  };

  const escuro: Tema = {
    bgColor: "bg-[#1f1f1f] transition duration-400 ease-in-out",
    textColor: "text-[#fff] flex w-full transition duration-400 ease-in-out text-4xl md:text-6xl",
    textColor2: "text-[#0400ff] flex justify-end transition duration-400 ease-in-out text-4xl md:text-6xl",
    apresentar: "md:text-3xl text-[#fff] transition duration-400 ease-in-out",
    buttonBg: "text-3xl bg-[#0400ff] hover:bg-[#423eff] py-3 text-[#fff] px-10 rounded-2xl transition duration-400 ease-in-out hover:-translate-y-1",
    BotaosLinks: "text-[#0400ff] h-15 w-15 mb:h-15 w-15 hover:text-[#423eff] transition duration-400 ease-in-out hover:-translate-y-1",
  };

  return (
    <main className="scroll-smooth">
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); } 
          }

          .float-animation {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>
      <div className={`${darkMode ? claro.bgColor : escuro.bgColor} flex flex-col md:flex-row`}>
        <div className="w-full md:w-1/2 p-10 flex flex-col gap-4 md:gap-8">
          <div className="flex flex-col gap-1">
            <div>
              <h1 className={`${darkMode ? claro.textColor : escuro.textColor} `} data-aos="fade-right" >
                Gustavo Lima
              </h1>
            </div>
            <div>
              {/* Mesma coisa para o segundo título */}
              <h1 className={`${darkMode ? claro.textColor2 : escuro.textColor2} `} data-aos="fade-left">
                <Typewriter
                  words={["Dev front-end"]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={100}
                  delaySpeed={1000}
                />
              </h1>
            </div>
          </div>

          <h3 className={`${darkMode ? claro.apresentar : escuro.apresentar}`} data-aos="fade-right" >
            Olá! Bem-vindo ao meu portfólio. Sinta-se à vontade para explorar!
          </h3>

          <div className="flex gap-2 md:gap-5">
            <a href="projects" className={darkMode ? claro.buttonBg : escuro.buttonBg}
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="300">
              Projetos
            </a>
            <a href="https://www.linkedin.com/in/gustavo-dvp/" className="flex items-end"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="600">
              <FaLinkedin className={darkMode ? claro.BotaosLinks : escuro.BotaosLinks} />
            </a>
            <a href="https://github.com/gustavoLim4" className="flex items-end"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="900">
              <FaGithub className={darkMode ? claro.BotaosLinks : escuro.BotaosLinks} />
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0" data-aos="fade-left" data-aos-anchor-placement="bottom-bottom">
          {/* imagem menor no mobile com max-w-[200px], maior no desktop com max-w-full */}
          <img
            src={eulogo}
            alt="eu logo"
            className="float-animation max-w-[200px] md:max-w-full h-auto"

          />
        </div>
      </div>
    </main>
  );
};

export default Aprecentacao;

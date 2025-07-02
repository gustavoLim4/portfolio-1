import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/redux";
import { useNavigate } from "react-router-dom";



interface CardsProps {
    titulo: string;
    descricao: string;
    imagem: string;
    tecnologias: string[];
    rota: string;
}

const Cards: React.FC<CardsProps> = ({ titulo, descricao, imagem, tecnologias, rota }) => {
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);
    const navigate = useNavigate();

    const bgColor = darkMode
        ? "bg-[#fff] shadow-[0px_1px_10px_rgba(0,0,0,0.40)] text-[#000] duration-400 ease-in-out cursor-pointer"
        : "bg-[#333333]  shadow-[0px_1px_5px_rgba(255,255,255,0.10)] text-[#fff] duration-400 ease-in-out cursor-pointer";

    const tituloCor = darkMode
        ? "text-[#7f5af0] duration-400 ease-in-out"
        : "text-[#0400ff] duration-400 ease-in-out";

    const tagBg = darkMode ? "border border-[#7f5af0] " : "bg-[#555555]";

    const handleClick = () => {
        if (rota.startsWith("http")) {
            // Link externo
            window.open(rota, "_blank");
        } else {
            // Navegação interna
            navigate(rota);
        }
    };

    return (
        <main>
            <div className={`rounded-lg hover:-translate-y-2 ${bgColor}`} onClick={handleClick} >
                <img src={imagem} alt={titulo} className="rounded-md w-full h-50" />
                <div className="p-3 flex flex-col justify-between">
                    <h1 className={`text-xl font-bold mb-1 ${tituloCor}`}>{titulo}</h1>
                    <p className="text-justify text-sm mb-3 w-90">{descricao}</p>

                    {/* Tecnologias */}
                    <div className="flex flex-wrap gap-1 mb-1">
                        {tecnologias.map((tec, index) => (
                            <span
                                key={index}
                                className={`px-1 py-0.5 text-xs rounded-md  ${tagBg}`}
                            >
                                {tec}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Cards;

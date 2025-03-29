import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const Aprecentacao: React.FC = () => {
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);

    return (
        <div>
            <h1 className={darkMode ? "text-[#fff]" : "text-[#000]"}>Gustavo Dev</h1>
        </div>
    );
};

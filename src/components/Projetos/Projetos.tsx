import { useSelector } from "react-redux";
import { RootState } from "../../store/redux";
import Cards from "./Cards/Cards";

// 1. Importações do Swiper e do nosso hook
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Estilo principal do Swiper
import useWindowWidth from "../../hooks/useWindowWidth"; // Ajuste o caminho se necessário
// Suas imagens
import TechStore from "../../img/projeto-TechStore.png";
import FlashClean from "../../img/projeto-flashclean.png"
import Athetic from "../../img/projeto-Athetic.png"
import spotify from "../../img/Spotify.png"
import RomaCortinas from "../../img/RomaCortinas.png"
import ListaTarefas from "../../img/Lista-Tarefas.png"
import CalculoIMC from "../../img/Calculo-IMC.png"
import Vava from "../../img/Vava.png"
import CafeDeOuro from "../../img/CafeDeOuro.png"
import Elus from "../../img/Elus.png"
import cabeloCliente from "../../img/barber-clien.png"
import Mova from "../../img/Mova.png"



const Projetos: React.FC = () => {
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);

    // 2. Usando o hook para determinar se é mobile
    const windowWidth = useWindowWidth();
    const isMobile = windowWidth <= 768;

    interface Tema {
        bgcolor: string;
        h1projetos: string;
    }
    const claro: Tema = {
        bgcolor: "bg-[#fff] transition duration-400 ease-in-out",
        h1projetos: "text-5xl py-20 flex justify-center text-[#7f5af0] transition duration-400 ease-in-out",
    }
    const escuro: Tema = {
        bgcolor: "bg-[#1f1f1f] transition duration-400 ease-in-out",
        h1projetos: "text-5xl py-20 flex justify-center text-[#0400ff] transition duration-400 ease-in-out",
    }

    // 3. Configurações para os carrossels no mobile
    // Usamos slidesPerView > 1 para mostrar que há mais conteúdo para deslizar
    const carouselSettings = {
        slidesPerView: 1.2,
        spaceBetween: 15,
        centeredSlides: true,
    };

    return (
        <main>
            <div className={`${darkMode ? claro.bgcolor : escuro.bgcolor}`}>
                <h1 className={`${darkMode ? claro.h1projetos : escuro.h1projetos}`}>
                    Projetos
                </h1>

                {/* 4. Lógica de Renderização Condicional */}
                {isMobile ? (
                    // VERSÃO MOBILE (3 CARROSSELS)
                    <div className="w-full overflow-hidden">
                        {/* --- CARROSSEL 1 --- */}
                        <Swiper {...carouselSettings} style={{ padding: `17px 0px` }}>
                            <SwiperSlide >
                                <Cards
                                    rota="https://flashclean.com.br"
                                    imagem={FlashClean}
                                    titulo="Flash Clean"
                                    descricao="Loja virtual desenvolvida como freelance, focada na venda de produtos de limpeza. Criei o e-commerce utilizando WordPress e Elementor, com layout moderno, responsivo e otimizado para facilitar a navegação e conversão de vendas."
                                    tecnologias={["Wordpress", "Elementor Pro", "WooCommerce",]}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Cards
                                    rota=""
                                    imagem={TechStore}
                                    titulo="Tech Store"
                                    descricao="Projeto acadêmico de e-commerce criado durante a faculdade, com foco na venda de iPhones, notebooks e fones de ouvido. Desenvolvi todo o front-end com design responsivo e navegação intuitiva. O projeto foi avaliado com nota máxima."
                                    tecnologias={["Html", "Css", "Scss", "JavaScript", "Figma", "UI/UX"]}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Cards
                                    rota=""
                                    imagem={Athetic}
                                    titulo="Athetic Force"
                                    descricao="Sistema de academia criado como projeto prático em grupo para aprendizado de novas tecnologias. Desenvolvemos uma plataforma com foco em funcionalidades como cadastro de treinos, agenda e acompanhamento do desempenho dos alunos."
                                    tecnologias={["React", "TypeScript", "Redux", "graphql", "Figma"]}
                                />
                            </SwiperSlide>
                        </Swiper>

                        {/* --- CARROSSEL 2 --- */}
                        <Swiper {...carouselSettings} style={{ padding: `17px 0px` }}>
                            <SwiperSlide>
                                <Cards
                                    rota="https://romacortinas.com.br"
                                    imagem={RomaCortinas}
                                    titulo="Roma Cortinas LTDA"
                                    descricao="Projeto de sistema comercial desenvolvido para uma empresa de cortinas, focado na gestão de pedidos, clientes e produtos. Criei a interface do sistema com um design simples, responsivo e otimizado. O projeto está em produção e sendo utilizado ativamente."
                                    tecnologias={["Wordpress", "Elementor Pro", "Responsivo", "Figma"]}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Cards
                                    rota="https://www.figma.com/proto/6Y35Xplv0HfYKHeElJB11o/Spotify-Aula?node-id=2-4&p=f&t=kKqJIJzgsEeHWcXF-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2"
                                    imagem={spotify}
                                    titulo="Spotify"
                                    descricao="Loja virtual desenvolvida como freelance, focada na venda de produtos de limpeza. Criei o e-commerce utilizando WordPress e Elementor, com layout moderno, responsivo e otimizado para facilitar a navegação e conversão de vendas."
                                    tecnologias={["Figma", "UI/UX", "Prototype"]}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Cards
                                    rota="https://gustavolim4.github.io/lista-tarefeas/"
                                    imagem={ListaTarefas}
                                    titulo="Lista de Tarefas"
                                    descricao="Projeto de lista de tarefas feito com HTML, CSS e JavaScript puro. Armazena dados no navegador com localStorage, sem uso de banco de dados externo. A interface é simples, responsiva e focada na prática de conceitos fundamentais do front-end."
                                    tecnologias={["Html", "Css", "JavaScript", "Responsivo"]}
                                />
                            </SwiperSlide>
                        </Swiper>
                        {/* --- CARROSSEL 3 --- */}
                        <Swiper {...carouselSettings} style={{ padding: `17px 0px` }}>
                            <SwiperSlide>
                                <Cards
                                    rota="https://www.figma.com/proto/D4WzvpUAVDUjlkTyDXvYvC/Move?node-id=10-2&p=f&t=Hd2ZiOYRFOolGDfv-1&scaling=min-zoom&content-scaling=fixed&page-id=4%3A237&starting-point-node-id=10%3A2"
                                    imagem={Mova}
                                    titulo="Mova Mudanças"
                                    descricao="Protótipo desenvolvido durante um curso de UI/UX, com o objetivo de aprender e praticar conceitos de design e experiência do usuário. O projeto representa uma empresa de mudanças, criado como parte do aprendizado prático para aprimorar minhas habilidades em prototipagem."
                                    tecnologias={["Html", "Css", "Figma", "Designer UI/UX", "Prototype"]}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Cards
                                    rota="https://gustavolim4.github.io/Barbearia-Clien"
                                    imagem={cabeloCliente}
                                    titulo="Barbeiro cliente"
                                    descricao="Criei o protótipo no Figma e depois desenvolvi o layout em HTML e CSS para 
                                    treinar e fortalecer meus conhecimentos em estruturação e estilização de interfaces. 
                                    O projeto simula uma landing page moderna de barbearia."
                                    tecnologias={["Html", "Css", "Figma", "Designer UI/UX", "Prototype"]}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Cards
                                    rota="https://www.figma.com/proto/Dw0pJM6iQXn9jfL5BliMgp/Site-Elus?page-id=0%3A1&node-id=1-2&p=f&viewport=321%2C63%2C0.15&t=wtleEhnja18Mt5xT-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2"
                                    imagem={Elus}
                                    titulo="Grupo Elus"
                                    descricao="Projeto freelance criado como proposta de redesign para uma empresa onde desejo trabalhar.
                                    Desenvolvi um protótipo de refatoração do site atual, com foco em melhorar o visual,
                                    a navegação e a experiência do usuário."
                                    tecnologias={["Figma", "Designer UI/UX", "Prototype"]}
                                />
                            </SwiperSlide>
                        </Swiper>


                        {/* --- CARROSSEL 4--- */}
                        <Swiper {...carouselSettings} style={{ padding: `17px 0px` }}>
                            <SwiperSlide>
                                <Cards
                                    rota="https://gustavolim4.github.io/Valorante/"
                                    imagem={Vava}
                                    titulo="Login do Valorante"
                                    descricao="Projeto inspirado no jogo Valorant, criado para praticar HTML e CSS. Desenvolvi a tela de login com foco em aprimorar estruturação de layout, estilização e organização visual. Esse projeto foi feito de forma independente por gosto pessoal."
                                    tecnologias={["Html", "Css"]}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Cards
                                    rota="https://gustavolim4.github.io/cafeteria/"
                                    imagem={CafeDeOuro}
                                    titulo="Café do Ouro"
                                    descricao="Landing page criada em uma noite para testar componentes da biblioteca Uiverse.io. O projeto simula uma cafeteria fictícia, com foco em estilo visual, menus e animações. Foi uma ótima oportunidade para experimentar recursos prontos em HTML e CSS."
                                    tecnologias={["Html", "Css", "UIverse.io"]}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Cards
                                    rota="https://gustavolim4.github.io/Calculo-imc/"
                                    imagem={CalculoIMC}
                                    titulo="Calculo de IMC"
                                    descricao="Projeto desenvolvido para praticar estruturas condicionais com if e else em JavaScript. Calcula o IMC com base nos dados inseridos e exibe a classificação. Foi criado durante a faculdade como parte dos exercícios de lógica de programação."
                                    tecnologias={["Html", "Css", "JavaScript",]}
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                ) : (
                    // VERSÃO DESKTOP (SEU CÓDIGO ORIGINAL)
                    <div className="mx-100">
                        <div className="flex gap-5 w-full mb-5 justify-center">
                            <Cards
                                rota="https://flashclean.com.br"
                                imagem={FlashClean}
                                titulo="Flash Clean"
                                descricao="Loja virtual desenvolvida como freelance, 
                                 focada na venda de produtos de limpeza. Criei o e-commerce
                                 utilizando WordPress e Elementor, com layout moderno, responsivo e 
                                 otimizado para facilitar a navegação e conversão de vendas."
                                tecnologias={["Wordpress", "Elementor Pro", "WooCommerce", "CSS",]}
                            />
                            <Cards
                                rota=""
                                imagem={TechStore}
                                titulo="Tech Store"
                                descricao="Projeto acadêmico de e-commerce criado durante 
                                 a faculdade, com foco na venda de iPhones, notebooks e fones
                                 de ouvido. Desenvolvi todo o front-end com design responsivo e 
                                 navegação intuitiva. O projeto foi avaliado com nota máxima."
                                tecnologias={["Html", "Css", "Scss", "JavaScript", "Figma", "Designer UI/UX"]}
                            />
                            <Cards
                                rota=""
                                imagem={Athetic}
                                titulo="Athetic Force"
                                descricao="Sistema de academia criado como projeto prático em grupo 
                                 para aprendizado de novas tecnologias. Desenvolvemos uma plataforma com 
                                 foco em funcionalidades como cadastro de treinos, agenda e acompanhamento 
                                 do desempenho dos alunos."
                                tecnologias={["React", "TypeScript", "Redux", "graphql", " BootsTrap", "Figma"]}
                            />
                        </div>
                        <div className="flex gap-5 w-full mb-5 justify-center">
                            <Cards
                                rota="https://romacortinas.com.br"
                                imagem={RomaCortinas}
                                titulo="Roma Cortinas LTDA"
                                descricao="Projeto de sistema comercial desenvolvido para uma empresa de
                                 cortinas, focado na gestão de pedidos, clientes e produtos. Criei a 
                                 interface do sistema com um design simples, responsivo e otimizado. 
                                 O projeto está em produção e sendo utilizado ativamente."
                                tecnologias={["Wordpress", "Elementor Pro", "Responsivo", "CSS", "Figma"]}
                            />
                            <Cards
                                rota="https://www.figma.com/proto/6Y35Xplv0HfYKHeElJB11o/Spotify-Aula?node-id=2-4&p=f&t=kKqJIJzgsEeHWcXF-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2"
                                imagem={spotify}
                                titulo="Spotify"
                                descricao="Loja virtual desenvolvida como freelance, 
                                 focada na venda de produtos de limpeza. Criei o e-commerce
                                 utilizando WordPress e Elementor, com layout moderno, responsivo e 
                                 otimizado para facilitar a navegação e conversão de vendas."
                                tecnologias={["Figma", "Designer UI/UX", "Prototype"]}
                            />
                            <Cards
                                rota="https://gustavolim4.github.io/lista-tarefeas/"
                                imagem={ListaTarefas}
                                titulo="Lista de Tarefas"
                                descricao="Projeto de lista de tarefas feito com HTML, CSS e JavaScript puro.
                                 Armazena dados no navegador com localStorage, sem uso de banco de dados externo.
                                 A interface é simples, responsiva e focada na prática de conceitos fundamentais 
                                 do front-end."
                                tecnologias={["Html", "Css", "JavaScript", "Responsivo"]}
                            />
                        </div>
                        <div className="flex gap-5 w-full mb-5 justify-center ">
                            <Cards
                                rota="https://www.figma.com/proto/D4WzvpUAVDUjlkTyDXvYvC/Move?node-id=10-2&p=f&t=Hd2ZiOYRFOolGDfv-1&scaling=min-zoom&content-scaling=fixed&page-id=4%3A237&starting-point-node-id=10%3A2"
                                imagem={Mova}
                                titulo="Mova mudanças"
                                descricao="Protótipo desenvolvido durante um curso de UI/UX, com o objetivo de aprender
                                e praticar conceitos de design e experiência do usuário. 
                                O projeto representa uma empresa de mudanças, criado como parte do
                                 aprendizado prático para aprimorar minhas habilidades em prototipagem."
                                tecnologias={["Figma", "Designer UI/UX", "Prototype"]}
                            />
                            <Cards
                                rota="https://gustavolim4.github.io/Barbearia-Clien"
                                imagem={cabeloCliente}
                                titulo="Barbeiro cliente"
                                descricao="Criei o protótipo no Figma e depois desenvolvi o layout em HTML e CSS para 
                                treinar e fortalecer meus conhecimentos em estruturação e estilização de interfaces. 
                                O projeto simula uma landing page moderna de barbearia."
                                tecnologias={["Html", "Css", "Figma", "Designer UI/UX", "Prototype"]}
                            />
                            <Cards
                                rota="https://www.figma.com/proto/Dw0pJM6iQXn9jfL5BliMgp/Site-Elus?page-id=0%3A1&node-id=1-2&p=f&viewport=321%2C63%2C0.15&t=wtleEhnja18Mt5xT-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2"
                                imagem={Elus}
                                titulo="Grupo Elus instrumentação"
                                descricao="Projeto freelance criado como proposta de redesign para uma empresa onde desejo trabalhar.
                                Desenvolvi um protótipo de refatoração do site atual, com foco em melhorar o visual,
                                a navegação e a experiência do usuário."
                                tecnologias={["Figma", "Designer UI/UX", "Prototype"]}
                            />
                        </div>
                        <div className="flex gap-5 w-full justify-center ">
                            <Cards
                                rota="https://gustavolim4.github.io/Valorante/"
                                imagem={Vava}
                                titulo="Login do Valorante"
                                descricao="Projeto inspirado no jogo Valorant, criado para praticar HTML e CSS.
                                 Desenvolvi a tela de login com foco em aprimorar estruturação de layout, estilização 
                                 e organização visual. Esse projeto foi feito de forma independente por gosto pessoal."
                                tecnologias={["Html", "Css"]}
                            />
                            <Cards
                                rota="https://gustavolim4.github.io/cafeteria/"
                                imagem={CafeDeOuro}
                                titulo="Café do Ouro"
                                descricao="Landing page criada em uma noite para testar componentes da biblioteca 
                                 Uiverse.io. O projeto simula uma cafeteria fictícia, com foco em estilo visual, 
                                 menus e animações. Foi uma ótima oportunidade para experimentar recursos prontos 
                                 em HTML e CSS."
                                tecnologias={["Html", "Css", "UIverse.io"]}
                            />
                            <Cards
                                rota="https://gustavolim4.github.io/Calculo-imc/"
                                imagem={CalculoIMC}
                                titulo="Calculo de IMC"
                                descricao="Projeto desenvolvido para praticar estruturas condicionais 
                                 com if e else em JavaScript. Calcula o IMC com base nos dados inseridos
                                 e exibe a classificação. Foi criado durante a faculdade como parte dos 
                                 exercícios de lógica de programação."
                                tecnologias={["Html", "Css", "JavaScript",]}
                            />
                        </div>

                    </div>
                )}
            </div>
        </main>
    )
}

export default Projetos;
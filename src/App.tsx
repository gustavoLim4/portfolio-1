
import Aprecentacao from './components/Apresentacao/Apresentacao'
import Contato from './components/Contato/Contato'
import Estudo from './components/estudos/Estudo'
import Footer from './components/Footer/Footer'
import NavBar from './components/Navbar/NavBar'
import Projetos from './components/Projetos/Projetos'

import { Skills } from './components/skills/Skills'

export const App = () => {
  return (
    <main>
      <section>
        <NavBar />
      </section>
      <section id="home">
        <Aprecentacao />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="educacao">
        <Estudo />
      </section>
      <section id="projetos">
        <Projetos />
      </section>
      <section id="contato">
        <Contato />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  )
}


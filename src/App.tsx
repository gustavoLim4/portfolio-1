
import Aprecentacao  from './components/Apresentacao/Apresentacao'
import Estudo from './components/estudos/Estudo'
import NavBar from './components/Navbar/NavBar'

import { Skills } from './components/skills/Skills'

export const App = () => {
  return (
    <main>
      <section>
        <NavBar/>
      </section>
      <section>
        <Aprecentacao />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Estudo/>
      </section>
    </main>
  )
}


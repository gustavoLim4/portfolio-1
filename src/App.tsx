
import { Aprecentacao } from './components/Apresentacao/Apresentacao'
import NavBar from './components/NavBar/NavBar'
import { Skills } from './components/skills/Skills'

export const App = () => {
  return (
    <main>
      <section>
        <NavBar />
      </section>
      <section>
        <Aprecentacao />
      </section>
      <section>
        <Skills />
      </section>
    </main>
  )
}


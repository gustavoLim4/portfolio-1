
import {Aprecentacao}  from './components/Apresentacao/Apresentacao'
import NavBar from './components/NavBar/NavBar'

export const App = () => {
  return (
    <main>
      <section>
        <NavBar />
      </section>
      <section>
        <Aprecentacao />
      </section>
    </main>
  )
}


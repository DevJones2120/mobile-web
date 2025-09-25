import Header from "./componentes/Header"
import Banner from "./componentes/Banner"
import ImgCard from "./componentes/ImgCard"
import "./App.css"
import Button from "./componentes/Button"



function App() {

  return (
    <main className="container">

      <Header title ="Meu Site"/>

      <Banner>
        <h1>Bem vindo ao meu site</h1>
        <p>Aqui você encontra as melhores ofertas!</p>
      </Banner>

      <ImgCard caption="Uma imagem interessante" />

      <Button text="Clique aqui"/>

    </main>
  )
}

export default App

import { BrowserRouter, Routes, Router, Route } from "react-router-dom"
import Home from "./Home.jsx"
import Sobre from "./Sobre.jsx"
import Header from "./Header.jsx"
import Contato from "./Contato.jsx"
import Rodape from "./Rodape.jsx"

//TODO o BrowserRouter deve ser o componente pai  que envolve tudo

//TODO o Routers define a área em que vamos colocar os nosso Route

//TODO o Route recebe um caminho em Path, se esse caminho for o mesmo da URL ele irá renderizar o componente que estiver dentro de Element={}

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/contato" element={<Contato />} />
            </Routes>
            <Rodape/>
        </BrowserRouter>
    )
}

export default App
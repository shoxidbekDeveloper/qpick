import { Routes, Route } from "react-router-dom"

import Cards from './components/Cards/Cards'
import Footer from './components/Footer/Footer'
import Header from "./components/Header/Header"
import Hero from './components/Hero/Hero'
import CardsInner from "./Pages/Cards_Inner/Cards_Inner"
import Home from "./Pages/Home/Home"
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cards_inner" element={<CardsInner />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

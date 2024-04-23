import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import MainComponent from './MainComponent';
import Header from './components/Header';
import Footer from './components/Footer';
import MainComponent from './components/MainComponent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MainComponent />
      <Footer />
    </>
  )
}

export default App

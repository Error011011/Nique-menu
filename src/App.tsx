
import { useEffect } from 'react'
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Menu } from './components/Menu'
import { useMenuStore } from './store/store'


function App() {
  const getMenu = useMenuStore(state => state.getMenu)
  const menu = useMenuStore(state => state.menu)

  useEffect(() => {
      getMenu()   
      
  }, [])

  return (
    <>
      <Header/>
      <Menu/>
      <Footer/>
    </>
  )
}

export default App

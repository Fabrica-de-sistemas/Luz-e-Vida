import { Route, Routes, BrowserRouter } from 'react-router'
import Home from './pages/home'
import './app.css'
import Layout from './partials/layout'
import Doacoes from './pages/doacoes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Layout}>
          <Route index Component={Home} path="/Luz-e-Vida" />
          <Route path='/Luz-e-Vida/doacoes' Component={Doacoes} />
          <Route path='*' Component={() => <h1 className='font-black w-full text-center h-svw text-9xl'>Página não encontrada</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

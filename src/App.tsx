import { Route, Routes, BrowserRouter } from 'react-router'
import Home from './pages/home'
import './app.css'
import Layout from './partials/layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Layout}>
          <Route index Component={Home} path="/Luz-e-Vida"/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

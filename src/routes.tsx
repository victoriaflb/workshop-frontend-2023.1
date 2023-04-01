import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Episodios } from './pages/episodios/episodios'
import { Galeria } from './pages/galeria/galeria'
import { Inicio } from './pages/inicio/inicio'

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/galeria' element={<Galeria />} />
                <Route path='/episodios' element={<Episodios />} />
            </Routes>
        </BrowserRouter>
    )
}
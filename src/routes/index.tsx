import { Routes, Route, Navigate } from "react-router-dom"

export const AppRoutes = () => {
	return(
        <Routes>
            <Route path="/" element={<p>Página Inicial</p>}  />
            <Route path="*" element={<p> 404 - página não encontrada </p>}  />
            {/* Exemplo de redirecionamento:
            <Route path="*" element={<Navigate to="/pagina-inicial" />}  /> 
            */}
        </Routes>
    )
}
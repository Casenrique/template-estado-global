import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mercadinho from "../Pages/Mercadinho";
import Carrinho from "../Pages/Carrinho";
import Cadastro from "../Pages/Cadastro";
import frutaria from "../frutaria.json"

export default function Router() {
    
    const [carrinho, setCarrinho] = useState([])
    const [frutas, setFrutas] = useState(frutaria.frutaria);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Mercadinho 
                        carrinho={carrinho} 
                        setCarrinho={setCarrinho}
                        frutas={frutas}
                        setFrutas={setFrutas}
                        />}
                />
                <Route
                    path="/cart"
                    element={
                    <Carrinho 
                    carrinho={carrinho} 
                    setCarrinho={setCarrinho}
                    frutas={frutas}
                    />
                    }
                />
                <Route
                    path="/register"
                    element={
                    <Cadastro
                    frutas={frutas}
                    setFrutas={setFrutas}
                    />}
                />
            </Routes>
        </BrowserRouter>
    );
}
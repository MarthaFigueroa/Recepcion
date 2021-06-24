import React from 'react'
import { Link } from 'react-router-dom'

const addPrestamoButton = () => (
    
    <div>
        <Link to="/newPrestamo">Agregar Préstamo</Link>
        <br/>
        <Link to="/listPrestamos">Listar Préstamos</Link>
    </div>
)

export default addPrestamoButton;
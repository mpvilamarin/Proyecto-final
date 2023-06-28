import React from "react"
import { useParams } from "react-router-dom";



export default function Donacion() {

  const { fundacionId } = useParams();

  return (
    <div>
      <div><h1>Uniendo fuerzas por las mascotas: ¡Aporta tu granito de arena y ayuda a salvar vidas!</h1></div>

    </div>
  )
}
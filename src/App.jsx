
import "./App.css"
import { User }  from "./Componentes/User"

export const App = () => {
  return (
    <>
    <div className='circle'></div>

    <p style={{fontSize:"50px" , color:"black" , textDecoration:"underline"}}>Hola React</p>
    <p>hola JavaScript</p>
    <button>Enviar</button>
    
    <h1>Tarjeta de Usuario</h1>
    <User image="BART.jpeg" nombre="Rosalba"  estado="Viva"/>
    <User image="GWE.jpeg" nombre=" Marisol"  estado="Muerta"/>
    <User image="MR.jpeg" nombre="Alberto"  estado="Vivo"/>


    



    </>
  )
}



import Caption from "../components/atoms/Caption"
import Caption2 from "../components/atoms/Caption2"
import Datos from "../../datos.json"
import Image from "../Imagenes/Jonathan.jpg"
import Text from "../components/atoms/Text";

function Curriculum() {
    return ( 
        <>
        <div className="container">
            <div className="datosPersonales">

                <img className="imagen" src={Image} alt="Foto de Jonathan Jair Perez Mejia" /><br />
                <div  className="cuadro">
                    <Caption msn="Contacto"></Caption>
                    <Text dt={Datos.Ubicacion}></Text>
                    <Text dt={Datos.cel}></Text>
                    <Text dt={Datos.correo}></Text>
                </div>
                <div className="cuadro">
                    <Caption msn="Habilidades"></Caption>
                    <Text dt={Datos.habilidad01}></Text>
                    <Text dt={Datos.habilidad02}></Text>
                    <Text dt={Datos.habilidad03}></Text>
                    <Text dt={Datos.habilidad04}></Text>
                    <Text dt={Datos.habilidad05}></Text>
                </div>
                <div className="cuadro">
                    <Caption msn="Informacion adiccional"></Caption>
                    <Text dt={Datos.informacionAdicional}></Text>
                </div>
                
            </div>
            <div className="informacion">
                <h1 className="nombre"><span className="color">Proximamente Ing.<br /> {Datos.firtsName}</span> {Datos.name}</h1>
                <hr id="linea"/>

                <div className="cuadro">
                    <h2 className="subtitulo">Resumen Profesional</h2>
                    <Text dt={Datos.resumenProfesional}></Text>
                </div>
                
                <div className="cuadro">
                    <Caption2 msn="Formacion Basica"></Caption2>
                    <Text dt={Datos.formacion}></Text>
                </div>

                <div className="cuadro">
                    <Caption2 msn="Lenguajes Utilizados"></Caption2>
                    <Text dt={Datos.lenguaje1}></Text>
                    <Text dt={Datos.lenguaje2}></Text>
                    <Text dt={Datos.lenguaje3}></Text>
                    <Text dt={Datos.lenguaje4}></Text>
                    <Text dt={Datos.lenguaje5}></Text>
                </div>
            </div>
        </div>
        </>
    );
}

export default Curriculum;
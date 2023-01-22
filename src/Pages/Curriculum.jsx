import Caption from "../components/atoms/Caption"
import Datos from "../../datos.json"
import Image from "../Imagenes/Jonathan.jpg"
import CaptionText from "../components/atoms/CaptionText";

function Curriculum() {
    return ( 
        <>
        <div className="container">
            <div className="datosPersonales">
                <img className="imagen" src={Image} alt="Foto de Jonathan Jair Perez Mejia" /><br />
                <Caption msn="Contacto"></Caption>
                <p>{Datos.Ubicacion}</p>
                <p>{Datos.cel}</p>
                <p>{Datos.correo}</p>
                <Caption msn="Habilidades"></Caption>
                <p>{Datos.habilidad01}</p>
                <p>{Datos.habilidad02}</p>
                <p>{Datos.habilidad03}</p>
                <p>{Datos.habilidad04}</p>
                <p>{Datos.habilidad05}</p>
                <Caption msn="Informacion adiccional"></Caption>
                
            </div>
            <div className="informacion">
            </div>
        </div>
        </>
    );
}

export default Curriculum;
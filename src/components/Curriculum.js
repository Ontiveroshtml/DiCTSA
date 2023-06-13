import React from "react";
import PDF from '../assets/curriculum.pdf'
import './Curriculum.css'

function Curriculum() {
    return (
        <main>
            <div className="Curriculum">
                <div className="pdf">
                    <iframe title="Curriculum" src={PDF} width="650" height="530" frameborder="0"></iframe>
                </div>

                <div className="contenido">
                    <h1>¡Nuestro curriculum!</h1>
                    <p>
                        Si te interesa conocer más detalles sobre nuestra sólida trayectoria, te invitamos
                        cordialmente a revisar nuestro currículum. En él encontrarás un completo resumen de
                        nuestra amplia experiencia como destacada empresa constructora. Explorarás en detalle
                        los proyectos que hemos llevado a cabo, los logros que hemos alcanzado y las habilidades
                        y conocimientos que respaldan nuestro éxito. Te animamos a sumergirte en nuestro currículum
                        para descubrir la calidad y la excelencia que nos define como una empresa líder en el sector
                        de la construcción.
                    </p>

                    <button className="btn">
                        <a href={PDF} target="_blank" rel="noopener noreferrer" download="Curriculim_DiCTSA.pdf">
                            Descargar PDF
                        </a>
                    </button>
                </div>



            </div>
        </main>
    );
}

export default Curriculum;
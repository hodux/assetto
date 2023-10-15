import React from 'react';
import {useNavigate} from "react-router-dom";
export default function Presentation(){
    const navigate = useNavigate()
    function handleClick(event){
        event.preventDefault()
        navigate("/")

    }
    return(
        <div className="Container">
            <h2 className="title">Le blogue Asseto</h2>

            <p className="paragraphe">
                Afin de répondre à la question qui est de créer une solution innovante pour protéger les données sensibles
                contre les cyberattaques et assurer la confidentialité des données.
            </p>
            <p className="paragraphe">
                Nous avons décidé implanté notre solution dans un site web dont le but est protéger les données sensibles et
                leurs confidentialités avec des questions de sécurité. Les données sensibles dans ce cas-ci est le username et le password.
            </p>
            <button onClick={handleClick} className="btn btn-primary float-end button">Return</button>
        </div>
    )
}
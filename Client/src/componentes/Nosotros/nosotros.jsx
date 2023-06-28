import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import styles from "./nosotros.module.css";

export default function Nosotros() {

    const [flip, setFlip] = useState(false);

    const handleMouseEnter = () => {
        setFlip(true);
    };

    const handleMouseLeave = () => {
        setFlip(false);
    };

    return (
        <div className="container">
            <h2 className={styles.title} >Nuestro Equipo</h2>

            <h3>Back-End</h3>
            <div className={styles.backContainer}>

                <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
                    <div className={styles.content} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <div>
                            <img className={styles.image} src={require("../../assets/David.png")} alt="David" />
                            <p className={styles.name}>David</p>
                        </div>
                    </div>
                    <div className={styles.content} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <p className={styles.info}>Hola, soy estudiante Full Stack Developer en HENRY.</p>
                    </div>
                </ReactCardFlip>

                <div className={styles.content}>
                    <img className={styles.image} src={require("../../assets/Nahuel.png")} alt="Nahuel" />
                    <p className={styles.name} >Nahuel</p>
                    <p className={styles.info} >Hola, soy Nahuel, blablabla</p>

                </div>

                <div className={styles.content}>
                    <div className={styles.imageContainer}>
                        <img className={styles.image} src={require("../../assets/Santi.png")} alt="Santi" />
                        <p className={styles.name} >Santi</p>
                        <p className={styles.info} >Hola, soy Santi, blablabla</p>
                    </div>

                </div>
            </div>

            <h3 className={styles.sub} >Front-End</h3>
            <div className={styles.frontContainer}>


                <div className={styles.content}>
                    <img className={styles.image} src={require("../../assets/Mari.png")} alt="Mari" />
                    <p className={styles.name} >María</p>
                    <p className={styles.info} >Hola, soy María, blablabla</p>

                </div>
                <div className={styles.devCard}>
                    <div className={styles.content}>
                        <img className={styles.image} src={require("../../assets/Juan.png")} alt="Juan" />
                        <p className={styles.name} >Juan</p>
                        <p className={styles.info} >Hola, soy Juan, blablabla</p>
                    </div>
                </div>

                <div className={styles.content}>
                    <img className={styles.image} src={require("../../assets/Rami.png")} alt="Rami" />
                    <p className={styles.name} >Rami</p>
                    <p className={styles.info} >Hola, soy Rami, blablabla</p>

                </div>

                <div className={styles.content}>
                    <img className={styles.image} src={require("../../assets/Paula.png")} alt="Paula" />
                    <p className={styles.name} >Paula</p>
                    <p className={styles.info} >Hola, soy Paula, blablabla</p>
                </div>

            </div>
        </div>
    );
}

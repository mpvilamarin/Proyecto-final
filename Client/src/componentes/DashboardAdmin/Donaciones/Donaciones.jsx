import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDonaciones } from '../../../redux/Actions/get';
//import { Line } from "react-chartjs-2";
//import { Chart } from "chart.js";
import styles from './Donaciones.module.css';

const DonacionesHechas = () => {
    const dispatch = useDispatch();
    const donacionHecha = useSelector((state) => state.donacionHecha);


    useEffect(() => {
        dispatch(getDonaciones());
    }, [dispatch]);

    return (
        <div>
            <h1 className={styles.title}>Donaciones Hechas</h1>
            <div className={styles.container}>
                <div className={styles.aprobada}>
                    <h2 className={styles.sub}>Transacciones Aprobadas</h2>
                </div>
                <div className={styles.rechazada}>
                    <h2 className={styles.sub}>Transacciones Rechazadas</h2>
                    {donacionHecha.map((donacion) => (
                        <div key={donacion.id}>
                            <p className={styles.content}>ID: {donacion.id}</p>
                            <p className={styles.content}>Monto: {donacion.monto}</p>
                            <p className={styles.content}>Fecha: {donacion.fecha}</p>
                            <p className={styles.content}>Descripción: {donacion.descripcion}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default DonacionesHechas;
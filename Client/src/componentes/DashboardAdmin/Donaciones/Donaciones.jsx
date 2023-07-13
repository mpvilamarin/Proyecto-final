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
    <div className={styles.container}>
      <h1 className={styles.title}>Donaciones Hechas</h1>
      <div className={styles.contTrans}>
        {donacionHecha.map((donacion) => (
          <div key={donacion.id}>
            <p className={styles.content}>ID: {donacion.id}</p>
            <p className={styles.content}>Monto: {donacion.monto}</p>
            <p className={styles.content}>Fecha: {donacion.fecha}</p>
            <p className={styles.contentFinal}>Descripción: {donacion.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonacionesHechas;
import React, { useEffect, useState } from 'react';
import Chart, { CategoryScale } from 'chart.js/auto';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMascotas, getAllFundaciones, getAllUsuarios, getDonaciones } from '../../../redux/Actions/get';
import styles from './Graficos.module.css';
Chart.register(CategoryScale)

const Graficos = () => {
    const mascotas = useSelector((state) => state.mascotas);
    const fundaciones = useSelector((state) => state.fundaciones);
    const donaciones = useSelector((state) => state.donaciones);

    const dispatch = useDispatch();

    //Mascotas Creadas:
    useEffect(() => {
        dispatch(getAllMascotas());
    }, [dispatch]);

    const getChartDataMas = () => {
        const machos = mascotas.filter((mascota) => mascota.genero === 'Macho');
        const hembras = mascotas.filter((mascota) => mascota.genero === 'Hembra');
        const gatos = mascotas.filter((mascota) => mascota.especie === 'gato');
        const perros = mascotas.filter((mascota) => mascota.especie === 'perro');

        const pMachosCount = perros.length && machos.length;
        const pHembrasCount = perros.length && hembras.length;
        const gHembrasCount = gatos.length && hembras.length;
        const gMachosCount = gatos.length && machos.length;

        const data = {
            labels: ['Perrita Hembra', 'Perrito Macho', 'Gatita Hembra', 'Gatito Macho'],
            datasets: [
                {
                    label: 'Mascotas creadas',
                    data: [pHembrasCount, pMachosCount, gHembrasCount, gMachosCount],
                    backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0'],
                    borderWidth: 1,
                },
            ],
        };
        return data;
    };

    // Fundaciones creadas:
    useEffect(() => {
        dispatch(getAllFundaciones());
    }, [dispatch]);

    const getChartDataFun = () => {
        const fundacionesPorMes = Array(12).fill(0);

        fundaciones.forEach((fundacion) => {
            const mes = new Date(fundacion.fechaRegistro).getMonth();
            fundacionesPorMes[mes]++;
        });

        const data = {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            datasets: [
                {
                    label: 'Fundaciones Registradas',
                    data: fundacionesPorMes,
                    fill: false,
                    borderColor: '#36A2EB',
                },
            ],
        };

        return data;
    };

    // Mascotas castradas:
    const getChartDataCas = () => {
        const castrado = mascotas.filter((mascota) => mascota.castrado === 'castrado');
        const noCastrado = mascotas.filter((mascota) => mascota.castrado === 'no castrado');
        const perro = mascotas.filter((mascota) => mascota.especie === 'perro');
        const gato = mascotas.filter((mascota) => mascota.especie === 'gato');

        const perroCas = castrado.filter((mascota) => mascota.especie === 'perro').length;
        const gatoCas = castrado.filter((mascota) => mascota.especie === 'gato').length;
        const perroNo = noCastrado.filter((mascota) => mascota.especie === 'perro').length;
        const gatoNo = noCastrado.filter((mascota) => mascota.especie === 'gato').length;

        const data = {
            labels: ['Perritos Castrados', 'Gatitos Castrados', 'Perritos No Castrados', 'Gatitos No Castrados'],
            datasets: [
                {
                    label: 'Mascotas',
                    data: [perroCas, gatoCas, perroNo, gatoNo],
                    backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0'],
                    borderWidth: 1,
                },
            ],
        };

        return data;
    };
    // Mascotas Adoptadas:
    const getChartDataAdop = () => {
        const adoptado = mascotas.filter((mascota) => mascota.activo === 'false')
        const noAdoptado = mascotas.filter((mascota) => mascota.activo === 'true')
        console.log(adoptado);
        const data = {
            labels: ['Adoptado', 'No Adoptado'],
            datasets: [
                {
                    label: 'Mascotas Adoptadas',
                    data: [adoptado, noAdoptado],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)'
                    ],
                    hoverOffset: 4
                }
            ]
        }
        return data;
    }

    // Donaciones:
    const getChartDataDon = () => {
        const montosPorMes = {};
        const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

        donaciones.forEach((donacion) => {
            const fecha = new Date(donacion.fecha);
            const mes = fecha.getMonth() + 1;
            const monto = donacion.monto;

            const monthLabel = months[mes - 1];

            if (!montosPorMes[monthLabel]) {
                montosPorMes[monthLabel] = monto;
            } else {
                montosPorMes[monthLabel] += monto;
            }
        });

        const labels = Object.keys(montosPorMes);
        const data = Object.values(montosPorMes);

        const chartData = {
            labels: labels,
            datasets: [
                {
                    label: 'Donaciones por mes',
                    data: data,
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    borderWidth: 1,
                },
            ],
        };

        return chartData;
    };

    //Estilos gráfios:
    const options = {
        responsive: true,
        plugins: {
            legend: {
                labels: { font: { family: 'Arial', size: 14, }, color: '#000000' },
                title: { display: true, fontStyle: 'bold', color: 'black' }
            },
        },
        scales: {
            y: { ticks: { color: 'black' } },
            x: { ticks: { color: 'black' } },
        },
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Estadísticas</h1>
            <div className={styles.containerGraficos}>

                <div className={styles.mascotas}>
                    <h2 className={styles.sub}>Gráfico de Mascotas Creadas</h2>
                    <Bar data={getChartDataMas()} options={options} />
                </div>
                <div className={styles.castrados}>
                    <h2 className={styles.sub}>Gráfico de Mascotas Castradas</h2>
                    <Line options={options} data={getChartDataCas()} />
                </div>

                <div className={styles.adopciones}>
                    <h2 className={styles.sub}>Gráfico de Mascotas adoptadas</h2>
                    <Doughnut options={options} data={getChartDataAdop()} />
                </div>

                <div className={styles.fundaciones}>
                    <h2 className={styles.sub}>Gráfico de Fundaciones Registradas</h2>
                    <Bar options={options} data={getChartDataFun()} />
                </div>
                <div className={styles.donaciones}>
                    <h2 className={styles.sub}>Gráfico de Donaciones Recibidas</h2>
                    <Bar data={getChartDataDon()} />
                </div>
            </div>
        </div>
    );
};

export default Graficos;
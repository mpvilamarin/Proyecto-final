import kpo from "../../assets/kpo.jpg";
import kpo1 from "../../assets/kpo1.jpg";
import kpo2 from "../../assets/kpo2.jpg";
import styles from "../Nosotros/nosotros.module.css";
import { FaGithub } from 'react-icons/fa';

export default function Nosotros() {
    return (
        <section className={styles.headercontainer}>
            <div className={styles.sideleft}>
                <h1 className={styles.up}>Conoce a nuestro Staff</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident inventore magni doloribus distinctio expedita natus exercitationem rerum libero. Nostrum veritatis eos error asperiores a deserunt sunt architecto voluptatem fugiat et.</p>
            </div>
            <div className={styles.sideright}>
                <img src={kpo} alt="girl" />

            </div>

            <img className={styles.imagen} src={kpo1} alt="girl" />
            <div class="grid mb-8 mt-5  border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
                <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                    <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">"El éxito es, en gran medida, una combinación de suerte y trabajo duro"</h3>
                    </blockquote>
                    <figcaption class="flex items-center justify-center space-x-3">
                        <img class="rounded-full w-9 h-9" src={require("../../assets/Rami.png")} alt="Rami"/>
                        <div class="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Ramiro Andino</div>
                            <div class="text-sm font-light text-gray-500 dark:text-gray-400">Full Stack Developer</div>
                            <a href="https://github.com/ramiandino" target="_blank" rel="noreferrer" class="my-4 font-light"><FaGithub /> Ramiandino </a>
                            <br />
                        </div>
                    </figcaption>
                </figure>
                <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
                    <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">"Lo lindo del trabajo en equipo es que siempre tienes alguien a tu lado"</h3>
                    </blockquote>
                    <figcaption class="flex items-center justify-center space-x-3">
                        <img class="rounded-full w-9 h-9" src={require("../../assets/David.png")} alt="David"/>
                        <div class="space-y-0.5 font-medium dark:text-white text-left">
                            <div>David Orozco</div>
                            <div class="text-sm font-light text-gray-500 dark:text-gray-400">Full Stack Developer</div>
                            <a href="https://github.com/Dalejandro31" target="_blank" rel="noreferrer" class="my-4 font-light"><FaGithub /> Dalejandro31 </a>
                            <br />
                        </div>
                    </figcaption>
                </figure>
                <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
                    <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">"No importa de dónde vienes. Solo importa hacia dónde vas"</h3>
                    </blockquote>
                    <figcaption class="flex items-center justify-center space-x-3">
                        <img class="rounded-full w-9 h-9" src={require("../../assets/Santi.png")} alt="Santi"/>
                        <div class="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Santiago Marich</div>
                            <div class="text-sm font-light text-gray-500 dark:text-gray-400">Full Stack Developer</div>
                            <a href="https://github.com/SantiMarich" target="_blank" rel="noreferrer" class="my-4 font-light"><FaGithub /> SantiMarich </a>
                            <br />
                        </div>
                    </figcaption>
                </figure>
                <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
                    <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">"Todo comienza con una idea excelente y con trabajo en equipo"</h3>
                    </blockquote>
                    <figcaption class="flex items-center justify-center space-x-3">
                        <img class="rounded-full w-9 h-9" src={require("../../assets/Nahuel.png")} alt="Nahu"/>
                        <div class="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Nahuel Castilla</div>
                            <div class="text-sm font-light text-gray-500 dark:text-gray-400">Full Stack Developer</div>
                            <a href="https://github.com/nahuc22" target="_blank" rel="noreferrer" class="my-4 font-light"><FaGithub /> Nahuc22 </a>
                            <br />
                        </div>
                    </figcaption>
                </figure>
            </div>
            <div class="grid mb-8 mt-5 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
                <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                    <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">"El único camino es seguir adelante"</h3>
                    </blockquote>
                    <figcaption class="flex items-center justify-center space-x-3">
                        <img class="rounded-full w-9 h-9" src={require("../../assets/Juan.png")} alt="Juan"/>
                        <div class="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Juan Esteban Quintero</div>
                            <div class="text-sm font-light text-gray-500 dark:text-gray-400">Full Stack Developer</div>
                            <a href="https://github.com/JuaneXz" target="_blank" rel="noreferrer" class="my-4 font-light"><FaGithub /> JuaneXz </a>
                            <br />
                        </div>
                    </figcaption>
                </figure>
                <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
                    <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">"El trabajo en equipo es el secreto para que la gente común logre resultados extraordinarios"</h3>
                    </blockquote>
                    <figcaption class="flex items-center justify-center space-x-3">
                        <img class="rounded-full w-9 h-9" src={require("../../assets/Mari.png")} alt="Mari"/>
                        <div class="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Maria Victoria Salazar</div>
                            <div class="text-sm font-light text-gray-500 dark:text-gray-400">Full Stack Developer</div>
                            <a href="https://github.com/mvsalazarf" target="_blank" rel="noreferrer" class="my-4 font-light"><FaGithub /> Mvsalazarf </a>
                            <br />
                        </div>
                    </figcaption>
                </figure>
                <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
                    <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">"La clave para un liderazgo exitoso hoy en día es tener influencia, no autoridad"</h3>
                    </blockquote>
                    <figcaption class="flex items-center justify-center space-x-3">
                        <img class="rounded-full w-9 h-9" src={require("../../assets/Paula.png")} alt="Pau"/>
                        <div class="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Maria Paula Vilamarin</div>
                            <div class="text-sm font-light text-gray-500 dark:text-gray-400">Full Stack Developer</div>
                            <a href="https://github.com/mpvilamarin" target="_blank" rel="noreferrer" class="my-4 font-light"><FaGithub /> Mpvilamarin </a>
                            <br />
                        </div>
                    </figcaption>
                </figure>
            </div>
            <img className={styles.imagen2} src={kpo2} alt="girl" />
        </section>
    )
}

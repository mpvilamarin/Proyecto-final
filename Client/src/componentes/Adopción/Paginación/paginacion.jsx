import React from "react";
import { useEffect } from "react";
import styles from "./paginacion.module.css";

const Pagination = ({ petsPerPage, pets, currentPage, pagination }) => {
    const pageNumber = Math.ceil(pets / petsPerPage);

    const handlePrevClick = () => {
        if (currentPage > 1) {
            pagination(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < pageNumber) {
            pagination(currentPage + 1);
        }
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [currentPage]);

    const goToFirstPage = () => {
        pagination(1);
    };

    const goToLastPage = () => {
        pagination(pageNumber);
    };

    return (
        <nav className={styles.Pagination}>
            <ul className={styles.PageNumbers}>
                <li>
                    <button
                        className={styles.PageNumber}
                        type="button"
                        onClick={goToFirstPage}
                        disabled={currentPage === 1}
                    >
                        Primer página
                    </button>
                </li>
                <li>
                    <button
                        className={styles.PageNumber}
                        type="button"
                        onClick={handlePrevClick}
                        disabled={currentPage === 1}
                    >
                        Página anterior
                    </button>
                </li>
                <li>
                    <span className={styles.PageInfo}>
                        {currentPage} / {pageNumber}
                    </span>
                </li>
                <li>
                    <button
                        className={styles.PageNumber}
                        type="button"
                        onClick={handleNextClick}
                        disabled={currentPage === pageNumber}
                    >
                        Siguiente página
                    </button>
                </li>
                <li>
                    <button
                    className={styles.PageNumber}
                    type="button"
                    onClick={goToLastPage}
                    disabled={currentPage === pageNumber}
                    >
                        Última página
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
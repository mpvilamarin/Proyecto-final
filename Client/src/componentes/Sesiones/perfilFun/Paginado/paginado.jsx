import styles from './paginado.module.css'
import React from 'react'

export default function Pagination({ currentPage, elementsPerPage, totalElements, onPageChange }) {
    const totalPages = Math.ceil(totalElements / elementsPerPage);
    const pages = [...Array(totalPages).keys()].map(page => page + 1);  
    return (
        <div className={styles.divPagination}>
            {pages.map((page) => (
                <button key={page} onClick={() => onPageChange(page)} className={styles.pagePagination}>{page}</button>
            ))}
        </div>
    )
}
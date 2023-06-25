import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailFundacion, resetDetail } from "../../redux/Actions/get";

const DetailFundacion = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const fundacion = useSelector((state) => state.fundacionDetail);

  useEffect(() => {
    dispatch(getDetailFundacion(id));
    return () => {
      dispatch(resetDetail());
    };
  }, [dispatch, id]);

  return (
    <div>
      {!fundacion ? (
        <h3>LOADING...</h3>
      ) : (
        <div>
          {fundacion.image ? (
            <img src={fundacion.image} alt="Fundación" />
          ) : (
            <div>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUwAAACYCAMAAAC4aCDgAAAAq1BMVEX///8chrkAAAAAfrUAfLQAgLYNg7cAerPS4+4Kgrc9ksDI3epxqcx8sNDX5e92rc70+Pulx93u7u6ysrJ5eXmNjY1jo8mTk5MoKCj5+fkbGxvk5OTh7PPW1tZpaWlSUlKtra1eXl6hoaFBQUExMTEri7zKysqixdyNudVJSUmxzuG+1uaIttROmcO7u7txcXEAcq+CgoIfHx/q8vfQ0NA6OjoQEBBYnsZZWVn3mw2cAAAPrUlEQVR4nO2dfXuaPBTGxSREUCnalpWJe0csal/mNvf9P9mT5CQQIKC2duzak/sPqxBC8uPk5CQEOhhYWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZ/X2Kw75L8M9ollKMJ0Hfxfgjmq9WqzfMPvQRoamPn3bjNzzL36K74XDxdrnHDiEZb+XBOpps/vXm/mk4nL9h9r6X/usES8WvYTnKJr5DvPSwzRNziglx/z8sX6FNhBFh8lzP8wh21gaea4z2za1JPj34/m6SjS5YnOX1g6brOd+yqiVgn9fVjavrH+yzPG5Zy/X64bq6YfHp9vHm3UP5+7r8Pr++vbm5vS6MM26crJ49KNkihBHyo+l0OvERZkgJPtThbKnTIBxmDr8I7AK4HiLTi3Xyz8OKlnzLbz3Bl+F39sl26RX8PHxkn7+0A2/0hnoNORVa3qtkzzFsYV6yse+j7IPmtaPvh7eGgm92FNNdVoLab6Yecl2809mMU7RuHJphdii/BhOfMfU8utsY2Zyt2+H7r6W+LfiWD3qCL8NvAwFzGJcbPwxvBrwP/nYv9JPv1mzxG/v5Qc+C6fPz8+OvAtP18D3se8f3fXh+/sD/fhGbOMxhefTg4/BdvdT7tUdpOmu4wvEBM5wHRTjcbJrtfp/SNCuAJ7MdM2mUzox0ztTt8HNjSwvM+3KjglkAXH1XKJiWw+E7rU9h3++kWf94L2kqmDfD4VdphT/YJXnmXwRMrVR1mMnMf6JG98gU7LDj4ailL2IaPdU9QZgfKML46vUx6MkwWdMt66RgfirTfR4OfxR7vw7K1D8qZL6ChUuYzGa1JvwM5j0XJyuz1mAm+XpHqX/V1nFzsZbtuNjPoddJ9vW9pkPDzZVDn2g0Gyf7fTCODUlO0ckwF580T2aAOfg5/AVfGIwHbo5y+/vhTz0/MD+AyVLe6PseBWm2df5Oi+INzbxbeYoJwdTdHfyoZm5B3npUONrMsiybGTzDqToZ5nLwu/RkJpgLzpBLcJyrX6va4ObhM+/fAOZzxTeK09yKQxfs0nxXG9tgBvn2QMhubWieSb6dTK7WzdHO2wacZ8BkH6qfN8FkDR2yghb+QRrk4/Cj4bQAU/Oz6mRDCVMz2k7L3Oe7J7z9S4Lyc2AuC09mhHkNdvYAfc9SeoVfdWAy7Xthy7WRz0JyXIhsZCh6rJknLEhqxj99iMOMC8GWNpiDwpMZYS6BzU95ee5ELDqoBqhKAuZDvZVDaoDJO3pAfdxnZpQ0I/MzFLy0x6npthKzw5ZWmKwvhojGCBMgLFWv/kn0JnE1AFcSMItgsxQ3RwmTZQ+O4oQOaIxdekKkaBhWDjo7pTN1HsxYBuNGmNBqH4ueQ/jObpgGyyxhLmTceUpvnhAXRY2Ntd+BCWYyvdwc5+3w43xRiG95rsPk9qGQrCAUNML8wU0xLodCt4JV4foqEjBXDZgxN2sFk8PmLuKk0GjvuJ5THWTntTH3vmm7Ye5vj+d9spod0Dt9qMN/8t64sK9nYX5GmKIr/lKx9AfuQk0oBMx5w2rF9Shg8oFAfGqcGfueQ6el8wsP9QH3jn9Eu3U+YpH5Phnl2/RpetE4oAmz1i38FtzKat8N71pg3vGN1XmTr2LwXztBOQK6g3Zc6pE3gxLmQIxhTw3aJ8jx0BqacjB9qrP0uaGukesRxAaPlNIn/yIDck1NmPNK/xtDMy1hzrknM8F84Gn4x1wqfuBUFrV2DoE6wKzPsC+Ej9Bg8lH+6SOgnHXqhKaTqwN6Suv+MZqyjyBFFHOWZLd9g/sXTZis8N/KHzdgp1qDZJ7sx2MT5lyE9PcVH/GLJ/tcIbYEnyo78l/czEu9Fz81mNxrLH6fPJwMtw4m3Oz8xpzahKhvrImbe/XXywBzoc1MfJFxuu7dPgx/fWzAXIo5upoZfpFdUnnwUk4+SZgs/beC9OI7UNRhsqtzd3/O2Hw/zvNx0+aipz9xm9cAkzP4/sA92+p+WAwRta6CT0sCzC+yRa/4dOSisGOlWIwXOefHFc9vyfaDKaoQc8UnjEXWfB9EqBWY/FKcAzM0Nd7Qp9npWbxcJpjclxUz6LClAnNRwNR0P1fwNAHcxfsymQy7inhd33cHDCsweQd/Ksxks2beknqTWuS4IWhyWg6v1LNxHmL+CNX7Lacoa6E3M10+VNRQPoqE7yrT8YNyJunTN0j2WeVS3rYYXP+UPb+KT6swebhqum3Rpv2auU1fwxnsEGnE82+kuGVculitlq2pYBhfGdKXm5sJ+ZflarWo7NC+s33L2Lyvo4RtCnfIRd40D1gwOc587OGr8zKw0pUjAuEkQvz+48XG3v9TZQ6Gm+mIrC80JfR/VjCbRtHVRdcYWFlZWVlZWVlZWVn9TxWMuP65gVoiqvWnF9ukGCH09FbT/70p4tWibz4ETVKfKVWT/77rOA7uZb3Ulmv6NnlPeLXQS2GGQZIkxpUONSXUZcLqPD3CxHxhP32bvF8Hc/yEMaYnTOonyNHP0yNMwgvyd8LkjLwTGo2FeVwWZkUW5gVlYV5Qfwom76nwk4XZoZNh1mRhGmRhVmRhXlAW5gVlYV5QFuYF9adgjgKm4jRVmPFmHfmOk/rR+ugTseNssktZ2sN0Zlp/GvLzjMqHThL+Cg6/KEAQJB6HSQKp6uRjOF6L3FlBNnFLjkXO+fbAC72blE+f/ymYT4jPYKpfOsxRRPlbMtgG1yWE1h+k1TWaYOS5PKnDV1aRbaOOI34efJC/Nj4mrutymKEoAJMjJH8gfUXw5kAJ5M4yZwWBXWPK5yhrczlhlvLZJ1EQ10OuXJD0p2CKSmD1q4S532HX0eUhv2XJ88ivJXU8GtWm/wJRIFhPmfgI0guY2DEJF5dj46Bq7i6OQlVFt7qqcIu9WkGwePKiZ5g5rfHhJafGJ5WuDElZ2uoCaQ3mrEh/Asz4YNjv4rEJ5sjzmmnRLu4b5lpWga/e88oyEr9xfJgWe12ip0UHPVkJc1vSOQ4zKfPjeRN1GWjehJnRoiCeVhLXCXuFGWcY4ODddJ1l24io5uOltcP3nqyfR9MJS7uOXJW2Qr6AuUayvszhORzmEwVJiPIX+MwEqauI3YjnfsWcLdAcj2owi+tPsD+FkiBwnk6fML2cQgMpn7oJphQQeVXbDKHXcYiTFU4yWaNmWgVzJLJ2sZ+N92ElQhDHVEOjkMgLRcrXoIR5KraSmVeBmUmWyM+LQCDZCmfuRdP+YDq8mJ5b7b3DA1gJqbh8H7DhqoOMr2g9rYIJyXeGrswQZ6ZwpXCtHjlWhSxhwkVivqD62FUYYZW0L5jCqhqBpbz2WCsutFnXbURCG1pLCzAnOUdGjYvRmzC3YJi4EZPtHVXMAqbXVupZ4ZN7g+k1e5qCkFds2MsNhhHTCFfTSpg+r5Q5wmrATOQFMSQP6zC3Aqa3M+Sbq36pP5jGAU8mEpPixRmRSI2Nb37YCJpEtX8B00k5r5YXRTRgHsCLGscKErSCCVfVrfeOIGngvcFsW/wA9VPPfkIVSMsDyRNXN81A9cu47f1sdZgJeMaWV57MiA4TDNN8VYtK9QTTbXvyaw/mJn3eWlTIbA4qgESSnYLZmnUD5hTcYFvyVIeJurgrl9MTzLZLLGvoynAcitj6aJMwFwVPwWyfkarDJPp1a0p0ZRLmplqJhnZufzBdU+8DgrZHte+oPS3S9kuYpM16GjAD1J07FBxgikvcUdsN6g+m1/HcsWhdSHQKwjbcjiU4YLnQGUuYtH2qtAYzO5a78MkAUyuUUTHtD2ZL7CIk2i70OfC14wFGMe6QCQCme2hPXYN55R7JHa6lgEm7W7mqVi8wu6a7RRUgY9G1e9tZq0TkJLsFgNkFpwYTZgk6LmtQjM3Bn7T7JukHemrmHclH5VSaLxquR1oFsREUQrrAjpeR1WC63d2VjBYETJg/6lryN+sPZtc1FlbgipGGYRbTIFnJ4EiH24B5tOkOCpgb0Vq63gol2lMvMDs6cxZpCpgiBTkJppxdlyOgjpxrMI+ECrLkABM5HVHmQKX4W2EKyzRMax+B2dX/GC2zEyatwuyyzP5gdtpPgAsoMAYhuFsUAOr3gMyqwSTHmnlc+kzRzLveMdFfM++0h3EZ/olxBRmHxySOOxsmxI4dq/KTopkft/p1fzBxRxUyEVwK/3R1LM7UdTbMSOTecXt5XMSZcsagI++ov94cdbx4XwSXkGBGTj3H4AUwhTF1jD4hAQTt4BKOhV09jc07QjZhBGC6MBnTFZRqOhvmpnNKaiD9AMCMymFZ+8l7mzVqTQ1zNY52aMeQWNfZMGEGr30IBNMsAHN2BDxMd/YEk7TOdAhzUI1POE3XdKugqbNhQv/WfgTMPQNMcJrNe0VSMUyy9DXTjlqWaYEJqBsPo8r0b12Jv2Py9cnhs2BCO2+b85f3LeTkMExYtpnmtt+7ky21BgvwDtXUxDyA3nmu63qqjz0fphoUmFPLgkqYY5hGMcftgbqj3tcNNWxq6DHsK++IgWmaR0wZ9KCVG2rnwcxh1s7oRiZq7cuVXm5sitNCNVLr7765oVxyVZE+1IA6me4L57hqVy+AKdcgeIZofKtuzymYAbR6wx35MFVV6uuGGt9UbzNjtapI3yir5NQ73bWsXFH+l8CUftFr/HeaiMhClosQ1IKFepVHXjG51VOcuRNxW6r3LElE641cbFbrrSb65jEsB3K0f831EpjKvF261cdkM8HH25W3LYqS85UwunHuJ+CIdq+H6XhdExCyosbhJDQN5G03SRiH4m2V8gLX1wSM1GoA6mdjkXizdWQj1N+7+iKYRXP28C4b7cNwH+QTRKDxj8oREFesljYSwl+xGYf7cSbX69LxBRZudUrdNTPBDEPZODzEuSNStBXaiINGal0vXyTIU5PC4esDqZfBLBdzytyRXKHJ3HR9fWa5UNQTM1n8HZvQarJLLCl8OczB3jHNVnqeYUCyT83nopVx9QthGlcw89WOppXDB2NB+H8a6Rcmf0dIvRZu25sVMtycdCdOtegvhcli/0ZBPLHE27CmPa8vaefl4Nf/lTDFqze6pCJAzH8UdfD5QxAU5jF8SspquIS2/2u9cEuQVg2XIKc+6xDwAnW+cBl7ekE0bXxcdsmsDdPJvqhi7XXY8bpSEA95UI4J0V9Ecq6CaHJMstcTCYtKTsUvOaQJ1j5FiBCEKYny7ietNtMU0jLP5q+bxU7Eebru01QLUj147WOZOYrUf6WEKjYGF5srR6alafFfbDKR92v+T9NFlIzGY9ZLn572lFfWvET70zMPeUFGyT/3qisrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKyurF+o/TPomrc9qXbMAAAAASUVORK5CYII="></img>
            </div>
          )}
          <h2>Nombre: {fundacion.nombre}</h2>
          <h5>Ciudad: {fundacion.ciudad}</h5>
          <h5>Dirección: {fundacion.direccion}</h5>
          <h5>Teléfono: {fundacion.telefono}</h5>
          <h5>Email: {fundacion.email}</h5>
          <h5>Fecha de Fundación: {fundacion.fundadaEn}</h5>
          <h5>Misión: {fundacion.mision}</h5>

          <Link to="/home">
            <button>BACK TO HOME</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default DetailFundacion;

"use client"; 
import { useState } from "react";
import Image from "next/image"; 
import burger from "@/public/assets/shared/icon-hamburger.svg"; 
import close from "@/public/assets/shared/icon-close.svg"
import styles from "./ModalLinkList.module.css"
import Links from "./Links";

export default function ModalNavigation() {
    const [modalIsShown, setModalIsShown] = useState(false); 

    const showModalHandler= () => {
        setModalIsShown(true); 
    }

    const closeModalHandler = (e) => {
        console.log(e.target); 
        setModalIsShown(false); 
    }
    
    const stopPropagationHandler = (e) => {
        e.stopPropagation(); 
    }

    return (
        <>
            <div className={styles.burger} onClick={showModalHandler}><Image src={burger} alt="burger icon"/></div>
            <section className={`${styles.modal} ${modalIsShown ? styles.shown : ""}`} onClick={closeModalHandler}>
                <div onClick={stopPropagationHandler} className={styles["link-container"]}>
                    <div className={styles["close-modal"]} onClick={closeModalHandler}><Image src={close} alt="close icon"/></div>
                    <Links closeModalHandler={closeModalHandler}/>
                </div>
            </section>
        </>
    )
}
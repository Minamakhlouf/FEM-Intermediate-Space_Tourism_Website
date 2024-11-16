"use client"
import { useState, useEffect } from "react"; 
import { usePathname } from "next/navigation";
import data from "@/data.json"; 
import Image from "next/image";
import styles from "./DynamicDestination.module.css"; 
import { Barlow_Condensed, Barlow } from "next/font/google";

const barlowCondensed = Barlow_Condensed({
    subsets: ["latin"], 
    weight: ["400", "700"]
})

const barlow = Barlow({
    subsets: ["latin"], 
    weight: "400"
})

export default function DynamicDestination() {
    const [destination, setDestination] = useState(0);
    const [animate, setAnimate] = useState(false);  
    const path = usePathname(); 
    const pathString = path.slice(1).toLowerCase(); 
    const content = data[pathString][destination]

    useEffect(() => {
        setAnimate(true); 
        const timer = setTimeout(() => setAnimate(false), 500); 

        return () => clearTimeout(timer); 
    }, [destination])

    return (
        <section className={styles.page}>
            <div className={`${styles.image} ${animate ? styles["fade-in-down"] : ""}`}>
                <div className={styles["image-container"]}>
                    <Image src={content.images.png} fill alt={content.name}/>
                </div>
            </div>
            <div className={`${styles["text-container"]} ${animate ? styles["fade-in-down"] : ""}`}>
                <ul className={styles["link-container"]}>
                    {data[pathString].map((title, index) => {
                        return <li className={`${styles.link} ${destination === index ? styles.active : ""} ${barlowCondensed.className}`} key={title.name} onClick={() => {setDestination(index)}}>{title.name}</li>
                    })}
                </ul>
                <h2 className={styles.heading}>{content.name}</h2>
                <p className={`${styles.paragraph} ${barlow.className}`}>{content.description}</p>
                <div className={styles["fact-container"]}>
                    <div className={styles.fact}>
                        <p className={`${styles["fact-property"]} ${barlowCondensed.className}`}>AVG DISTANCE</p>
                        <p className={styles["fact-value"]}>{content.distance}</p>
                    </div>
                    <div className={styles.fact}>
                        <p className={`${styles["fact-property"]} ${barlowCondensed.className}`}>AVG TRAVEL TIME</p>
                        <p className={styles["fact-value"]}>{content.travel}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
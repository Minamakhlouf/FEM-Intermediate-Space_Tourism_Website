"use client"
import { useState, useEffect } from "react"; 
import { usePathname } from "next/navigation";
import data from "@/data.json"; 
import Image from "next/image";
import styles from "./DynamicCrew.module.css"; 
import { Barlow } from "next/font/google";

const barlow = Barlow({
    subsets: ["latin"],
    weight: "400"
})

export default function DynamicCrew() {
    const [destination, setDestination] = useState(0); 
    const [animate, setAnimate] = useState(false)
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
            <div className={`${styles["text-container"]} ${animate ? styles["fade-in-down"] : ""}`}>
                <h2 className={styles.heading}>
                    <span>{content.role}</span>
                    {content.name}
                </h2>
                <p className={`${styles.paragraph} ${barlow.className}`}>{content.bio}</p>
                <ul className={styles["link-container"]}>
                    {data[pathString].map((title, index) => {
                        return <li className={`${styles.link} ${destination === index ? styles.active : ""}`} key={title.name} onClick={() => {setDestination(index)}}></li>
                    })}
                </ul>

            </div>
            <div className={`${styles.image} ${animate ? styles["fade-in-down"] : ""}`}>
                <div className={styles["image-container"]}>
                    <Image src={content.images.png} fill alt={content.name}/>
                </div>
            </div>
        </section>
    )
}
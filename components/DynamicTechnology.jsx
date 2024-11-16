"use client"
import { useState, useEffect } from "react"; 
import { usePathname } from "next/navigation";
import data from "@/data.json"; 
import styles from "./DynamicTechnology.module.css"; 
import { Barlow } from "next/font/google";

const barlow = Barlow({
    subsets: ["latin"], 
    weight: "400"
})

export default function DynamicCrew() {
    const [destination, setDestination] = useState(0); 
    const [isDesktop, setIsDesktop] = useState(false); 
    const [animate, setAnimate] = useState(false); 
    const path = usePathname(); 
    const pathString = path.slice(1).toLowerCase(); 
    const content = data[pathString][destination]

    let backgroundClass; 

    if (destination === 0) {
        backgroundClass = "_launch-vehicle_portrait"; 
    } else if (destination === 1) {
        backgroundClass = "_spaceport"; 
        if (isDesktop) {
            backgroundClass += "_landscape"
        } else if (!isDesktop) {
            backgroundClass += "_portrait"
        }
    } else if (destination === 2) {
        backgroundClass = "_space-capsule"
        if (isDesktop) {
            backgroundClass += "_portrait"
        } else if (!isDesktop) {
            backgroundClass += "_landscape"
        }
    }

    useEffect(() => {
        setAnimate(true); 
        const timer = setTimeout(() => setAnimate(false), 500); 

        return () => clearTimeout(timer); 
    }, [destination])
    
    useEffect(() => {
        const viewportChangeHandler = () => {
            setIsDesktop(window.innerWidth > 1109); 
        }

        viewportChangeHandler(); 

        window.addEventListener("resize", viewportChangeHandler); 

        return () => window.removeEventListener("resize", viewportChangeHandler)
    }, [])

    return (
        <section className={styles.page}>
            <div className={`${styles.image} ${animate ? styles["fade-in-down"] : ""}`}>
                <div className={`${styles["image-container"]} ${styles[`image${backgroundClass}`]}`}>
                </div>
            </div>
            <div className={`${styles["text-container"]} ${animate ? styles["fade-in-down"] : ""}`}>
                <ul className={styles["link-container"]}>
                        {data[pathString].map((title, index) => {
                            return <li className={`${styles.link} ${destination === index ? styles.active : ""}`} key={title.name} onClick={() => {setDestination(index)}}>{index+1}</li>
                        })}
                </ul>
                <div>
                    <h2 className={styles.heading}>
                        <span>The Terminology...</span>
                        {content.name}
                    </h2>
                    <p className={`${styles.paragraph} ${barlow.className}`}>{content.description}</p>
                </div>
            </div>

        </section>
    )
}
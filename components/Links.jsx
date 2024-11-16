"use client"
import data from "/data.json"; 
import { usePathname } from "next/navigation";
import styles from "./Links.module.css"
import Link from "next/link"
import { Barlow_Condensed } from "next/font/google";

const barlowCondensed = Barlow_Condensed({
    subsets: ["latin"], 
    weight: ["400", "700"]
})

export default function Links({closeModalHandler}) {
    let propertyNames = Object.keys(data);
    let path = usePathname(); 

    return(
        <ul className={styles.links}>
            <Link onClick={closeModalHandler} href="/home" className={`${styles.link} ${path === "/home" ? styles.active : ""} ${barlowCondensed.className}`}> <span>00</span> HOME</Link>
            {propertyNames.map((property, index) => {
            return (
                <Link onClick={closeModalHandler} href={`/${property}`} className={`${styles.link} ${path === `/${property}` ? styles.active : ""} ${barlowCondensed.className}`} key={property}><span>0{index + 1}</span> {property.toUpperCase()}</Link>
            )
            })}
        </ul>
    )
}
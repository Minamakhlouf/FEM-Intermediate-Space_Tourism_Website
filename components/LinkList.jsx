"use client"
import data from "/data.json"; 
import { usePathname } from "next/navigation";
import styles from "./LinkList.module.css"; 
import Link from "next/link"
import { Barlow_Condensed } from "next/font/google";

const barlowCondensed = Barlow_Condensed({
    subsets: ["latin"], 
    weight: ["400", "700"]
})


export default function LinkList() {
    let propertyNames = Object.keys(data);
    let path = usePathname(); 

    return(
        <ul className={styles.links}>
            <Link href="/home" className={`${styles.link} ${path === "/home" ? styles.active : ""} ${barlowCondensed.className}`}> <span className={path === "/home" ? styles["hide-on-tablet"] : ""}>00</span> HOME</Link>
            {propertyNames.map((property, index) => {
            return (
                <Link href={`/${property}`} className={`${styles.link} ${path === `/${property}` ? styles.active : ""} ${barlowCondensed.className}`} key={property}><span>0{index + 1}</span> {property.toUpperCase()}</Link>
            )
            })}
        </ul>
    )
}
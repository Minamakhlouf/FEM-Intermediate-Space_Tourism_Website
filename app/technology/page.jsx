import styles from "./page.module.css"; 
import DynamicTechnology from "@/components/DynamicTechnology"; 
import { Barlow_Condensed } from "next/font/google";

const barlowCondensed = Barlow_Condensed({
    subsets: ["latin"], 
    weight: ["400", "700"]
})

export default function Destination() {
    return (
        <>
            <div className={styles.background}></div>
            <main className={styles.page}>
                <h1 className={`${styles.heading} ${barlowCondensed.className}`}><span>03</span> <span>SPACE LAUNCH 101</span></h1>
                <DynamicTechnology/>
            </main>
        </>
    )
}
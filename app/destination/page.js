import styles from "./page.module.css"; 
import DynamicDestination from "@/components/DynamicDestination";
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
                <h1 className={`${styles.heading} ${barlowCondensed.className}`}><span>01</span> Pick your Destination</h1>
                <DynamicDestination/>
            </main>
        </>
    )
}
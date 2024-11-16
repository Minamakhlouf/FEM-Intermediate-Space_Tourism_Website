import styles from "./page.module.css"; 
import DynamicCrew from "@/components/DynamicCrew"; 
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
                <h1 className={`${styles.heading} ${barlowCondensed.className}`}><span>02</span> <span>MEET YOUR CREW</span></h1>
                <DynamicCrew/>
            </main>
        </>
    )
}
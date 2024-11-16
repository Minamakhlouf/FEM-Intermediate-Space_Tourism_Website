import styles from "./page.module.css"; 
import Link from "next/link"; 
import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";

const barlow = Barlow({
    subsets: ["latin"], 
    weight: "400"
})

const barlowCondensed = Barlow_Condensed({
    subsets: ["latin"], 
    weight: "400"
})

const bellefair = Bellefair({
    subsets: ["latin"], 
    weight: "400"
})

export default function Home() {
    return (
        <>
            <div className={styles.background}></div>
            <main className={`${styles.main} ${styles["fade-in-down"]}`}>
                <div className={styles["flex-container"]}>
                    <div className={styles["text-container"]}>
                        <h1 className={styles.heading}><span className={barlowCondensed.className}>SO, YOU WANT TO TRAVEL TO</span> SPACE</h1>
                        <p className={`${styles.paragraph} ${barlow.className}`}>Let's face it; if you want to go space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
                    </div>
                    <div className={styles["button-container"]}>
                        <Link href="/destination">
                            <button className={`${styles.button} ${bellefair.className}`}>Explore</button>
                        </Link>   
                    </div>
                </div>
            </main>
        </>
    )
}
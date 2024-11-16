"use client"
import { usePathname } from "next/navigation";
import Link from "next/link"
import Image from "next/image";
import styles from "./Logo.module.css"

export default function Logo() {
    let path = usePathname(); 

    return (
        <Link href="/home">
            <div className={`${styles.circle} ${path === "/home" ? styles.disabled : ""}`}>
                <Image src={"/assets/shared/logo.svg"} alt="logo image" fill/>
            </div>
        </Link>
    )
}
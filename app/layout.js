import "./globals.css";
import styles from "./layout.module.css"
import data from "/data.json"; 
import { Bellefair } from "next/font/google"
import ModalNavigation from "@/components/ModalLinkList";
import LinkList from "@/components/LinkList";
import Logo from "@/components/Logo";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const bellefair = Bellefair({
  subsets: ["latin"], 
  weight: "400"
})

export default function RootLayout({ children }) {
  let propertyNames = Object.keys(data); 
  console.log(propertyNames)
  return (
    <html lang="en">
      <body className={`${bellefair.className} ${styles.body}`}>
        <nav className={styles.navigation}>
          <Logo/>
          <div className={styles["line-container"]}>
            <div className={styles.line}></div>
          </div>
          <LinkList/>
          <ModalNavigation/>
        </nav>
        {children}
      </body>
    </html>
  );
}

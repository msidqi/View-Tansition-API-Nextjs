"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useRef } from "react";

export default function Home() {
  const imageRef0 = useRef<HTMLImageElement>(null);
  const imageRef1 = useRef<HTMLImageElement>(null);
  const onClick = () => {
    document.startViewTransition(() => {
      if (imageRef0.current && imageRef1.current) {
        imageRef0.current.style.display =
          imageRef0.current.style.display === "none" ? "block" : "none";
        imageRef1.current.style.display =
          imageRef1.current.style.display === "block" ? "none" : "block";
      }
    });
  };

  return (
    <main className={styles.main}>
      <button type="button" onClick={onClick} className={styles.button}>
        Transition
      </button>

      <Image
        ref={imageRef0}
        src="/robot.png"
        alt="Robot image"
        className={styles.robotImage0}
        width={100}
        height={100}
        priority
      />

      <Image
        ref={imageRef1}
        src="/robot.png"
        alt="Robot image"
        className={styles.robotImage1}
        width={100}
        height={100}
        priority
      />
    </main>
  );
}

"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { flushSync } from "react-dom";
import { useRouter, useSearchParams } from "next/navigation";

export const images = ["robot", "nextjs", "reactjs"];

export default function ListPage() {
  const router = useRouter();
  const params = useSearchParams();
  const [currentItem, setCurrentItem] = useState<string | null>(() =>
    params.get("item")
  );
  const handleItemClick = (item: string) => {
    document.startViewTransition(() => {
      flushSync(() => {
        setCurrentItem(item);
        router.push(`/list/?item=${item}`);
      });
    });
  };

  return (
    <main className={styles.main}>
      {!currentItem && (
        <section className={styles.imageContainer}>
          {images.map((val) => (
            <button
              type="button"
              key={val}
              className={styles.itemContainer}
              onClick={() => handleItemClick(val)}
            >
              <Image
                style={{ viewTransitionName: `item-transition-${val}` }}
                src={`/${val}.png`}
                alt="item image"
                width={100}
                height={100}
                priority
              />
            </button>
          ))}
        </section>
      )}
      {currentItem && (
        <section className={styles.section}>
          <h1 className={styles.title}>{currentItem}</h1>
          <div className={styles.currentItemContainer}>
            <Image
              style={{ viewTransitionName: `item-transition-${currentItem}` }}
              src={`/${currentItem}.png`}
              alt="item image"
              width={300}
              height={300}
              priority
            />
          </div>
        </section>
      )}
    </main>
  );
}

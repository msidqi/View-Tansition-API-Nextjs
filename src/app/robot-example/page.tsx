"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useRef } from "react";
import Button from "@/components/NextButton";
import { useRouter } from "next/navigation";
import { flushSync } from "react-dom";

export default function Home() {
  const smallRobot = useRef<HTMLImageElement>(null);
  const bigRobot = useRef<HTMLImageElement>(null);
  const router = useRouter();
  const onClick = () => {
    document.startViewTransition(() => {
      if (smallRobot.current && bigRobot.current) {
        smallRobot.current.style.display =
          smallRobot.current.style.display === "none" ? "block" : "none";
        bigRobot.current.style.display =
          bigRobot.current.style.display === "block" ? "none" : "block";
      }
    });
  };

  const nextExample = () => {
    document.startViewTransition(() => {
      flushSync(() => {
        router.push("/list-example");
      });
    });
  };

  return (
    <main className={styles.main}>
      <Button onClick={onClick}>Transition</Button>

      <div className={styles.textContainer}>
        <p>
          - both robots have css property:{"\n"}{" "}
          <b>view-transition-name: robot-transition;</b>
        </p>
        <p>
          - <b>onClick</b>: toggles <b>display: hidden/block;</b> for both
          robots.
        </p>
        <p>
          - <b>View Transition API</b> takes screenshot of small and big robots
          and plays animation while pading between them.
        </p>
        <p>
          - <b>flushSync</b> is not required in this example.
        </p>
      </div>

      <Image
        ref={smallRobot}
        src="/robot.png"
        alt="Robot image"
        className={styles.smallRobotImage}
        width={100}
        height={100}
        priority
      />

      <Image
        ref={bigRobot}
        src="/robot.png"
        alt="Robot image"
        className={styles.bigRobotImage}
        width={100}
        height={100}
        priority
      />

      <Button onClick={nextExample}>{"Next Example >"}</Button>
    </main>
  );
}

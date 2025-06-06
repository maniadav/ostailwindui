"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import styles from "./theme-toggle.module.css";

export interface ThemeToggleProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ThemeToggle({ className, ...props }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only show the toggle once mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className={cn(styles.container, className)} {...props}>
      <label className={styles.switch}>
        <input 
          type="checkbox" 
          checked={theme === "dark"} 
          onChange={toggleTheme}
          aria-label="Toggle theme" 
        />
        <div className={styles.slider}>
          <div className={styles.sun}></div>
          <div className={styles.moon}></div>
          <div className={`${styles.cloud} ${styles.cloud1}`}></div>
          <div className={`${styles.cloud} ${styles.cloud2}`}></div>
          <div className={`${styles.star} ${styles.star1}`}></div>
          <div className={`${styles.star} ${styles.star2}`}></div>
          <div className={`${styles.star} ${styles.star3}`}></div>
          <div className={`${styles.star} ${styles.star4}`}></div>
          <div className={`${styles.star} ${styles.star5}`}></div>
        </div>
      </label>
    </div>
  );
}

import Link from "next/link";
import styles from "../styles.module.css";

export default function Page() {
  return (
    <div className={styles.centerContainer}>
      <h1 className={styles.heading}>Contacts coming soon...</h1>
      <Link className={styles.backLink} href="/">
        Go back to home
      </Link>
    </div>
  );
}

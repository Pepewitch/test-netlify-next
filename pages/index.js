import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Link href="/[ssr]" as={`/${Math.random()}`}>
        <a>
          <button>to ssr</button>
        </a>
      </Link>
    </div>
  );
}

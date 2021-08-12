/* eslint-disable react/no-unknown-property */
import styles from "../styles/Home.module.css";
import ClientOnly from "../components/ClientOnly";
import Countries from "../components/Countries";

export default function ClientSide() {
  return (
    <div>

      <main className={styles.main}>
        <ClientOnly>
          <Countries />
        </ClientOnly>
      </main>
    </div>
  );
}
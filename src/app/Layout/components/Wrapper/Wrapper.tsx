import styles from './styles.module.scss';

export function Wrapper({ children }: { children: React.ReactNode }) {
  const BLURE_SIDE = <div className={styles.blur} />;

  return (
    <main className={styles.wrapper}>
      {BLURE_SIDE}
      <section className={styles.wrapper__section}>{children}</section>
      {BLURE_SIDE}
    </main>
  );
}

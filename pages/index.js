import Head from "next/head"
import styles from "../styles/Home.module.css"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>
        <title>Shiba-Inu | Home</title>
        <meta name='keywords' content='shiba-inu' />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
        <p className={styles.text}>
          iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
        <Link href='/shiba-inu'>
          <a className={styles.btn}>See Shiba-Inu Listing</a>
        </Link>
      </div>
    </>
  )
}

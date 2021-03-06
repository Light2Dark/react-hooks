import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ReactHooks from "./react-hooks"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Electro</title>
        <meta name="description" content="Your electric vehicle options in Malaysia" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin = "true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;700;800&display=swap" rel="stylesheet" />
      </Head>

      <main className='p-4'>
        <ReactHooks />
      </main>

      <footer>

      </footer>
    </>
  )
}

export default Home

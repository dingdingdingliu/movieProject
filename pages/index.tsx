import type { NextPage } from 'next'
import { useState } from "react"
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from '@mui/material'
import ColorSlider from '../components/slider'

const Home: NextPage = () => {
	const [value, setValue] = useState<number>(0)
  return (
    <div className={styles.container}>
      <Head>
        <title>W Movie</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Button variant='contained'>加入片單</Button>
        <br />
        <Button variant='outlined'>更多資訊</Button>
				<ColorSlider value={value} setValue={setValue}/>
      </main>
    </div>
  )
}

export default Home

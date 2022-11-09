import { useState } from "react"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button } from '@mui/material'
import ColorSlider from '../components/slider'
import { NextPageWithLayout } from "next";
import Layout from '../components/layout/default'


const Home: NextPageWithLayout = () => {
	const [value, setValue] = useState<number>(0)
  return (
    <div className={styles.container}>
      <Head>
        <title>有影 W Movie</title>
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


Home.getLayout = function getLayout(page: NextPageWithLayout) {
  return (
    <>    
    <Layout>
    {page}
  </Layout>
  </>

  )
}

export default Home

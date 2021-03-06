import Head from 'next/head'
import styles from '../styles/pages/Home.module.css'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { CompletedChallengs } from '../components/CompletedChallengs'
import { Countdown } from '../components/Countdown'
import { ChallengeBox } from '../components/ChallengeBox'
import { CountdownProvider } from '../contexts/CountdownContext'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallengs />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}

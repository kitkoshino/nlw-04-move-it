import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenge } from '../components/CompletedChallenge';
import { Countdown } from '../components/CountDown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';
import styles from '../styles/pages/Home.module.scss';

interface homeProps {
  level: number;
  currentExperience: number;
  challengesCompleted}

export default function Home(props: homeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengeCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>
        <ExperienceBar />
        {/*CountdownProvider fica aqui e não em _app pois a informação não precisa ficar disponível em todas as páginas */}
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenge />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

// função do Next, rodando no "backend", servidor Node e repassa como props para o componente
export const getServerSideProps: GetServerSideProps = async (ctx) => {

  //busca de informações que foram armazenadas no cookie em ChallengesContext
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  };
};

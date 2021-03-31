import Head from 'next/head';
import Header from '../components/Header';
import Headline from '../components/Headline';
import Article from './../components/Article';



export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header pagename="WELCOME TO MY500!" />

        <Headline headlinetext="Bigger, Better, Faster, Stronger" />


        <Article 
          type="Read" 
          words="467 words" 
          date="June 2018" 
          link="" 
          action="Read more" 
          description="Times are changing fast and whilst some of us were simply born into this meteoric times there are others who were not. How do our grandparents feel about change? "
        />

        
      </main>
    </div>
  )
}

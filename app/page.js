import Link from 'next/link';

import bgImg from './assets/bg-image.jpg'
import classes from './page.module.css';

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div>
          <div className={classes.hero}>
            <h1>NextJS Food for Real Foodies</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main className={classes.bgImage}>
        <section className={classes.section}>
          <h2>How it works?</h2>
          <p className={classes.firstP}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextJS Food?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat.
          </p>
        </section>
      </main>
    </>
  );
}

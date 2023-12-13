import { unstable_noStore as noStore } from 'next/cache';
import { ClientComponent } from './components/Client';
import styles from './page.module.css';

const publicEnv = process.env.NEXT_PUBLIC_TEST;
const notPublicEnv = process.env.TEST;
const globalNotPublicEnv = global.process.env.TEST;

export default function Home() {
    noStore();
    // noStore() forces the component to be rendered on the server
    return (
        <main className={styles.main}>
            <div>
                <h1>This is a React Server Component</h1>
                <h2>Using process.env</h2>
                <p>
                    <code>NEXT_PUBLIC_TEST</code> is {publicEnv}
                    <span></span>
                </p>
                <p>
                    <code>TEST</code> is {notPublicEnv}
                </p>
                <h2>Using global.process.env</h2>
                <p>
                    <code>TEST</code> is {globalNotPublicEnv}
                </p>
            </div>
            <ClientComponent propEnv={notPublicEnv} globalPropEnv={globalNotPublicEnv} />
        </main>
    );
}

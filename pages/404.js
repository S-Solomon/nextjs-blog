import Link from 'next/link'
import styles from '../components/layout.module.css'





export default function Custom404() {
    return (
        <>
        <h1>404 - Page Not Found</h1>
        <p>oops lookd like you're lost in space</p>
        <div className={styles.backToHome}>
            <Link href="/">
                <a>← Back to home</a>
            </Link>
        </div>
        </>
    )
}



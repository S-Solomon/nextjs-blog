import Link from 'next/link' ;
import Head from 'next/head' ;
import Layout from '../../components/layout' ;



export default function FirstPost() {
    return (
        <>
            <Layout>
                <Head>
                    <title>First Post</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <h1>First Post</h1>
                <h2>
                    <Link href="/">
                        <a>Back to home</a>
                    </Link>
                </h2>
            </Layout>
        </>
    )
}
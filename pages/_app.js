import '../styles/global.css'


export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}



// In Next.js, you can add global CSS files by importing them from pages/_app.js. 
// You cannot import global CSS anywhere else.

// Important: You need to restart the development server when you add pages/_app.js. 
// Press Ctrl + c to stop the server and run:
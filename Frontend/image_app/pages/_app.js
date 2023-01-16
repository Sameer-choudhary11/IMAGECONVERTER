import '../styles/globals.css';
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  return (<>
  <Component {...pageProps} />
  <Script src="https://code.jquery.com/jquery-3.6.2.min.js" integrity="sha256-2krYZKh//PcchRtd+H+VyyQoZ/e3EcrkxhM8ycwASPA=" crossOrigin="anonymous"/>
   
  </>)
  
}

export default MyApp

import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
export default function Document() {
  return (    
    <Html lang="en">
      <Head >      
        {/* Google Adsense Script */}
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3868969444067988"  crossOrigin="anonymous"/>                   
        {/* Bootstrap latest version */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"/>                
      </Head >
        <meta charSet="UTF-8" />
        <meta name="description" content="Image converter - easy, free and fast! Convert images to JPG, PNG, WEBP, PDF etc. Works on iOS, MacOS, Android and Windows."/>
        <meta name="keywords" content="image to pdf,png to pdf,jpeg to jpg,jpg to pdf,photo resizer,image resizer,compress pdf,online file converter, convert files online, online converter,image converter, online image converter, convert image format online, photo converter, convert images, JPG to PNG, JPG to PDF, JPG to WEBP, HEIF to JPG, PNG to WEBP, TIFF to PDF, convert photos online, convert image to jpg, image converter to jpg, change image format online,PNG, PDF, WebP, and more online. No software to install and free"/>
        <meta name="author" content="SAMEER"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>ImageConvert</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
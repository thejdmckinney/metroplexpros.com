import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://embed.tawk.to" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://embed.tawk.to" />
        
        {/* Google tag (gtag.js) - Deferred for better performance */}
        <script 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=G-KMX9NEE54X"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KMX9NEE54X');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        
        {/* Tawk.to Live Chat Widget - Lazy loaded after page interactive */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              // Delay Tawk.to loading until page is interactive
              window.addEventListener('load', function() {
                setTimeout(function() {
                  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                  (function(){
                  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                  s1.async=true;
                  s1.src='https://embed.tawk.to/6933eff1dc2f61197c66de83/1jbpe2i4c';
                  s1.charset='UTF-8';
                  s1.setAttribute('crossorigin','*');
                  s0.parentNode.insertBefore(s1,s0);
                  })();
                }, 3000); // Delay 3 seconds after page load
              });
            `,
          }}
        />
      </body>
    </Html>
  )
}

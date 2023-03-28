import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          crossOrigin="anonymous"
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
          integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg=="
        />
        <script
          crossOrigin="anonymous"
          src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js"
          integrity="sha512-90vH1Z83AJY9DmlWa8WkjkV79yfS2n2Oxhsi2dZbIv0nC4E6m5AbH8Nh156kkM7JePmqD6tcZsfad1ueoaovww=="
        ></script>
        <script
          crossOrigin="anonymous"
          src="https://cdnjs.cloudflare.com/ajax/libs/async/3.2.0/async.min.js"
          integrity="sha512-6K6+H87tLdCWvY5ml9ZQXLRlPlDEt8uXmtELhuJRgFyEDv6JvndWHg3jadJuBVGPEhhA2AAt+ROMC2V7EvTIWw=="
        ></script>
        <script src="https://cdn.roboflow.com/0.2.22/roboflow.js"></script>
        <title>Smentry</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

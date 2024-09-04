import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Deskripsi Halaman" />
        <meta name="keywords" content="kata kunci 1, kata kunci 2, kata kunci 3" />
        <meta name="author" content="Nama Penulis" />
        <meta property="og:title" content="Judul untuk Open Graph" />
        <meta property="og:description" content="Deskripsi untuk Open Graph" />
        <meta property="og:image" content="url-gambar.jpg" />
        <meta property="og:url" content="https://contoh.com/halaman" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Judul untuk Twitter" />
        <meta name="twitter:description" content="Deskripsi untuk Twitter" />
        <meta name="twitter:image" content="url-gambar-twitter.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

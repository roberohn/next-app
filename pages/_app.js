import Link from "next/link";

const myApp = ({ Component, pageProps }) => {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Component {...pageProps} />
      <footer>John Roberts was here!</footer>
    </>
  );
};

export default myApp;

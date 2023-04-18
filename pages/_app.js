import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="max-w-[1200px] mx-auto">
      <Component {...pageProps} />
    </div>
  );
}

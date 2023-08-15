import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  // return <Component {...pageProps} />
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
    // <Provider store={store}>
    // <LoadingPage />

    <Layout>
      {/* <ToastContainer /> */}
      <Component {...pageProps} />
    </Layout>
    // </Provider>
  );
}

App.getInitialProps = async ({ Component, router, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

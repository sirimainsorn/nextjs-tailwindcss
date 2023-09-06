import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>)

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

App.getInitialProps = async ({ Component, router, ctx }) => {
  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return { pageProps }
}

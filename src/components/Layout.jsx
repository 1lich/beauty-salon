import Head from "./Head"
import Header from "./header/Header"
import Footer from "./footer/Footer"

const Layout = (title, children) => {
  return (
    <>
      <Head title={title} />
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout

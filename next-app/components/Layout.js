import Head from "next/head";
import NavbarMenu from "./NavbarMenu";
import { Container } from 'react-bootstrap'

const Layout = ({ children }) => (
  <Container>
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My Next App</title>
    </Head>

    <header>
        <NavbarMenu />
    </header>
    <main>{children}</main>
  </Container>
);

export default Layout;

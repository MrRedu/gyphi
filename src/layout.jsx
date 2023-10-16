import ProTypes from "prop-types";

import { Header } from "./components/organisms/ui/header/Header";
import { Footer } from "./components/organisms/ui/footer/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: ProTypes.node.isRequired,
};

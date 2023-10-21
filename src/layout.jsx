import ProTypes from "prop-types";

import { Header } from "./components/organisms/ui/header/Header";
import { Footer } from "./components/organisms/ui/footer/Footer";
import { SearchBar } from "./components/molecules/SearchBar/SearchBar";

export const Layout = ({ addCategory, children }) => {
  return (
    <>
      <Header>
        <SearchBar addCategory={addCategory} />
      </Header>
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  addCategory: ProTypes.func,
  children: ProTypes.node.isRequired,
};

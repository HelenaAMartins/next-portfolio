import Footer from "../Footer";
import MainNav from "../MainNav";

const Layout = ({ children }) => (
  <>
    <MainNav />
    {children}
    <Footer />
  </>
);

export default Layout;

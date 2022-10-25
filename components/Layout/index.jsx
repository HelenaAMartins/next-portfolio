import Footer from "../Footer";
import MainNav from "../MainNav";
import Modal from "../Modal";

const Layout = ({ children }) => (
  <>
    <Modal />
    <MainNav />
    {children}
    <Footer/>
  </>
);

export default Layout;

import Head from "./head";
import Foot from "./foot";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Head />
      {children}
      <Foot />
    </div>
  );
};

export default Layout;

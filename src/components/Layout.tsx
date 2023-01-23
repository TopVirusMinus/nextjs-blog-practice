import React from "react";
import Link from "next/link";
import Header from "./Header";

interface Prop {
  children: any;
  home?: any;
}

const Layout: React.FC<Prop> = ({ children, home }) => {
  return (
    <div className="w-4/5 m-auto ">
      <Header />
      <main>{children}</main>
      {!home && (
        <Link className="text-sky-500" href="/">
          ← Back to home
        </Link>
      )}
    </div>
  );
};

export default Layout;

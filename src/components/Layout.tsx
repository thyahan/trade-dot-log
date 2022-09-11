import dynamic from "next/dynamic";
import Head from "next/head";
import { FC, ReactNode } from "react";

const SideMenu = dynamic(() => import("components/SideMenu"), { ssr: false });

type Props = {
  head?: {
    title?: string;
    description?: string;
  };
  children: ReactNode;
};

const Layout: FC<Props> = ({ children, head }) => {
  return (
    <div>
      <Head>
        <title>{head?.title || "trade dotlog"}</title>
        <meta name="description" content={head?.description || "trade dotlog"} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-8xl mx-auto h-screen flex items-stretch gap-4 p-4">
        <div className="rounded-lg h-full bg-gradient-to-r from-slate-700 to bg-slate-600">
          <SideMenu />
        </div>
        <main className="w-full p-4 rounded-lg bg-slate-600 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;

// reference: https://ithelp.ithome.com.tw/articles/10279168?sc=iThelpR
import { NextPageWithLayout } from "next";
import { AppProps } from "next/app";

declare module "next" {
  type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
  };
}

declare module "next/app" {
  type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
  };
}
import store from "@/app/store";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;
  return (
    <ThemeProvider attribute="class">
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
}

const EmptyLayout = ({ children }) => <>{children}</>;

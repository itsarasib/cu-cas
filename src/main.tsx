import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./routes/AppRouter.tsx";
import Navbar from "./components/Navbar.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/index.ts";
import { persistor, store } from "./store/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider theme={theme}>
          <Navbar />
          <AppRouter />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

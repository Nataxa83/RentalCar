import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";

import "./index.css";

console.log("Файл index.js загружен! 🚀"); 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter
    future={{
      v7_relativeSplatPath: true,
      v7_startTransition: true,
    }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>     
);

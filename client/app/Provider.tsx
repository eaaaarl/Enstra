"use client";

import store from "@/lib/redux/store";
import React, { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const persistor = persistStore(store);

function Provider({ children }: { children: ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {children}
      </PersistGate>
    </ReduxProvider>
  );
}

export default Provider;

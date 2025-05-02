import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "@/lib/redux/store";

interface ProvidersProps {
  children: ReactNode;
}

const persistor = persistStore(store);

function Providers({ children }: ProvidersProps) {
  return (
    <BrowserRouter>
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          {children}
        </PersistGate>
      </ReduxProvider>
    </BrowserRouter>
  );
}

export default Providers;

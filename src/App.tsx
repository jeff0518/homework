import { BrowserRouter } from "react-router-dom";

import Root from "./routes/root";
import { UserProgressContextProvider } from "./context/UserProgressContext";
import { RecordFakeDataContextProvider } from "./context/recordFakeData";
import { PreviewContextProvider } from "./context/previewContext";
import "../src/styles/globals.scss";

function App() {
  return (
    <BrowserRouter>
      <PreviewContextProvider>
        <RecordFakeDataContextProvider>
          <UserProgressContextProvider>
            <Root />
          </UserProgressContextProvider>
        </RecordFakeDataContextProvider>
      </PreviewContextProvider>
    </BrowserRouter>
  );
}

export default App;

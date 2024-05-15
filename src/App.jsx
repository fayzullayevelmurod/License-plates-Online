import { Header } from "./components";
import { Footer } from "./components/Footer";
import { AppRoutes } from "./routes";

function App() {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;

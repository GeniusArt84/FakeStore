import { Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Cart from "./pages/Cart";
import { readCartLocalStorage } from "./redux/cartSlice";

store.dispatch(readCartLocalStorage());

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <main className="min-h-screen min-w-screen bg-gray-100 flex flex-col">
          <Navbar />
          <div className="w-full flex justify-center">
            <div className="container flex text-white p-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </div>
          </div>
        </main>
      </HashRouter>
    </Provider>
  );
}

export default App;

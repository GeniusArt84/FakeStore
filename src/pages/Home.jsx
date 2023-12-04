import { useEffect } from "react";
import { useFakestoreApi } from "../hooks/useFakestoreApi";
import ProductItem from "../components/ProductItem";

const Home = () => {
  const { data: products, loading, error, getProducts } = useFakestoreApi();

  useEffect(() => {
    getProducts();
  },[]);

  return (
    <div className="text-black">
      <h1>Home</h1>
        {loading ? <span>Cargando...</span> : null}
        {error ? <span>Hubo un error</span> : null}
        {products ? (
          <div className="productos">
            {products.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))}
          </div>
        ) : null}
    </div>
  );
};

export default Home;

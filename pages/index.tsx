import Footer from "../components/Footer";
import Header from "../components/Header";
import { IProduct } from "../components/Product";
import ProductList from "../components/ProductList";

interface IIndexProps {
  products: IProduct[];
}

const Index = (props: IIndexProps) => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <ProductList products={props.products} />
      </main>
      <Footer />
    </div>
  );
};

Index.getInitialProps = async ({ req }) => {
  return {
    products: [
      {
        id: "nextjs_halfmoon",
        name: "Halfmoon Betta",
        price: 25.0,
        image: "../static/halfmoon.jpg",
        description:
          "The Halfmoon betta is arguably one of the prettiest betta species. It is recognized by its large tail that can flare up to 180 degrees.",
      } as IProduct,
    ],
  };
};

export default Index;

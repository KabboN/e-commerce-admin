import productsData from '../../../data/productsdata.json'; 

const ProductPage = ({ product }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-center">
          <img src={product.image} alt={product.name} className="w-32 h-32 object-contain" />
        </div>
        <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
        <p className="text-gray-500">{product.description}</p>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const products = productsData;
  const paths = products.map((product) => ({
    params: { id: product.id.toString() }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const products = productsData;
  const product = products.find((product) => product.id.toString() === params.id);

  return { props: { product } };
}

export default ProductPage;

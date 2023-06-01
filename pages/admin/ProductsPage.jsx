import productsData from '../../data/productsdata.json'; 
import Link from 'next/link';

const ProductsPage = () => {
  const products = productsData; 

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
            <div className="flex justify-center">
              <img src={product.image} alt={product.name} className="w-32 h-32 object-contain" />
            </div>
            <h3 className="text-lg font-medium mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">${product.price}</p>
            <p className="text-gray-500">{product.description}</p>
            <Link href={`/admin/products/${product.id}`}>
              <span className="block mt-4 text-blue-600 hover:underline">View Details</span>
            </Link>
          </div>
        ))}
      </div>
      <br />
      <div>
      <Link href="/admin/AddProductPage">
        <span className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Add Product
        </span>
      </Link>
        </div>
    </div>
  );
};

export default ProductsPage;

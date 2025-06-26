import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Product List</h1>
      <ul>
        {products.map((p: any) => (
          <li key={p.id}>{p.name} - ${p.price} - Stock: {p.stock_qty}</li>
        ))}
      </ul>
    </div>
  );
}

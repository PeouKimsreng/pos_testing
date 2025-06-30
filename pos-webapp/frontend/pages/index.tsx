import { ListItem } from '@mui/material';
import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //fetch('http://localhost:3001/api/products')
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res;
      })
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
      <><title>Product List</title><div className="p-6">
      <h1 className="text-xl font-bold mb-4">Product List</h1>
      <ul>
        {products.map((p: any) => (
          <ListItem key={p.id}>
            {p.name} - ${p.price} - Stock: {p.stock_qty}
          </ListItem>
        ))}
      </ul>
    </div></>
  );
}

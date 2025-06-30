import { ListItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
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
      <>
      <div className="p-6">
      <h3  className="text-xl font-bold mb-4">Product List</h3>
      {/* <h1 className="text-xl font-bold mb-4">Product List</h1> */}
      {/* <h1 className="text-xl font-bold mb-4">ABC</h1> */}
     
      <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell align="right">Cost&nbsp;(USD)</TableCell>
                  <TableCell align="right">Sale Price&nbsp;(USD)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((p: any) => (
                  <TableRow key={p.id}>
                    <TableCell component="th" scope="row">
                      {p.name}
                    </TableCell>
                    <TableCell align="right">${p.price}</TableCell>
                    <TableCell align="right">Stock: {p.stock_qty}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
    </div></>
  );
}

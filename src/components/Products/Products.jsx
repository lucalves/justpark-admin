import React from 'react';
import {Container} from './Products.styles';

const Products = () => {
  const productStorage = localStorage.getItem('produtos');
  const productData = JSON.parse(productStorage);

  return (
    <Container>
      <div className="tableContent">
        <table>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Quantidade</th>
          </tr>
          {productData ? (
            productData.map((product) => (
              <tr>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>Nenhum produto cadastrado!</td>
              <td>-</td>
              <td>-</td>
            </tr>
          )}
        </table>
      </div>
    </Container>
  );
};

export default Products;

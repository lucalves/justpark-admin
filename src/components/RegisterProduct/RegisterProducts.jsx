import React, {useState} from 'react';
import {Container, Button} from './RegisterProducts.styles';
import SaveButton from '../SaveButton/SaveButton';

const RegisterProducts = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('R$ ');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');

  const product = {
    name: name,
    price: price,
    description: description,
    quantity: quantity,
  };

  const arrayProducts = [];

  const handleSubmit = (e) => {
    e.preventDefault();

    const storageProducts = localStorage.getItem('produtos');
    if (storageProducts) {
      arrayProducts.push(...JSON.parse(storageProducts));
    }

    arrayProducts.push(product);
    localStorage.setItem('produtos', JSON.stringify(arrayProducts));
    setName('');
    setPrice('R$ ');
    setDescription('');
    setQuantity('');
    document.getElementById('name').focus();
  };

  return (
    <Container>
      <h1>Cadastrar Produto</h1>

      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <fieldset>
          <h2>Informações</h2>

          <label htmlFor="nome">Nome</label>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="Nome do produto"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <label htmlFor="preco">Preço</label>
          <input
            id="price"
            type="text"
            name="price"
            required
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />

          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            placeholder="Insira a descrição do produto"
            rows="10"
            name="descricao"
            required
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />

          <label htmlFor="quantidade">Quantidade</label>
          <input
            id="quantity"
            type="number"
            name="quantity"
            placeholder="0"
            required
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </fieldset>

        <SaveButton name="Salvar" />
      </form>
    </Container>
  );
};

export default RegisterProducts;

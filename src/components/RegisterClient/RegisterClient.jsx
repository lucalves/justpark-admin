import React, {useState} from 'react';
import {Container} from './RegisterClient.styles';
import SaveButton from '../SaveButton/SaveButton';

const RegisterClient = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [userState, setUserState] = useState('');
  const [country, setCountry] = useState('');
  const cliente = {
    name: name,
    sobrenome: lastName,
    email: email,
    cep: cep,
    rua: rua,
    bairro: district,
    cidade: city,
    estado: userState,
    pais: country,
  };

  const clients = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    const clientesLocal = localStorage.getItem('clientes');
    if (clientesLocal) {
      clients.push(...JSON.parse(clientesLocal));
    }
    clients.push(cliente);
    localStorage.setItem('clientes', JSON.stringify(clients));
    setName('');
    setLastName('');
    setEmail('');
    setCep('');
    setRua('');
    setDistrict('');
    setCity('');
    setUserState('');
    setCountry('');
    document.getElementById('name').focus();
  };

  return (
    <Container>
      <h1>Cadastrar Cliente</h1>
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
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <label htmlFor="sobrenome">Sobrenome</label>
          <input
            id="sobrenome"
            type="text"
            name="sobrenome"
            required
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />

          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </fieldset>

        <fieldset>
          <h2>Endereço</h2>
          <label htmlFor="cep">CEP</label>
          <input
            id="cep"
            type="number"
            name="enredeco"
            required
            value={cep}
            onChange={(e) => {
              setCep(e.target.value);
            }}
          />

          <label htmlFor="rua">Rua</label>
          <input
            id="rua"
            type="text"
            name="endereco"
            required
            value={rua}
            onChange={(e) => {
              setRua(e.target.value);
            }}
          />

          <label htmlFor="bairro">Bairro</label>
          <input
            id="bairro"
            type="text"
            name="bairro"
            required
            value={district}
            onChange={(e) => {
              setDistrict(e.target.value);
            }}
          />

          <label htmlFor="cidade">Cidade</label>
          <input
            id="cidade"
            type="cidade"
            name="cidade"
            required
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />

          <label htmlFor="estado">Estado</label>
          <input
            id="estado"
            type="estado"
            name="estado"
            required
            value={userState}
            onChange={(e) => {
              setUserState(e.target.value);
            }}
          />

          <label htmlFor="pais">País</label>
          <input
            id="pais"
            type="pais"
            name="pais"
            required
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
        </fieldset>

        <SaveButton name="Salvar" />
      </form>
    </Container>
  );
};

export default RegisterClient;

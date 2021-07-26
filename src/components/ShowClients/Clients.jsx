import React from 'react';
import {Container} from './Clients.styles';

const Clients = () => {
  const storageClients = localStorage.getItem('clientes');
  const clientsData = JSON.parse(storageClients);

  return (
    <Container>
      <div className="tableContent">
        <table>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
          </tr>
          {clientsData ? (
            clientsData.map((client) => (
              <tr>
                <td>{client.name}</td>
                <td>{client.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>Não há cliente cadastrado.</td>
              <td>Sem e-mails.</td>
            </tr>
          )}
        </table>
      </div>
    </Container>
  );
};

export default Clients;

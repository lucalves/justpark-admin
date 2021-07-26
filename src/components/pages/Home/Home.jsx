import React, {useState, useEffect} from 'react';
import {
  MainContent,
  SideMenu,
  Logo,
  Options,
  MenuOptions,
  LinkMenuOptions,
  LinkMenuNavbar,
  Navbar,
  CardInfo,
  ContainerLateral,
  ContentContainer,
  Salutation,
  ContainerCards,
} from './Home.styles';
import logoSystem from '../../../assets/logo.png';
import IconArrowRight from '../../../assets/iconSignRight.png';
import RegisterClient from '../../RegisterClient/RegisterClient';
import Products from '../../Products/Products';
import SignBack from '../../../assets/signBack.png';
import Clients from '../../ShowClients/Clients';
import RegisterProducts from '../../RegisterProduct/RegisterProducts';

const Home = (props) => {
  const [page, setPage] = useState('home');
  const [quantityClients, setQuantityClientes] = useState('');
  const [quantityProducts, setQuantityProducts] = useState('');
  const storageClients = localStorage.getItem('clientes');
  const storageProducts = localStorage.getItem('produtos');

  const recoverData = () => {
    if (storageClients) {
      const arrayDataClients = JSON.parse(storageClients);
      setQuantityClientes(arrayDataClients.length);
    }
    if (storageProducts) {
      const arrayProduct = JSON.parse(storageProducts);
      setQuantityProducts(arrayProduct.length);
    }
  };

  useEffect(() => {
    recoverData();
  });

  return (
    <MainContent>
      <SideMenu>
        <Logo src={logoSystem} />
        <Options>
          <div className="selecao">
            <MenuOptions
              onClick={() => {
                setPage('home');
                document
                  .getElementById('ContentContainer')
                  .setAttribute('style', 'height:0vw');
              }}
            >
              <LinkMenuOptions>Início</LinkMenuOptions>
            </MenuOptions>
          </div>
          <div className="selecao">
            <MenuOptions
              onClick={() => {
                setPage('produtos');
                document
                  .getElementById('ContentContainer')
                  .setAttribute('style', 'height:100%');
              }}
            >
              <LinkMenuOptions>Produtos</LinkMenuOptions>
            </MenuOptions>
          </div>
          <div className="selecao">
            <MenuOptions
              onClick={() => {
                setPage('clientes');
                document
                  .getElementById('ContentContainer')
                  .setAttribute('style', 'height:100%');
              }}
            >
              <LinkMenuOptions>Clientes</LinkMenuOptions>
            </MenuOptions>
          </div>
        </Options>
      </SideMenu>
      <ContainerLateral>
        <Navbar>
          <LinkMenuNavbar>Acesso Área de Membros</LinkMenuNavbar>
        </Navbar>
        <ContentContainer id="ContentContainer">
          {page === 'home' ? (
            <div>
              <Salutation>Bem vindo, Administrador</Salutation>
              <ContainerCards>
                <CardInfo
                  onClick={() => {
                    setPage('clientes');
                    document
                      .getElementById('ContentContainer')
                      .setAttribute('style', 'height:100%');
                  }}
                >
                  <h3 className="infoTitle">Total de Clientes</h3>
                  <div className="flex">
                    <p className="infoFeatured">
                      {quantityClients ? quantityClients : '0'}
                    </p>
                    <img
                      className="infoSign"
                      src={IconArrowRight}
                      alt="Seta para direita"
                    />
                  </div>
                </CardInfo>
                <CardInfo
                  onClick={() => {
                    setPage('produtos');
                    document
                      .getElementById('ContentContainer')
                      .setAttribute('style', 'height:0vw');
                  }}
                >
                  <h3 className="infoTitle">Total de Produtos</h3>
                  <div className="flex">
                    <p className="infoFeatured">
                      {quantityProducts ? quantityProducts : '0'}
                    </p>
                    <img
                      className="infoSign"
                      src={IconArrowRight}
                      alt="Seta para direita"
                    />
                  </div>
                </CardInfo>
              </ContainerCards>
            </div>
          ) : (
            <div></div>
          )}
          {page === 'registerClients' ? (
            <div>
              <div
                className="backClients"
                onClick={() => {
                  setPage('clientes');
                  document
                    .getElementById('ContentContainer')
                    .setAttribute('style', 'height:0vw');
                }}
              >
                <img
                  className="backSign"
                  src={SignBack}
                  alt="Seta para esquerda"
                />
                <p>Clientes</p>
              </div>
              <RegisterClient />
            </div>
          ) : (
            <div></div>
          )}
          {page === 'cadastroProdutos' ? (
            <div>
              <div
                className="backClients"
                onClick={() => {
                  setPage('produtos');
                  document
                    .getElementById('ContentContainer')
                    .setAttribute('style', 'height:0vw');
                }}
              >
                <img className="backSign" src={SignBack} alt="Back" />
                <p>Produtos</p>
              </div>
              <RegisterProducts />
            </div>
          ) : (
            <div></div>
          )}

          {page === 'clientes' ? (
            <div>
              <div className="divFlex">
                <h1>Clientes</h1>
                <button
                  className="registerBtn"
                  onClick={() => {
                    setPage('registerClients');
                    document
                      .getElementById('ContentContainer')
                      .setAttribute('style', 'height:100%');
                  }}
                >
                  Cadastrar Cliente
                </button>
              </div>
              <Clients />
            </div>
          ) : (
            <div></div>
          )}

          {page === 'produtos' ? (
            <div>
              <div className="divFlex">
                <h1>Produtos</h1>
                <button
                  className="registerBtn"
                  onClick={() => {
                    setPage('cadastroProdutos');
                    document
                      .getElementById('ContentContainer')
                      .setAttribute('style', 'height:100%');
                  }}
                >
                  Cadastrar Produto
                </button>
              </div>
              <Products />
            </div>
          ) : (
            <div></div>
          )}
        </ContentContainer>
      </ContainerLateral>
    </MainContent>
  );
};

export default Home;

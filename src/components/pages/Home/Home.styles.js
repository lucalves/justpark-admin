import styled from 'styled-components';

export const Logo = styled.img`
  width: 140px;
  height: auto;
  margin: 0.8rem;
`;

export const SideMenu = styled.div`
  width: 180px;
  height: 1250px;
  background: #2a3f54;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;

  .selecao:hover {
    background-color: #1fa637;
  }
`;

export const MenuOptions = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LinkMenuOptions = styled.a`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
  color: #ffffff;
  cursor: pointer;
`;

export const MainContent = styled.div`
  display: flex;
`;

export const Navbar = styled.div`
  width: 100%;
  height: 70px;
  background: #1fa637;
  display: flex;
  justify-content: flex-end;
`;

export const LinkMenuNavbar = styled.a`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  margin: 0px 4rem 0 5px;
  font-size: 18px;
  line-height: 26px;
  color: #fff;
  padding: 1.5rem 0 1.5rem 1.5rem;
  cursor: pointer;
`;

export const ContainerLateral = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 0vw;

  .backClients {
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 100px;
    margin-left: 1rem;
  }

  .backSign {
    width: 28px;
    height: 28px;
    padding: 0.5rem;
  }

  .registerBtn {
    width: 140px;
    height: 45px;
    font-family: 'Roboto', sans-serif;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #fff;
    margin-right: 6%;
    background-color: #278c3a;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
  }

  .registerBtn:hover {
    background-color: #2a3f54;
    box-shadow: 0px 15px 20px rgba(196, 196, 196, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }

  .divFlex {
    display: flex;
    justify-content: flex-end;
    justify-content: space-between;
    padding: 3rem;
    align-items: center;
  }

  .divFlex h1 {
    padding-left: 6%;
  }
`;

export const Salutation = styled.h2`
  margin: 3rem 0 3rem 3rem;
`;
export const ContainerCards = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardInfo = styled.div`
  width: 45%;
  height: 175px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.44);
  background-color: #eee;
  box-sizing: border-box;
  margin: auto;
  padding: 2rem;
  cursor: pointer;

  .flex {
    display: flex;
    justify-content: space-between;
  }

  .infoTitle {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 33px;
    color: #000000;
    margin: 0 0 1rem 0;
    text-align: center;
  }

  .infoFeatured {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 42px;
    line-height: 49px;
    color: #000000;
    margin: auto;
    display: inline;
  }

  .infoSign {
    height: 1.5rem;
  }
`;

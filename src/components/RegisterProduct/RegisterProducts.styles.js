import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 3rem;

  input,
  textarea {
    width: 90%;
    margin: 10px;
    padding: 10px;
  }

  fieldset {
    background: #fff;
    margin-bottom: 1rem;
    margin-top: 3%;
  }

  label {
    display: block;
    margin-left: 10px;
  }

  .backClients {
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 100px;
  }

  .backSign {
    width: 28px;
    height: 28px;
    padding: 0.5rem;
  }
`;

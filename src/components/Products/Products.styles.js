import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  background-color: #fff;
  margin: auto;

  .tableContent {
    padding: 0;
    margin-bottom: 6rem;
  }

  .tableContent th {
    background-color: #eee;
  }

  table {
    width: 92%;
    margin: auto;
    border: 1px solid black;
    border-collapse: collapse;
    border-spacing: 5px;
  }

  th {
    text-align: left;
    padding: 15px;
    border-width: 1px;
    border-style: solid;
  }
  td {
    padding: 10px;
    border-width: 1px;
    border-style: solid;
  }
`;

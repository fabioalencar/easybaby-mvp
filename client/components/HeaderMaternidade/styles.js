import styled from 'styled-components';

const Container = styled.div`
  header{
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 30px 3px;
  }
  h1{
    font-size:25px;
    text-align:center;
    padding:20px 20px 0;
    margin-bottom:0;
    color: var(--color--secondary);
  }
  a {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 14px;
    line-height: 130%;
    text-decoration: none;
    font-weight: 800;
    min-width:42px;
    div {
      margin: 5px auto;
      display: block;
    }
`;

export default Container;

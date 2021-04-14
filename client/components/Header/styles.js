import styled from 'styled-components';

const Container = styled.div`
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 30px 3px;
  a {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 14px;
    line-height: 130%;
    text-decoration: none;
    font-weight: 800;
    min-width:42px;
    color: #000;
    div {
      margin: 5px auto;
      display: block;
    }
`;

export default Container;

import styled from 'styled-components';

const Container = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 30px 3px;
  position: fixed;
  bottom:0;
  left:0;
  right:0;
  border-top: 1px solid #d8d8d8;
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

import styled from 'styled-components';

const Container = styled.nav`
  background: #fff;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px 50px;
  border-top: 1px solid #d8d8d8;
  a {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 14px;
    line-height: 130%;
    text-decoration: none;
    font-weight: 800;
    div {
      margin: 5px auto;
      display: block;
    }
  }
`;

export default Container;

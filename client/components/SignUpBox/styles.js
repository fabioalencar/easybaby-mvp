import styled from 'styled-components';

const Container = styled.div`
  a {
    color: var(--color--secondary);
    margin-top: 20px;
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid var(--color--secondary);
  }
  form {
    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      margin-top: 5px;
      label {
        font-size: 20px;
        margin-bottom: 3px;
        font-weight: 800;
        color: var(--color--secondary);
      }
      input {
        font-size: 20px;
        margin-bottom: 15px;
        border-radius: 10px;
        border: 1px solid #a7e1f7;
        background: #f0fbff;
        padding: 10px;
      }
      button {
        border-radius: 10px;
        color: #fff;
        padding: 10px;
        font-size: 20px;
        border: none;
        background: var(--color--primary);
        font-weight: 800;
        font-family: 'Nunito', sans-serif;
      }
    }
  }
`;

export default Container;

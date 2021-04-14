import styled from 'styled-components';

const Container = styled.div`
  .ais-SearchBox-form {
    display: flex;
    justify-content: space-between;
    background: #fff;
    border-radius: 50px;
    padding: 6px 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    margin-bottom: 20px;

    .ais-SearchBox-input {
      width: 100%;
      padding: 5px;
      border: none;
      font-size: 20px;
    }
    .ais-SearchBox-submit {
      border: none;
      background: transparent;
      svg {
        width: 20px;
        height: 20px;
      }
    }

    .ais-SearchBox-reset {
      border: none;
      background: var(--color--secondary);
      border-radius: 100px;
      width: 38px;
      margin-left: 5px;
      svg {
        width: 15px;
        height: 15px;
        fill: #fff;
      }
    }
  }
  .ais-Hits {
    ul {
      margin: 0;
      padding: 0;
      li {
        list-style: none;
        background: #fff;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
        padding: 20px;
        border-radius: 20px;
        margin-top: 10px;
        text-align: left;
        a {
          text-decoration: none;
          color: var(--color--secondary);
        }
      }
    }
  }
`;

export default Container;

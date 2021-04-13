import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  > div:first-child {
    order: 1;
  }
  .content {
    padding: 70px 30px 0px;
    text-align: center;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 35%
    );
    order: 2;
    margin-top: -90px;
    z-index: 2;
    h2 {
      font-weight: 700;
      font-size: 25px;
      letter-spacing: 0.0025em;
      line-height: 130%;
      color: var(--color--secondary);
      strong {
        color: var(--color--primary);
      }
    }
  }
`;

export default Container;

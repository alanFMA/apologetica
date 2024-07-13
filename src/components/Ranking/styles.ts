import styled from 'styled-components';
import Crown from '../../assets/crown.png';

export const Titulo = styled.h2`
  text-align: center;
  margin: 25px 0;
`;

export const Ranking = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Aluno = styled.div`
  position: relative; /* Adicionado para posicionamento relativo do ::before */
  display: flex;
  align-items: center;
  margin: 15px 0;
  width: 70%;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }

  &:first-child {
    img {
      border: 5px solid #ffd700;
    }

    &::before {
      content: '';
      display: block;
      width: 55px;
      height: 40px;
      background-image: url(${Crown});
      background-size: contain;
      background-repeat: no-repeat;
      position: absolute;
      top: -25px; /* ajuste conforme necessário */
      left: calc(50% - 76px); /* ajuste conforme necessário */
      transform: translateX(-50%);
    }
  }

  &:nth-child(2) {
    img {
      border: 5px solid #c0c0c0;
    }
  }

  &:nth-child(3) {
    img {
      border: 5px solid #cd7f32;
    }
  }
`;

export const Description = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;

import React from 'react';
import { useMediaQuery } from '@mui/material';
import { Aluno, Description, Ranking, Titulo } from './styles';
import alunosOrdenados from '../../data';

export default function RankingList() {
  const isSmallScreen = useMediaQuery('(max-width:504px)');

  return (
    <>
      <Titulo>🕹️ Ranking - ApologetiQuiz ✅</Titulo>
      <Ranking>
        <div
          style={{
            width: '368px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: isSmallScreen ? 'center' : 'flex-start',
          }}
        >
          {alunosOrdenados.map((aluno, index) => (
            <Aluno key={aluno.id}>
              <img src={aluno.image} />
              <Description>
                <p>#{index + 1}</p>
                <p>{aluno.name}</p>
                <p>Pontuação: {aluno.balance}</p>
              </Description>
            </Aluno>
          ))}
        </div>
      </Ranking>
    </>
  );
}

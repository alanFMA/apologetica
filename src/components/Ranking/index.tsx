import React from 'react';
import { useMediaQuery } from '@mui/material';
import { Aluno, Description, Ranking, Titulo } from './styles';
import Pedro from '../../assets/001-pedro-torres.jpg';
import Lizandra from '../../assets/006-lizandra.png';
import Eliabe from '../../assets/003-eliabe.png';
import Lucila from '../../assets/002-lucila.png';
import Jonas from '../../assets/004-jonas-william.png';
import Rafael from '../../assets/005-rafael.png';
import Lucas from '../../assets/007-lucas.png';
import Cintia from '../../assets/008-cintia.jpeg';
import Dominick from '../../assets/009-dominick.jpeg';
import Annita from '../../assets/010-annita.png';
import Gabriel from '../../assets/011-gabriel.png';
import Jezreel from '../../assets/012-jezreel.png';
import Jaysa from '../../assets/013-jaysa.png';
import Laura from '../../assets/014-laura.png';
import Queila from '../../assets/015-queila.png';
import Kesia from '../../assets/016-kesia.jpeg';
import MariaKlara from '../../assets/017-maria-klara.png';
import Victor from '../../assets/018-victor.png';
import Giglyene from '../../assets/019-giglyene.png';
import Generic from '../../assets/generic-avatar.jpg';
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

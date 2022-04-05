import { Container } from './styles'

import { Level } from '../../utils/imc'

import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

type LevelProps = {
    data: Level;
}


export const GridItem = ({data}: LevelProps ) => {
    return (    
        <Container bgcolor={data.color}>
            <picture><img src={data.icon == 'up' ? upImage : downImage} alt="Ícone" /></picture>
            <h1>{data.title}</h1>
            {data.yourImc && 
                <p>seu IMC é de {data.yourImc.toFixed(2)} kg/m2</p>
            }
            <span>IMC está entre <strong>{data.imc[0]}</strong> e <strong>{data.imc[1]}</strong></span>
        </Container>
    )
}
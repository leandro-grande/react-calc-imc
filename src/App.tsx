import { useState } from 'react';

import { levels, calculateImc, Level } from './utils/imc'
import { GridItem } from './components/GridItem';

import { Container, Header, ImcArea, ImcCalc, ImcResult } from './styles'
import GlobalStyle from './global';

import logo from './assets/powered.png'
import leftArrowImage from './assets/leftarrow.png'



const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);


  function handleCalculate() {

    if (heightField && weightField) {
        setToShow(calculateImc(heightField, weightField));
        console.log(toShow)
   }
  }

  function handleBackButton() {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <>
    <GlobalStyle />
    <Container>
      <Header>
        <img src={logo} alt="IMC logo" />
      </Header>
      
      <ImcArea>
        <ImcCalc>
          <h1>Calcule o seu IMC.</h1>
          <p>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
            Organização Mundial da Saúde para calcular o peso ideal de cada pessoa.
          </p>
          <div>
            <input 
              type="number"
              placeholder='Digite a sua altura. Ex 1.5 (em metros)'
              onChange={(e) => setHeightField(parseFloat(e.target.value))}
              value={heightField > 0 ? heightField : ''}
              disabled={toShow ? true : false}
            />
            <input 
              type="number" 
              placeholder='Digite o seu peso. Ex 75.3 (em kg)'
              onChange={(e) => setWeightField(parseFloat(e.target.value))} 
              value={weightField > 0 ? weightField : ''}
              disabled={toShow ? true : false}
            />
            <button 
            onClick={handleCalculate} 
            disabled={toShow ? true : false}
            >
              Calcular
            </button>
          </div>
        </ImcCalc>

        <ImcResult>
          {!toShow ?
            <div>
            {levels.map((level, index) => (
              <GridItem key={index} data={level} />
              ))}
            </div>
            :
            <div className='toshow'>
              <div onClick={handleBackButton} className='arrow'>
               <img src={leftArrowImage} />
              </div>
              <GridItem data={toShow} />
            </div>
          }


         
        </ImcResult>

      </ImcArea>

    </Container>
    </>
  )
}

export default App
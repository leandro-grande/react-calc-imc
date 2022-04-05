import styled from 'styled-components'
import { shade } from 'polished'; 


export const Container = styled.div `
    max-width: 900px;
    padding: 0px 15px 20px 15px;
    margin: 0 auto;
`

export const Header = styled.header `
    margin-top: 3rem;

    img {
        width: 20%;
    }
`

export const ImcArea = styled.div`
    display: flex;
    gap: 4rem;
    margin-top: 3rem;

    @media (max-width: 800px) {
        flex-direction: column
    }
`;

export const ImcCalc = styled.div`
    flex: 1;
    
    h1 {
        color: #3B4A5C;
    }

    p {
        margin-top: 1rem;
        line-height: 1.3rem;
        color: #3B4A5C;
        font-size: 1rem;
    }

    div {
        margin-top: 2rem;

        display: flex;
        flex-direction: column;

        input {
            border: 0;
            border-bottom: 1px solid #ccc;
            padding: 1rem 0;

            & + input {
                margin-top: 1rem;
            }

            &:disabled {
                opacity: 0.5;
            }
        }

        button {
            margin-top: 3rem;
            height: 3rem;
            border: 0;
            border-radius: 0.75rem;

            background-color: #237B9F;
            color: #FFF;
            font-size: 1.2rem;

            cursor: pointer;
            transition: background-color 0.2s;

            &:disabled {
                opacity: 0.5;
            }

            &:not(:disabled):hover {
                background-color: ${shade(0.2, '#237B9F')} 
            }    

        }

    }
`;

export const ImcResult = styled.div`
    flex: 1;
    display: flex;
    
    div {
        flex: 1;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.2rem;

        &.toshow {
        display: flex;
        flex: 1;
        position: relative;

        div {
            position: absolute;

            display: flex;
            justify-content: center;
            align-items: center;

            background-color: #227c90;

            height: 70px;
            width: 70px;

            border-radius: 50%;

            margin-left: -35px;
            margin-top: 145px;
            cursor: pointer;

            @media (max-width: 800px) {
                margin-top: 0;
                margin-left: 0;
                border-radius: 0;
                transform: rotate(90deg)
            }

            img {
                width: 30px;
            }
            
        }
    }
    }
`;


import styled from 'styled-components';

type GridProps = {
    bgcolor: string;
}

export const Container = styled.article<GridProps>`
    background-color: ${props => props.bgcolor};
    color: #FFF;
    border-radius: 10px;

    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
 

    picture {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: rgba(0,0,0,.1);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    img {
        width: 30px;
    }

    h1 { 
        font-size: 23px;
        font-weight: bold;
        margin-top: 5px
       
    }

    p {
        font-size: 17px;
        margin: 14px 0 50px 0;
    }

    span {
        font-size: 12px;
        margin-top: 14px;
    }
`;
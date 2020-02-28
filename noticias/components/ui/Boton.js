import styled from '@emotion/styled';

const Boton = styled.a`
    display: block;
    font-weight: 700;
    text-transform: uppercase;
    border: 1px solid #d1d1d1;
    padding: .8rem 2rem;
    margin: 2rem auto; 
    text-align: center;
    background-color: ${props => props.bgColor ? 'transparent' : '#ffff25'};
    color: ${props => props.bgColor ? '#0074c4' : '#000'};
    border: 1px solid #0074c4;

    &:last-of-type {
        margin-right:0;
    }

    &:hover {
        cursor: pointer;
    }
`;

export default Boton;
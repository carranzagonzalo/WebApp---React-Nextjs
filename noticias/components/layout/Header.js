import React, { useContext } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Buscar from '../ui/Buscar';
import Boton from '../ui/Boton';


const ContenedorHeader = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width:768px) {
        display: flex;
        justify-content: space-between;
    }
`;


// const Logo = styled.nav`
//     padding-left: 2rem;
//     background-image: url('/static/img/logo1.jpg');
//     a {
//         font-size: 1.8rem;
//         margin-left: 2rem;
//         color: var(--gris2);
//         font-family: 'PT Sans', sans-serif;

//         &:last-of-type {
//             margin-right: 0;
//         }
//     }
// `;


const Logo = styled.a`
    color: var(--naranja);
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    margin-right: 2rem;
    background-image: url('/static/img/logo.jpg');
    padding-left: 2rem;
`;

const Header = () => {



    return ( 
        <header
            css={css`
                border-bottom: 2px solid var(--gris3);
                padding: 1rem 0;
            `}
        >
            <ContenedorHeader>
                <div
                    css={css`
                        display:flex;
                        align-items: center;
                    `}
                >
                    
                    <Buscar />

                    <Link href="/">
                        <Logo>
                        <img src="/static/img/logo.jpg" />
                        </Logo>
                    </Link>
                   

                </div>

                <div
                    css={css`
                        display: flex;
                        align-items: center;
                    `}
                >
                   
                        <>
                            
                            
                        </>
                   
                        <>
                            
                            <Link href="/suscribirse">
                                <Boton>Suscribite</Boton>
                            </Link>

                            <Link href="/ingresar">
                                <Boton
                                    bgColor="true"
                                >Ingresar</Boton>
                            </Link>
                        </>
                    
                </div>
            </ContenedorHeader>
        </header>
     );
}
 
export default Header;
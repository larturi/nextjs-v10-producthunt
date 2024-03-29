import React, { useContext } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Buscador } from '../ui/Buscador';
import { Navbar } from './Navbar';
import Boton from '../ui/Boton';

import { FirebaseContext } from '../../firebase'

const ContenedorHeader = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`;

const Logo = styled.p`
    color: var(--naranja);
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    margin-right: 2rem;
    margin-top: -5px;
`;

export const Header = () => {

    const { usuario, firebase } = useContext(FirebaseContext);

    return (
        <header
            css={css`
                border-bottom: 2px solid var(--gris3);
                padding: 1rem 0;
                margin-bottom: 3rem;
            `}
        >
            <ContenedorHeader>
                <div
                    css={css`
                        display: flex;
                        align-items: center;
                    `}
                >
                    <Link href="/">
                        <Logo>P</Logo>
                    </Link>
                    
                    <Buscador />
                </div>

                <div>
                <Navbar />

                </div>

                <div
                    css={css`
                        display: flex;
                        align-items: center;
                    `}
                >
                    {
                        usuario ? (
                            <>
                                <p
                                    css={css`
                                        margin-right: 2rem;
                                        margin-top: -3px;
                                        margin-left: 41px;
                                    `} 
                                >
                                    Hola: { usuario.displayName }
                                </p>
                                <Boton 
                                    bgColor="true"
                                    onClick={ () => firebase.cerrarSesion() }
                                >
                                    Cerrar Sesión
                                </Boton>
                            </>

                            
                        ) : (
                            <>
                                <Link href="/login">
                                    <Boton
                                        bgColor="true"
                                    >
                                        Login
                                    </Boton>
                                </Link>

                                <Link href="/crear-cuenta">
                                    <Boton>Crear Cuenta</Boton>
                                </Link>
                            </>
                        )
                    }

                </div>
            </ContenedorHeader>
        </header>
    )
}

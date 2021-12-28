import React from 'react'


import { Container, Header, Body, H1, H2, P, SideBar, WidGet1, WidGet2, Footer } from './HomeElements';




export const Home = () => {

    return (
        <Container>
            <Header>
                Header
            </Header>

            <Body>
                <H1>Bienvenidos</H1>

                <P>
                    <H2> ¿Qué es Lorem Ipsum? </H2>
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
                    cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una
                    galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
                    No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos
                    electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la
                    creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más
                    recientemente con software de autoedición, como por ejemplo Aldus PageMaker,
                    el cual incluye versiones de Lorem Ipsum.</P>
             
                <SideBar>SiderBar</SideBar>


                <WidGet1>WidGet 1</WidGet1>
                <WidGet2>WidGet 2</WidGet2>

            </Body>


            <Footer> Footer </Footer>
        </Container>

    )
}

import React from 'react'


import { Container, Header,IconoHeader, Body, H1, H2, H3, P, SideBar, WidGet1, WidGet2, Footer } from './HomeElements';




export const Home = () => {

    return (
        <Container>
            <Header>
                <H3>  Header </H3>

                <IconoHeader>IconoMenu</IconoHeader>
            </Header>

            <Body>
                <H1>Contenido</H1>


                {/* Lorem 1 */}

                <H2> ¿Qué es Lorem Ipsum? </H2>
                <P>

                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
                    cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una
                    galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
                    No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos
                    electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la
                    creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más
                    recientemente con software de autoedición, como por ejemplo Aldus PageMaker,
                    el cual incluye versiones de Lorem Ipsum.</P>
                <br /><br />

                {/* Lorem 2 */}
                              <H2> ¿Qué es Lorem Ipsum? </H2>
                <P>
      
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
                    cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una
                    galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
                    No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos
                    electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la
                    creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más
                    recientemente con software de autoedición, como por ejemplo Aldus PageMaker,

                    el cual incluye versiones de Lorem Ipsum.</P>
                    <br /><br />


                {/* Lorem 3 */}
                <H2> ¿Qué es Lorem Ipsum? </H2>
                <P>
      
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
                    cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una
                    galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
                    No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos
                    electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la
                    creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más
                    recientemente con software de autoedición, como por ejemplo Aldus PageMaker,

                    el cual incluye versiones de Lorem Ipsum.</P>
                    <br /><br />

            </Body>



            <SideBar>
                <H3> SiderBar    </H3>
            </SideBar>


            <WidGet1>
                <H3>WidGet 1</H3>
            </WidGet1>

            <WidGet2>
                <H3>WidGet 2</H3>
            </WidGet2>



            <Footer> Footer </Footer>
        </Container>

    )
}

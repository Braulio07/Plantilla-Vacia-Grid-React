import styled from "styled-components";


// grid-gap:-------------------------------------> aplica un margen a cada uno de los elementos.
// grid-template-columns: repeat(3, 1fr); ------>  cantidad de columnas:  




export const Container = styled.div`
            width: 95%;
  
            /* max-width: 1000px; */
            margin: 20px auto;
            display: grid;
            grid-gap: 10px;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(4, auto);
            background-color: #fff;

  
                `

export const Header = styled.header`
                    background-color: black;
                    color: white;
                    padding: 20px;
                    border-radius: 4px;
                    grid-column-start: 1;
                    grid-column-end: -1;
                    
                    
                `


export const IconoHeader = styled.div`

display: none;
color: yellow;

@media screen and (max-width: 768px){
    display: inline;
}
`

export const Body = styled.div`
                    grid-column-start: 1;
                    grid-column-end: 3;


                    @media screen and (max-width: 768px){
                        grid-column-end: 4;
                    }
                `

export const H1 = styled.h1`
                    font-size: 18px;
                    font-weight: bold;
                `

export const H2 = styled.h2`
                    font-size: 16px;
                    font-weight: bold;
                `

export const H3 = styled.h3`
                    font-size: 14px;
                    font-weight: bold;
                `

export const P = styled.p`
                    font-size: 14px;
                `


export const SideBar = styled.aside`
                    background-color: #EA5C2B;
                    color: #fff;
                    padding: 20px;
                    border-radius: 4px;
                    grid-column: 3 / 4;
                    grid-row: 2 / -1;
                    text-align: center;
                    display: flex;
                    align-items: center;
                    justify-content: center;


                    @media screen and (max-width: 768px){
                        background-color: black;
                        display: none;
                    }
        

                `

export const WidGet1 = styled.div`
                    background-color: #548CFF;
                    padding: 20px;
                    border-radius: 4px;
                    grid-column: 1 / 1;
                    height: 100px;
                    text-align: center;
                    color: #fff;
                    text-align: center;
                    @media screen and (max-width: 768px){
                        grid-column-end: 4;
                    }
                `
export const WidGet2 = styled.div`
                background-color: #548CFF;
                padding: 20px;
                    border-radius: 4px;
                    grid-column: 2 / 2;
                    height: 100px;
                    text-align: center;
                    color: #fff;
                    text-align: center;
                    @media screen and (max-width: 768px){
                        grid-column: 1 / 4;
                    }
                `


export const Footer = styled.div`
                background-color: black;
                color: white;
                padding: 20px;
                    border-radius: 4px;
                    grid-column-start: 1;
                    grid-column-end: 4;
                `
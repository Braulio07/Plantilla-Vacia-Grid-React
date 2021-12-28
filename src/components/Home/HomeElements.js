import styled from "styled-components";


// grid-gap:-------------------------------------> aplica un margen a cada uno de los elementos.
// grid-template-columns: repeat(3, 1fr); ------>  cantidad de columnas:  




export const Container = styled.div`
        width: 95%;
        /* max-width: 1100px; */
        margin: 20px auto;
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(4, auto);
        background-color: #fff;

        grid-template-areas: 
            "header header header"
            "body body sidebar"
            "widget-1 widget-2 sidebar"
            "footer footer footer";

            @media screen and (max-width: 768px){
            grid-template-areas:
            "header header header"
            "body body body"
            "widget-1 widget-1 widget-1"
            "widget-2 widget-2 widget-2"
            "footer footer footer";

            }
        `

export const Header = styled.header`
            background-color: black;
            color: white;
            padding: 20px;
            border-radius: 4px;

            grid-area: header;
            
            
        `


export const IconoHeader = styled.div`
        display: none;
        color: yellow;

        @media screen and (max-width: 768px){
        display: flex;
        justify-content: right;
        }
        `

export const Body = styled.div`
        grid-area: body;
        padding: 20px;
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
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            grid-area: sidebar;


            @media screen and (max-width: 768px){
                background-color: black;
                display: none;
            }


        `

export const WidGet1 = styled.div`
            background-color: #548CFF;
            padding: 20px;
            border-radius: 4px;
            grid-area: widget-1;
            height: 100px;
            text-align: center;
            color: #fff;
            text-align: center;
            @media screen and (max-width: 768px){

            }
        `
export const WidGet2 = styled.div`
        background-color: #548CFF;
        padding: 20px;
            border-radius: 4px;
        grid-area: widget-2;
            height: 100px;
            text-align: center;
            color: #fff;
            text-align: center;
            @media screen and (max-width: 768px){

            }
        `


export const Footer = styled.div`
        background-color: black;
        color: white;
        padding: 20px;
        grid-area: footer;
        border-radius: 4px;
        ` 
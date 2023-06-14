import styled from "styled-components";

export const Container = styled.div`
    //Colors
        //Neutral:
        --Dark-Blue-DarkMode-Elements: hsl(209, 23%, 22%);
        --Very-Dark-Blue-DarkMode-BG: hsl(207, 26%, 17%);
        --Very-Dark-Blue-LightMode-Text: hsl(200, 15%, 8%);
        --Dark-Gray-LightMode-Input: hsl(0, 0%, 52%);
        --Very-Light-Gray-LightMode-BG: hsl(0, 0%, 98%);
        --White-Dark-Mode-Text-LightMode-Elements: hsl(0, 0%, 100%);
        *{
        margin:0;
    }
    //font-size:
    --Homepage-Items: 14px;
    --Detail-Page: 16px;
    font-family: 'Nunito Sans', sans-serif;
    --light: 300;
    --semibold: 600;
    --extrabold: 800;
    display:flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    justify-content: flex-start;
    align-items: center;
    background-color: ${props => props.theme === 'light' ? 'var(--Very-Light-Gray-LightMode-BG)' : 'var(--Very-Dark-Blue-DarkMode-BG)'};
    .sorterfilter{
        display: flex;
        position: sticky;
        top: 12%;
        width: 95%;
        justify-content: space-between;
        align-items: flex-start;
        margin: 45px 25px;
        z-index: 2;
        @media screen and (max-width: 1025px){
            top:22%;
            margin: 20px 0px;
        }
        @media screen and (max-width: 600px){
            top:12%;
            width:90%;
            margin: 20px 0px;
        }
    }
    .searcher{
        display: flex;
        position: relative;
        width: auto;
        justify-content: flex-start;
        align-items: center;
        @media screen and (max-width: 600px){
            width:100%;
        }
    }
    .custom-dropdown {
        position: relative;
        width: 245px;
        @media screen and (max-width: 600px){
            width:60%;
            margin: 20px 0 0;
        }
    }
    .custom-dropdown.open .options {
        display: block;
        transition: open 0.3s ease-in-out;
    }
    .Country-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 95%;
        column-gap: 79px;
        row-gap: 40px;
    }
    .country-detail-info{
        margin: 0 100px 0 0;
        @media screen and (max-width: 1025px){
            margin: 0 20px 0 0;
        }
    }
    .top-level{
        align-items: flex-start;
        @media screen and (max-width: 600px){
            margin: 20px 0 0;
        }
    }
    @media screen and (max-width: 600px){
        justify-content: center;
    }
    @keyframes updown {
        from {
            transform: translate3d(0,-30px,0);
        }
        to{
            transform: translate3d(0,0,0);
        }
    }
`
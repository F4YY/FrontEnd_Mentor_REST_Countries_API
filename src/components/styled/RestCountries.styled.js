import styled from "styled-components";
import arrowdown from '../images/icon-arrow-down.svg';

export const Vstack = styled.div`
    display: flex;
    flex-direction: column;
`
export const Hstack = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const Hstackflexi = styled(Hstack)`
    align-items: flex-start;
    @media screen and (max-width:600px) {
        flex-direction: column;
    }
`
export const Header = styled.header`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    color: ${props => props.theme === 'light' ? 'var(--Very-Dark-Blue-LightMode-Text)' : 'var(--White-Dark-Mode-Text-LightMode-Elements)'};
    background-color: ${props => props.theme === 'light' ? 'var(--White-Dark-Mode-Text-LightMode-Elements)' : 'var(--Dark-Blue-DarkMode-Elements)'};
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.2);
    position: sticky;
    top: 0;
    z-index: 1;
    img{
        width: 20px;
        height: auto;
        margin-right: 10px;
        cursor: pointer;
    }
    h1{
        font-size: 1.5rem;
        margin: 0 0 0 40px;
    }
    p{
        font-size: 1rem;
        font-weight: var(--semibold);
        cursor: pointer;
        margin: 0 40px 0 0;
    }
    @media screen and (max-width:600px) {
        img{
            width: 15px;
        }
        h1{
            font-size: 1.2rem;
            margin: 0 0 0 20px;
        }
        p{
            font-size: .8rem;
            margin: 0 20px 0 0;
        }
    }
`
export const SearchBar = styled.div`
    display: flex;
    width: 100%;
    height: 55px;
    border-radius: 5px;
    input[type="text"]{
        width: 405px;
        height: 55px;
        border: none;
        border-radius: 5px;
        font-size: .95em;
        font-weight: var(--light);
        font-family: 'Nunito Sans', sans-serif;
        color: ${props => props.theme === 'light' ? 'var(--Dark-Gray-LightMode-Input)' : 'var(--White-Dark-Mode-Text-LightMode-Elements)'};
        background-color: ${props => props.theme === 'light' ? 'var(--White-Dark-Mode-Text-LightMode-Elements)' : 'var(--Dark-Blue-DarkMode-Elements)'};
        box-shadow: 0 2px 2px 3px rgba(0,0,0,0.03);
        outline: none;
        padding: 0 0 0 70px;
        &::placeholder{
            color: ${props => props.theme === 'light' ? 'var(--Dark-Gray-LightMode-Input)' : 'var(--White-Dark-Mode-Text-LightMode-Elements)'};
        }
    }
    @media screen and (max-width:600px) {
        input[type="text"]{
            width: 100%;
        }
    }
`
export const Arrowdown = styled.div`
    width: 30px;
    height: 10px;
    background-image: url(${arrowdown});
    background-repeat: no-repeat;
    background-size: 50%;
    background-position: center;
    margin:0;
    :hover{
        color: var(--Almost-Black);
        font-weight: var(--bold);
        cursor: pointer;
    }
`
export const Dropdownlist = styled.div`
    .selected-option {
        display: flex;
        height: 35px;
        justify-content: space-between;
        align-items: center;
        font-size: .9em;
        font-weight: var(--semibold);
        font-family: 'Nunito Sans', sans-serif;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        color:${props => props.theme === 'light' ? 'var(--Dark-Blue-DarkMode-Elements)' : 'var(--White-Dark-Mode-Text-LightMode-Elements)'};
        background-color: ${props => props.theme === 'light' ? 'var(--White-Dark-Mode-Text-LightMode-Elements)' : 'var(--Dark-Blue-DarkMode-Elements)'};
        box-shadow: 0 2px 2px 3px rgba(0, 0, 0, 0.03);
        padding: 10px 20px;
        margin: 0 0 10px 0;
    }
    .options {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        padding: 0;
        margin: 0;
        list-style: none;
        border-radius: 5px;
        box-shadow: 0 2px 2px 3px rgba(0, 0, 0, 0.03);
        display: none;
        color: ${props => props.theme === 'light' ? 'var(--Dark-Blue-DarkMode-Elements)' : 'var(--White-Dark-Mode-Text-LightMode-Elements)'};
        background-color: ${props => props.theme === 'light' ? 'var(--White-Dark-Mode-Text-LightMode-Elements)' : 'var(--Dark-Blue-DarkMode-Elements)'};
        box-shadow: 0 2px 2px 3px rgba(0, 0, 0, 0.03);
        animation: updown .3s;
        animation-direction: alternate;
        animation-iteration-count: 1;
    }
    .option {
        display: flex;
        align-items: center;
        font-size: .9em;
        font-weight: var(--semibold);
        font-family: 'Nunito Sans', sans-serif;
        border: none;
        padding: 10px 20px;
        color: ${props => props.theme === 'light' ? 'var(--Dark-Blue-DarkMode-Elements)' : 'var(--White-Dark-Mode-Text-LightMode-Elements)'};
        background-color: ${props => props.theme === 'light' ? 'var(--White-Dark-Mode-Text-LightMode-Elements)' : 'var(--Dark-Blue-DarkMode-Elements)'};
        cursor: pointer;
        border-radius: 5px;
        &:first-child {
            color: ${props => props.theme === 'light' ? 'hsl(209, 23%, 52%)' : 'hsl(0, 0%, 60%)'};
            background-color: ${props => props.theme === 'light' ? 'var(--Very-Light-Gray-LightMode-BG)' : 'hsl(209, 23%, 18%)'};
        }
    }
    .option:hover {
        background-color: ${props => props.theme === 'light' ? 'hsl(0, 0%, 85%)' : 'var(--Very-Dark-Blue-DarkMode-BG)'};
    }
    .option.selected {
        background-color: ${props => props.theme === 'light' ? 'var(--Dark-Blue-DarkMode-Elements)' : 'var(--White-Dark-Mode-Text-LightMode-Elements)'};
        color: ${props => props.theme === 'light' ? 'var(--White-Dark-Mode-Text-LightMode-Elements)' : 'var(--Dark-Blue-DarkMode-Elements)'};
    }
    .rotate {
        transform: rotate(180deg);
        transition: transform .2s ease-in-out;
    }
    .default {
        transform: rotate(0deg);
        transition: transform .2s ease-in-out;
    }
`
export const Body= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`
export const CountryCard = styled.div`
    display: block;
    flex-direction: column;
    width: 260px;
    min-height: 330px;
    font-family: 'Nunito Sans', sans-serif;
    border-radius: 8px;
    background-color: ${props => props.theme === 'light' ? 'var(--White-Dark-Mode-Text-LightMode-Elements)' : 'var(--Dark-Blue-DarkMode-Elements)'};
    box-shadow: 0 2px 2px 3px rgba(0,0,0,0.03);
    margin: 0 0 50px 0;
    transition: all .3s ease-in-out;
    h2{
        font-size: 1.15em;
        font-weight: var(--extrabold);
        cursor: pointer;
        color: ${props => props.theme === 'light' ? 'var(--Very-Dark-Blue-LightMode-Text)' : 'var(--White-Dark-Mode-Text-LightMode-Elements)'};
        margin: 20px 0 10px 20px;
    }
    p{
        font-size: .9em;
        font-weight: var(--semibold);
        color: ${props => props.theme === 'light' ? 'var(--Very-Dark-Blue-LightMode-Text)' : 'var(--White-Dark-Mode-Text-LightMode-Elements)'};
        margin: 5px 0 0 20px;
    }
    span{
        font-size: .9em;
        font-weight: var(--light);
        color: ${props => props.theme === 'light' ? 'var(--Very-Dark-Blue-LightMode-Text)' : 'var(--White-Dark-Mode-Text-LightMode-Elements)'};
        margin: 5px 0 0 5px;
    }
    &:hover{
        transform: scale(1.01);
    }
    @media screen and (max-width: 600px){
        width: 80%;
        margin: 0;
    }
`
export const Flag = styled.img`
    width: 100%;
    height: 160px;
    border-radius: 5px 5px 0 0;
    object-fit: cover;
    cursor: pointer;
`
export const StyledCountryDetails = styled(Vstack)`
    width: 100%;
    font-family: 'Nunito Sans', sans-serif;
    margin: 0 0 50px 0;
    button{
        width: 155px;
        height: 40px;
        font-size: 1em;
        font-weight: var(--light);
        color: ${props => props.theme === 'light' ? 'var(--Very-Dark-Blue-LightMode-Text)' : 'var(--White-Dark-Mode-Text-LightMode-Elements)'};
        background-color: ${props => props.theme === 'light' ? 'var(--White-Dark-Mode-Text-LightMode-Elements)' : 'var(--Dark-Blue-DarkMode-Elements)'};
        border: none;
        border-radius: 5px;
        box-shadow: 0 2px 2px 3px rgba(0,0,0,0.03);
        padding: 10px 20px;
        margin: 30px 0 0 40px;
        cursor: pointer;
        &:hover{
            background-color: ${props => props.theme === 'light' ? 'hsl(0, 0%, 85%)' : 'var(--Very-Dark-Blue-LightMode-Text)'};
        }
        @media screen and (max-width: 1025px){
            margin: 30px 0 0 20px;
        }
    }
    h2{
        font-size: 2em;
        font-weight: var(--extrabold);
        color: ${props => props.theme === 'light' ? 'var(--Very-Dark-Blue-LightMode-Text)' : 'var(--White-Dark-Mode-Text-LightMode-Elements)'};
        margin: 20px 0 10px 0;
    }
    .Country-detail{
        margin: 40px 20px 0 40px;
        h2{
            margin: 20px 0;
        }
        p{
            font-size: 1em;
            font-weight: var(--semibold);
            color: ${props => props.theme === 'light' ? 'var(--Very-Dark-Blue-LightMode-Text)' : 'var(--White-Dark-Mode-Text-LightMode-Elements)'};
            margin: 10px 0 0 0;
        }
        span{
            font-size: 1em;
            font-weight: var(--light);
            color: ${props => props.theme === 'light' ? 'var(--Very-Dark-Blue-LightMode-Text)' : 'var(--White-Dark-Mode-Text-LightMode-Elements)'};
            margin: 10px 0 0 5px;
        }
        @media screen and (max-width: 1025px){
            justify-content: center;
            margin: 40px 20px 0;
            h2{
                font-size: 1.7em;
                margin: 0 0 10px 0;
            }
            p{
                font-size: .95em;
            }
            span{
                font-size: .95em;
            }
        }
        @media screen and (max-width: 600px){
            margin: 40px 25px 0;
            h2{
                margin: 0 0 10px 2px;
            }
            p{
                margin: 10px 0 0 2px;
            }
        }
    }
    .border-countries{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        margin: 80px 0 0 0;
        p{
            font-size: 1em;
            font-weight: var(--semibold);
            color: ${props => props.theme === 'light' ? 'var(--Very-Dark-Blue-LightMode-Text)' : 'var(--White-Dark-Mode-Text-LightMode-Elements)'};
            margin:0;
        }
        ul{
            display: inline-flex;
            flex-wrap: wrap;
            width:auto;
            row-gap: 10px;
            padding:0;
            margin: 0 20px 0 0;
        }
        li{
            list-style: none;
            width: auto;
            font-size: .85em;
            font-weight: var(--light);
            color: ${props => props.theme === 'light' ? 'var(--Very-Dark-Blue-LightMode-Text)' : 'var(--White-Dark-Mode-Text-LightMode-Elements)'};
            margin: 0;
        }
        button{
            width: auto;
            height: auto;
            border-radius: 2px;
            color: ${props => props.theme === 'light' ? 'var(--Very-Dark-Blue-LightMode-Text)' : 'var(--White-Dark-Mode-Text-LightMode-Elements)'};
            background-color: ${props => props.theme === 'light' ? 'var(--White-Dark-Mode-Text-LightMode-Elements)' : 'var(--Dark-Blue-DarkMode-Elements)'};
            padding:5px 10px;
            margin:0 0 0 10px;
            &:hover{
                background-color: ${props => props.theme === 'light' ? 'hsl(0, 0%, 85%)' : 'var(--Very-Dark-Blue-LightMode-Text)'};;
            }
        }
        @media screen and (max-width: 1025px){
            align-items: flex-start;
            margin: 20px 0 0 0;
        }
        @media screen and (max-width:600px){
            justify-content: flex-start;
            align-items: flex-start;
            margin: 40px 0 10px 2px;
            ul{
                margin: 20px 0 0 0;
            }
            button{
                margin: 0 10px 0 0;
            }
        }
    }
    .border-countries-none{
        margin: 80px 0 0 0;
        span{
            margin: 10px 0 0 5px;
        }
        @media screen and (max-width: 1025px){
            margin: 20px 0 0 0;
        }
    }
`
export const FlagDetail = styled(Flag)`
    width: 42%;
    height: 400px;
    border-radius: 0;
    object-fit: fill;
    object-position: center;
    margin: 0 110px 0 0;
    box-shadow: 0 2px 2px 5px rgba(0,0,0,0.03);
    cursor: default;
    @media screen and (max-width:1025px){
        width: 40%;
        height: auto;
        margin: 0 30px 0 0;
    }
    @media screen and (max-width:600px){
        width: 100%;
        height: auto;
        margin: 0 0 20px 0;
    }
`
//Styled for attribution:
export const Attribution = styled.div`
    height:auto;
    display: flex;
    margin: 0 auto 10px;
    text-align: center;
    justify-content: center;
    @media screen and (max-width:600px){
        flex-direction: column;
        margin: 10px auto 10px;
    }
`
export const AttributionA = styled(Attribution)`
    margin:5px 0;
    a{
        ${props => props.theme === 'light' ? 'color: var(--Very-Dark-Blue-LightMode-Text)' : 'color: var(--White-Dark-Mode-Text-LightMode-Elements)'};
    }
    p{
        font-size: .8rem;
        color: ${props => props.theme === 'light' ? 'var(--Very-Dark-Blue-LightMode-Text)' : 'var(--White-Dark-Mode-Text-LightMode-Elements)'};
    }
`
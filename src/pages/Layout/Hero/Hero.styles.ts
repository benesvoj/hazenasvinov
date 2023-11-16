import styled from "styled-components";
import {assets} from "../../../assets";
import {Link} from "react-router-dom";

export const HeroContainer = styled.div`
  background-image: url(${assets.heroBg});
  width: 100%;
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: right;

  //&::before {
  //  content: "";
  //  position: absolute;
  //  width: 100%;
  //  height: 100%;
  //  top: 0;
  //  left: 0;
  //  background: rgba(0, 0, 0, 0.3) 0 0 no-repeat padding-box;
  //  z-index: 1;
  //}
`
export const HeroContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: inherit;
  align-items: flex-start;
  gap: 10rem;
  width: 100%;
  height: 50vh;
  //background: #00000066 0 0 no-repeat padding-box;
  //z-index: 5;
  //position: absolute;
`
export const GloryContainer = styled.div`
  margin-top: 5rem;
  width: 50%;
  //background-color: rgba(245, 247, 248, 0.11);
  display: flex;
  flex-direction: column;
`
export const Heading = styled.h1`
  font-size: 5rem;
  line-height: 5rem;
  margin: 1rem 0;
  text-transform: uppercase;
`
export const SubHeading = styled.span`
  font-size: 3rem;
  line-height: 3rem;
`

export const SearchContainer = styled.div`
  margin-top: 5rem;

  input {
    padding: 1em;
    border: none;
    margin-right: 1em;
    width: 40%;
    background-color: rgb(26, 26, 26);
    transition: 300ms ease all;

    &::placeholder {
      color: #F5F7F8
    }
    &:focus {
        outline: none;
    }
  }

  button {
    padding: 1em 3.5em;
    border: none;
    background-color: #F4CE14;
    color: #F5F7F8;
    font-weight: 100;
    text-transform: uppercase;
  }
`

export const DiscoverMoreButton = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  margin-top: 4rem;
  width: 60%;
  padding: 1em 2.5em;
  text-align: left;
  background-color: #F4CE14;
`
export const DiscoverMoreButtonLink = styled(Link)`
  color: #F5F7F8;
  font-size: 1.1rem;
  text-transform: uppercase;
  font-weight: 800;
  text-underline-offset: 0.5rem;
`

export const ArrowDown = styled.div`
  cursor: pointer;
  font-size: 2rem;
  padding: 0;
  margin: 0;
`
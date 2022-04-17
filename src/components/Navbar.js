import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useImageContext } from '../ImageContext'
import { useAPIContext } from '../APIContext'

const Navbar = () => {
    const {setImage,setVideo,
        setImageBitMap}=useImageContext()
    const {setResult}=useAPIContext()

    const resetStates=()=>{
        setResult({})
        setImageBitMap(null)
        setImage(null)
        setVideo(null)
    }
  return (
    <Wrapper>
        <header>
            <Link to='/' onClick={resetStates}>
                Home Page
            </Link>
            <Link to='/howitworks' onClick={resetStates}>
                How It Works?
            </Link>
        </header>
        <hr/>
    </Wrapper>
  )
}

export default Navbar



const Wrapper = styled.nav`
    width:100%;
    height:auto;
    background-color: #000;
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        a{
            margin: 0 1rem;
            color: var(--clr-white);
            padding: 0.2rem;
            font-size: 1.2rem;
            font-style: italic;
            text-decoration: none;
        }
    }
`
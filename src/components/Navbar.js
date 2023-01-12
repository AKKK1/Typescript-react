import React from 'react'
import styled from 'styled-components'

const Logo = styled.h1` 

cursor: pointer;
width: 30px;
height: 30px;
text-decoration: double;

`

const Navbar = () => {
    return (
        <div>
            <Logo>AC3</Logo>
        </div>
    )
}

export default Navbar
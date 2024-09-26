import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const Character = () => {
    const [character, setCharacter] = useState([]);

    const Background = styled.body`
        background-color: black;
    `
    const CharacterStyle = styled.div`
        font-family: 'Helvetica',
        color: white;
        border: 1px solid yellow;
        margin-bottom: 5%;
        margin-left: 40%;
        margin-right: 40%;
        padding: 10%;
    `

    useEffect(()=>{
        axios
        .get('https://swapi.dev/api/films')
        .then(res=>{
          setCharacter(res.data)
        })
        .catch(err=>{
          console.log(err)
        })
       },[])
    
    
    return (
        <Background>
        <div>
            {character.map((char) => {
                return <CharacterStyle>{char.name}</CharacterStyle>})}
        </div>
        </Background>
    ); 
        
}

export default Character;
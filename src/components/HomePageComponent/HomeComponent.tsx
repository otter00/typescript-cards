import React from 'react';
import styled from 'styled-components';
import HomePageStyles from './HomePageStyle.module.scss';

const BodyDiv = styled.div`
    margin: 10vh 10vw;
`

export default function HomePage() {
    return (
        <BodyDiv>
            <h1 className={HomePageStyles.title}>Start Learning English with Us!</h1>
        </BodyDiv>
    )
}
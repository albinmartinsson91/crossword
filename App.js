import React from 'react'

import styled from 'styled-components/native'

const DATA = [
    {
        x: 0,
        y: 0,
        letter: 'h',
        empty: false,
    },
    {
        x: 0,
        y: 1,
        letter: 'e',
        empty: false,
    },
    {
        x: 0,
        y: 2,
        letter: 'j',
        empty: false,
    },
    {
        x: 1,
        y: 1,
        letter: 'k',
    },
]

const SIZE = 48

export default function App() {
    return (
        <Container>
            {DATA.map(({ x, y, letter, empty }) => {
                return (
                    <Square
                        style={{
                            height: SIZE,
                            width: SIZE,
                            left: SIZE * x,
                            top: SIZE * y,
                        }}
                    />
                )
            })}
        </Container>
    )
}

const Container = styled.SafeAreaView`
    flex: 1;
    background: #fff;
`

const Square = styled.View`
    position: absolute;
    border: 1px solid black;
`

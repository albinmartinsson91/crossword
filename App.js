import React, { useState, Fragment } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import styled from 'styled-components/native'

const DATA = [
    {
        x: 1,
        y: 1,
        letter: 'h',
        empty: false,
        hintY: 'Hälsningsfras',
    },
    {
        x: 1,
        y: 2,
        letter: 'e',
        empty: false,
        hintX: 'Stort träd',
        hintY: 'Hälsningsfras',
    },
    {
        x: 1,
        y: 3,
        letter: 'j',
        empty: false,
        hintY: 'Hälsningsfras',
    },
    {
        x: 2,
        y: 2,
        letter: 'k',
        hintX: 'Stort träd',
    },
]

const SIZE = 48

export default function App() {
    const [hintX, setHintX] = useState(null)
    const [hintY, setHintY] = useState(null)

    const handleTextChange = text => {
        console.log(text)
    }

    const handleFocus = (hintY, hintX) => {
        setHintX(hintX)
        setHintY(hintY)
    }

    const handleBlur = (hintY, hintX) => {
        setHintX(hintX)
        setHintY(hintY)
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <Container>
                {DATA.map(({ x, y, letter, empty, hintX, hintY }, index) => {
                    return (
                        <Square
                            key={index}
                            maxLength={1}
                            onBlur={() => handleBlur(hintY, hintX)}
                            onFocus={() => handleFocus(hintY, hintX)}
                            onChangeText={text => handleTextChange(text)}
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
            <HintContainer>
                {hintX && <Hint>X:{hintX}</Hint>}
                {hintY && <Hint>Y:{hintY}</Hint>}
            </HintContainer>
        </KeyboardAvoidingView>
    )
}

const Container = styled.SafeAreaView`
    flex: 1;
    background: #fff;
`

const HintContainer = styled.KeyboardAvoidingView`
    padding: 12px;
    background: gray;
`

const Hint = styled.Text``

const Square = styled.TextInput`
    position: absolute;
    border: 1px solid black;
    text-align: center;
`

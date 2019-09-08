import React from 'react';
import style from 'styled-components'

export const ExpandedViewContainer = style.div`
height: 100vh;
width: 90vw;
border: 1px solid black;
`

export const ExpandedView = () => {
    return (
        <>
        <ExpandedViewContainer/>
        </>
    )
}
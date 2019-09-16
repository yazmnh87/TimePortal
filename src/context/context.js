import React from 'react'

const Context = React.createContext()



const GlobalProvider = (props) => {



    
    return (
        <Context.Provider value={{
            ...props
        }}>
    {props.children}
        </Context.Provider>
    )
}

export default function withProvider(C) {
    return  props => <Context.Consumer>
        {value => <C {...value}{...props}/>}
    </Context.Consumer>
}
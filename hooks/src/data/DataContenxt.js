import React from "react"
export const data = {
    number: 123,
    text: 'Context API...'
}

const DataContext = React.createContext(null) // ou assim React.createContext(data)

export default DataContext
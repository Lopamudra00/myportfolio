//for the functionality of toggle

import { createContext, useReducer } from "react";
export const themeContext = createContext();

const initialState = { darkMode: false }; // on making T/F , it will enable us to change the theme
const themeReducer = (state, action) => {

    switch (action.type) {
        case 'toggle':
            return { darkMode: !state.darkMode };
        default:
            return state;
    }
};

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, initialState);

    return (
        <themeContext.Provider value={{ state, dispatch }}>

            {props.children}


        </themeContext.Provider>
    );
};

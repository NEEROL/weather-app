import React from 'react';
import { Provider } from 'react-redux';
import store from './utils/store';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import Search from './components/Search/Search';
import Weather from './components/Weather/Weather';
import Footer from './components/Footer/Footer';
import Background from './components/Background/Background';

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        color: ${({ theme }) => theme.color.font};
        font-family: 'Roboto', sans-serif;
    }
`;

const Wrapper = styled.div`
    width: 1000px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Column = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Background />
                <Wrapper>
                    <Search />
                    <Column>
                        <Weather />
                    </Column>
                    <Footer />
                </Wrapper>
            </ThemeProvider>
        </Provider>
    );
}

export default App;

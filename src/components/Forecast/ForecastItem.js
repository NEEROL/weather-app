import React from 'react';
import styled, { useTheme } from 'styled-components';

const StyledForecastItem = styled.li`
    width: 130px;
    height: 150px;
    border: ${(props) => props.theme.color.forecastBorder};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: ${(props) => props.theme.color.forecastBg};
    transition: box-shadow 250ms;

    :not(:last-child) {
        margin-right: 10px;
    }
`;

const ForecastList = ({ data: { dt, weather }, focus, handleClick }) => {
    const theme = useTheme();
    const date = new Date(dt * 1000);
    const nameOfDate = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
    return (
        <StyledForecastItem style={focus ? { boxShadow: theme.color.forecastBorderOnFocus } : null} onClick={handleClick}>
            <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="Ikona pogody" />
            <span>{nameOfDate[date.getDay()]}</span>
        </StyledForecastItem>
    );
};

export default ForecastList;

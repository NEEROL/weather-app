import React from 'react';
import styled from 'styled-components';

const StyledForecast = styled.div`
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const StyledTemperature = styled.p`
    margin: 0;
    text-align: center;
    color: #ffffff;
    font-size: 30px;
`;

const StyledName = styled.p`
    text-align: center;
    font-size: 20px;
    margin: 10px 0;
`;

const StyledDescription = styled.p`
    margin: 0;
    text-align: center;
`;

const General = ({ data, active }) => {
    const capitalize = (string) => string[0].toUpperCase() + string.slice(1);

    return (
        <StyledForecast>
            <img src={`http://openweathermap.org/img/wn/${data.daily[active].weather[0].icon}@4x.png`} alt="Ikona pogody" width="150px" />
            <StyledTemperature>
                {Math.round(data.daily[active].temp.day)}
                °C
            </StyledTemperature>
            <StyledName>
                {data.name}, {data.sys.country}
            </StyledName>
            <StyledDescription>{capitalize(data.daily[active].weather[0].description)}</StyledDescription>
        </StyledForecast>
    );
};

export default General;

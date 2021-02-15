import React from 'react';
import styled from 'styled-components';

const StyledDetails = styled.ul`
    list-style: none;
    border-left: 4px solid #068599;
    font-size: 17px;
`;

const StyledDetail = styled.li`
    width: 250px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;

    :last-child {
        margin-bottom: 0;
    }
`;

const StyledLabel = styled.span`
    font-weight: 700;
`;

const StyledValue = styled.span`
    text-align: right;
`;

const Details = ({ data, active }) => {
    return (
        <StyledDetails>
            <StyledDetail>
                <StyledLabel>Odczuwalna temp.</StyledLabel> <StyledValue>{Math.round(data.daily[active].feels_like.day)}°C</StyledValue>
            </StyledDetail>
            <StyledDetail>
                <StyledLabel>Temp. minimalna</StyledLabel> <StyledValue>{Math.round(data.daily[active].temp.min)}°C</StyledValue>
            </StyledDetail>
            <StyledDetail>
                <StyledLabel>Temp. maksymalna</StyledLabel> <StyledValue>{Math.round(data.daily[active].temp.max)}°C</StyledValue>
            </StyledDetail>
            <StyledDetail>
                <StyledLabel>Temp. rano</StyledLabel> <StyledValue>{Math.round(data.daily[active].temp.morn)}°C</StyledValue>
            </StyledDetail>
            <StyledDetail>
                <StyledLabel>Temp. w nocy</StyledLabel> <StyledValue>{Math.round(data.daily[active].temp.night)}°C</StyledValue>
            </StyledDetail>
            <StyledDetail>
                <StyledLabel>Wilgotność</StyledLabel> <StyledValue>{data.daily[active].humidity}%</StyledValue>
            </StyledDetail>
            <StyledDetail>
                <StyledLabel>Ciśnienie</StyledLabel> <StyledValue>{data.daily[active].pressure} hPa</StyledValue>
            </StyledDetail>
            <StyledDetail>
                <StyledLabel>Prędkość wiatru</StyledLabel> <StyledValue>{data.daily[active].wind_speed} km/h</StyledValue>
            </StyledDetail>
        </StyledDetails>
    );
};

export default Details;

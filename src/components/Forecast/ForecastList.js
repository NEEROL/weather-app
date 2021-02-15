import React from 'react';
import styled from 'styled-components';

const StyledForecastList = styled.ul`
    list-style: none;
    display: flex;
`;

const ForecastList = ({ children }) => {
    return <StyledForecastList>{children}</StyledForecastList>;
};

export default ForecastList;

import React from 'react';
import { useSelector } from 'react-redux';
import styled, { useTheme } from 'styled-components';
import { ReactComponent as Mountains } from '../../assets/mountains.svg';
import { ReactComponent as Sun } from '../../assets/sun.svg';
import { ReactComponent as Moon } from '../../assets/moon.svg';
import { ReactComponent as Tree } from '../../assets/tree.svg';

const StyledBackground = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    position: fixed;
    z-index: -100;
    transition: background-color 500ms;
`;

const Grass = styled.div`
    width: 100vw;
    height: 15vh;
    bottom: 0;
    left: 0;
    position: absolute;
    transition: background-color 500ms;
    z-index: -20;
`;

const StyledMountains = styled(Mountains)`
    width: 1000px;
    bottom: 0;
    right: 0;
    position: absolute;
    transform: translateY(10%);
    z-index: -30;
`;

const StyledSun = styled(Sun)`
    width: 130px;
    top: 1%;
    right: 18%;
    position: absolute;
    z-index: -50;
    transition: transform 500ms;
`;

const StyledMoon = styled(Moon)`
    top: 6%;
    right: 18.5%;
    position: absolute;
    z-index: -50;
    transition: transform 500ms;
`;

const StyledTree = styled(Tree)`
    height: 500px;
    bottom: 9%;
    left: 0;
    position: absolute;
    z-index: -10;
    & * {
        transition: fill 500ms;
    }
`;

const StyledTreeInNight = styled(StyledTree)`
    ${(props) => props.theme.color.treeInNight.map((color, index) => `#leaf${index + 1} { fill: ${color}; }`)}

    .stump {
        fill: ${(props) => props.theme.color.stumpInNight};
    }
    .stump_outline {
        fill: ${(props) => props.theme.color.stump_outlineInNight};
    }
`;

const Background = () => {
    const isNight = useSelector(({ night }) => night);
    const theme = useTheme();

    return (
        <StyledBackground style={{ backgroundColor: isNight ? theme.color.skyInNight : theme.color.sky }}>
            <StyledMountains />
            <StyledSun style={{ transform: isNight ? 'translateY(500px)' : 'translateY(0px)' }} />
            <StyledMoon style={{ transform: isNight ? 'translateY(0px)' : 'translateY(500px)' }} />
            {isNight ? <StyledTreeInNight /> : <StyledTree />}
            <Grass style={{ backgroundColor: isNight ? theme.color.grassInNight : theme.color.grass }} />
        </StyledBackground>
    );
};

export default Background;

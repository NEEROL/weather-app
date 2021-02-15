import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { useDispatch } from 'react-redux';
import { setCity } from '../../actions/city';

const StyledForm = styled.form`
    width: 30%;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

const StyledInput = styled.input`
    width: 80%;
    border: none;
    outline: none;
    border-bottom: 2px solid #fff;
    background: transparent;
    color: #fff;
    padding: 10px 5px;
    font-size: 15px;
    transition: border-bottom 250ms;

    :focus {
        border-bottom: 2px solid #7289da;
    }

    ::placeholder {
        color: rgba(255, 255, 255, 0.5);
    }
`;

const StyledButton = styled.button`
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
`;

const Search = () => {
    const [cityInput, setCityInput] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setCity(cityInput));
    };

    const handleChange = (e) => setCityInput(e.target.value);

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledInput type="text" placeholder="Wpisz nazwę miasta" value={cityInput} onChange={handleChange} required />
            <StyledButton type="submit">
                <SearchIcon />
            </StyledButton>
        </StyledForm>
    );
};

export default Search;

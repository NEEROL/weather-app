import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setNight } from '../../actions/night';
import { getWeatherInfo } from '../../api/weather';
import { isNight } from '../../utils/functions';
import Loading from '../Loading/Loading';
import General from './General';
import Details from './Details';
import ForecastItem from '../Forecast/ForecastItem';
import ForecastList from '../Forecast/ForecastList';

const Row = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Weather = () => {
    const city = useSelector(({ city }) => city);

    const dispatch = useDispatch();

    const [info, setInfo] = useState(null);
    const [active, setActive] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const cityInfo = await getWeatherInfo(city);
                return cityInfo;
            } catch (e) {
                throw new Error(e);
            }
        }

        setInfo(null);
        setLoading(true);
        setError(false);

        fetchData()
            .then((data) => {
                if (data.cod === '404') {
                    setError(true);
                    setInfo('Nie znaleziono takiego miasta');
                } else {
                    setInfo(data);
                    setActive(0);
                    const night = isNight(new Date(data.sys.sunrise).getTime(), new Date(data.sys.sunset).getTime());
                    dispatch(setNight(night));
                }
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, [city, dispatch]);

    if (loading) return <Loading />;
    else if (error) return <>{info}</>;
    else
        return (
            <>
                <Row>
                    <General data={info} active={active} />
                    <Details data={info} active={active} />
                </Row>
                <ForecastList>
                    {info.daily.slice(0, 7).map((data, index) => (
                        <ForecastItem data={data} key={index} focus={active === index} handleClick={() => setActive(index)} />
                    ))}
                </ForecastList>
            </>
        );
};

export default Weather;

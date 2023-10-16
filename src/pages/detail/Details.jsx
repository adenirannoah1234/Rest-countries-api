import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const Details = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  console.log(name);
  const [details, setDetails] = useState();

  const getCountriesDetails = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const data = await response.json();
    setDetails(data);
    console.log(data);
  };

  useEffect(() => {
    getCountriesDetails();
  }, []);

  const handleDetailsClick = () => {
    navigate('/');
  };

  useEffect(() => {
    return () => {};
  }, []);

  const currencies = {
    name: 'Euro',
    symbol: '€',
  };

  return (
    <div className="main-details">
      <button onClick={handleDetailsClick}>
        {' '}
        <FaArrowLeft />
        Go home
      </button>
      {details &&
        details.map((details) => (
          <div className="details">
            <img className="detimage" src={details.flags.png} alt="" />
            <div className="detlist">
              <h1>{details.name.common}</h1>

              <ul>
                <li>
                  Native Name: <span>{details.demonyms.eng.m}</span>
                </li>
                <li>
                  Population: <span>{details.population}</span>
                </li>
                <li>
                  Region: <span>{details.region}</span>
                </li>
                <li>
                  Sub Region: <span>{details.subregion}</span>
                </li>
                <li>
                  Capital: <span>{details.capital}</span>
                </li>
              </ul>
              <div className="detlist1">
                <h4>Border Countries: </h4>
                <div className="detchild">{details.borders}</div>
              </div>
            </div>
            <div className="detlist2">
              <ul>
                <li>
                  Top Level Dommain: <span>{details.tld}</span>
                </li>
                <li>
                  Currencies: <span>{details.currencies.name}</span>
                </li>
                <li>
                  Languages: <span></span>
                </li>
              </ul>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Details;

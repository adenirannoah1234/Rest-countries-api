import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Details from '../../pages/detail/Details';

const CountryOne = ({ country }) => {
  const navigate = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div
      className="country"
      onClick={() => navigate(`/details/${country.name.common}`)}
    >
      <img className="germany" src={country.flags.png} alt="" />
      <div className="content">
        <h3>{country.name.common}</h3>
        <div className="info">
          <p>
            Population: <span>{country.population}</span>
          </p>
          <p>
            Region: <span>{country.region}</span>
          </p>
          <p>
            Capital: <span>{country.capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryOne;

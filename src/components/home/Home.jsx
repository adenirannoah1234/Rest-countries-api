import { useState } from 'react';
import CountryOne from '../countryone/CountryOne';
import { useEffect } from 'react';

const Home = () => {
  const [dropDown, setDropDown] = useState(false);
  const [originalCountries, setOriginalCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [filterRegion, setFilterRegion] = useState([]);

  const toggleDropdown = () => {
    setDropDown(!dropDown);
  };

  const getAllCountries = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    setOriginalCountries(data);
    setCountries(data);
    console.log(data);
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  const handleRegionSelect = async (region) => {
    console.log(region);
    try {
      const response =
        await fetch(`https://restcountries.com/v3.1/region/${region}
      
      `);
      const data = await response.json();
      setCountries(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching filter regions', error);
    }
    setDropDown(false);
  };

  const filterAllCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      setFilterRegion(data);
      console.log(data);
      if (Array.isArray(data)) {
        const regions = [...new Set(data.map((country) => country.region))];
        setFilterRegion(regions);
      }
    } catch (error) {
      console.error('Error fetching filter regions:', error);
    }
  };

  useEffect(() => {
    filterAllCountries();
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredCountries = originalCountries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm)
    );
    setCountries(filteredCountries);
  };

  return (
    <>
      <div className="main-searchdiv">
        <div className="search-div">
          <span className="sicon">
            <i class="ri-search-line"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search for a country..."
            onChange={handleSearch}
          />
        </div>
        <div className="dropdown">
          <div className="dropdown-btn">
            <p>Filter by Region</p>
            <i onClick={toggleDropdown} class="ri-arrow-drop-down-line"></i>
          </div>
          {dropDown && (
            <div className="dropdown-content">
              <ul className="list">
                {filterRegion.map((region) => (
                  <li key={region} onClick={() => handleRegionSelect(region)}>
                    {region}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="countries">
        {countries &&
          countries.map((country) => <CountryOne country={country} />)}
      </div>
    </>
  );
};

export default Home;

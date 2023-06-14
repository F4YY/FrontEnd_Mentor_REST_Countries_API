import React from 'react';
import { Container } from './styled/container.styled';
import { CountryDetail } from './CountryDetail';
import { Arrowdown, Attribution, AttributionA, Body, CountryCard, Dropdownlist, Flag, Header, Hstack, Hstackflexi, SearchBar } from './styled/RestCountries.styled';
import sun from './images/icon-sun.svg';
import moon from './images/icon-moon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const RestAPIcountries = () => {
  const [theme, setTheme] = React.useState('light');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [regionFilter, setRegionFilter] = React.useState('');
  const [countries, setCountries] = React.useState([]);
  const [selectedCountry, setSelectedCountry] = React.useState(undefined);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  React.useEffect(() => {
    fetch('https://restcountries.com/v3/all?fields=name,capital,flags,population,region,subregion,borders,currencies,languages')
      .then(response => response.json())
      .then(data => setCountries(data));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setRegionFilter('');
  };

  const handleFilter = (selectedOption) => {
    if (selectedOption.value === '') {
      setRegionFilter('');
    } else {
      setRegionFilter(selectedOption.value);
    }
    setSearchTerm('');
  };
  const selectRef = React.useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const filteredCountries = countries.filter(country => {
    if (regionFilter && country.region !== regionFilter) {
      return false;
    }
    return country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
  });
  const sortedCountries = filteredCountries.sort((a, b) => a.name.common.localeCompare(b.name.common));

  const handleSelectedCountry = (country) => {
    setSelectedCountry(country);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const options = [
    { value: '', label: 'All Countries' },
    { value: 'Africa', label: 'Africa' },
    { value: 'Americas', label: 'Americas' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
    { value: 'Antarctic', label: 'Antarctica'}
  ];

  return (
    <Container theme={theme}>
      <Header theme={theme}>
        <h1>Where in the world?</h1>
        <Hstack onClick={toggleTheme}>
          <img src={theme === 'light' ? moon : sun} alt="theme toggle"/>
          <p>
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </p>
        </Hstack>
      </Header>
      {!selectedCountry ? (
      <Body>
        <Hstackflexi className='sorterfilter'>
          <SearchBar theme={theme}>
            <Hstack className='searcher'>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{
                  display: 'flex',
                  position: 'absolute',
                  color: theme === 'light' ? 'var(--Dark-Gray-LightMode-Input)' : 'var(--White-Dark-Mode-Text-LightMode-Elements)',
                  top: '40%',
                  left: '1.5rem',
                  zIndex: 1,
                }}
              />
              <input
                type="text"
                placeholder="Search for a country..."
                value={searchTerm}
                onChange={handleSearch}
                className="search-input"
              />
            </Hstack>
          </SearchBar>
          <Dropdownlist
            theme={theme}
            className={`custom-dropdown ${dropdownOpen ? 'open' : ''}`}
            ref={selectRef}
          >
            <Hstack className="selected-option" onClick={toggleDropdown}>
              {options.find((option) => option.value === regionFilter) && 'Filter by Region...'}
              {dropdownOpen ?
              (<Arrowdown className={`${dropdownOpen && "rotate"}`}/>)
              : (<Arrowdown className={`${!dropdownOpen && "default"}`} />)}
            </Hstack>
            <ul className="options">
              {options.map((option) => (
                <li
                  key={option.value}
                  className={`option ${option.value === regionFilter ? 'selected' : ''}`}
                  onClick={() => handleFilter(option)}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          </Dropdownlist>
        </Hstackflexi>
        <Hstack className='Country-list'>
          {sortedCountries.map(country => (
            <CountryCard theme={theme} key={country.name.common}>
              <Flag src={country.flags[0]} alt={country.name.common} onClick={() => handleSelectedCountry(country)} />
              <h2 onClick={() => handleSelectedCountry(country)}>{country.name.common}</h2>
              <Hstack>
                <p>Population:</p><span>{country.population}</span>
              </Hstack>
              <Hstack>
                <p>Region:</p><span>{country.region}</span>
              </Hstack>
              <Hstack>
                <p>Capital:</p>{country.capital.length > 0 ? <span>{country.capital[0]}</span> : <span>-</span>}
              </Hstack>
            </CountryCard>
          ))}
        </Hstack>
      </Body>
      ) : (
        <CountryDetail
            theme={theme}
            selectedCountry={selectedCountry}
            handleSelectedCountry={handleSelectedCountry}
        />)
      }
      <footer>
        <Attribution>
          <AttributionA theme={theme}>
            <p><i>Challenge by</i><a href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca/hub" rel="noreferrer" target="_blank">&nbsp;Frontend Mentor | REST Countries API.</a></p>
          </AttributionA>
          <AttributionA theme={theme}>
            <p>&nbsp;&nbsp;<i>Coded by</i><a href="https://www.linkedin.com/in/rikiwendri/">&nbsp;Riki Wendri</a></p>
          </AttributionA>
        </Attribution>
      </footer>
    </Container>
  );
};

export default RestAPIcountries;





import React from 'react';
import { FlagDetail, Hstack, Hstackflexi, StyledCountryDetails, Vstack } from './styled/RestCountries.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const CountryDetail = (props) => {
  const handleToHome = () => {
    props.handleSelectedCountry(null);
  };

  const [borderCountryNames, setBorderCountryNames] = React.useState([]);

  React.useEffect(() => {
    const fetchBorderCountryNames = async () => {
      const borderCountryNames = await Promise.all(props.selectedCountry.borders.map(async (borderName) => {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${borderName}`);
        if (response.ok) {
          const borderCountryData = await response.json();
          return borderCountryData[0].name.common;
        }
      }));
      setBorderCountryNames(borderCountryNames);
    };
    fetchBorderCountryNames();
    scrollToTop();
  }, [props.selectedCountry.borders]);

  const handleBorderClick = (borderName) => {
    const selectedCountry = props.countries.find((country) => country.name.common === borderName);
    props.handleSelectedCountry(selectedCountry);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const BackButton = () => {
    return (
      <button onClick={handleToHome}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{
            display: 'inline-block',
            color: props.theme === 'light' ? 'var(--Very-Dark-Blue-LightMode-Text)' : 'var(--White-Dark-Mode-Text-LightMode-Elements)',
            margin: '0 20px 0 -10px'}}
        />
        Back
      </button>
    );
  };

  const CountryInfo = () => {
    return (
      <Hstackflexi>
        <Vstack className='country-detail-info'>
          <Hstack className='text-aligner'>
            <p>Native Name:</p>
            {props.selectedCountry.name.nativeName && Object.values(props.selectedCountry.name.nativeName)[0] ? (
              <span>{Object.values(props.selectedCountry.name.nativeName)[0].official}</span>
            ) : (
              <span>-</span>
            )}
          </Hstack>
          <Hstack>
            <p>Population:</p><span>{props.selectedCountry.population}</span>
          </Hstack>
          <Hstack>
            <p>Region:</p><span>{props.selectedCountry.region}</span>
          </Hstack>
          <Hstack>
            <p>Sub Region:</p>{props.selectedCountry.subregion ?<span>{props.selectedCountry.subregion}</span> : <span>-</span>}
          </Hstack>
          <Hstack>
            <p>Capital:</p>{props.selectedCountry.capital.length > 0 ? <span>{props.selectedCountry.capital[0]}</span> : <span>-</span>}
          </Hstack>
        </Vstack>
        <Vstack>
          <Hstack className='top-level'>
            <p>Top Level Domain:</p>
            {props.selectedCountry.tld ? <span>{props.selectedCountry.tld}</span> : <span>-</span>}
          </Hstack>
          <Hstack className='text-aligner'>
            <p>Currencies:</p>
            {props.selectedCountry.currencies && Object.values(props.selectedCountry.currencies)[0] ? <span>{Object.values(props.selectedCountry.currencies)[0].name}</span> : <span>-</span>}
          </Hstack>
          <Hstack className='text-aligner'>
            <p>Languages:</p>
            {props.selectedCountry.languages && Object.values(props.selectedCountry.languages)[0] ? <span>{Object.values(props.selectedCountry.languages).join(', ')}</span> : <span>-</span>}
          </Hstack>
        </Vstack>
      </Hstackflexi>
    );
  };

  return (
    <StyledCountryDetails theme={props.theme}>
      {props.selectedCountry && props.selectedCountry.borders.length > 0 ? (
        <>
          <BackButton/>
          <Hstackflexi className='Country-detail'>
            <FlagDetail src={props.selectedCountry.flags[0]} alt={props.selectedCountry.name.common} />
            <Vstack>
              <h2>{props.selectedCountry.name.common}</h2>
              <CountryInfo
                theme={props.theme}
                selectedCountry={props.selectedCountry}
              />
              {props.selectedCountry.borders && (
              <Hstackflexi className='border-countries'>
                <p>Border Countries:</p>
                <ul>
                  {borderCountryNames.map((borderName) => (
                    <li key={borderName}>
                      <button onClick={() => handleBorderClick(borderName)}>{borderName}</button>
                    </li>
                  ))}
                </ul>
              </Hstackflexi>
              )}
            </Vstack>
          </Hstackflexi>
        </>) : (
          <>
          <BackButton/>
          <Hstackflexi className='Country-detail'>
            <FlagDetail src={props.selectedCountry.flags[0]} alt={props.selectedCountry.name.common} />
            <Vstack>
              <h2>{props.selectedCountry.name.common}</h2>
              <CountryInfo
                theme={props.theme}
                selectedCountry={props.selectedCountry}
              />
              {props.selectedCountry.borders && (
              <Hstack className='border-countries-none'>
                <p>Border Countries:</p><span>-</span>
              </Hstack>
              )}
            </Vstack>
          </Hstackflexi>
        </>
      )}
    </StyledCountryDetails>
  );
};

import React from 'react';
import { FlagDetail, Hstack, Hstackflexi, StyledCountryDetails, Vstack } from './styled/RestCountries.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const CountryDetail = (props) => {
  const handleToHome = () => {
    props.handleSelectedCountry(null);
  };
  const [countryBorders, setCountryBorders] = React.useState([]);

  React.useEffect(() => {
    if (props.selectedCountry && props.selectedCountry.borders) {
      const borderCountryCodes = props.selectedCountry.borders.join(';');
      fetch(`https://restcountries.com/v3/alpha?codes=${borderCountryCodes}`)
        .then(response => response.json())
        .then(data => setCountryBorders(data));
    }
  }, [props.selectedCountry]);

  const handleBorderClick = (border) => {
    fetch(`https://restcountries.com/v3/alpha/${border}`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          props.handleSelectedCountry(data[0]);
        }
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
          <Hstack>
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
          <Hstack style={{alignItems: 'flex-start'}}>
            <p>Currencies:</p>
            {props.selectedCountry.currencies && Object.values(props.selectedCountry.currencies)[0] ? <span>{Object.values(props.selectedCountry.currencies)[0].name}</span> : <span>-</span>}
          </Hstack>
          <Hstack style={{alignItems: 'flex-start'}}>
            <p>Languages:</p>
            {props.selectedCountry.languages && Object.values(props.selectedCountry.languages)[0] ? <span>{Object.values(props.selectedCountry.languages).join(', ')}</span> : <span>-</span>}
          </Hstack>
        </Vstack>
      </Hstackflexi>
    );
  };

  return (
    <StyledCountryDetails theme={props.theme}>
      {props.selectedCountry && countryBorders.length > 0 ? (
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
                  {props.selectedCountry.borders.map(border => (
                    <li key={border}>
                      <button onClick={() => handleBorderClick(border)}>
                        {border}
                      </button>
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


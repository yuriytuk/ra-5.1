import React from 'react';
import News from './News';
import SearchYandex from './Search';
import ThemeCatalog from './ThemeCatalog';
import Weather from './Weather';
import CountryMap from './CountryMap';
import TvProgramOn from './TvProgramOn';
import TvProgram from './TvProgram';
import Mistake from './Mistake';
import Money from './Money';
import PopularArticles from './PopularArticles';
import Reklama from './Reklama';

const Yandex = () => {
  
  return (
    <>
      <div className='container'>
        <div className='news_mistake'>
          <div className='news_money'>
            <News />
            <Money />
          </div>
          <Mistake />
        </div>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'flex-start'
        }}>
          <div className='logo_yandex'></div>
          <div className='searh_div'>
            <ThemeCatalog />
            <SearchYandex />
          </div>
        </div>
        <Reklama />
        <div className='catalog'>
          <div>
            <Weather />
            <PopularArticles />
          </div>
          <div>
            <CountryMap />
            <TvProgram />
          </div>
          <div>
            <TvProgramOn />
          </div>          
        </div>
      </div>
    </>
  );
};

export default Yandex;
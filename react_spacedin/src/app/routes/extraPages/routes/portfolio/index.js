import React from 'react';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';

const Portfolio = ({match}) => {
  return (
    <div className="animated slideInUpTiny animation-duration-3">
      <div className="filter-with-bg-color text-center">
        <ContainerHeader
          styleName="text-center"
          title={<IntlMessages id="extraPages.ourClients"/>} match={match}
        />

        <ul className="list-inline">
          <li>
            <span className="jr-link"><IntlMessages id="extraPages.all"/></span>
          </li>
          <li>
            <span className="jr-link"><IntlMessages id="extraPages.graphicDesign"/></span>
          </li>
          <li>
            <span className="jr-link"><IntlMessages id="extraPages.logo"/></span>
          </li>
          <li>
            <span className="jr-link"><IntlMessages id="extraPages.mobileApp"/></span>
          </li>
          <li>
            <span className="jr-link"><IntlMessages id="extraPages.web"/></span>
          </li>
        </ul>
      </div>

      <div className="portfolio-section">
        <div className="row">
          <div className="col-6 col-md-3 col-sm-4">
            <div className="card-image">
              <img src="https://via.placeholder.com/600x600" alt="..."/>
            </div>
          </div>

          <div className="col-6 col-md-3 col-sm-4">
            <div className="card-image">
              <img src="https://via.placeholder.com/600x600" alt="..."/>
            </div>
          </div>

          <div className="col-6 col-md-3 col-sm-4">
            <div className="card-image">
              <img src="https://via.placeholder.com/600x600" alt="..."/>
            </div>
          </div>

          <div className="col-6 col-md-3 col-sm-4">
            <div className="card-image">
              <img src="https://via.placeholder.com/600x600" alt="..."/>
            </div>
          </div>

          <div className="col-6 col-md-3 col-sm-4">
            <div className="card-image">
              <img src="https://via.placeholder.com/600x600" alt="..."/>
            </div>
          </div>

          <div className="col-6 col-md-3 col-sm-4">
            <div className="card-image">
              <img src="https://via.placeholder.com/600x600" alt="..."/>
            </div>
          </div>

          <div className="col-6 col-md-3 col-sm-4">
            <div className="card-image">
              <img src="https://via.placeholder.com/600x600" alt="..."/>
            </div>
          </div>

          <div className="col-6 col-md-3 col-sm-4">
            <div className="card-image">
              <img src="https://via.placeholder.com/600x600" alt="..."/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;


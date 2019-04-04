import React from 'react';
import ProfileCard from 'components/ProfileCard/index';
import ContainerHeader from 'components/ContainerHeader'
import IntlMessages from 'util/IntlMessages';

const Blog = ({match}) => {
  return (
    <div className="animated slideInUpTiny animation-duration-3">
      <ContainerHeader title={<IntlMessages id="sidebar.extraPages.blog"/>} match={match}/>
      <div className="row">
        <div className="col-md-8 col-sm-7 col-12 animation slideInLeft">
          <div className="card shadow border-0 text-muted">
            <img className="card-img-top" src='https://via.placeholder.com/500x330' alt="post"/>

            <div className="card-body">
              <h3>Let’s figure out does the nature work...</h3>
              <div className="meta-wrapper">
                <span className="meta-date"><i className="zmdi zmdi-calendar-note zmdi-hc-lg"/>25 May, 2016</span>
                <span className="meta-comment"><i className="zmdi zmdi-comment-text zmdi-hc-lg"/>23 Comments</span>
              </div>
              <p className="card-text">
                It’s no secret that the digital industry is booming. From exciting startups to global
                brands, out to digital agencies, responding to the new possibilities available. However,
                the industry overcrowded, heaving with agencies offering similar services — on the
                surface, at least. projects is the key to standing out. Unique side projects are the
                best place to innovate, but creatively lucrative work is tricky. So, this article looks
                at …
              </p>

              <div>
                <span className="right-arrow jr-link">Continue Reading</span>
              </div>
            </div>
          </div>

          <div className="card shadow border-0 text-muted">
            <img className="card-img-top" src="https://via.placeholder.com/500x330" alt="post"/>

            <div className="card-body">
              <h3>5 DIYs for you to try at home</h3>
              <div className="meta-wrapper">
                <span className="meta-date"><i className="zmdi zmdi-calendar-note zmdi-hc-lg"/>25 May, 2016</span>
                <span className="meta-comment"><i className="zmdi zmdi-comment-text zmdi-hc-lg"/>23 Comments</span>
              </div>
              <p className="card-text">
                It’s no secret that the digital industry is booming. From exciting startups to global
                brands, out to digital agencies, responding to the new possibilities available. However,
                the industry overcrowded, heaving with agencies offering similar services — on the
                surface, at least. projects is the key to standing out. Unique side projects are the
                best place to innovate, but creatively lucrative work is tricky. So, this article looks
                at …
              </p>

              <div>
                <span className="right-arrow jr-link">Continue Reading</span>
              </div>
            </div>
          </div>

          <div className="card shadow border-0 text-muted">
            <img className="card-img-top" src="https://via.placeholder.com/500x330" alt="post"/>

            <div className="card-body">
              <h3>Nature makes you feel alive</h3>
              <div className="meta-wrapper">
                <span className="meta-date"><i className="zmdi zmdi-calendar-note zmdi-hc-lg"/>25 May, 2016</span>
                <span className="meta-comment"><i className="zmdi zmdi-comment-text zmdi-hc-lg"/>23 Comments</span>
              </div>
              <p className="card-text">
                It’s no secret that the digital industry is booming. From exciting startups to global
                brands, out to digital agencies, responding to the new possibilities available. However,
                the industry overcrowded, heaving with agencies offering similar services — on the
                surface, at least. projects is the key to standing out. Unique side projects are the
                best place to innovate, but creatively lucrative work is tricky. So, this article looks
                at …
              </p>

              <div>
                <span className="right-arrow jr-link">Continue Reading</span>
              </div>
            </div>
          </div>

          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center my-3 my-sm-5">
              <li className="page-item disabled">
                <span className="page-link jr-link" tabIndex="-1">Previous</span>
              </li>
              <li className="page-item"><span className="page-link jr-link">1</span></li>
              <li className="page-item"><span className="page-link jr-link">2</span></li>
              <li className="page-item"><span className="page-link jr-link">3</span></li>
              <li className="page-item">
                <span className="page-link jr-link">Next</span>
              </li>
            </ul>
          </nav>
        </div>

        <div className="col-md-4 col-sm-5 col-12 animation slideInRight">
          <div className="sidebar">
            <ProfileCard/>

            <div className="card shadow border-0 bg-white p-2">
              <form className="m-0" role="search">
                <div className="search-bar">
                  <div className="form-group">
                    <input type="search" className="form-control form-control-lg border-0"
                           placeholder="Search..."/>
                    <button className="search-icon">
                      <i className="zmdi zmdi-search zmdi-hc-lg"/>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="card shadow border-0 p-4">
              <h3 className="text-uppercase letter-spacing-base mb-3">Categories</h3>

              <ul className="categories-list list-unstyled">
                <li><span className="jr-link">Technology</span></li>
                <li><span className="jr-link">Branding</span></li>
                <li><span className="jr-link">Holly</span></li>
                <li className="active"><span className="jr-link">Stories</span></li>
                <li><span className="jr-link">Designing</span></li>
                <li><span className="jr-link">Programing</span></li>
              </ul>
            </div>

            <div className="card shadow border-0 p-4">
              <h3 className="text-uppercase letter-spacing-base mb-4">Popular Articles</h3>

              <ul className="articles-section list-unstyled">
                <li className="articles">
                  <span className="article-image jr-link">
                    <img src="https://via.placeholder.com/500x330" alt="Articales Post"/>
                  </span>

                  <div className="article-description">
                    <p><span className="jr-link">English breakfast.jpeg tea with desert donut</span>
                    </p>
                    <div className="meta-wrapper">
                                            <span className="meta-date"><i
                                              className="zmdi zmdi-calendar-note zmdi-hc-lg"/>25 May, 2016</span>
                    </div>
                  </div>
                </li>

                <li className="articles">
                  <span className="article-image jr-link">
                    <img src='https://via.placeholder.com/500x330' alt="Articales Post"/>
                  </span>

                  <div className="article-description">
                    <p><span className="jr-link">Two smart kids reading through tablet</span></p>
                    <div className="meta-wrapper">
                                            <span className="meta-date"><i
                                              className="zmdi zmdi-calendar-note zmdi-hc-lg"/>25 May, 2016</span>
                    </div>
                  </div>
                </li>

                <li className="articles">
                  <span className="article-image jr-link">
                    <img src="https://via.placeholder.com/500x330" alt="Articales Post"/>
                  </span>

                  <div className="article-description">
                    <p><span className="jr-link">Co-founder trying to explain his idea to his
                      employers</span></p>
                    <div className="meta-wrapper">
                                            <span className="meta-date"><i
                                              className="zmdi zmdi-calendar-note zmdi-hc-lg"/>25 May, 2016</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;


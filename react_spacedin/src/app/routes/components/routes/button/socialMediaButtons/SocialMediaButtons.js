import React from 'react';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';

const SocialMediaButtons = () => {
  return (
    <div>
      <div className="jr-btn-group">
        <Fab  className="jr-fab-btn bg-light-blue accent-2 text-white">
          <i className="zmdi zmdi-twitter zmdi-hc-lg"/>
        </Fab>
        <Fab  className="jr-fab-btn bg-indigo lighten-1 text-white">
          <i className="zmdi zmdi-facebook zmdi-hc-lg"/>
        </Fab>
        <Fab  className="jr-fab-btn bg-red lighten-1 text-white">
          <i className="zmdi zmdi-google zmdi-hc-lg"/>
        </Fab>
        <Fab  className="jr-fab-btn bg-red darken-2 text-white">
          <i className="zmdi zmdi-pinterest zmdi-hc-lg"/>
        </Fab>
        <Fab  className="jr-fab-btn bg-brown lighten-1 text-white">
          <i className="zmdi zmdi-instagram zmdi-hc-lg"/>
        </Fab>

        <Fab  className="jr-fab-btn bg-warning text-white">
          <i className="zmdi zmdi-rss zmdi-hc-lg"/>
        </Fab>
        <Button  className="jr-fab-btn bg-blue-grey text-white">
          <i className="zmdi zmdi-tumblr zmdi-hc-lg"/>
        </Button>
        <Button  className="jr-fab-btn bg-light-blue darken-3 text-white">
          <i className="zmdi zmdi-linkedin zmdi-hc-lg"/>
        </Button>
        <Fab  className="jr-fab-btn bg-pink lighten-2 text-white">
          <i className="zmdi zmdi-dribbble zmdi-hc-lg"/>
        </Fab>
        <Fab  className="jr-fab-btn bg-red accent-4 text-white">
          <i className="zmdi zmdi-youtube zmdi-hc-lg"/>
        </Fab>
        <Fab  className="jr-fab-btn bg-grey darken-3 text-white">
          <i className="zmdi zmdi-github zmdi-hc-lg"/>
        </Fab>
        <Fab  className="jr-fab-btn bg-light-blue lighten-2 text-white">
          <i className="zmdi zmdi-skype zmdi-hc-lg"/>
        </Fab>
      </div>
      <div className="jr-btn-group">
        <Button variant="contained" className="jr-btn bg-light-blue accent-2 text-white">
          <i className="zmdi zmdi-twitter zmdi-hc-lg"/>
        </Button>
        <Button variant="contained" className="jr-btn bg-indigo lighten-1 text-white">
          <i className="zmdi zmdi-facebook zmdi-hc-lg"/>
        </Button>
        <Button variant="contained" className="jr-btn bg-red lighten-1 text-white">
          <i className="zmdi zmdi-google zmdi-hc-lg"/>
        </Button>
        <Button variant="contained" className="jr-btn bg-red darken-2 text-white">
          <i className="zmdi zmdi-pinterest zmdi-hc-lg"/>
        </Button>
        <Button variant="contained" className="jr-btn bg-brown lighten-1 text-white">
          <i className="zmdi zmdi-instagram zmdi-hc-lg"/>
        </Button>

        <Button variant="contained" className="jr-btn bg-warning text-white">
          <i className="zmdi zmdi-rss zmdi-hc-lg"/>
        </Button>
        <Button variant="contained" className="jr-btn bg-blue-grey text-white">
          <i className="zmdi zmdi-tumblr zmdi-hc-lg"/>
        </Button>
        <Button variant="contained" className="jr-btn bg-light-blue darken-3 text-white">
          <i className="zmdi zmdi-linkedin zmdi-hc-lg"/>
        </Button>
        <Button variant="contained" className="jr-btn bg-pink lighten-2 text-white">
          <i className="zmdi zmdi-dribbble zmdi-hc-lg"/>
        </Button>
        <Button variant="contained" className="jr-btn bg-red accent-4 text-white">
          <i className="zmdi zmdi-youtube zmdi-hc-lg"/>
        </Button>
        <Button variant="contained" className="jr-btn bg-grey darken-3 text-white">
          <i className="zmdi zmdi-github zmdi-hc-lg"/>
        </Button>
        <Button variant="contained" className="jr-btn bg-light-blue lighten-2 text-white">
          <i className="zmdi zmdi-skype zmdi-hc-lg"/>
        </Button>
      </div>

      <div className="jr-btn-group">
        <Button variant="contained" className="jr-btn jr-btn-lg bg-indigo lighten-1 text-white">
          <i className="zmdi zmdi-facebook zmdi-hc-fw"/>
          <span>Signin with Facebook</span>
        </Button>
        <Button variant="contained" className="jr-btn jr-btn-lg bg-red lighten-1 text-white">
          <i className="zmdi zmdi-google zmdi-hc-fw "/>
          <span>Signin With Google+</span>
        </Button>
      </div>
    </div>
  );
};

export default SocialMediaButtons;
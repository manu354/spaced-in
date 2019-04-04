import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {mailFolderListItems, otherMailFolderListItems} from '../tileData';
import classNames from 'classnames';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
  },
  drawerHeader: theme.mixins.toolbar,
  content: {
    width: '100%',
    padding: theme.spacing.unit * 3,
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
});

function PermanentDrawer(props) {
  const {classes} = props;

  return (
    <div className={classes.root}>
      <div className={classes.appFrame}>
        <AppBar className={classNames('bg-primary', classes.appBar)}>
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap className="text-white">
              Permanent drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}/>
          <Divider/>
          <List>{mailFolderListItems}</List>
          <Divider/>
          <List>{otherMailFolderListItems}</List>
        </Drawer>
        <main className={classes.content}>
          <Typography variant="body1" noWrap className="text-white">
            {'You think water moves fast? You should see ice.'}
          </Typography>
        </main>
      </div>
    </div>
  );
}

PermanentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PermanentDrawer);
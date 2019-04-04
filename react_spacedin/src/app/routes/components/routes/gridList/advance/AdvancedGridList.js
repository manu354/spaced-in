import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import tileData from './tileData';

class AdvancedGridList extends React.Component {

  render() {
    return (
      <div className="gl-advanced">
        <GridList cellHeight={200} spacing={1} className="gl">
          {tileData.map((tile, index) =>
            <GridListTile key={index} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
              <img src={tile.img} alt={tile.title}/>
              <GridListTileBar
                title={tile.title}
                titlePosition="top"
                actionIcon={
                  <IconButton>
                    <StarBorderIcon/>
                  </IconButton>
                }
                actionPosition="left"
                className="title-gradient"
              />
            </GridListTile>,
          )}
        </GridList>
      </div>
    );
  }
}

export default AdvancedGridList;
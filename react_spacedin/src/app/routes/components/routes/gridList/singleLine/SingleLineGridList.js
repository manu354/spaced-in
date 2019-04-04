import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import tileData from './tileData';


function SingleLineGridList() {
  return (
    <div className="gl-single-line">
      <GridList className="slg" cols={2.5}>
        {tileData.map((tile, index) =>
          <GridListTile key={index}>
            <img src={tile.img} alt={tile.title}/>
            <GridListTileBar
              title={tile.title}
              classes={{
                root: 'title-gradient-bottom',
                title: 'text-white',
              }}
              actionIcon={
                <IconButton>
                  <StarBorderIcon className="text-white"/>
                </IconButton>
              }
            />
          </GridListTile>,
        )}
      </GridList>
    </div>
  );
}

export default SingleLineGridList;
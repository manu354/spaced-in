import React from 'react';
import {Card, CardBody, CardImg, CardSubtitle, CardText} from 'reactstrap';
import Button from '@material-ui/core/Button';

const BasicCard = ({image, title, subTitle, description, btnText}) => {
  return (
    <Card className="shadow border-0">
      <CardImg top width="100%" src={image} alt="Card image cap"/>
      <CardBody>
        <h3 className="card-title">{title}</h3>
        <CardSubtitle>{subTitle}</CardSubtitle>
        <CardText>{description}</CardText>
        <Button variant="contained" className="bg-primary text-white">{btnText}</Button>
      </CardBody>
    </Card>
  );
};
export default BasicCard;
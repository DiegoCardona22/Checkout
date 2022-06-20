// @packages
import Router from 'next/router';
import { Card } from 'react-bootstrap';

// styles
import classes from './styles.module.scss';

type CardProps = {
  dataTestId?: string;
  description: string
  id?: string
  imageUrl: string,
  title: string,
}

const CardComponent = ({
  dataTestId = 'my-card',
  description,
  id = 'card',
  imageUrl,
  title
} : CardProps) => {
  const handleClickAvalilability = () => {
    Router.push(`/${id}`);
  }

  return (
    <Card
      className={classes.cardContainer}
      data-testid={dataTestId}
      id={id}
      onClick={handleClickAvalilability}
    >
      <Card.Img src={imageUrl} className={classes.cardImage}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;

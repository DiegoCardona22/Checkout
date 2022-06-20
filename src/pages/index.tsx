// @packages
import { NextPage } from 'next';
import { Container, Row, Col } from 'react-bootstrap';

// @scripts
import Card from 'src/components/atoms/card';
import { CardItems } from 'src/components/atoms/card/card-items';

const Home: NextPage = () => (
  <Container >
    <Row>
      {CardItems.map((item, index) => (
        <Col key={index} xs={12} sm={6} md={6} lg={6} className="my-4 mx-0">
          <Card
            imageUrl={item.imageUrl}
            title={item.title}
            description={item.description}
            id={item.id}
          />
        </Col>
      ))}
    </Row>
  </Container>
);

export default Home;

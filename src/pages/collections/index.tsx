// @packages
import { Container, Row, Col } from "react-bootstrap";
import { NextPage } from "next";

// @scripts
import { config } from "src/config";

const CollectionsPage: NextPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>{config.text.collections}</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default CollectionsPage;

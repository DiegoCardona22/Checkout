// @packages
import { Container, Row, Col } from "react-bootstrap";
import { NextPage } from "next";

// @scripts
import { config } from "src/config";

const Profile: NextPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>{config.text.profile}</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;

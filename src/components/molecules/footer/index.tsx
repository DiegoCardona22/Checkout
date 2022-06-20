// @packages
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import Row from "react-bootstrap/Row";

// @scripts
import Logo from "src/components/atoms/logo-footer";
import Typography from "src/components/atoms/typography";
import { config } from "src/config";

// @styles
import classes from "./styles.module.scss";

const text = config.text.footer;

const GetLinks = (
  footerLinkText: string | undefined,
  links: { text: string; link: string }[]
) => (
  <>
    {links.map(({ text: value, link }) => (
      <li key={value}>
        <Link href={link}>
          <a
            className={footerLinkText}
            data-event-type={`click/link-footer/${value}`}
          >
            {value}
          </a>
        </Link>
      </li>
    ))}
  </>
);

const Footer = () => (
  <footer className={classes.footer}>
    <Container>
      <Row>
        <Col xs={12} lg={6}>
          <Logo />
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={6}>
          <Typography variant="body-xs-small" className={classes.footerText}>
            {text.content}
          </Typography>
        </Col>
        <Col md={6} lg={2}>
          <Typography variant="body-big" className={classes.footerTitle}>
            {text.mainNav.title}
          </Typography>
          <ul className={classes.footerList}>
            {GetLinks(classes.footerLinkText, text.mainNav.links)}
          </ul>
        </Col>
        <Col md={6} lg={2}>
          <Typography variant="body-big" className={classes.footerTitle}>
            {text.assets.title}
          </Typography>
          <ul className={classes.footerList}>
            {GetLinks(classes.footerLinkText, text.assets.links)}
          </ul>
        </Col>
        <Col md={6} lg={2}>
          <Typography variant="body-big" className={classes.footerTitle}>
            {text.company.title}
          </Typography>
          <ul className={classes.footerList}>
            {GetLinks(classes.footerLinkText, text.company.links)}
          </ul>
        </Col>
      </Row>
    </Container>
    <hr />
    <Typography variant="body-xs-small" className={classes.copyright}>
      {text.copyRight}
    </Typography>
  </footer>
);

export default Footer;

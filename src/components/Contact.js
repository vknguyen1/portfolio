import { Container, Row, Col } from 'react-bootstrap';

function Contact() {
  return (
    <>
      <div className="contact-container">
        <Container>
          <Row className="mb-5 mt-3">
            <Col Lg="8">
              <h1 className="display-4 mb-4">Contact Me</h1>
            </Col>
          </Row>

          <Row className="sec-sp">
            <Col lg="5">
              <h3 className="color_sec py-4">Get in Touch</h3>
              <address>
                <strong>Email: vincentkn@hotmail.com</strong>
                <br />
                <br />
                <p>
                  <strong>Phone : +1 XXX-XXX-XXXX</strong>
                </p>
              </address>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tenetur labore magni quaerat rem quod ad accusantium neque animi
                iure, voluptate, eum, incidunt alias. Culpa ab ipsa ex porro cum
                dignissimos.
              </p>
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <form className="Contact__Form w-100">
                <Row>
                  <Col lg="6" className="form-group">
                    <input
                      className="form-control"
                      id="name"
                      placeholder="Name"
                      type="text"
                    />
                  </Col>
                  <Col lg="7" className="d-flex align-items-center"></Col>
                  <Col lg="6" className="form-group">
                    <input
                      className="form-control rounded-0"
                      id="email"
                      name="email"
                      placeholder="Email"
                      type="email"
                    />
                  </Col>
                </Row>
                <textarea
                  className="form-control rounded-0"
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="5"
                  required
                ></textarea>
                <br />
                <Row>
                  <Col lg="12" className="form-group">
                    <button className="btn ac_btn" type="submit">
                      Send
                    </button>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="contact-socials">
        <a href="www.linkedin.com/in/vincent-nguyen-4b2b29243">Linkedin</a>
        <a href="https://github.com/vknguyen1">Github</a>
      </div>
    </>
  );
}

export default Contact;

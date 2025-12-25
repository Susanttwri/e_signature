'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldAlt,
  faDatabase,
  faLock
} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

const securityFeatures = [
  {
    icon: faShieldAlt,
    title: 'TLS 1.2 / 1.3 Encryption',
    description: 'All data is transmitted securely over HTTPS using modern TLS encryption.',
    color: '#007bff' // Blue
  },
  {
    icon: faDatabase,
    title: 'AES-256 Encryption at Rest',
    description: 'Documents, signatures, and sensitive metadata are encrypted using AES-256.',
    color: '#28a745' // Green
  },
  {
    icon: faLock,
    title: 'Encrypted Documents & Signatures',
    description: 'Signed and unsigned PDFs, along with signature images, are securely encrypted when stored.',
    color: '#dc3545' // Red
  }
];

export default function SecuritySection() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3 text-blue fs-1">
            Enterprise-Grade Security
          </h2>
          <p className="lead text-muted">
            Your data is protected with industry-leading encryption standards
          </p>
        </div>
        <Row className="g-4 justify-content-center">
          {securityFeatures.map((feature, index) => (
            <Col key={index} lg={4} md={6} className="mb-4">
              <div className="bg-white shadow-sm rounded-3 p-4 h-100 text-center">
                <div className="mb-3">
                  <FontAwesomeIcon
                    icon={feature.icon}
                    size="3x"
                    className="feature-icon"
                    style={{ color: feature.color }}
                  />
                </div>
                <h5 className="fw-bold mb-3">{feature.title}</h5>
                <p className="text-muted mb-0">{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

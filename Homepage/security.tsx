'use client';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiLock, FiActivity, FiDatabase, FiShield } from 'react-icons/fi';

const SecurityCompliance = () => {
  return (
    <section className="security-compliance py-5">
      <Container className="position-relative py-5">
        {/* Decorative elements */}
        <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden opacity-10">
          <div className="position-absolute top-0 end-0 bg-primary rounded-circle" style={{ width: '300px', height: '300px', transform: 'translate(50%, -50%)' }}></div>
          <div className="position-absolute bottom-0 start-0 bg-info rounded-circle" style={{ width: '400px', height: '400px', transform: 'translate(-50%, 50%)' }}></div>
        </div>

        <Row className="justify-content-center mb-5">
          <Col lg={8} xl={6} className="text-center position-relative">
            <span className="text-blue mb-2 d-block fw-semibold">SECURITY FIRST</span>
            <h2 className="display-5 fw-bold mb-3 text-blue">Enterprise Protection</h2>
            <p className="lead text-muted">
              We follow top standards to keep your data safe.
            </p>
          </Col>
        </Row>

        <Row className="g-4 g-lg-5">
          <Col md={6}>
            <div className="h-100 p-4 p-lg-5 bg-white rounded-4 shadow-sm position-relative overflow-hidden border-0">
              <div className="position-absolute top-0 end-0 bg-primary bg-opacity-10" style={{ width: '200px', height: '200px', borderRadius: '50%', transform: 'translate(30%, -30%)' }}></div>
              <div className="position-relative z-index-1">
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-3 me-3">
                    <FiLock size={28} className="text-blue" />
                  </div>
                  <h3 className="h4 mb-0 fw-bold">AES-256 Encryption</h3>
                </div>
                <p className="text-muted mb-4 fs-6">
                  Your data is protected with <strong className="text-dark fs-6">256-bit encryption</strong>, the same used by top institutions.
                </p>
                <ul className="list-unstyled text-muted">
                  <li className="mb-2 d-flex align-items-start">
                    <span className="text-blue me-2">✓</span>
                    <span>Encrypted transmission</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <span className="text-blue me-2">✓</span>
                    <span>Encrypted storage</span>
                  </li>
                  <li className="d-flex align-items-start">
                    <span className="text-blue me-2">✓</span>
                    <span>Key rotation</span>
                  </li>
                </ul>
              </div>
            </div>
          </Col>

          <Col md={6}>
            <div className="h-100 p-4 p-lg-5 bg-white rounded-4 shadow-sm position-relative overflow-hidden border-0">
              <div className="position-absolute top-0 end-0 bg-info bg-opacity-10" style={{ width: '200px', height: '200px', borderRadius: '50%', transform: 'translate(30%, -30%)' }}></div>
              <div className="position-relative z-index-1">
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-info bg-opacity-10 p-3 rounded-3 me-3">
                    <FiActivity size={28} className="text-info" />
                  </div>
                  <h3 className="h4 mb-0 fw-bold">Audit Trail</h3>
                </div>
                <p className="text-muted mb-4 fs-6">
                  Track and log all activity with <strong className="text-dark ">immutable records</strong>.
                </p>
                <ul className="list-unstyled text-muted">
                  <li className="mb-2 d-flex align-items-start">
                    <span className="text-info me-2">✓</span>
                    <span>User action logs</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <span className="text-info me-2">✓</span>
                    <span>Digital signatures</span>
                  </li>
                  <li className="d-flex align-items-start">
                    <span className="text-info me-2">✓</span>
                    <span>Exportable reports</span>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>

        {/* <Row className="mt-5">
          <Col className="text-center">
            <div className="d-inline-block p-4 rounded-4 bg-white shadow-sm">
              <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
                <div className="text-center">
                  <div className="bg-light p-3 rounded-3 d-inline-block mb-2">
                    <FiShield size={32} className="text-blue" />
                  </div>
                  <h4 className="h6 mb-0 fw-bold">SOC 2</h4>
                </div>
                <div className="text-center">
                  <div className="bg-light p-3 rounded-3 d-inline-block mb-2">
                    <FiDatabase size={32} className="text-info" />
                  </div>
                  <h4 className="h6 mb-0 fw-bold">GDPR</h4>
                </div>
                <div className="text-center">
                  <div className="bg-light p-3 rounded-3 d-inline-block mb-2">
                    <FiLock size={32} className="text-success" />
                  </div>
                  <h4 className="h6 mb-0 fw-bold">HIPAA</h4>
                </div>
              </div>
            </div>
          </Col>
        </Row> */}
      </Container>

      <style jsx>{`
        .security-compliance {
          background: linear-gradient(160deg, #ffffff 0%, #f8fafc 100%);
          position: relative;
          overflow: hidden;
        }
        .py-6 {
          padding-top: 5rem;
          padding-bottom: 5rem;
        }
        .mt-6 {
          margin-top: 5rem;
        }
        .rounded-4 {
          border-radius: 1rem !important;
        }
        .z-index-1 {
          z-index: 1;
        }
        .shadow-sm {
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.05) !important;
        }
      `}</style>
    </section>
  );
};

export default SecurityCompliance;

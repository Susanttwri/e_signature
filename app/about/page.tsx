'use client';
import { Container, Row, Col } from 'react-bootstrap';

export default function About() {
  return (
    <div className="py-5" style={{ background: '#f8f9fa' }}>
      <Container className="my-5">
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h1 className="fw-bold mb-4" style={{ color: '#0048d7' }}>About eSignSure</h1>
            <p className="fs-5 text-muted">
              We are on a mission to simplify document workflows for businesses and individuals everywhere.
              eSignSure provides a fast, secure, and legally-binding way to sign documents online, saving you time and money.
            </p>
            <p className="text-muted">
              Founded with the vision to eliminate the hassle of printing, scanning, and physical storage, our platform is designed to be intuitive and accessible for everyone. Whether you are closing a deal, signing an employment contract, or managing vendor agreements, eSignSure ensures your documents are handled with the highest level of security and compliance.
            </p>
          </Col>
          <Col md={6} className="text-center mt-4 mt-md-0">
             <div style={{ position: 'relative', height: '400px', width: '100%', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
               {/* Using a placeholder or styled div if no specific image is available */}
               <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, rgb(82, 128, 233) 0%, rgb(22 87 220) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <h2 className="text-white fw-bold">Empowering Digital Workflows</h2>
               </div>
             </div>
          </Col>
        </Row>
        
        <Row className="text-center mt-5">
          <Col md={4} className="mb-4">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <h3 className="fw-bold mb-3" style={{ color: '#0048d7' }}>10M+</h3>
              <p className="text-muted mb-0">Documents Signed</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <h3 className="fw-bold mb-3" style={{ color: '#0048d7' }}>99.9%</h3>
              <p className="text-muted mb-0">Uptime</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <h3 className="fw-bold mb-3" style={{ color: '#0048d7' }}>24/7</h3>
              <p className="text-muted mb-0">Customer Support</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

'use client';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved, faHandshake, faGlobe, faLightbulb } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  return (
    <div className="about-page" style={{ position: 'relative', overflow: 'hidden', background: '#fff' }}>
      {/* Background Decorative Image */}
      <div className="bg-illustration" style={{ 
        position: 'absolute', 
        top: '10%', 
        right: '-5%', 
        opacity: 0.1, 
        zIndex: 0,
        width: '500px',
        height: '800px',
        transform: 'rotate(15deg)',
        pointerEvents: 'none'
      }}>
        <img src="/assets/about-mobile.png" alt="Decoration" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>

      <Container className="my-5 py-5" style={{ position: 'relative', zIndex: 1 }}>
        <Row className="align-items-center mb-5 pb-5">
          <Col md={6}>
            <span className="badge bg-primary-soft text-primary px-3 py-2 rounded-pill mb-3 fw-bold">OUR STORY</span>
            <h1 className="fw-bold mb-4 display-4" style={{ color: '#182848' }}>Pioneering the Future of <span className="text-primary">Digital Signatures</span></h1>
            <p className="fs-5 text-muted mb-4">
              Founded in 2024, eSignSure was born out of a simple observation: document management shouldn't be a bottleneck for growth.
            </p>
            <p className="text-secondary" style={{ lineHeight: '1.8' }}>
              We've spent the last few years perfecting a platform that combines military-grade security with a user interface that anyone can master in seconds. Today, eSignSure powers thousands of companies worldwide, from small law firms to multinational enterprises, helping them close deals faster and operate more efficiently.
            </p>
          </Col>
          <Col md={6} className="text-center mt-5 mt-md-0">
             <div className="interactive-img-container shadow-lg p-0" style={{ borderRadius: '40px', overflow: 'hidden', background: 'transparent' }}>
                <img src="/assets/about-mobile.png" alt="Mobile Sign" className="img-fluid floating-img" />
             </div>
          </Col>
        </Row>

        {/* Values Section */}
        <div className="my-5 py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold h1" style={{ color: '#182848' }}>Our Core Values</h2>
            <div className="mx-auto mt-2" style={{ width: '60px', height: '4px', background: '#0048d7' }}></div>
          </div>
          <Row>
            {[
              { icon: faShieldHalved, title: 'Security First', desc: 'We maintain the highest standards of data protection and legal compliance.' },
              { icon: faHandshake, title: 'Customer Success', desc: 'Our platform is built to solve your problems and help you scale.' },
              { icon: faGlobe, title: 'Accessibility', desc: 'Signing documents should be easy for everyone, on any device.' },
              { icon: faLightbulb, title: 'Innovation', desc: 'We are constantly evolving to provide the most advanced tools.' },
            ].map((value, i) => (
              <Col lg={3} md={6} key={i} className="mb-4">
                <Card className="border-0 shadow-sm h-100 p-4 text-center hover-lift">
                  <div className="icon-circle mx-auto mb-3" style={{ background: '#f0f4ff', color: '#0048d7' }}>
                    <FontAwesomeIcon icon={value.icon} size="lg" />
                  </div>
                  <h5 className="fw-bold">{value.title}</h5>
                  <p className="text-muted small mb-0">{value.desc}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Vision/Mission Section */}
        <Row className="my-5 py-5 align-items-center">
           <Col md={6} className="order-2 order-md-1">
             <div className="p-5 rounded-4 shadow-sm" style={{ background: '#f8f9fa' }}>
                <h3 className="fw-bold mb-4">Our Vision</h3>
                <p className="text-muted">To be the world's most trusted and intuitive digital signature platform, eliminating paper-based processes and empowering a more sustainable, digital-first global economy.</p>
                <h3 className="fw-bold mt-5 mb-4">Our Mission</h3>
                <p className="text-muted">To provide seamless, secure, and legally-binding eSignature solutions that simplify document workflows for businesses of all sizes, enabling them to focus on what matters most: their growth.</p>
             </div>
           </Col>
           <Col md={6} className="order-1 order-md-2 mb-5 mb-md-0 text-center">
              <img src="/assets/about-mobile.png" alt="Vision" className="img-fluid" style={{ maxWidth: '80%', opacity: 0.8 }} />
           </Col>
        </Row>

        {/* Stats Section */}
        <div className="stats-banner text-white rounded-4 p-5 text-center mt-5" style={{ background: 'linear-gradient(135deg, #182848 0%, #1a3c7c 100%)' }}>
          <Row>
            <Col md={4} className="mb-4 mb-md-0">
              <h1 className="fw-bold display-4">15M+</h1>
              <p className="opacity-75">Secure Transactions</p>
            </Col>
            <Col md={4} className="mb-4 mb-md-0">
              <h1 className="fw-bold display-4">200K+</h1>
              <p className="opacity-75">Active Users</p>
            </Col>
            <Col md={4}>
              <h1 className="fw-bold display-4">99.99%</h1>
              <p className="opacity-75">Service Uptime</p>
            </Col>
          </Row>
        </div>
      </Container>

      <style jsx global>{`
        .bg-primary-soft {
          background-color: #e6efff;
        }
        .interactive-img-container {
          display: inline-block;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .interactive-img-container:hover {
          transform: scale(1.05) rotate(-2deg);
        }
        .floating-img {
          max-height: 500px;
          animation: float 5s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
          100% { transform: translateY(0px); }
        }
        .icon-circle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hover-lift {
          transition: all 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
        }
      `}</style>
    </div>
  );
}

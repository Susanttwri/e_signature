'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';
import Image from 'next/image';
import DocImage from '@/public/assets/docuesign_snap2.jpg';
import { FaFileContract, FaBuilding, FaHospitalUser, FaBalanceScale, FaUniversity, FaUserTie, FaGraduationCap } from "react-icons/fa";


function HeroSection() {
  const router = useRouter();
  const handleOnHandle= () =>{
  router.push('https://app.esignsure.com/sign-up');
}
  return (
    <div className=" container-fluid  py-5" style={{background:"#ebebeb99"}}>
      <Container>
        <Row className="align-items-center">
          {/* Left Column - Text Content */}
          <Col lg={6} className="mb-5 mb-lg-0 pe-lg-5">
            <Badge bg="light" text="primary" className="mb-3 fw-semibold px-3 py-2 rounded-3">
              Digital Transformation
            </Badge>
            <h1 className="display-5 fw-bold mb-4">
              Trusted <span className="text-primary">e-Signature</span> Solutions for Today's Business
            </h1>
            <p className="lead text-muted mb-4">
              Streamline your document workflows with our legally binding electronic signatures. Perfect for contracts, agreements, and approvals.
            </p>
            
            <div className="mb-4">
              <ul className="list-unstyled">
                <li className="mb-2 d-flex align-items-start">
                  <span className="text-primary me-2">✓</span>
                  <span>Legally binding signatures in minutes</span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <span className="text-primary me-2">✓</span>
                  <span>Bank-level security & encryption</span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <span className="text-primary me-2">✓</span>
                  <span>Audit trail for every document</span>
                </li>
              </ul>
            </div>
            
            <div className="d-flex flex-wrap gap-3">
              <Button variant="white" size="lg" className=" hero-cta" onClick={()=>handleOnHandle()} style={{
                borderRadius: '50px',
                padding: '16px 32px',
                fontWeight: '600',
                fontSize: '1.1rem',
                backgroundColor: '#fff',
                color: '#0d6efd',
                border: 'none',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
              }}>
                Start Free Trial
              </Button>
            </div>
          </Col>

          {/* Right Column - Image */}
          <Col lg={6}>
<Image src={DocImage} className='img-fluid'  alt="document-image" style={{objectFit:"cover"}}/>
          </Col>
        </Row>
        <Row className='mt-5'>
          <h2 className='text-center fw-bold text-blue mb-4 md-mb-5'>Perfect For Every Business and Industry</h2>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm border-0 rounded-3">
              <Card.Body>
                <h5 className="fw-bold mb-3 text-blue d-flex align-items-center">
                  <FaFileContract className="me-2 text-primary" />
          General Agreements & Forms
        </h5>
        <ul className="list-styled">
          <li>NDAs & Sales Proposals</li>
          <li>Contracts: MSAs, SOWs, Order Forms, Renewals</li>
          <li>Invoice / PO Approvals</li>
          <li>Vendor Onboarding Forms</li>
          <li>Offer Letters & HR Onboarding Packs</li>
          <li>Policy Acknowledgments & Timesheets</li>
          <li>Customer Service Agreements & Cancellations</li>
          <li>Board Resolutions & IP Assignments</li>
          <li>Franchise / Distributor Agreements</li>
        
          <li>Service Tickets, Work Orders & Proof-of-Delivery</li>
        </ul>
      </Card.Body>
    </Card>
  </Col>

  {/* Second Column */}
  <Col md={4} className="mb-4">
    <Card className="h-100 shadow-sm border-0 rounded-3">
      <Card.Body>
        <h5 className="fw-bold mb-3 text-blue d-flex align-items-center">
          <FaBuilding className="me-2 text-primary" />
          Industry-Specific
        </h5>

        <h6 className="mt-4 fw-bold d-flex align-items-center">
         1. Real Estate
        </h6>
        <ul>
          <li>Lease & Rental Agreements</li>
          <li>Disclosure Forms</li>
        </ul>

        <h6 className="mt-3 fw-bold d-flex align-items-center">
          2. Healthcare & Insurance
        </h6>
        <ul>
          <li>Patient Consents</li>
          <li>Claims (as permitted)</li>
        </ul>

        <h6 className="mt-3 fw-bold d-flex align-items-center">
           3. Legal & Compliance
        </h6>
        <ul>
          <li>Data Processing Agreements (DPAs)</li>
          <li>Business Associate Agreements (BAAs)</li>
          <li>Audit-Ready Attestations</li>
        </ul>
      </Card.Body>
    </Card>
  </Col>

  {/* Third Column */}
  <Col md={4} className="mb-4">
    <Card className="h-100 shadow-sm border-0 rounded-3">
      <Card.Body>
        <h5 className="fw-bold mb-3 text-blue d-flex align-items-center">
          <FaUniversity className="me-2 text-primary" />
          Industry-Specific
        </h5>

        <h6 className="mt-3 fw-bold d-flex align-items-center">
          4. Government & Public Sector
        </h6>
        <ul>
          <li>Permits & Licenses</li>
          <li>Grant Applications & Documents</li>
        </ul>

        <h6 className="mt-3 fw-bold d-flex align-items-center">
         5. Freelancers & Agencies
        </h6>
        <ul>
          <li>Client Contracts & Retainers</li>
          <li>Scope of Work Approvals</li>
        </ul>

        <h6 className="mt-3 fw-bold d-flex align-items-center">
           6. Education & Study-Abroad
        </h6>
        <ul>
          <li>Parent / Student Consent & Waiver Forms</li>
          <li>Sub-Agent MoUs & Partner Agreements</li>
          <li>Internship & Placement Agreements</li>
        </ul>
      </Card.Body>
    </Card>
  </Col>
</Row>

      </Container>
    </div>
  );
}

export default HeroSection;
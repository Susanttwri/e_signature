'use client';
import { useRouter } from 'next/navigation';

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function CtaSection() {
  const router=useRouter();
  const handleOnCLick = () => {
    router.push('https://app.esignsure.com/login')
  }
  return (
    <section className=" position-relative overflow-hidden py-5" style={{  
             background: "linear-gradient(135deg, rgb(82 128 233) 0%, rgb(0 72 215) 100%)",
        }}>
      {/* Decorative elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <div
          className="position-absolute bottom-0 end-0 bg-white bg-opacity-10 rounded-circle"
          style={{ width: '400px', height: '400px', transform: 'translate(30%, 30%)' }}
        ></div>
        <div
          className="position-absolute top-0 start-0 bg-white bg-opacity-10 rounded-circle"
          style={{ width: '300px', height: '300px', transform: 'translate(-30%, -30%)' }}
        ></div>
      </div>

      <Container>
        <Row className="justify-content-center py-5">
          <Col lg={8} className="text-center position-relative">
            <h2 className="display-5 fw-bold text-white mb-4">Start signing smarter today</h2>
            <p className="lead text-white text-opacity-85 mb-4">
             Send,Track and get documents signed online - securely and instantly. No more printing or scanning. Just legally binding eSignatures in a few clicks.
            </p>

            {/* Highlighted CTA text */}
         <p className="highlight-box mx-auto mb-4 px-4 py-3 fw-semibold">
  Start your free trial today & <strong>Get 10 document credits free!</strong> 
</p>


            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <Button
                variant="light"
                size="sm"
                className="rounded-5 px-5 py-3 fw-semibold shadow-sm fs-5"
                onClick = {()=>handleOnCLick()}
              >
                Get Started Free
              </Button>
            </div>
            <p className='mt-md-3 fs-6 mb-0 text-white'><sup>*</sup>No credit card required</p>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
       
.highlight-box {
  display: inline-block;
  background: linear-gradient(135deg, #ffb703, #ff7b00); /* yellow-orange like image */
  color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  font-size: 1.1rem;
  transition: all 0.3s ease-in-out;
}

.highlight-box strong {
  color: #000000ff; /* make strong text pop (bright yellow) */
}

.highlight-box:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}


        .py-6 {
          padding-top: 5rem;
          padding-bottom: 5rem;
        }

        .btn-outline-light:hover {
          color: #1d4ed8 !important;
          background: white !important;
        }

        .shadow-sm {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
        }

        .rounded-3 {
          border-radius: 0.75rem !important;
        }
      `}</style>
    </section>
  );
}

export default CtaSection;

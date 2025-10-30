'use client'
import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Image4 from '../public/assets/pricing.jpg';

const Pricing = () => {

  useEffect(() => {
    const handleCurrencyToggle = () => {
      const currencyButtons = document.querySelectorAll('.currency-toggle button');

      currencyButtons.forEach(button => {
        button.addEventListener('click', function (event) {
          currencyButtons.forEach(btn => {
            btn.classList.remove('active', 'btn-primary');
            btn.classList.add('btn-outline-light');
          });

          const target = event.currentTarget as HTMLButtonElement;
          target.classList.add('active', 'btn-primary');
          target.classList.remove('btn-outline-light');

          const currency = target.dataset.currency as 'inr' | 'usd';
          const prices = document.querySelectorAll('.price');
          prices.forEach(price => {
            const newValue = price.getAttribute(`data-${currency}`);
            if (newValue) price.textContent = newValue;
          });

          const strikePrices = document.querySelectorAll('.strike-price');
          strikePrices.forEach(price => {
            const newValue = price.getAttribute(`data-${currency}`);
            if (newValue) price.textContent = newValue;
          });
        });
      });
    };

    handleCurrencyToggle();
  }, []);

  return (
    <div>
      <Container className="py-5">
        <h1 className="text-center text-blue fw-bold fs-1">Our Pricing Plans</h1>
        <p className='text-center'>
          With our flexible <strong>Pay-as-you-go</strong> pricing model, you only pay for what you use—no hidden fees or long-term commitments.<br />
          This allows your business to scale efficiently, control costs, and adapt as needs evolve without overspending.
        </p>

        <Row className="align-items-center mt-lg-4">
          <Col lg={6} className="mb-4 mb-lg-0">
            <Image src={Image4} alt="Illustration" className="img-fluid" />
          </Col>

          <Col lg={6}>
            <div className="pricing-card border-0 rounded-4 overflow-hidden shadow-lg">
              <div className="pricing-header bg-primary-gradient text-white text-center p-3">
                <div className="d-flex justify-content-between align-items-center gap-2">
                  <span className="d-block text-uppercase text-dark fw-semibold fs-4">Pay-as-you-go</span>
                  <div className="currency-toggle btn-group btn-group-sm" role="group">
  <button type="button" className="btn btn-primary active" data-currency="inr">INR</button>
  <button type="button" className="btn btn-outline-light" data-currency="usd">USD</button>
</div>

                </div>
              </div>
              <hr className='mt-0 mb-0'></hr>

              <div className="p-4">
                {/* Pricing Items */}
                {[
                  { credits: '25 Credits', inr: '₹499', usd: '$5.99', inrStrike: '₹999', usdStrike: '$11.98' },
                  { credits: '50 Credits', inr: '₹899', usd: '$10.69', inrStrike: '₹1798', usdStrike: '$21.38' },
                  { credits: '100 Credits', inr: '₹1599', usd: '$18.99', inrStrike: '₹3198', usdStrike: '$37.98' },
                  { credits: '200 Credits', inr: '₹2799', usd: '$32.99', inrStrike: '₹5598', usdStrike: '$65.98' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`price-tier d-flex justify-content-between align-items-center py-3 ${index < 3 ? 'border-bottom' : ''}`}
                  >
                    <div className="credits fs-6 fw-bold text-dark">{item.credits}</div>
                    <div>
  <span
    className="price fs-6 fw-bold text-blue me-2"
    data-inr={item.inr}
    data-usd={item.usd}
  >
    {item.inr}
  </span>
  <span
    className="strike-price text-muted text-decoration-line-through"
    data-inr={item.inrStrike}
    data-usd={item.usdStrike}
  >
    {item.inrStrike}
  </span>
</div>

                  </div>
                ))}
              </div>

              <div className="pricing-footer bg-light p-3 text-center border-top">
              <p className="mb-0 text-dark small">1 Document Credit = 1 Document Sent for Signing</p>

              </div>
            </div>
          </Col>
        </Row>
      </Container>

     <style jsx>{`
  .currency-toggle .btn {
    padding: 0.25rem 0.75rem;
    font-weight: normal;
    color:#000!important;
  }
  .currency-toggle .btn.active {
    color: #fff !important;
    font-weight: bold;
  }
  .strike-price {
    font-size: 0.9rem;
  }
      .currency-toggle .btn.active:hover{
      color:#fff!important;
      font-weight: bold;
      }
`}</style>

    </div>
  );
};

export default Pricing;

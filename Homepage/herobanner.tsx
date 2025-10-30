'use client'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useRouter } from 'next/navigation';
import Free from '@/public/assets/documentsimage.png'
// import './HeroBanner.css' // Add custom styles if needed
import Image from 'next/image'
import Logo from '@/public/assets/logo2.png'
function HeroBanner() {
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter();
  const handleOnClick = () => {
    router.push('https://app.esignsure.com/login');
  };
  const handleOnHandle = () => {
    router.push('https://app.esignsure.com/sign-up');
  }
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  return (
    <>
      {/* Modern Fixed Navbar */}
      <nav className={`fixed-top py-3 ${scrolled ? ' shadow-sm' : ''} transition-all`} style={{ transition: 'all 0.3s ease', background: "linear-gradient(135deg, rgb(82, 128, 233) 0%, rgb(22 87 220) 100%)" }}>
         <Container> 
          <Row className="align-items-center">
             <Col xs={6}> {/* Modern Logo with hover effect */} 
             <div className="nav-logo-container"> 
              <Image src={Logo} alt="Company Logo" width={150} height={80} className="img-fluid" />
               </div> 
               </Col> 
               <Col xs={6} className="text-end ">
               <Button 
  variant="outline-light" 
  className="me-3 nav-button d-none d-sm-inline-block"  
  onClick={() => handleOnClick()} 
  style={{ borderRadius: '50px', padding: '12px 24px', borderWidth: '2px', fontWeight: '600' }} 
>
  Login
</Button>

                <Button variant="light" className="nav-button" onClick={() => handleOnHandle()} style={{ borderRadius: '50px', padding: '12px 24px', fontWeight: '600', color: '#0d6efd' }} > Get Started </Button>
               </Col>
            </Row>
         </Container>
      </nav>

      {/* Hero Banner */}
      <Container fluid className={`hero-banner d-flex align-items-center justify-content-center text-center pb-5 ${scrolled ? 'pt-0' : ''}`}
        style={{
          minHeight: '100vh',
          paddingTop: scrolled ? '80px' : '0',
          background: "linear-gradient(135deg, rgb(82 128 233) 0%, rgb(0 72 215) 100%)",
        }}>
        <Row className="justify-content-center text-center py-5 mt-5">
          <Col className='mt-5 pt-5 pt-lg-0'>
          <div className='mt-3'>
            <h1
              className="hero-title mb-4 text-white fw-bold"
              style={{ fontSize: '3.2rem', lineHeight: '1.3' }}
            >
             Get Your Documents Signed in Mintues
            </h1>

            <p
              className="text-white fs-5 mb-4"
              style={{ opacity: '0.85', maxWidth: '650px', margin: '0 auto' }}
            >
              No printing. No scanning. Just legally binding online signatures in a few clicks.
            </p>
</div>
            <div className="d-flex flex-column align-items-center gap-2 ">
              <Image
                src={Free}
                alt="Free Trial"
                width={150}
                className="rounded-3 shadow-sm img-fluid"
              />
              <p className="text-white fw-medium mt-2">
                Register today  & <span className="text-warning fw-bold"> get 10 credits free</span>
              </p>
            </div>

            <Button
              size="lg"
              className="hero-cta px-5 py-3 fw-semibold mb-lg-0 mb-5 "
              onClick={() => handleOnHandle()}
              style={{
                borderRadius: '50px',
                fontSize: '1.2rem',
                background: 'linear-gradient(90deg, #0d6efd, #0abcf9)',
                border: 'none',
                color: '#fff',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)',
                transition: 'all 0.3s ease-in-out',
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              🚀 Start a Free Trial
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Add this to your CSS file or as a style tag */}
      <style jsx>{`
        .nav-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .hero-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25) !important;
        }
        .logo-hover:hover {
          opacity: 0.9;
          cursor: pointer;
        }
        .transition-all {
          transition: all 0.3s ease;
        }
      `}</style>
    </>
  )
}

export default HeroBanner
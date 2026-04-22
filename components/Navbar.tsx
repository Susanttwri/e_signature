'use client'
import React, { useEffect, useState } from 'react'
import { Container, Button, Navbar, Nav } from 'react-bootstrap'
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/assets/esignsure500_wt.png'

export default function GlobalNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter();
  const pathname = usePathname();

  if (pathname?.startsWith('/admin')) return null;

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

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Modern Fixed Navbar */}
      <Navbar 
        expand="lg" 
        fixed="top"
        className={`py-3 ${scrolled ? 'shadow-sm' : ''} transition-all`} 
        style={{ 
          transition: 'all 0.3s ease', 
          background: "linear-gradient(135deg, rgb(82, 128, 233) 0%, rgb(22 87 220) 100%)",
          zIndex: 1030
        }}
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} href="/" className="nav-logo-container">
            <Image src={Logo} alt="Company Logo" width={150} height={80} className="img-fluid logo-hover" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto fw-semibold" style={{ fontSize: '1.1rem' }}>
              <Nav.Link as={Link} href="/" className={`px-3 ${isActive('/') ? 'text-warning' : 'text-white'}`}>Home</Nav.Link>
              <Nav.Link as={Link} href="/about" className={`px-3 ${isActive('/about') ? 'text-warning' : 'text-white'}`}>About Us</Nav.Link>
              <Nav.Link as={Link} href="/faq" className={`px-3 ${isActive('/faq') ? 'text-warning' : 'text-white'}`}>FAQ</Nav.Link>
              <Nav.Link as={Link} href="/resources" className={`px-3 ${isActive('/resources') ? 'text-warning' : 'text-white'}`}>Resources</Nav.Link>
              <Nav.Link as={Link} href="/blog" className={`px-3 ${isActive('/blog') ? 'text-warning' : 'text-white'}`}>Blog</Nav.Link>
            </Nav>
            <div className="d-flex align-items-center mt-3 mt-lg-0">
              <Button 
                variant="outline-light" 
                className="me-3 nav-button"  
                onClick={() => handleOnClick()} 
                style={{ borderRadius: '50px', padding: '10px 24px', borderWidth: '2px', fontWeight: '600' }} 
              >
                Login
              </Button>
              <Button 
                variant="light" 
                className="nav-button" 
                onClick={() => handleOnHandle()} 
                style={{ borderRadius: '50px', padding: '10px 24px', fontWeight: '600', color: '#0d6efd' }} 
              > 
                Get Started 
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <style jsx>{`
        .nav-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
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

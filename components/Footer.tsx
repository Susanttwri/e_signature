'use client'
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedinIn,
  faXTwitter,
  faYoutube,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";


export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin')) return null;

  return (
    <footer className="footer  text-white py-3">
      <Container>
      
        <Row className=" py-3 align-items-center">
          <Col md={6} className="mb-3 mb-md-0 d-flex flex-row align-items-center flex-wrap gap-3">
          <p className="mb-0 text-secondary" style={{ fontSize: "0.90rem" }}>
            Copyright © {new Date().getFullYear()} by Appyminds
          </p>

            <p className="mb-0">
              <Link href="https://appyminds.com/termsandcondition" className="text-decoration-none text-secondary hover-primary" style={{ fontSize: "0.90rem" }}>
                Terms & Conditions
              </Link>
            </p>
            <p className="mb-0 text-secondary">
              |
            </p>
            <p className="mb-0">
              <Link href="https://appyminds.com/privacypolicy" className="text-decoration-none text-secondary hover-primary" style={{ fontSize: "0.90rem" }}>
                Privacy Policy
              </Link>
            </p>
          </Col>

          <Col md={6}>
            <div className="d-flex justify-content-md-end gap-4">
              <Link
                href="https://www.facebook.com/esignsure"
                className="text-white social-icon"
              >
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/esignsure"
                className="text-white social-icon"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </Link>
              <Link
                href="https://www.instagram.com/esignsure/"
                className="text-white social-icon"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </Link>                
              <Link
                href="#"
                className="text-white social-icon"
              >
                <FontAwesomeIcon icon={faXTwitter} size="lg" />
              </Link>
              <Link
                href="#"
                className="text-white social-icon"
              >
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
      .footer{
        background-color:#182848;
      }
        /* Link hover effect */
        .hover-primary:hover {
          color: #0d6efd !important;
          transition: all 0.3s ease;
        }
        
        /* Social icon hover effects */
        .social-icon {
          display: inline-block;
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          color:rgb(10, 110, 210) !important; /* Dark color on hover */
          transform: translateY(-3px); /* Move up slightly */
        }
        
        /* Footer links hover effect */
        .footer-link:hover {
          color: #0d6efd !important;
          text-decoration: underline;
          transition: all 0.2s ease;
        }
          .line{
          width:150px;
          color:#fff;
          }
      `}</style>
    </footer>
  );
}

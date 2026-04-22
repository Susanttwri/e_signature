'use client';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faBook, faCode, faArrowRight, faDownload, faShieldHeart, faBolt } from '@fortawesome/free-solid-svg-icons';

export default function Resources() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
           setPosts(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const staticResources = [
    { title: 'eSignature Guide 2026', icon: faBook, color: '#0d6efd', desc: 'The complete handbook for digital signature compliance.' },
    { title: 'API Documentation', icon: faCode, color: '#198754', desc: 'Integrate eSignSure into your platform in minutes.' },
    { title: 'Security Whitepaper', icon: faFilePdf, color: '#dc3545', desc: 'Learn how we protect your sensitive data.' },
    { title: 'Compliance Toolkit', icon: faShieldHeart, color: '#6f42c1', desc: 'Everything you need for legal readiness.' },
    { title: 'Fast Track Onboarding', icon: faBolt, color: '#ffc107', desc: 'Quick start guide for new enterprise users.' },
    { title: 'PDF Utility Tools', icon: faDownload, color: '#fd7e14', desc: 'Free tools to merge and compress your documents.' },
  ];

  return (
    <div className="py-5" style={{ background: '#f4f7f6', minHeight: '100vh' }}>
      {/* Header */}
      <Container className="my-5 pt-4">
        <div className="text-center mb-5">
          <span className="badge bg-primary text-white px-3 py-2 rounded-pill mb-3 fw-bold">KNOWLEDGE HUB</span>
          <h1 className="fw-bold display-4 mb-3" style={{ color: '#182848' }}>Resources & <span className="text-primary">Insights</span></h1>
          <p className="text-muted fs-5 mx-auto" style={{ maxWidth: '700px' }}>
            Expert guides, technical documentation, and the latest industry trends to help you master digital document workflows.
          </p>
        </div>

        {/* Resources Section */}
        <div className="mb-5 pb-4 border-bottom">
          <h2 className="fw-bold mb-4" style={{ color: '#0048d7' }}>Essential Resources</h2>
          <Row>
            {staticResources.map((res, idx) => (
              <Col lg={4} md={6} className="mb-4" key={idx}>
                <Card className="resource-card h-100 shadow-sm border-0 p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-box me-3 shadow-sm" style={{ backgroundColor: `${res.color}15`, color: res.color }}>
                      <FontAwesomeIcon icon={res.icon} size="lg" />
                    </div>
                    <h5 className="fw-bold mb-0">{res.title}</h5>
                  </div>
                  <Card.Text className="text-muted small mb-3">{res.desc}</Card.Text>
                  <Link href="#" className="text-decoration-none fw-bold mt-auto" style={{ color: res.color, fontSize: '0.85rem' }}>
                    Access Now <FontAwesomeIcon icon={faArrowRight} className="ms-1" />
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Blog Section */}
        <div className="mt-5">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <h2 className="fw-bold mb-0" style={{ color: '#0048d7' }}>Latest Articles</h2>
            <Link href="/admin/articles" className="text-decoration-none small fw-bold">Manage Posts &rarr;</Link>
          </div>
          
          {loading ? (
            <div className="text-center my-5 py-5">
              <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <Row>
              {posts.length === 0 ? (
                <Col>
                  <div className="text-center text-muted my-5 p-5 bg-white rounded-4 shadow-sm border border-dashed">
                    <h4>No posts found.</h4>
                    <p>Check back later for new content!</p>
                  </div>
                </Col>
              ) : (
                posts.map((post: any) => (
                  <Col lg={4} md={6} className="mb-4" key={post.id}>
                    <Card className="blog-card shadow-sm border-0 h-100 position-relative">
                      <div className="card-img-wrapper">
                        {post.imageUrl ? (
                          <img src={post.imageUrl} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                          <div className="w-100 h-100 d-flex align-items-center justify-content-center" style={{ background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)' }}>
                            <span className="text-muted fw-semibold">eSignSure News</span>
                          </div>
                        )}
                        <div className="overlay d-flex flex-column justify-content-end p-4">
                           <div className="content-overlay">
                             <div className="text-white-50 small mb-2 fw-semibold">
                               {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                             </div>
                             <Card.Title className="fw-bold text-white fs-4 mb-0 blog-title">{post.title}</Card.Title>
                             
                             <div className="read-more-wrapper mt-3">
                               <Link href={`/resources/${post.slug}`} passHref>
                                 <Button variant="light" className="rounded-pill fw-bold px-4 hover-lift text-primary shadow">
                                   Read More
                                 </Button>
                               </Link>
                             </div>
                           </div>
                        </div>
                      </div>
                    </Card>
                  </Col>
                ))
              )}
            </Row>
          )}
        </div>
      </Container>

      <style jsx global>{`
        .resource-card {
          border-radius: 20px;
          transition: all 0.3s ease;
          border: 1px solid rgba(0,0,0,0.03) !important;
        }
        .resource-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08) !important;
        }
        .icon-box {
          min-width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .blog-card {
          border-radius: 24px;
          overflow: hidden;
          aspect-ratio: 1 / 1;
        }
        .card-img-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.05) 100%);
          transition: all 0.4s ease;
        }
        .blog-card:hover .overlay {
          background: linear-gradient(to top, rgba(0,72,215,0.95) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.1) 100%);
        }
        .blog-card img {
          transition: transform 0.6s ease;
        }
        .blog-card:hover img {
          transform: scale(1.08);
        }
        
        .content-overlay {
          transform: translateY(50px);
          transition: transform 0.4s ease;
        }
        .blog-card:hover .content-overlay {
          transform: translateY(0);
        }
        
        .read-more-wrapper {
          opacity: 0;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .blog-card:hover .read-more-wrapper {
          opacity: 1;
        }
        
        .blog-title {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          line-height: 1.3;
        }
        
        .hover-lift {
          transition: transform 0.2s ease;
        }
        .hover-lift:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}

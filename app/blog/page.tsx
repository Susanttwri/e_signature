'use client';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
           // Filter specifically for "Blog" type
           setPosts(data.filter((p: any) => (p.type === 'Blog' || !p.type) && p.status === 'Published'));
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="py-5" style={{ background: '#f8f9fc', minHeight: '100vh' }}>
      <Container className="my-5 pt-4">
        <div className="text-center mb-5 pb-4">
          <span className="badge bg-primary text-white px-3 py-2 rounded-pill mb-3 fw-bold">INSIGHTS & UPDATES</span>
          <h1 className="fw-bold display-4 mb-3" style={{ color: '#182848' }}>eSignSure <span className="text-primary">Blog</span></h1>
          <p className="text-muted fs-5 mx-auto" style={{ maxWidth: '600px' }}>
            Latest news, industry trends, and professional tips on electronic signatures and digital transformation.
          </p>
        </div>

        {loading ? (
          <div className="text-center my-5 py-5">
            <div className="spinner-border text-primary" role="status"></div>
          </div>
        ) : (
          <Row>
            {posts.length === 0 ? (
              <Col>
                <div className="text-center text-muted my-5 p-5 bg-white rounded-4 shadow-sm border">
                  <h4>No blog posts found.</h4>
                  <p>Check back later for fresh insights!</p>
                </div>
              </Col>
            ) : (
              posts.map((post: any) => (
                <Col lg={4} md={6} className="mb-4" key={post.id}>
                  <Card className="border-0 shadow-sm h-100 overflow-hidden hover-shadow transition-all" style={{ borderRadius: '20px' }}>
                    <div style={{ height: '220px', position: 'relative', background: '#eee' }}>
                       {post.imageUrl ? (
                         <img src={post.imageUrl} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                       ) : (
                         <div className="d-flex align-items-center justify-content-center h-100 text-muted fw-bold">eSignSure</div>
                       )}
                       <div className="position-absolute top-0 end-0 m-3">
                         <span className="badge bg-white text-dark shadow-sm px-3 py-2 rounded-pill fw-bold" style={{ fontSize: '0.7rem' }}>{new Date(post.createdAt).toLocaleDateString()}</span>
                       </div>
                    </div>
                    <Card.Body className="p-4 d-flex flex-column">
                      <h4 className="fw-bold mb-3" style={{ color: '#182848', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{post.title}</h4>
                      <p className="text-muted small mb-4" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {post.shortDescription || (post.content ? post.content.replace(/<[^>]*>?/gm, '').substring(0, 120) + '...' : '')}
                      </p>
                      <Link href={`/resources/${post.slug}`} className="mt-auto text-decoration-none fw-bold text-primary d-flex align-items-center">
                        Read Full Article <span className="ms-2">&rarr;</span>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            )}
          </Row>
        )}
      </Container>
      <style jsx>{`
        .hover-shadow:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.1) !important;
        }
        .transition-all {
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
}

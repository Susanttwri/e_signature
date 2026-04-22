'use client';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Resources() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="py-5" style={{ background: '#f8f9fa', minHeight: '100vh' }}>
      <Container className="my-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold" style={{ color: '#0048d7' }}>Resources & Blog</h1>
          <p className="text-muted fs-5">Insights, updates, and guides on electronic signatures and document workflows.</p>
        </div>

        {loading ? (
          <div className="text-center my-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <Row>
            {posts.length === 0 ? (
              <Col>
                <div className="text-center text-muted my-5">
                  <h4>No posts found.</h4>
                  <p>Check back later for new content!</p>
                </div>
              </Col>
            ) : (
              posts.map((post: any) => (
                <Col md={4} className="mb-4" key={post.id}>
                  <Card className="h-100 shadow-sm border-0" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                    <div style={{ height: '200px', backgroundColor: '#e9ecef', position: 'relative' }}>
                      {post.imageUrl ? (
                        <Image src={post.imageUrl} alt={post.title} fill style={{ objectFit: 'cover' }} />
                      ) : (
                        <div className="d-flex align-items-center justify-content-center h-100 text-muted">
                          No Image
                        </div>
                      )}
                    </div>
                    <Card.Body className="d-flex flex-column p-4">
                      <div className="text-muted small mb-2">{new Date(post.createdAt).toLocaleDateString()}</div>
                      <Card.Title className="fw-bold fs-5 mb-3" style={{ color: '#182848' }}>{post.title}</Card.Title>
                      <Card.Text className="text-muted" style={{ flex: 1 }}>
                        {post.content.substring(0, 100)}...
                      </Card.Text>
                      <Link href={`/resources/${post.slug}`} passHref>
                        <Button variant="outline-primary" className="mt-3 w-100" style={{ borderRadius: '50px' }}>
                          Read More
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            )}
          </Row>
        )}
      </Container>
    </div>
  );
}

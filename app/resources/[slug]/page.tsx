'use client';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPost() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (params.slug) {
      setLoading(true);
      // Fetch the specific post
      fetch(`/api/posts/${params.slug}`)
        .then(res => {
          if (!res.ok) throw new Error('Post not found');
          return res.json();
        })
        .then(data => {
          setPost(data);
          // Fetch all posts to find related ones
          return fetch('/api/posts');
        })
        .then(res => res.json())
        .then(allPosts => {
          // Filter out current post and take first 3 as related
          const related = allPosts
            .filter((p: any) => p.slug !== params.slug)
            .slice(0, 3);
          setRelatedPosts(related);
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [params.slug]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <Container className="text-center my-5 py-5">
        <h2 className="text-danger mb-4">Oops! {error || 'Post not found'}</h2>
        <Button variant="primary" onClick={() => router.push('/resources')}>
          Back to Resources
        </Button>
      </Container>
    );
  }

  return (
    <div className="py-5" style={{ background: '#fff', minHeight: '100vh' }}>
      <Container className="my-5">
        <Link href="/resources" className="text-decoration-none text-muted mb-4 d-inline-block">
          &larr; Back to Resources
        </Link>
        
        <div className="mx-auto" style={{ maxWidth: '800px' }}>
          <div className="text-center mb-5">
            <p className="text-muted mb-2">{new Date(post.createdAt).toLocaleDateString()} • {post.author || 'Admin'}</p>
            <h1 className="fw-bold mb-4" style={{ color: '#182848', fontSize: '2.5rem' }}>{post.title}</h1>
          </div>

          {post.imageUrl && (
            <div className="mb-5" style={{ position: 'relative', height: '400px', borderRadius: '15px', overflow: 'hidden' }}>
              <img src={post.imageUrl} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          )}

          <div 
            className="fs-5 text-dark pb-5 border-bottom article-content" 
            style={{ lineHeight: '1.8' }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Related Articles Section */}
          {relatedPosts.length > 0 && (
            <div className="mt-5 pt-4">
              <h3 className="fw-bold mb-4" style={{ color: '#182848' }}>Related Latest Articles</h3>
              <Row>
                {relatedPosts.map((rp: any) => (
                  <Col md={4} key={rp.id} className="mb-4">
                    <Card className="h-100 shadow-sm border-0" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                      <div style={{ height: '160px', position: 'relative', background: '#f8f9fa' }}>
                        {rp.imageUrl ? (
                          <img src={rp.imageUrl} alt={rp.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                          <div className="d-flex align-items-center justify-content-center h-100 text-muted">No Image</div>
                        )}
                      </div>
                      <Card.Body className="d-flex flex-column">
                        <Card.Title className="fs-6 fw-bold mb-2" style={{ 
                          display: '-webkit-box', 
                          WebkitLineClamp: 2, 
                          WebkitBoxOrient: 'vertical', 
                          overflow: 'hidden',
                          height: '40px'
                        }}>
                          {rp.title}
                        </Card.Title>
                        <Link href={`/resources/${rp.slug}`} className="mt-auto text-decoration-none fw-bold small text-primary">
                          Read More &rarr;
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </div>
      </Container>
      <style jsx global>{`
        .article-content h1, .article-content h2, .article-content h3 {
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-weight: 700;
          color: #182848;
        }
        .article-content img {
          max-width: 100%;
          height: auto;
          border-radius: 10px;
          margin: 2rem 0;
        }
        .article-content ul, .article-content ol {
          margin-bottom: 1.5rem;
        }
        .article-content p {
          margin-bottom: 1.25rem;
        }
      `}</style>
    </div>
  );
}

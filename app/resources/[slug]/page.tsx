'use client';
import { Container, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPost() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (params.slug) {
      fetch(`/api/posts/${params.slug}`)
        .then(res => {
          if (!res.ok) throw new Error('Post not found');
          return res.json();
        })
        .then(data => {
          setPost(data);
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
              <Image src={post.imageUrl} alt={post.title} fill style={{ objectFit: 'cover' }} />
            </div>
          )}

          <div className="fs-5 text-dark" style={{ lineHeight: '1.8', whiteSpace: 'pre-wrap' }}>
            {post.content}
          </div>
        </div>
      </Container>
    </div>
  );
}

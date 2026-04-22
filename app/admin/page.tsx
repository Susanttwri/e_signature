'use client';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPanel() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content, author, imageUrl }),
      });

      if (!res.ok) throw new Error('Failed to create post');

      setMessage('Post created successfully!');
      setTitle('');
      setContent('');
      setAuthor('');
      setImageUrl('');
      
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-5" style={{ background: '#f4f6f9', minHeight: '100vh' }}>
      <Container className="my-5">
        <div className="mx-auto" style={{ maxWidth: '700px' }}>
          <Card className="shadow-sm border-0" style={{ borderRadius: '15px' }}>
            <Card.Body className="p-5">
              <h2 className="fw-bold mb-4 text-center" style={{ color: '#0048d7' }}>Admin Panel</h2>
              <p className="text-center text-muted mb-4">Create a new blog post for the Resources page.</p>

              {message && <Alert variant="success">{message}</Alert>}
              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Post Title</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter post title" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    style={{ padding: '12px' }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Author</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter author name" 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    style={{ padding: '12px' }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Image URL (Optional)</Form.Label>
                  <Form.Control 
                    type="url" 
                    placeholder="https://example.com/image.jpg" 
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    style={{ padding: '12px' }}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold">Content</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={8} 
                    placeholder="Write your article content here..." 
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    style={{ padding: '12px' }}
                  />
                </Form.Group>

                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-100" 
                  disabled={loading}
                  style={{ padding: '12px', borderRadius: '50px', fontSize: '1.1rem', fontWeight: '600' }}
                >
                  {loading ? 'Publishing...' : 'Publish Post'}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}

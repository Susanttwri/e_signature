'use client';
import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { 
  ssr: false,
  loading: () => <div className="p-5 text-center border rounded">Loading Editor...</div>
});

export default function ArticleForm({ initialData, onSubmit, loading }: any) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    imageUrl: '',
    content: '',
    type: 'Blog',
    status: 'Published'
  });

  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({
        ...prev,
        ...initialData
      }));
    }
  }, [initialData]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEditorChange = (content: string) => {
    setFormData(prev => ({ ...prev, content }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col lg={8}>
          <Card className="border-0 shadow-sm mb-4" style={{ borderRadius: '15px' }}>
            <Card.Body className="p-4">
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Article Title</Form.Label>
                <Form.Control
                  size="lg"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter a catchy title..."
                  required
                  className="fw-semibold border-2"
                  style={{ borderRadius: '10px' }}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Content</Form.Label>
                <div className="editor-container">
                   <ReactQuill 
                     theme="snow"
                     value={formData.content}
                     onChange={handleEditorChange}
                     modules={quillModules}
                     style={{ height: '400px', marginBottom: '50px' }}
                   />
                </div>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="border-0 shadow-sm mb-4" style={{ borderRadius: '15px' }}>
            <Card.Body className="p-4">
              <h6 className="fw-bold mb-3 border-bottom pb-2">Publish Settings</h6>
              
              <Form.Group className="mb-3">
                <Form.Label className="small fw-bold">Author Name</Form.Label>
                <Form.Control
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  placeholder="e.g. Rakesh G"
                  style={{ borderRadius: '8px' }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="small fw-bold">Article Type</Form.Label>
                <Form.Select name="type" value={formData.type} onChange={handleChange} style={{ borderRadius: '8px' }}>
                  <option value="Blog">Blog</option>
                  <option value="Study Abroad">Study Abroad</option>
                  <option value="Resources">Resources</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="small fw-bold">Status</Form.Label>
                <Form.Select name="status" value={formData.status} onChange={handleChange} style={{ borderRadius: '8px' }}>
                  <option value="Published">Published</option>
                  <option value="Draft">Draft</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="small fw-bold">Featured Image URL</Form.Label>
                <Form.Control
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  placeholder="https://..."
                  style={{ borderRadius: '8px' }}
                />
                {formData.imageUrl && (
                   <div className="mt-3 rounded overflow-hidden shadow-sm" style={{ height: '160px' }}>
                     <img src={formData.imageUrl} alt="Preview" className="w-100 h-100 object-fit-cover" />
                   </div>
                )}
              </Form.Group>

              <Button 
                variant="primary" 
                type="submit" 
                disabled={loading} 
                className="w-100 py-2 fw-bold shadow-sm"
                style={{ borderRadius: '10px' }}
              >
                {loading ? 'Processing...' : initialData ? 'Update Article' : 'Publish Article'}
              </Button>
              
              <Button 
                variant="light" 
                className="w-100 mt-2 py-2 fw-semibold text-muted border-0"
                style={{ borderRadius: '10px' }}
                onClick={() => window.history.back()}
              >
                Cancel
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <style jsx global>{`
        .ql-container {
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          font-family: inherit;
          font-size: 1rem;
        }
        .ql-toolbar {
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          background: #f8f9fa;
        }
      `}</style>
    </Form>
  );
}

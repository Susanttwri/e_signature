'use client';
import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Card, Spinner } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faTimes } from '@fortawesome/free-solid-svg-icons';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { 
  ssr: false,
  loading: () => <div className="p-5 text-center border rounded">Loading Editor...</div>
});

export default function ArticleForm({ initialData, onSubmit, loading, defaultType = 'Blog' }: any) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    imageUrl: '',
    shortDescription: '',
    content: '',
    type: defaultType,
    status: 'Published',
    metaTitle: '',
    metaDescription: ''
  });

  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({
        ...prev,
        ...initialData
      }));
    } else {
      setFormData((prev) => ({ ...prev, type: defaultType }));
    }
  }, [initialData, defaultType]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEditorChange = (content: string) => {
    setFormData(prev => ({ ...prev, content }));
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const data = new FormData();
    data.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: data
      });
      const result = await res.json();
      if (result.url) {
        setFormData(prev => ({ ...prev, imageUrl: result.url }));
      }
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Failed to upload image');
    } finally {
      setUploading(false);
    }
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
                <Form.Label className="fw-bold">Short Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleChange}
                  placeholder="Write a brief summary for the card preview..."
                  className="border-2"
                  style={{ borderRadius: '10px' }}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Main Content</Form.Label>
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

          {/* SEO Section */}
          <Card className="border-0 shadow-sm mb-4" style={{ borderRadius: '15px' }}>
            <Card.Body className="p-4">
              <h6 className="fw-bold mb-3">SEO Metadata</h6>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-bold">Meta Title</Form.Label>
                <Form.Control
                  name="metaTitle"
                  value={formData.metaTitle}
                  onChange={handleChange}
                  placeholder="SEO Title (recommended < 60 chars)"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-0">
                <Form.Label className="small fw-bold">Meta Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  name="metaDescription"
                  value={formData.metaDescription}
                  onChange={handleChange}
                  placeholder="SEO Description (recommended < 160 chars)"
                  required
                />
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="border-0 shadow-sm mb-4" style={{ borderRadius: '15px' }}>
            <Card.Body className="p-4">
              <h6 className="fw-bold mb-3 border-bottom pb-2">Publish Settings</h6>
              
              <Form.Group className="mb-4">
                <Form.Label className="small fw-bold">Featured Image</Form.Label>
                <div 
                  className="upload-box border-2 border-dashed rounded-3 p-0 text-center position-relative"
                  style={{ border: '2px dashed #dee2e6', cursor: 'pointer', background: '#f8f9fa', minHeight: '180px' }}
                >
                  {uploading ? (
                    <div className="py-5">
                      <Spinner animation="border" size="sm" className="me-2 text-primary" />
                      <span className="small">Uploading...</span>
                    </div>
                  ) : formData.imageUrl ? (
                    <div className="position-relative">
                      <img src={formData.imageUrl} alt="Featured" className="w-100 rounded shadow-sm" style={{ height: '180px', objectFit: 'cover' }} />
                      <Button 
                        variant="danger" 
                        size="sm" 
                        className="position-absolute top-0 end-0 m-2 rounded-circle border-0 shadow"
                        onClick={() => setFormData(prev => ({ ...prev, imageUrl: '' }))}
                      >
                        <FontAwesomeIcon icon={faTimes} />
                      </Button>
                      <input
                        type="file"
                        accept="image/*"
                        className="position-absolute top-0 start-0 w-100 h-100 opacity-0 cursor-pointer"
                        onChange={handleFileUpload}
                      />
                    </div>
                  ) : (
                    <div className="py-5 text-muted">
                      <FontAwesomeIcon icon={faUpload} size="2x" className="mb-2 opacity-50" />
                      <div className="small fw-bold">Click to upload image</div>
                      <div className="text-smaller opacity-75">JPG, PNG or GIF (Max 5MB)</div>
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="position-absolute top-0 start-0 w-100 h-100 opacity-0 cursor-pointer"
                        onChange={handleFileUpload}
                      />
                    </div>
                  )}
                </div>
              </Form.Group>

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

              <Button 
                variant="primary" 
                type="submit" 
                disabled={loading || uploading} 
                className="w-100 py-2 fw-bold shadow-sm"
                style={{ borderRadius: '10px' }}
              >
                {loading ? 'Saving...' : initialData ? 'Update Article' : 'Publish Article'}
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
        .text-smaller { font-size: 0.75rem; }
      `}</style>
    </Form>
  );
}

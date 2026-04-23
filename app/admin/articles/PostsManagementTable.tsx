'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { Table, Button, Card, Badge, Form, InputGroup } from 'react-bootstrap';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

type Post = {
  id: string;
  title: string;
  slug: string;
  type?: string;
  status?: string;
  author?: string;
  createdAt: string;
  updatedAt?: string;
};

type Props = {
  heading: string;
  addLabel: string;
  addHref: string;
  typeFilter?: string;
};

export default function PostsManagementTable({ heading, addLabel, addHref, typeFilter }: Props) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/posts');
      const data = await res.json();
      setPosts(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;

    try {
      const res = await fetch(`/api/posts/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setPosts((prev) => prev.filter((post) => post.id !== id));
      }
    } catch (error) {
      console.error('Failed to delete post:', error);
    }
  };

  const filteredPosts = useMemo(() => {
    return posts
      .filter((post) => (typeFilter ? post.type === typeFilter : true))
      .filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (post.author || '').toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [posts, searchTerm, typeFilter]);

  return (
    <Card className="border-0 shadow-sm" style={{ borderRadius: '15px' }}>
      <Card.Body className="p-4">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">
          <h5 className="fw-bold mb-3 mb-md-0">{heading}</h5>
          <div className="d-flex gap-2">
            <InputGroup style={{ maxWidth: '300px' }}>
              <InputGroup.Text className="bg-white border-end-0">
                <FontAwesomeIcon icon={faSearch} className="text-muted" />
              </InputGroup.Text>
              <Form.Control
                placeholder="Search..."
                className="border-start-0 shadow-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>
            <Link href={addHref}>
              <Button variant="success" className="d-flex align-items-center gap-2 px-3 fw-semibold shadow-sm">
                <FontAwesomeIcon icon={faPlus} />
                <span>{addLabel}</span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="table-responsive">
          <Table hover className="align-middle border-0">
            <thead>
              <tr style={{ fontSize: '0.8rem', color: '#6c757d', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                <th className="bg-light border-0 px-3 py-3 rounded-start">#</th>
                <th className="bg-light border-0 py-3">Published Date</th>
                <th className="bg-light border-0 py-3">Title</th>
                <th className="bg-light border-0 py-3">Type</th>
                <th className="bg-light border-0 py-3">Status</th>
                <th className="bg-light border-0 py-3">Author</th>
                <th className="bg-light border-0 py-3">Last Updated</th>
                <th className="bg-light border-0 text-end px-3 py-3 rounded-end">Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={8} className="text-center py-5">
                    <div className="spinner-border text-primary spinner-border-sm me-2" role="status"></div>
                    Loading posts...
                  </td>
                </tr>
              ) : filteredPosts.length === 0 ? (
                <tr>
                  <td colSpan={8} className="text-center py-5 text-muted">No posts found.</td>
                </tr>
              ) : (
                filteredPosts.map((post, index) => (
                  <tr key={post.id} style={{ fontSize: '0.9rem' }} className="border-bottom">
                    <td className="px-3 text-muted">{index + 1}</td>
                    <td>{new Date(post.createdAt).toLocaleDateString()}</td>
                    <td className="fw-semibold" style={{ maxWidth: '280px' }}>
                      <div className="text-truncate" title={post.title}>{post.title}</div>
                    </td>
                    <td><Badge bg="light" className="text-dark border fw-normal">{post.type || 'Blog'}</Badge></td>
                    <td>
                      <Badge bg={post.status === 'Published' ? 'success' : 'warning'} className="px-2 py-1 fw-medium">
                        {post.status || 'Published'}
                      </Badge>
                    </td>
                    <td>{post.author || 'Admin'}</td>
                    <td>{new Date(post.updatedAt || post.createdAt).toLocaleDateString()}</td>
                    <td className="text-end px-3">
                      <div className="d-flex gap-1 justify-content-end">
                        <Link href={`/resources/${post.slug}`}>
                          <Button variant="primary" size="sm" className="btn-action">
                            View
                          </Button>
                        </Link>
                        <Link href={`/admin/articles/edit/${post.id}`}>
                          <Button variant="primary" size="sm" className="btn-action">
                            Edit
                          </Button>
                        </Link>
                        <Button variant="danger" size="sm" className="btn-action" onClick={() => handleDelete(post.id)}>
                          Remove
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>
      </Card.Body>
      <style jsx>{`
        .btn-action {
          font-size: 0.7rem;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 4px;
          text-transform: capitalize;
        }
        .table > :not(caption) > * > * {
          padding: 1rem 0.5rem;
        }
      `}</style>
    </Card>
  );
}

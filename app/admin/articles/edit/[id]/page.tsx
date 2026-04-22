'use client';
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import ArticleForm from '../../ArticleForm';

export default function EditArticle() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [initialData, setInitialData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (id) {
      fetch(`/api/posts/${id}`)
        .then(res => res.json())
        .then(data => setInitialData(data))
        .catch(err => console.error('Error fetching post:', err));
    }
  }, [id]);

  const handleSubmit = async (formData: any) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to update article');

      router.push('/admin/articles');
      router.refresh();
    } catch (error) {
      console.error(error);
      alert('Error updating article');
    } finally {
      setLoading(false);
    }
  };

  if (!initialData) return <div className="text-center py-5">Loading article data...</div>;

  return (
    <div>
      <div className="mb-4">
        <h5 className="fw-bold">Edit Article</h5>
        <p className="text-muted small">Update the information for this article.</p>
      </div>
      <ArticleForm initialData={initialData} onSubmit={handleSubmit} loading={loading} />
    </div>
  );
}

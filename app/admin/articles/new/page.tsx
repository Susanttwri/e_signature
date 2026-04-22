'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ArticleForm from '../ArticleForm';

export default function NewArticle() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (formData: any) => {
    setLoading(true);
    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to create article');

      router.push('/admin/articles');
      router.refresh();
    } catch (error) {
      console.error(error);
      alert('Error creating article');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-4">
        <h5 className="fw-bold">Create New Article</h5>
        <p className="text-muted small">Fill in the details below to publish a new article to your blog.</p>
      </div>
      <ArticleForm onSubmit={handleSubmit} loading={loading} />
    </div>
  );
}

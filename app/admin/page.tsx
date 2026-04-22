'use client';
import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines, faEye, faUser, faClock } from '@fortawesome/free-solid-svg-icons';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    total: 0,
    published: 0,
    drafts: 0
  });

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(posts => {
        if (Array.isArray(posts)) {
          setStats({
            total: posts.length,
            published: posts.filter((p: any) => p.status === 'Published').length,
            drafts: posts.filter((p: any) => p.status === 'Draft').length
          });
        }
      })
      .catch(err => console.error('Error fetching stats:', err));
  }, []);

  const statCards = [
    { title: 'Total Articles', value: stats.total, icon: faFileLines, color: '#0d6efd' },
    { title: 'Published', value: stats.published, icon: faEye, color: '#198754' },
    { title: 'Drafts', value: stats.drafts, icon: faClock, color: '#ffc107' },
    { title: 'Total Authors', value: 1, icon: faUser, color: '#6f42c1' },
  ];

  return (
    <div>
      <Row>
        {statCards.map((card, idx) => (
          <Col md={3} key={idx} className="mb-4">
            <Card className="border-0 shadow-sm h-100" style={{ borderRadius: '15px' }}>
              <Card.Body className="d-flex align-items-center p-4">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center me-3" 
                  style={{ width: '60px', height: '60px', background: `${card.color}15`, color: card.color }}
                >
                  <FontAwesomeIcon icon={card.icon} size="lg" />
                </div>
                <div>
                  <h6 className="text-muted small mb-1">{card.title}</h6>
                  <h3 className="fw-bold mb-0">{card.value}</h3>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="border-0 shadow-sm mt-2" style={{ borderRadius: '15px' }}>
        <Card.Body className="p-4 text-center py-5">
           <h4 className="fw-bold mb-3">Welcome to the EduCtrl CRM Admin</h4>
           <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
             Use the sidebar to manage your blog articles, update resources, and keep your website content fresh.
           </p>
           <div className="mt-4">
             <img src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-dashboard-illustration-download-in-svg-png-gif-formats--website-analytic-online-seo-business-and-management-pack-illustrations-3310036.png" alt="Dashboard" style={{ maxWidth: '100%', height: '300px', objectFit: 'contain' }} />
           </div>
        </Card.Body>
      </Card>
    </div>
  );
}

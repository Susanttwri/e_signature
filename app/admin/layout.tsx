'use client';
import React, { useState } from 'react';
import { Nav, Navbar, Dropdown, Button } from 'react-bootstrap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { faDashboard, faFileLines, faUser, faSignOutAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { name: 'Dashboard', icon: faDashboard, path: '/admin' },
    { name: 'Articles', icon: faFileLines, path: '/admin/articles' },
  ];

  const currentPathName = menuItems.find(item => item.path === pathname)?.name || 'Dashboard';

  return (
    <div className="admin-wrapper" style={{ background: '#f4f6f9', minHeight: '100vh' }}>
      {/* Top Navbar */}
      <Navbar expand="lg" className="bg-white shadow-sm px-4 py-2 fixed-top" style={{ zIndex: 1050, height: '60px' }}>
        <div className="d-flex align-items-center">
          <Button variant="link" className="text-dark me-3 p-0" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </Button>
          <Navbar.Brand href="/admin" className="fw-bold text-primary d-flex align-items-center">
            <span style={{ fontSize: '1.5rem', letterSpacing: '-0.5px' }}>EduCtrl</span>
            <span className="ms-2 px-2 py-0 bg-warning text-white rounded small fw-bold" style={{ fontSize: '0.7rem' }}>CRM</span>
          </Navbar.Brand>
        </div>
        <div className="ms-auto d-flex align-items-center">
          <Dropdown align="end">
            <Dropdown.Toggle variant="link" id="dropdown-user" className="text-decoration-none text-dark d-flex align-items-center border-0 p-0 shadow-none">
              <div className="rounded-circle bg-light d-flex align-items-center justify-content-center me-2 border" style={{ width: '40px', height: '40px' }}>
                <FontAwesomeIcon icon={faUser} className="text-secondary" />
              </div>
              <div className="d-none d-md-block text-start me-2">
                <div className="fw-bold small lh-1">Admin</div>
                <div className="text-muted" style={{ fontSize: '0.7rem' }}>Super Admin</div>
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu className="shadow border-0 mt-2">
              <Dropdown.Item href="#"><FontAwesomeIcon icon={faUser} className="me-2" /> Profile</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="/"><FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Navbar>

      <div className="d-flex pt-5">
        {/* Sidebar */}
        <div 
          className="sidebar pt-4"
          style={{ 
            width: sidebarOpen ? '260px' : '0', 
            minHeight: 'calc(100vh - 60px)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            overflow: 'hidden',
            position: 'fixed',
            left: 0,
            top: '60px',
            zIndex: 1040,
            background: '#1a2235',
            boxShadow: '4px 0 10px rgba(0,0,0,0.05)'
          }}
        >
          <div className="px-4 mb-4 text-secondary small text-uppercase fw-bold opacity-50" style={{ letterSpacing: '1px' }}>General</div>
          <Nav className="flex-column px-3">
            {menuItems.map((item) => (
              <Nav.Link 
                key={item.path}
                as={Link} 
                href={item.path}
                className={`mb-2 rounded-3 p-3 d-flex align-items-center border-0 ${pathname === item.path ? 'bg-primary text-white shadow' : 'text-secondary-emphasis hover-sidebar'}`}
                style={{ 
                  transition: 'all 0.2s',
                  color: pathname === item.path ? '#fff' : '#a3b1cc',
                  fontSize: '0.95rem'
                }}
              >
                <FontAwesomeIcon icon={item.icon} className="me-3" style={{ width: '20px', opacity: pathname === item.path ? 1 : 0.7 }} />
                <span className="fw-medium">{item.name}</span>
              </Nav.Link>
            ))}
          </Nav>
        </div>

        {/* Main Content Area */}
        <div 
          className="flex-grow-1 p-4"
          style={{ 
            marginLeft: sidebarOpen ? '260px' : '0',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            background: '#f8f9fc',
            minHeight: 'calc(100vh - 60px)',
            marginTop: '10px'
          }}
        >
          <div className="d-flex align-items-center mb-4">
            <h4 className="fw-bold mb-0 me-3">{currentPathName}</h4>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 small bg-transparent p-0">
                <li className="breadcrumb-item"><Link href="/admin" className="text-decoration-none text-muted">Dashboard</Link></li>
                {pathname !== '/admin' && (
                   <li className="breadcrumb-item active fw-bold text-dark" aria-current="page">{currentPathName}</li>
                )}
              </ol>
            </nav>
          </div>
          
          <div className="content-inner animate-fade-in">
            {children}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .hover-sidebar:hover {
          background: rgba(255,255,255,0.05) !important;
          color: white !important;
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .breadcrumb-item + .breadcrumb-item::before {
          content: "/";
          color: #adb5bd;
        }
      `}</style>
    </div>
  );
}

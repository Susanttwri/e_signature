'use client'
// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { 
//   FaFileSignature, 
//   FaPaperPlane, 
//   FaChartLine, 
//   FaMobile,
//   FaLaptop,
//   FaTabletAlt
// } from 'react-icons/fa';

// function KeyBenefits() {
//   return (
//     <Container className="py-5 px-0 px-md-3">
//       <Row className="g-4 justify-content-center">
//         <Col xs={12} className="text-center mb-4">
//           <h2 className="fw-bold">Fast, Secure eSignatures</h2>
//           <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
//             Easily sign and send documents in four simple steps — from upload to instant signature.
//           </p>
//         </Col>

//         {/* Benefit 1 */}
//         <Col lg={3} md={6} className="px-3">
//           <div className="bg-white shadow-lg rounded-3 p-4 h-100 text-center transition hover-shadow">
//             <div className="bg-light rounded-circle p-3 mb-3 d-inline-flex">
//               <FaFileSignature className="text-blue" size={24} />
//             </div>
//             <h5 className="fw-bold mb-2">Legally Binding</h5>
//             <p className="text-muted mb-0">
//               Fully compliant with ESIGN, UETA, and eIDAS regulations
//             </p>
//           </div>
//         </Col>

//         {/* Benefit 2 */}
//         <Col lg={3} md={6} className="px-3">
//           <div className="bg-white shadow-lg rounded-3 p-4 h-100 text-center transition hover-shadow">
//             <div className="bg-light rounded-circle p-3 mb-3 d-inline-flex">
//               <FaPaperPlane className="text-success" size={24} />
//             </div>
//             <h5 className="fw-bold mb-2">Instant Sharing</h5>
//             <p className="text-muted mb-0">
//               Send and sign documents in seconds, from anywhere
//             </p>
//           </div>
//         </Col>

//         {/* Benefit 3 */}
//         <Col lg={3} md={6} className="px-3">
//           <div className="bg-white shadow-lg rounded-3 p-4 h-100 text-center transition hover-shadow">
//             <div className="bg-light rounded-circle p-3 mb-3 d-inline-flex">
//               <FaChartLine className="text-info" size={24} />
//             </div>
//             <h5 className="fw-bold mb-2">Real-Time Tracking</h5>
//             <p className="text-muted mb-0">
//               Get notifications when documents are viewed and signed
//             </p>
//           </div>
//         </Col>

//         {/* Benefit 4 */}
//         <Col lg={3} md={6} className="px-3">
//           <div className="bg-white shadow-lg rounded-3 p-4 h-100 text-center transition hover-shadow">
//             <div className="bg-light rounded-circle p-3 mb-3 d-inline-flex">
//               <div className="d-flex">
//                 <FaMobile className="text-purple mx-1" size={18} />
//                 <FaTabletAlt className="text-purple mx-1" size={18} />
//                 <FaLaptop className="text-purple mx-1" size={18} />
//               </div>
//             </div>
//             <h5 className="fw-bold mb-2">Cross-Platform</h5>
//             <p className="text-muted mb-0">
//               Works seamlessly on all your devices
//             </p>
//           </div>
//         </Col>
//       </Row>

//       {/* Custom CSS */}
//       <style jsx>{`
//         .hover-shadow {
//           transition: box-shadow 0.3s ease;
//         }
//         .hover-shadow:hover {
//           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
//         }
//       `}</style>
//     </Container>
//   );
// }

// export default KeyBenefits;

'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileSignature,
  faCloudUploadAlt,
  faMobileAlt,
  faLock,
  faEnvelopeOpenText,
  faUserCheck,
  faCalendarCheck,
  faShieldAlt,faClock,faPlug
} from '@fortawesome/free-solid-svg-icons';

const features = [
  {
    icon: faFileSignature,
    title: 'E-sign Documents',
    description: 'Easily get agreements signed securely online',
    color: '#007bff' // Blue
  },
  {
    icon: faCloudUploadAlt,
    title: 'Upload & Manage Files',
    description: 'Drag and drop or upload documents for instant access.',
    color: '#17a2b8' // Teal
  },
  {
    icon: faMobileAlt,
    title: 'Mobile Friendly',
    description: 'Sign from any device, anytime, anywhere.',
    color: '#28a745' // Green
  },
  {
    icon: faLock,
    title: 'Secure Encryption',
    description: 'Your documents are protected with bank-grade encryption.',
    color: '#dc3545' // Red
  },
  {
    icon: faEnvelopeOpenText,
    title: 'Email Notifications',
    description: 'Get notified instantly when a document is signed.',
    color: '#ffc107' // Yellow
  },
  {
  icon: faClock,
  title: 'Save Time & Costs',
  description: 'Accelerate processes, reduce manual work, and cut operational expenses.',
  color: '#6f42c1' 
},
  {
    icon: faCalendarCheck,
    title: 'Track Status',
    description: 'Monitor signing progress in real-time and access them anytime.',
    color: '#20c997' // Aqua
  },
  {
  icon: faPlug, 
  title: 'Seamless API Integration',
  description: 'Easily connect your systems to automate document workflows securely.',
  color: '#fd7e14'
}
];

export default function FeaturesSection() {
  return (
    <section className="text-center  py-5 p-3 bg-white">
      <div className="container">
        <h2 className="fw-bold mb-3 text-prime mt-lg-5 mt-2 pt-0  text-blue fs-1">
         Speed Up Your Agreements with eSignature
        </h2>
        <p className="mb-5 text-muted">
         Explore the {process.env.NEXT_PUBLIC_BRAND_NAME} features that make digital document signing fast, secure, and easy.
        </p>
        <div className="row g-5">
          {features.map((feature, index) => (
            <div key={index} className="col-md-3 mb-sm-0">
              <div className="feature-block">
                <FontAwesomeIcon
                  icon={feature.icon}
                  size="3x"
                  className="feature-icon mb-3"
                  style={{ color: feature.color }}
                />
                <h5 className="fw-bold">{feature.title}</h5>
                <p className="text-muted">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

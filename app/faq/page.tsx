'use client';
import { Container, Accordion, Row, Col } from 'react-bootstrap';

export default function FAQ() {
  const faqSections = [
    {
      title: "General Questions",
      items: [
        {
          question: "Is eSignSure legally binding?",
          answer: "Yes, eSignSure complies with major electronic signature laws worldwide, including the ESIGN Act and UETA in the United States, and eIDAS in the European Union. Documents signed with eSignSure carry the same legal weight as traditional paper-and-ink signatures."
        },
        {
          question: "Do I need an account to sign a document?",
          answer: "No, recipients do not need an eSignSure account to sign documents sent to them. They can easily sign from any device using the secure link provided in the email notification."
        },
        {
          question: "How do I know a document is authentic?",
          answer: "Each signed document comes with a comprehensive Audit Trail that records the IP addresses, timestamps, and email addresses of all parties involved in the signing process."
        }
      ]
    },
    {
      title: "Security & Privacy",
      items: [
        {
          question: "How secure are my documents?",
          answer: "We use bank-level 256-bit AES encryption to secure your documents in transit and at rest. Your data is stored in highly secure, compliance-certified data centers with 24/7 monitoring."
        },
        {
          question: "Is my data stored on your servers?",
          answer: "Documents are stored securely on our encrypted servers for as long as you need them. You can delete documents at any time, and once deleted, they are permanently removed from our system."
        },
        {
          question: "Does eSignSure sell my information?",
          answer: "Never. We value your privacy above all else. Your data is used strictly for providing the eSignature service and is never sold or shared with third parties for marketing purposes."
        }
      ]
    },
    {
      title: "Platform & Integration",
      items: [
        {
          question: "Can I use eSignSure on my mobile device?",
          answer: "Absolutely! Our platform is fully responsive and optimized for mobile devices, allowing you to send, track, and sign documents on the go without installing any app."
        },
        {
          question: "What file formats are supported?",
          answer: "eSignSure supports a wide range of document formats including PDF, Microsoft Word (DOC/DOCX), Excel (XLS/XLSX), and common image formats (JPG/PNG)."
        },
        {
          question: "Do you have an API for custom integrations?",
          answer: "Yes, we offer a robust REST API that allows developers to integrate eSignSure's electronic signature functionality directly into their own applications or websites."
        }
      ]
    }
  ];

  return (
    <div className="py-5" style={{ background: '#f8f9fc', minHeight: '100vh' }}>
      <Container className="my-5">
        <div className="text-center mb-5 pb-4">
          <span className="badge bg-primary text-white px-3 py-2 rounded-pill mb-3 fw-bold">HELP CENTER</span>
          <h1 className="fw-bold display-5" style={{ color: '#182848' }}>Frequently Asked Questions</h1>
          <p className="text-muted fs-5 mx-auto" style={{ maxWidth: '600px' }}>
            Everything you need to know about using eSignSure for your digital document workflows.
          </p>
        </div>
        
        <Row className="justify-content-center">
          <Col lg={10}>
            {faqSections.map((section, sIdx) => (
              <div key={sIdx} className="mb-5">
                <h3 className="fw-bold mb-4 ps-2 border-start border-4 border-primary" style={{ color: '#182848' }}>{section.title}</h3>
                <Accordion className="shadow-sm border-0 custom-accordion">
                  {section.items.map((faq, index) => (
                    <Accordion.Item eventKey={`${sIdx}-${index}`} key={index} className="border-0 mb-2 overflow-hidden rounded-3 shadow-none border-bottom">
                      <Accordion.Header className="fw-semibold">{faq.question}</Accordion.Header>
                      <Accordion.Body className="text-secondary" style={{ lineHeight: '1.7', background: '#fff' }}>
                        {faq.answer}
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            ))}
          </Col>
        </Row>

        <div className="text-center mt-5 p-5 bg-white rounded-4 shadow-sm">
           <h4 className="fw-bold">Still have questions?</h4>
           <p className="text-muted">Our support team is here to help you 24/7.</p>
           <button className="btn btn-primary px-4 py-2 fw-bold rounded-pill">Contact Support</button>
        </div>
      </Container>
      
      <style jsx global>{`
        .custom-accordion .accordion-item {
          background-color: transparent;
        }
        .custom-accordion .accordion-button {
          padding: 1.5rem;
          font-weight: 600;
          color: #182848;
          background-color: #fff;
          border-radius: 10px !important;
        }
        .custom-accordion .accordion-button:not(.collapsed) {
          background-color: #fff;
          color: #0048d7;
          box-shadow: none;
        }
        .custom-accordion .accordion-button:focus {
          box-shadow: none;
        }
      `}</style>
    </div>
  );
}

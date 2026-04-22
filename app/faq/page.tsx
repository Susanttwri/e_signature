'use client';
import { Container, Accordion } from 'react-bootstrap';

export default function FAQ() {
  const faqs = [
    {
      question: "Is eSignSure legally binding?",
      answer: "Yes, eSignSure complies with major electronic signature laws worldwide, including the ESIGN Act and UETA in the United States, and eIDAS in the European Union."
    },
    {
      question: "How secure are my documents?",
      answer: "We use bank-level 256-bit AES encryption to secure your documents in transit and at rest. Your data is stored in highly secure, compliance-certified data centers."
    },
    {
      question: "Do I need an account to sign a document?",
      answer: "No, recipients do not need an eSignSure account to sign documents sent to them. They can easily sign from any device using the secure link provided in the email."
    },
    {
      question: "Can I use eSignSure on my mobile device?",
      answer: "Absolutely! Our platform is fully responsive and optimized for mobile devices, allowing you to send and sign documents on the go."
    },
    {
      question: "What file formats are supported?",
      answer: "eSignSure supports a wide range of document formats including PDF, Word (DOC/DOCX), Excel (XLS/XLSX), and common image formats."
    }
  ];

  return (
    <div className="py-5" style={{ background: '#f8f9fa', minHeight: '100vh' }}>
      <Container className="my-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold" style={{ color: '#0048d7' }}>Frequently Asked Questions</h1>
          <p className="text-muted fs-5">Find answers to common questions about eSignSure.</p>
        </div>
        
        <div className="mx-auto" style={{ maxWidth: '800px' }}>
          <Accordion defaultActiveKey="0" className="shadow-sm">
            {faqs.map((faq, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header className="fw-semibold">{faq.question}</Accordion.Header>
                <Accordion.Body className="text-muted">
                  {faq.answer}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </Container>
      
      <style jsx global>{`
        .accordion-button:not(.collapsed) {
          background-color: #eef4ff;
          color: #0048d7;
          box-shadow: inset 0 -1px 0 rgba(0,0,0,.125);
        }
        .accordion-button:focus {
          box-shadow: none;
          border-color: rgba(0, 0, 0, 0.125);
        }
      `}</style>
    </div>
  );
}

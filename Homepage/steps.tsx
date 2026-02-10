'use client'
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

function Steps() {
  const [showVideoModal, setShowVideoModal] = useState(false)
  const videoId = 'abSS279q0a4'

  const handleClose = () => setShowVideoModal(false)
  const handleShow = () => setShowVideoModal(true)

  return (
    <>
    <div>
       <div className="container mt-5">
        <h2 className='text-center fw-bold text-blue fs-1'>Steps to Get Your Document Signed</h2>
        <p className='text-center mt-2'>Easily send and get documents signed in simple steps</p>
      <div className="row">
        <div className="col-md-12">
          <div className="road-map-main">
            <div className="road-map-wrapper">
              <div className="road-map-circle">
                <span
                  className="road-map-circle-text d-flex align-items-center justify-content-center"
                  >Step 1</span>
              </div>
              <div className="road-map-card">
                <h4 className="card-head fw-bold">Upload Your Document</h4>
                <p className="card-text fs-6">
                Drag and drop or choose a PDF file from your device .
                </p>
              </div>
            </div>
            <div className="road-map-wrapper">
              <div className="road-map-circle">
                <span
                  className="road-map-circle-text d-flex align-items-center justify-content-center"
                  >Step 2</span>
                
              </div>
              <div className="road-map-card">
                <h4 className="card-head fw-bold">Add Recipient & Set Fields</h4>
                <p className="card-text fs-6">
                Enter the name and email address of user who need to sign. Then, drag-and-drop signature, date, and text fields exactly where you need them.
                </p>
              </div>
              
            </div>
            <div className="road-map-wrapper" style={{marginTop:"0.02rem"}}>
              <div className="road-map-circle">
                <span
                  className="road-map-circle-text d-flex align-items-center justify-content-center"
                  >Step 3</span>
              </div>
               <div className="road-map-card">
                <h4 className="card-head fw-bold">Send & Get It Signed Instantly</h4>
                <p className="card-text fs-6">
                  Click send and your recipients will receive an email with a link to sign — no login required. 
                </p>
              </div>
             
            </div>
            <div className="road-map-wrapper">
              <div className="road-map-circle">
                <span
                  className="road-map-circle-text d-flex align-items-center justify-content-center"
                  >Step 4</span>
                
              </div>
              <div className="road-map-card">
  <h4 className="card-head fw-bold">Get Notified Instantly</h4>
  <p className="card-text fs-6">
    Stay informed with real-time alerts when a recipient signs your document.
  </p>
</div>

              
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="row mt-5 mb-5">
        <div className="col-12 d-flex justify-content-center">
          <div className="video-container-wrapper">
            <div className="video-thumbnail-container" onClick={handleShow}>
              <div className="video-thumbnail">
                <img
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt="eSignSure How It Works Video"
                  className="video-thumbnail-image"
                />
                <div className="video-play-button">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="40" r="40" fill="rgba(0, 0, 0, 0.6)"/>
                    <path d="M32 24L32 56L56 40L32 24Z" fill="white"/>
                  </svg>
                </div>
              </div>
              <div className="video-overlay-text">
                <h3 className="mb-2 fw-bold">See How eSignSure Works</h3>
                <p className="mb-0 text-muted">Watch our quick introduction video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    {/* Video Modal */}
    <Modal
      show={showVideoModal}
      onHide={handleClose}
      size="xl"
      centered
      className="video-modal"
    >
      <Modal.Body className="p-0 position-relative">
        <button
          type="button"
          className="video-close-button"
          onClick={handleClose}
          aria-label="Close"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="video-responsive">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&controls=1&showinfo=0&iv_load_policy=3`}
            title="eSignSure How It Works"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </Modal.Body>
    </Modal>

    <style dangerouslySetInnerHTML={{__html: `
      .video-container-wrapper {
        max-width: 800px;
        width: 100%;
        cursor: pointer;
        transition: transform 0.3s ease;
      }

      .video-container-wrapper:hover {
        transform: translateY(-5px);
      }

      .video-thumbnail-container {
        position: relative;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        background: linear-gradient(135deg, #5280e9 0%, #0048d7 100%);
        padding: 20px;
      }

      .video-thumbnail {
        position: relative;
        width: 100%;
        padding-top: 56.25%;
        border-radius: 12px;
        overflow: hidden;
        background: #000;
      }

      .video-thumbnail-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .video-play-button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: transform 0.3s ease, opacity 0.3s ease;
        z-index: 2;
      }

      .video-thumbnail-container:hover .video-play-button {
        transform: translate(-50%, -50%) scale(1.1);
      }

      .video-overlay-text {
        text-align: center;
        margin-top: 20px;
        color: white;
      }

      .video-overlay-text h3 {
        color: white;
        font-size: 1.5rem;
      }

      .video-responsive {
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
        overflow: hidden;
        background-color: #000;
      }

      .video-responsive iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        background-color: #000;
      }

      .video-modal .modal-content {
        border-radius: 12px;
        border: none;
        overflow: hidden;
        max-width: 90vw;
        width: 100%;
        background-color: #000;
      }

      .video-modal .modal-dialog {
        max-width: 1200px;
        margin: 1.75rem auto;
      }

      .video-modal .modal-body {
        background-color: #000;
        position: relative;
      }

      .video-close-button {
        position: absolute;
        top: 5px;
        right: 5px;
        z-index: 10;
        background-color: rgba(0, 0, 0, 0.6);
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
        padding: 0;
      }

      .video-close-button:hover {
        background-color: rgba(0, 0, 0, 0.8);
        transform: scale(1.1);
      }

      .video-close-button:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
      }

      @media (max-width: 768px) {
        .video-overlay-text h3 {
          font-size: 1.25rem;
        }

        .video-thumbnail-container {
          padding: 15px;
        }

        .video-modal .modal-dialog {
          max-width: 95vw;
          margin: 0.5rem;
        }

        .video-modal .modal-content {
          max-width: 100%;
        }
      }
    `}} />
    </>
  )
}

export default Steps

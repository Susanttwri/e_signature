import React from 'react'

function Steps() {
  return (
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
    </div>
    </div>
    
  )
}

export default Steps

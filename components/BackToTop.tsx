'use client'
import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div className="back-to-top">
      {isVisible && (
        <Button 
          onClick={scrollToTop} 
          variant="primary" 
          className="rounded-circle shadow-lg d-flex align-items-center justify-content-center p-3"
          style={{ 
            position: 'fixed', 
            bottom: '40px', 
            right: '40px', 
            zIndex: 1000, 
            width: '50px', 
            height: '50px',
            border: 'none',
            transition: 'all 0.3s ease'
          }}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </Button>
      )}
      <style jsx>{`
        .back-to-top :global(button):hover {
          transform: translateY(-5px);
          background-color: #0048d7 !important;
        }
      `}</style>
    </div>
  )
}

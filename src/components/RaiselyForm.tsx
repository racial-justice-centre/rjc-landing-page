'use client'

import React, { useEffect, useRef } from "react"
import Script from "next/script"

// Type declaration for Raisely global object
declare global {
  interface Window {
    Raisely?: {
      init: () => void
    }
  }
}

const RaiselyForm: React.FC = () => {
  const donationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Function to initialize or reinitialize Raisely
    const initializeRaisely = () => {
      if (typeof window !== 'undefined' && window.Raisely) {
        // If Raisely is already loaded, reinitialize it
        try {
          window.Raisely.init()
        } catch (error) {
          console.log('Raisely init error:', error)
        }
      }
    }

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initializeRaisely, 500)
    
    return () => clearTimeout(timer)
  }, [])

  const handleScriptLoad = () => {
    // Initialize Raisely when script loads for the first time
    if (typeof window !== 'undefined' && window.Raisely) {
      try {
        window.Raisely.init()
      } catch (error) {
        console.log('Raisely script load init error:', error)
      }
    }
  }

  return (
    <div 
      ref={donationRef}
      className="raisely-donate p-4 md:p-6 lg:p-8 h-[80%]" 
      data-campaign-path="racialjustice" 
      data-profile="" 
      data-width="100%" 
      data-height="800"
    >
      <Script 
        src="https://cdn.raisely.com/v3/public/embed.js"
        onLoad={handleScriptLoad}
        strategy="afterInteractive"
      />
    </div>
  )
}

export default RaiselyForm 
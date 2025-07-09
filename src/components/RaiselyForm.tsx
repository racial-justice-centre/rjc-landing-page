'use client'

import React from "react"
import useScript from "@/lib/useScript"

// Type declaration for Raisely global object
declare global {
  interface Window {
    Raisely?: {
      init: () => void
    }
  }
}

const RaiselyForm: React.FC = () => {
  useScript('https://cdn.raisely.com/v3/public/embed.js')

  return (
    <div 
      className="raisely-donate p-4 md:p-6 lg:p-8 h-[80%]" 
      data-campaign-path="racialjustice" 
      data-profile="" 
      data-width="100%" 
      data-height="800"
    >
      {/* <Script 
        src="https://cdn.raisely.com/v3/public/embed.js"
        onLoad={handleScriptLoad}
        strategy="afterInteractive"
      /> */}
    </div>
  )
}

export default RaiselyForm 
"use client";

import Script from "next/script";
import React from "react";

const GoogleAnalytics = () => {
  const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
  if (!GA_ID || process.env.NODE_ENV !== "production") return null;

  return (
    <>
      <Script
        async 
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}')`}
      </Script>
    </>
  );
};

export default GoogleAnalytics;

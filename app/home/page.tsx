'use client';

import React from 'react';
import Script from 'next/script';

// import Footer from '@/allPages/Homepage/footer';
// import HeroBanner from '@/allPages/Homepage/herobanner';
// import KeyBenefits from '@/allPages/Homepage/keybenefits';
// import CtaSection from '@/allPages/Homepage/overctasection';
// import Pricing from '@/allPages/Homepage/price';
// import SecurityCompliance from '@/allPages/Homepage/security';
// import Steps from '@/allPages/Homepage/steps';
// import TestimonialCarousel from '@/allPages/Homepage/tesimonial';
// import HeroSection from '@/allPages/Homepage/herosection';
import Home from '../page';
import HeroBanner from '@/Homepage/herobanner';
import KeyBenefits from '@/Homepage/keybenefits';
import HeroSection from '@/Homepage/herosection';
import Steps from '@/Homepage/steps';
import TestimonialCarousel from '@/Homepage/tesimonial';
import Pricing from '@/Homepage/price';
import SecuritySection from '@/Homepage/security';
import CtaSection from '@/Homepage/overctasection';
import Footer from '@/Homepage/footer';
function Homepage() {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-F1N37CGJ42"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-F1N37CGJ42');
        `}
      </Script>

      {/* Google Tag Manager - Head Script */}
      <Script id="gtm-head" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PGX3NS3Z');
        `}
      </Script>

      {/* LinkedIn Insight Tag */}
      <Script id="linkedin-insight-partner" strategy="afterInteractive">
        {`
          _linkedin_partner_id = "8760020";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        `}
      </Script>
      <Script id="linkedin-insight-loader" strategy="afterInteractive">
        {`
          (function(l) {
            if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
            window.lintrk.q=[]}
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);
          })(window.lintrk);
        `}
      </Script>

      <div>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PGX3NS3Z"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {/* LinkedIn Insight Tag (noscript fallback) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=8760020&fmt=gif"
          />
        </noscript>

        <HeroBanner />
        <KeyBenefits />
        <HeroSection />
        <Steps />
        <TestimonialCarousel />
        <Pricing />
        <SecuritySection />
        <CtaSection />
        <Footer />

        {/* Statcounter Script */}
        <Script id="statcounter-init" strategy="afterInteractive">
          {`
            var sc_project=13165079; 
            var sc_invisible=1; 
            var sc_security="d773cecd"; 
          `}
        </Script>
        <Script
          src="https://www.statcounter.com/counter/counter.js"
          async
          strategy="afterInteractive"
        />
        <noscript>
          <div className="statcounter">
            <a
              title="Web Analytics Made Easy - Statcounter"
              href="https://statcounter.com/"
              target="_blank"
            >
              <img
                className="statcounter"
                src="https://c.statcounter.com/13165079/0/d773cecd/1/"
                alt="Web Analytics Made Easy - Statcounter"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>
          </div>
        </noscript>
      </div>
    </>
  );
}

export default  Homepage;

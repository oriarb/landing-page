"use client"; 

import RainingImages from "@/components/RainingImages/rainingImages";
import Hero from "@/components/hero";
import React, { useState, useEffect } from 'react';


export default function Home() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [images, setImages] = useState<{ imageUrl: string; delay: number; style: React.CSSProperties }[]>([]);

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', updateWindowSize);
    updateWindowSize();

    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []);

  useEffect(() => {
    const numberOfImages = 100; // Change this number as desired
    const newImages = [];

    for (let i = 0; i < numberOfImages; i++) {
      const randomX = Math.floor(Math.random() * windowSize.width);
      const randomY = Math.floor(Math.random() * windowSize.height);
      const randomDelay = Math.random() * 10; // Adjust delay range as needed

      newImages.push({
        imageUrl: '/barachbar.jpg', // Replace with your image URL
        delay: randomDelay,
        style: { left: randomX, top: randomY }
      });
    }

    setImages(newImages);
  }, [windowSize]);

  return (
    <div>
      <img src="/ambush-new.png" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}></img>
      {images.map((image, index) => (
        <RainingImages key={index} {...image} />
      ))}
    </div>
  );
  return (
    <>

    {/* 
        Hero: This is the first section that the user sees when they visit your landing page.
        It usually contains a catchy headline, a subheading, and a call to action button.
        The goal of this section is to capture the user’s attention and interest, and to persuade them to take the next step.

    */}
    {/* <Hero />  */}

    
    {/* 
        Features: This is the section where you showcase the main features and benefits of your product or service.
        You can use icons, images, or illustrations to make this section more appealing and informative.
        The goal of this section is to demonstrate how your product or service can solve the user’s problems or needs.

        <Features /> 
    */}


    {/* 
         Testimonials: This is the section where you display the social proof of your product or service.
        You can use quotes, ratings, or logos from your customers or partners to show how satisfied they are with your product or service.
        The goal of this section is to build trust and credibility with the user.

        <Testimonials />
     */}


    {/* 
        Pricing: This is the section where you present the pricing plans or options for your product or service.
        You can use tables, cards, or buttons to display the different features and benefits of each plan or option.
        The goal of this section is to help the user choose the best plan or option for their budget and needs.

        <Pricing />
     */}

   
    {/* 
        CTA: This is the section where you encourage the user to take the final action, such as signing up, buying, or contacting you.
        You can use a large button, a form, or a modal to prompt the user to take the action.
        The goal of this section is to convert the user into a customer or a lead.

        <CTA />
     */}


    {/* 
        Footer: This is the section where you provide some additional information or links about your product or service,
        such as your contact details, social media accounts, or terms and conditions.
        The goal of this section is to make it easy for the user to reach out to you or learn more about you.

        <Footer />
     */}

    </>
  );
}

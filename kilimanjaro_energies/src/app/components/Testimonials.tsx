"use client";

import Image from 'next/image';
import { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Joshua Banda",
      rating: 5,
      comment: "Fast, efficient and reliable service. The mobile payment options and EV charging stations are a great addition!",
      quote: "Fast, efficient...",
      quoteAuthor: "James K",
      avatar: "/image/joshua.png"
    },
    {
      name: "Joani Kazembe",
      rating: 5,
      comment: "We always trust Kilimanjaro Energies for quality fuel and service. The staff is professional and helpful.",
      quote: "We always trust...",
      quoteAuthor: "Asha M",
      avatar: "/image/joana.png" 
    },
    {
      name: "James Karanja",
      rating: 5,
      comment: "Clean facilities and excellent customer service. This is my go-to filling station whenever I'm in the area.",
      quote: "Clean facilities...",
      quoteAuthor: "Grace T",
      avatar: "/image/james.png" 
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">TESTIMONIES</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={`${testimonial.name} - ${testimonial.quoteAuthor}`}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                  <div className="flex">{renderStars(testimonial.rating)}</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
              <div className="border-t pt-4 mt-4">
                <p className="text-gray-500 italic text-lg">"{testimonial.quote}"</p>
                <p className="text-gray-500 text-sm text-right mt-2">- {testimonial.quoteAuthor}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
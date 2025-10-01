"use client"

import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-orange-500 to-orange-400 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Kilimanjaro Energies</h1>
          <p className="text-xl mb-8">Your trusted local filling station. We offer quality fuel, prioritize safety, and are open 24/7 to serve you near Mount Kilimanjaro.</p>
          <Link href="/contact">
            <button className="bg-white text-orange-500 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 transform hover:scale-105">
              Get Started
            </button>
          </Link>
        </div>
        <div className="md:w-1/2 -mx-4md:w-0">
          <div className="w-full h-auto md:w-96 md:h-96 mb-19">
            <Image
              src="/image/bill.png"
              alt="Kilimanjaro Energies"
              width={600}
              height={600}
              className="object-contain w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
"use client"

import Image from 'next/image';
import { FaFacebook, FaWhatsapp, FaTiktok, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Introduction', href: '#' },
    { name: 'What we do', href: '#' },
    { name: 'How it works', href: '#services' },
    { name: 'Testimonies', href: '#testimonials' },
    { name: 'Services', href: '/services' },
    { name: 'Why choose us', href: '#services' },
    { name: 'Contacts', href: '/contact' }
  ];

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaWhatsapp, href: '#', label: 'WhatsApp' },
    { icon: FaTiktok, href: '#', label: 'TikTok' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/feed/', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-orange-500 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-44 h-16 overflow-hidden">
                 <Image
                    src="/image/kililogo.png"
                    alt="Kilimanjaro Energies Logo"
                    width={176}
                    height={64}
                    className="object-contain"
                    priority
                    />
              </div>
            </div>
            <p className="text-orange-100">
              Your trusted local filling station near Mount Kilimanjaro
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-orange-100 hover:text-white transition duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect with us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-black bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent className="text-white text-xl" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-purple-700 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Kilimanjaro Energies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

import { resourcesLinks, platformLinks, communityLinks } from "../constants";


const socialMediaLinks = [
  { href: "https://facebook.com", text: "Facebook", icon: Facebook },
  { href: "https://twitter.com", text: "Twitter", icon: Twitter },
  { href: "https://instagram.com", text: "Instagram", icon: Instagram },
  { href: "https://linkedin.com", text: "LinkedIn", icon: Linkedin },
];

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="mt-10 text-center text-neutral-500">
        <p>© {new Date().getFullYear()} Kwame Nkrumah University of Science and Technology (KNUST). All rights reserved.</p>
        <p className="mt-2">
          <a href="#" className="text-neutral-300 hover:text-white">About Us</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

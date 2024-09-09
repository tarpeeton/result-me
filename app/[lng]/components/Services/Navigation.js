'use client'
import { useState } from 'react';

const Navigation = () => {
  const [activeNav, setActiveNav] = useState('Сайты'); // Default active nav

  const navItems = [
    { name: 'Сайты', href: '#' },
    { name: 'Telegram-боты', href: '#' },
    { name: 'SMM', href: '#' },
    { name: 'Реклама', href: '#' },
    { name: 'SEO', href: '#' },
    { name: 'Брендинг', href: '#' },
  ];

  return (
    <nav className="flex space-x-6 px-[20px]">
      {navItems.map((item) => (
        <div key={item.name} className="flex flex-col items-center">
          <a
            href={item.href}
            className={`text-[20px] font-semibold ${
              activeNav === item.name ? 'text-[#7B72EB]' : 'text-black'
            } hover:text-[#7B72EB] pb-1`}
            onClick={() => setActiveNav(item.name)}
          >
            {item.name}
          </a>
          {activeNav === item.name && (
            <span className="w-[68px] h-[2px] bg-[#7B72EB] rounded-tl-[5px] rounded-tr-[5px] mt-[5px]"></span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navigation;

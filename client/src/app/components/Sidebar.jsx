'use client';
import React from 'react';
import Link from 'next/link';
import { BiCategory } from 'react-icons/bi';
import { GoHome } from 'react-icons/go';
import { usePathname } from 'next/navigation';
import { LuPackage } from 'react-icons/lu';

const Sidebar = () => {
  const navLinks = [
    { href: '/', icon: <GoHome />, label: 'Home' },
    { href: '/products', icon: <LuPackage />, label: 'Products' },
    { href: '/category', icon: <BiCategory />, label: 'Category' },
  ];
  const pathname = usePathname();

  return (
    <div className="fixed top-0 bottom-0 left-0 w-16 bg-[#ffffff] border-[#f3f3f7] border-r flex flex-col gap-14 pt-12 pl-4">
      <h4 className="text-[#5aba8a]">Pedro M.</h4>
      <ul className=" flex flex-col gap-5 h-full text-4xl items-center text-[#adc2c7]">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className={`w-full
              ${
                pathname === link.href
                  ? 'text-[#5aba8a] border-r border-[#5aba8a] '
                  : 'hover:text-slate-400 transition-colors'
              }
            `}
          >
            <Link href={link.href}>{link.icon}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

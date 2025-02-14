import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import { cn } from '../lib/utils';

import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Convênios', href: '/convenios' },
    { name: 'Contato', href: '/contato' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              {/* <span className="text-2xl font-bold text-primary-600">Laboratório Araruna</span> */}
              <img src={logo} alt="laboratorio araruna" style={{width: 197}}/>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+554435621134"
              className="flex items-center text-primary-600 hover:text-primary-700"
            >
              <Phone className="h-5 w-5 mr-2" />
              (44) 3562-1134
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn('md:hidden', isOpen ? 'block' : 'hidden')}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="tel:+554435621134"
            className="block px-3 py-2 rounded-md text-base font-medium text-primary-600 hover:text-primary-700"
          >
            <Phone className="h-5 w-5 inline mr-2" />
            (44) 3562-1134
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
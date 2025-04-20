import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Languages, ChevronDown } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { NavigationItem } from '../../types';
import QuickEscape from '../safety/QuickEscape';

const navigation: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { 
    label: 'Resources', 
    href: '/resources',
    dropdown: [
      { label: 'Getting Help', href: '/resources/getting-help' },
      { label: 'Legal Information', href: '/resources/legal' },
      { label: 'Safety Planning', href: '/resources/safety-planning' },
    ]
  },
  { 
    label: 'Support', 
    href: '/support',
    dropdown: [
      { label: 'Chat Support', href: '/support/chat' },
      { label: 'Hotlines', href: '/support/hotlines' },
      { label: 'Community', href: '/support/community' },
    ]
  },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const { currentLanguage, languages, changeLanguage } = useLanguage();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold text-primary dark:text-white">
            CyberSafe Haven
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <div key={item.label} className="relative group">
              <button
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors flex items-center"
                onClick={() => item.dropdown && toggleDropdown(item.label)}
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
              >
                {item.label}
                {item.dropdown && <ChevronDown size={16} className="ml-1" />}
              </button>
              
              {item.dropdown && openDropdown === item.label && (
                <div 
                  className="absolute top-full left-0 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 min-w-[200px] mt-2 transition-all"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.dropdown.map((dropdownItem) => (
                    <a 
                      key={dropdownItem.label}
                      href={dropdownItem.href}
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      {dropdownItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
              aria-label="Select language"
            >
              <Languages size={20} className="mr-1" />
              <span>{currentLanguage.flag}</span>
            </button>
            
            {isLanguageMenuOpen && (
              <div className="absolute top-full right-0 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 mt-2 min-w-[150px]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setIsLanguageMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <button
            onClick={toggleTheme}
            className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <QuickEscape />
        </div>
        
        {/* Mobile menu button */}
        <div className="flex md:hidden items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <QuickEscape isMobile />
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <nav className="container mx-auto px-4 py-4">
            {navigation.map((item) => (
              <div key={item.label} className="py-2">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex justify-between items-center w-full text-gray-700 dark:text-gray-300 font-medium"
                    >
                      {item.label}
                      <ChevronDown 
                        size={16} 
                        className={`ml-1 transition-transform ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {openDropdown === item.label && (
                      <div className="pl-4 mt-2 border-l-2 border-primary">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="block py-2 text-gray-700 dark:text-gray-300"
                          >
                            {dropdownItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block text-gray-700 dark:text-gray-300 font-medium"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            
            <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center">
                <Languages size={20} className="text-gray-700 dark:text-gray-300 mr-3" />
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`px-2 py-1 rounded-md ${
                        currentLanguage.code === lang.code
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <span className="mr-1">{lang.flag}</span>
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
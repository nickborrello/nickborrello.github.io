import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const navigationItems = [
  {
    name: 'Home',
    path: '/',
    icon: '🏠',
    description: 'Character Overview'
  },
  {
    name: 'Projects',
    path: '/projects',
    icon: '⚔️',
    description: 'Quest Showcase'
  },
  {
    name: 'Skills',
    path: '/skills',
    icon: '🛡️',
    description: 'Equipment & Abilities'
  },
  {
    name: 'Contact',
    path: '/contact',
    icon: '📜',
    description: 'Send a Message'
  }
];

export default function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  const location = useLocation();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] border-r-2 border-[#d4af37]/30 z-50 shadow-2xl ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-[#d4af37]/20">
            <motion.h1
              className="text-2xl font-bold text-[#d4af37] tracking-wide"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              🧙‍♂️ Nick Borrello
            </motion.h1>
            <motion.p
              className="text-sm text-gray-400 mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Frontend Mage
            </motion.p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {navigationItems.map((item, index) => {
                const isActive = location.pathname === item.path;

                return (
                  <motion.li
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className={`block w-full p-4 rounded-lg border-2 transition-all duration-200 ${
                        isActive
                          ? 'border-[#d4af37] bg-[#d4af37]/10 text-[#d4af37] shadow-lg'
                          : 'border-[#8b7355] bg-[#1a1a1a] text-white hover:border-[#d4af37]/50 hover:bg-[#d4af37]/5'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{item.icon}</span>
                        <div>
                          <div className={`font-semibold ${isActive ? 'text-[#d4af37]' : 'text-white'}`}>
                            {item.name}
                          </div>
                          <div className="text-xs text-gray-400">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-[#d4af37]/20">
            <motion.div
              className="text-center text-xs text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p>Level 24 Adventurer</p>
              <p className="mt-1">Building Digital Realms</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
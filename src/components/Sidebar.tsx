import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Package,
  Users,
  ShoppingCart,
  FileText,
  BarChart3,
  UserCog,
  Settings,
  ChevronLeft,
  Menu,
  LogOut,
  LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Package, label: 'Produtos', path: '/produtos' },
  { icon: Users, label: 'Clientes', path: '/clientes' },
  { icon: ShoppingCart, label: 'Vendas', path: '/vendas' },
  { icon: FileText, label: 'Notas Fiscais', path: '/notas-fiscais' },
];

const analysisItems = [
  { icon: BarChart3, label: 'Relatórios', path: '/relatorios' },
];

const adminItems = [
  { icon: UserCog, label: 'Usuários', path: '/usuarios' },
  { icon: Settings, label: 'Configurações', path: '/configuracoes' },
];

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [userEmail] = useState('arlem527@gmail.com');

  const handleLogout = () => {
    navigate('/login');
  };

  const NavItem = ({ icon: Icon, label, path }: { icon: LucideIcon; label: string; path: string }) => {
    const isActive = location.pathname === path;
    
    return (
      <Link to={path}>
        <motion.div
          whileHover={{ x: 4 }}
          className={cn(
            'flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors',
            isActive
              ? 'bg-blue-500 text-white'
              : 'text-gray-300 hover:bg-gray-800'
          )}
        >
          <Icon className="w-5 h-5 flex-shrink-0" />
          <AnimatePresence>
            {isOpen && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                className="text-sm font-medium whitespace-nowrap"
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </Link>
    );
  };

  const SectionTitle = ({ title }: { title: string }) => (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="px-3 mt-6 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider"
        >
          {title}
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onToggle}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isOpen ? 240 : 80 }}
        className={cn(
          'fixed left-0 top-0 h-screen bg-gray-900 border-r border-gray-800 z-50 flex flex-col',
          'transition-all duration-300 ease-in-out'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <AnimatePresence>
            {isOpen && (
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-lg font-bold text-white whitespace-nowrap italic"
              >
                Unisys
              </motion.h1>
            )}
          </AnimatePresence>
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className="text-gray-400 hover:text-white hover:bg-gray-800 flex-shrink-0"
          >
            {isOpen ? <ChevronLeft className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          <SectionTitle title="Menu Principal" />
          {menuItems.map((item) => (
            <NavItem key={item.path} {...item} />
          ))}

          <SectionTitle title="Análises" />
          {analysisItems.map((item) => (
            <NavItem key={item.path} {...item} />
          ))}

          <SectionTitle title="Administração" />
          {adminItems.map((item) => (
            <NavItem key={item.path} {...item} />
          ))}
        </nav>

        {/* User Info */}
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-semibold text-white">AS</span>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  className="overflow-hidden flex-1"
                >
                  <p className="text-sm text-gray-300 truncate">{userEmail}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleLogout}
                    className="text-xs text-gray-500 hover:text-white p-0 h-auto mt-1 flex items-center gap-1"
                  >
                    <LogOut className="w-3 h-3" />
                    Sair
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
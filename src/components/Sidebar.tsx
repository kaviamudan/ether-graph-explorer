
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Activity, BarChart2, Eye, EyeOff, 
  LayoutDashboard, Search, Settings, Wallet 
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <div className="w-60 bg-card border-r border-border flex flex-col h-screen">
      {/* Logo */}
      <div className="p-4 border-b border-border">
        <Link to="/" className="flex items-center gap-2 text-primary font-bold text-xl">
          <Eye className="h-6 w-6" />
          <span>ETHER-EYE</span>
        </Link>
      </div>
      
      {/* Navigation */}
      <div className="flex-1 py-6 px-2">
        <div className="mb-6">
          <div className="pl-4 pb-2 text-xs uppercase text-muted-foreground font-medium tracking-wider">
            Main Navigation
          </div>
          <nav className="space-y-1">
            <NavItem 
              to="/dashboard" 
              icon={<LayoutDashboard size={18} />} 
              label="Dashboard" 
              active={currentPath === '/dashboard'} 
            />
            <NavItem 
              to="/wallets" 
              icon={<Wallet size={18} />} 
              label="Wallets" 
              active={currentPath === '/wallets'} 
            />
            <NavItem 
              to="/traces" 
              icon={<Activity size={18} />} 
              label="Traces" 
              active={currentPath === '/traces'} 
            />
            <NavItem 
              to="/analytics" 
              icon={<BarChart2 size={18} />} 
              label="Analytics" 
              active={currentPath === '/analytics'} 
            />
          </nav>
        </div>
        
        <div>
          <div className="pl-4 pb-2 text-xs uppercase text-muted-foreground font-medium tracking-wider">
            Tools
          </div>
          <nav className="space-y-1">
            <NavItem 
              to="/explorer" 
              icon={<Search size={18} />} 
              label="Explorer" 
              active={currentPath === '/explorer'} 
            />
            <NavItem 
              to="/settings" 
              icon={<Settings size={18} />} 
              label="Settings" 
              active={currentPath === '/settings'} 
            />
          </nav>
        </div>
      </div>
      
      {/* User */}
      <div className="p-4 border-t border-border">
        <Link 
          to="/login" 
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
            <EyeOff size={14} />
          </div>
          <span>Login / Sign Up</span>
        </Link>
      </div>
    </div>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label, active }) => {
  return (
    <Link 
      to={to} 
      className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm transition-colors ${
        active
          ? 'bg-primary/10 text-primary'
          : 'text-muted-foreground hover:bg-card hover:text-foreground'
      }`}
    >
      {icon}
      <span>{label}</span>
      {active && (
        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
      )}
    </Link>
  );
};

export default Sidebar;

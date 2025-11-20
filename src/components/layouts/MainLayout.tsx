import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import { cn } from '@/lib/utils';

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <main
        className={cn(
          'transition-all duration-300 ease-in-out min-h-screen',
          sidebarOpen ? 'lg:ml-60' : 'lg:ml-20'
        )}
      >
        <Outlet />
      </main>
    </div>
  );
}
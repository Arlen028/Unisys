import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import Dashboard from '@/pages/Dashboard';
import Products from '@/pages/Products';
import Clients from '@/pages/Clients';
import Sales from '@/pages/Sales';
import Users from '@/pages/Users';
import Settings from '@/pages/Settings';
import Reports from '@/pages/Reports';
import NotasFiscais from '@/pages/NotasFiscais';
import Login from '@/pages/Login';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/clientes" element={<Clients />} />
            <Route path="/vendas" element={<Sales />} />
            <Route path="/usuarios" element={<Users />} />
            <Route path="/configuracoes" element={<Settings />} />
            <Route path="/relatorios" element={<Reports />} />
            <Route path="/notas-fiscais" element={<NotasFiscais />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
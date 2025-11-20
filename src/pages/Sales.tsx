import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Filter, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import NewSaleModal from '@/components/modals/NewSaleModal';

const sales = [
  {
    id: 'VEN001',
    cliente: 'Carlos Mendes',
    data: '14/01/2024',
    valor: 'R$ 1.234,50',
    status: 'Finalizada',
    pagamento: 'Cartão de Crédito',
  },
  {
    id: 'VEN002',
    cliente: 'Pedro Costa',
    data: '14/01/2024',
    valor: 'R$ 2.145,80',
    status: 'Processando',
    pagamento: 'PIX',
  },
  {
    id: 'VEN003',
    cliente: 'João Silva',
    data: '13/01/2024',
    valor: 'R$ 890,00',
    status: 'Finalizada',
    pagamento: 'Dinheiro',
  },
  {
    id: 'VEN004',
    cliente: 'Maria Santos',
    data: '13/01/2024',
    valor: 'R$ 3.567,20',
    status: 'Pendente',
    pagamento: 'Boleto',
  },
  {
    id: 'VEN005',
    cliente: 'Ana Oliveira',
    data: '12/01/2024',
    valor: 'R$ 456,90',
    status: 'Cancelada',
    pagamento: 'Cartão de Débito',
  },
];

export default function Sales() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSales = sales.filter((sale) =>
    sale.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sale.cliente.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Finalizada':
        return 'bg-green-500 hover:bg-green-600';
      case 'Processando':
        return 'bg-yellow-500 hover:bg-yellow-600';
      case 'Pendente':
        return 'bg-gray-500 hover:bg-gray-600';
      case 'Cancelada':
        return 'bg-red-500 hover:bg-red-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Vendas</h1>
          <p className="text-sm text-gray-500 mt-1">
            Gerencie suas vendas e pedidos
          </p>
        </div>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Nova Venda
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg border border-gray-200 p-6"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total de Vendas</p>
              <p className="text-2xl font-bold text-gray-900">1.245</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-50">
              <ShoppingCart className="w-5 h-5 text-blue-500" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-lg border border-gray-200 p-6"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Vendas Hoje</p>
              <p className="text-2xl font-bold text-gray-900">23</p>
            </div>
            <div className="p-3 rounded-lg bg-green-50">
              <ShoppingCart className="w-5 h-5 text-green-500" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg border border-gray-200 p-6"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Receita Hoje</p>
              <p className="text-2xl font-bold text-gray-900">R$ 12.345</p>
            </div>
            <div className="p-3 rounded-lg bg-green-50">
              <ShoppingCart className="w-5 h-5 text-green-500" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg border border-gray-200 p-6"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Ticket Médio</p>
              <p className="text-2xl font-bold text-gray-900">R$ 537</p>
            </div>
            <div className="p-3 rounded-lg bg-yellow-50">
              <ShoppingCart className="w-5 h-5 text-yellow-500" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center gap-4 bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar vendas por código ou cliente..."
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filtros
        </Button>
      </div>

      {/* Sales Table */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Lista de Vendas
          </h2>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Código</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Pagamento</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSales.map((sale) => (
                <TableRow key={sale.id}>
                  <TableCell className="font-medium">{sale.id}</TableCell>
                  <TableCell>{sale.cliente}</TableCell>
                  <TableCell>{sale.data}</TableCell>
                  <TableCell className="text-blue-600 font-semibold">
                    {sale.valor}
                  </TableCell>
                  <TableCell>{sale.pagamento}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(sale.status)}>
                      {sale.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Modal */}
      <NewSaleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
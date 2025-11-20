import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Plus,
  Search,
  Filter,
  Download,
  FileText,
  Eye,
  Printer,
  Send,
} from 'lucide-react';
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
import NewInvoiceModal from '@/components/modals/NewInvoiceModal';

const invoices = [
  {
    codigo: 'NF001',
    cliente: 'Carlos Mendes',
    pedido: 'PED001',
    dataEmissao: '14/01/2024',
    valor: 'R$ 1.234,50',
    status: 'Finalizada',
    chaveAcesso: '3524 0123 4567 8901 2345 6789 0123 4567 8901 2345',
  },
  {
    codigo: 'NF002',
    cliente: 'Pedro Costa',
    pedido: 'PED002',
    dataEmissao: '14/01/2024',
    valor: 'R$ 2.145,80',
    status: 'Processando',
    chaveAcesso: '-',
  },
  {
    codigo: 'NF003',
    cliente: 'João Silva',
    pedido: 'PED003',
    dataEmissao: '13/01/2024',
    valor: 'R$ 890,00',
    status: 'Finalizada',
    chaveAcesso: '3524 0123 4567 8901 2345 6789 0123 4567 8901 2346',
  },
  {
    codigo: 'NF004',
    cliente: 'Maria Santos',
    pedido: 'PED004',
    dataEmissao: '13/01/2024',
    valor: 'R$ 3.567,20',
    status: 'Pendente',
    chaveAcesso: '-',
  },
  {
    codigo: 'NF005',
    cliente: 'Ana Oliveira',
    pedido: 'PED005',
    dataEmissao: '12/01/2024',
    valor: 'R$ 456,90',
    status: 'Cancelada',
    chaveAcesso: '-',
  },
];

export default function NotasFiscais() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredInvoices = invoices.filter((invoice) =>
    invoice.codigo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    invoice.cliente.toLowerCase().includes(searchTerm.toLowerCase())
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
          <h1 className="text-3xl font-bold text-gray-900">Notas Fiscais</h1>
          <p className="text-sm text-gray-500 mt-1">
            Controle de emissão e gestão de notas fiscais
          </p>
        </div>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Emitir Nota Fiscal
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
              <p className="text-sm text-gray-600 mb-1">Total de Notas</p>
              <p className="text-2xl font-bold text-gray-900">5</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-50">
              <FileText className="w-5 h-5 text-blue-500" />
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
              <p className="text-sm text-gray-600 mb-1">Notas Emitidas</p>
              <p className="text-2xl font-bold text-gray-900">2</p>
            </div>
            <div className="p-3 rounded-lg bg-green-50">
              <FileText className="w-5 h-5 text-green-500" />
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
              <p className="text-sm text-gray-600 mb-1">Valor Total</p>
              <p className="text-2xl font-bold text-gray-900">R$ 3.380,30</p>
            </div>
            <div className="p-3 rounded-lg bg-green-50">
              <FileText className="w-5 h-5 text-green-500" />
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
              <p className="text-sm text-gray-600 mb-1">Pendentes</p>
              <p className="text-2xl font-bold text-gray-900">1</p>
            </div>
            <div className="p-3 rounded-lg bg-yellow-50">
              <FileText className="w-5 h-5 text-yellow-500" />
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
            placeholder="Buscar notas fiscais..."
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filtros
        </Button>
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Exportar
        </Button>
      </div>

      {/* Invoices Table */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Agendamentos do Dia
          </h2>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Código</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Pedido</TableHead>
                <TableHead>Data Emissão</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Chave de Acesso</TableHead>
                <TableHead>Ação</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInvoices.map((invoice) => (
                <TableRow key={invoice.codigo}>
                  <TableCell className="font-medium">{invoice.codigo}</TableCell>
                  <TableCell>{invoice.cliente}</TableCell>
                  <TableCell>{invoice.pedido}</TableCell>
                  <TableCell>{invoice.dataEmissao}</TableCell>
                  <TableCell className="text-blue-600 font-semibold">
                    {invoice.valor}
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(invoice.status)}>
                      {invoice.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-xs text-gray-600">
                    {invoice.chaveAcesso}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Printer className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Modal */}
      <NewInvoiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
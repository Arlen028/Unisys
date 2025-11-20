import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Filter, Users } from 'lucide-react';
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
import NewClientModal from '@/components/modals/NewClientModal';

const clients = [
  {
    id: 'CLI001',
    nome: 'Carlos Mendes',
    email: 'carlos@email.com',
    telefone: '(11) 98765-4321',
    compras: 25,
    status: 'Ativo',
  },
  {
    id: 'CLI002',
    nome: 'Pedro Costa',
    email: 'pedro@email.com',
    telefone: '(11) 98765-1234',
    compras: 18,
    status: 'Ativo',
  },
  {
    id: 'CLI003',
    nome: 'João Silva',
    email: 'joao@email.com',
    telefone: '(11) 98765-5678',
    compras: 22,
    status: 'Ativo',
  },
  {
    id: 'CLI004',
    nome: 'Maria Santos',
    email: 'maria@email.com',
    telefone: '(11) 98765-9012',
    compras: 12,
    status: 'Ativo',
  },
  {
    id: 'CLI005',
    nome: 'Ana Oliveira',
    email: 'ana@email.com',
    telefone: '(11) 98765-3456',
    compras: 8,
    status: 'Inativo',
  },
];

export default function Clients() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClients = clients.filter((client) =>
    client.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Clientes</h1>
          <p className="text-sm text-gray-500 mt-1">
            Gerencie sua base de clientes
          </p>
        </div>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Novo Cliente
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
              <p className="text-sm text-gray-600 mb-1">Total de Clientes</p>
              <p className="text-2xl font-bold text-gray-900">1234</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-50">
              <Users className="w-5 h-5 text-blue-500" />
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
              <p className="text-sm text-gray-600 mb-1">Clientes Ativos</p>
              <p className="text-2xl font-bold text-gray-900">1156</p>
            </div>
            <div className="p-3 rounded-lg bg-green-50">
              <Users className="w-5 h-5 text-green-500" />
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
              <p className="text-sm text-gray-600 mb-1">Novos no Mês</p>
              <p className="text-2xl font-bold text-gray-900">89</p>
            </div>
            <div className="p-3 rounded-lg bg-green-50">
              <Users className="w-5 h-5 text-green-500" />
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
              <p className="text-sm text-gray-600 mb-1">Inativos</p>
              <p className="text-2xl font-bold text-gray-900">78</p>
            </div>
            <div className="p-3 rounded-lg bg-yellow-50">
              <Users className="w-5 h-5 text-yellow-500" />
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
            placeholder="Buscar clientes por nome ou e-mail..."
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filtros
        </Button>
      </div>

      {/* Clients Table */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Lista de Clientes
          </h2>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Código</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>E-mail</TableHead>
                <TableHead>Telefone</TableHead>
                <TableHead>Compras</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredClients.map((client) => (
                <TableRow key={client.id}>
                  <TableCell className="font-medium">{client.id}</TableCell>
                  <TableCell>{client.nome}</TableCell>
                  <TableCell>{client.email}</TableCell>
                  <TableCell>{client.telefone}</TableCell>
                  <TableCell>{client.compras}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        client.status === 'Ativo'
                          ? 'bg-green-500 hover:bg-green-600'
                          : 'bg-gray-500 hover:bg-gray-600'
                      }
                    >
                      {client.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Modal */}
      <NewClientModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
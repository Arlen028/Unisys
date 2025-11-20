import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Filter, UserCog } from 'lucide-react';
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
import NewUserModal from '@/components/modals/NewUserModal';

const users = [
  {
    id: 'USR001',
    nome: 'Arlem Santos',
    email: 'arlem527@gmail.com',
    cargo: 'Administrador',
    departamento: 'TI',
    status: 'Ativo',
  },
  {
    id: 'USR002',
    nome: 'João Silva',
    email: 'joao@empresa.com',
    cargo: 'Gerente',
    departamento: 'Vendas',
    status: 'Ativo',
  },
  {
    id: 'USR003',
    nome: 'Maria Santos',
    email: 'maria@empresa.com',
    cargo: 'Vendedor',
    departamento: 'Vendas',
    status: 'Ativo',
  },
  {
    id: 'USR004',
    nome: 'Pedro Costa',
    email: 'pedro@empresa.com',
    cargo: 'Estoquista',
    departamento: 'Estoque',
    status: 'Ativo',
  },
  {
    id: 'USR005',
    nome: 'Ana Oliveira',
    email: 'ana@empresa.com',
    cargo: 'Financeiro',
    departamento: 'Financeiro',
    status: 'Inativo',
  },
];

export default function Users() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter((user) =>
    user.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Usuários</h1>
          <p className="text-sm text-gray-500 mt-1">
            Gerencie os usuários do sistema
          </p>
        </div>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Novo Usuário
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
              <p className="text-sm text-gray-600 mb-1">Total de Usuários</p>
              <p className="text-2xl font-bold text-gray-900">45</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-50">
              <UserCog className="w-5 h-5 text-blue-500" />
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
              <p className="text-sm text-gray-600 mb-1">Usuários Ativos</p>
              <p className="text-2xl font-bold text-gray-900">42</p>
            </div>
            <div className="p-3 rounded-lg bg-green-50">
              <UserCog className="w-5 h-5 text-green-500" />
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
              <p className="text-sm text-gray-600 mb-1">Novos Este Mês</p>
              <p className="text-2xl font-bold text-gray-900">5</p>
            </div>
            <div className="p-3 rounded-lg bg-green-50">
              <UserCog className="w-5 h-5 text-green-500" />
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
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
            <div className="p-3 rounded-lg bg-yellow-50">
              <UserCog className="w-5 h-5 text-yellow-500" />
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
            placeholder="Buscar usuários por nome ou e-mail..."
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filtros
        </Button>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Lista de Usuários
          </h2>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Código</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>E-mail</TableHead>
                <TableHead>Cargo</TableHead>
                <TableHead>Departamento</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.id}</TableCell>
                  <TableCell>{user.nome}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.cargo}</TableCell>
                  <TableCell>{user.departamento}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        user.status === 'Ativo'
                          ? 'bg-green-500 hover:bg-green-600'
                          : 'bg-gray-500 hover:bg-gray-600'
                      }
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Modal */}
      <NewUserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
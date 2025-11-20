import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Filter, Package } from 'lucide-react';
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
import NewProductModal from '@/components/modals/NewProductModal';

const products = [
  {
    id: 'PROD001',
    nome: 'Mouse Wireless Pro',
    categoria: 'Periféricos',
    preco: 'R$ 89,90',
    estoque: 45,
    status: 'Disponível',
  },
  {
    id: 'PROD002',
    nome: 'Teclado Mecânico RGB',
    categoria: 'Periféricos',
    preco: 'R$ 349,90',
    estoque: 12,
    status: 'Estoque Baixo',
  },
  {
    id: 'PROD003',
    nome: 'Notebook Gamer',
    categoria: 'Computadores',
    preco: 'R$ 4.999,00',
    estoque: 8,
    status: 'Disponível',
  },
  {
    id: 'PROD004',
    nome: 'Monitor 4K Ultra',
    categoria: 'Monitores',
    preco: 'R$ 1.899,00',
    estoque: 0,
    status: 'Sem Estoque',
  },
  {
    id: 'PROD005',
    nome: 'Webcam Full HD',
    categoria: 'Acessórios',
    preco: 'R$ 299,90',
    estoque: 23,
    status: 'Disponível',
  },
];

export default function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) =>
    product.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Disponível':
        return 'bg-green-500 hover:bg-green-600';
      case 'Estoque Baixo':
        return 'bg-yellow-500 hover:bg-yellow-600';
      case 'Sem Estoque':
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
          <h1 className="text-3xl font-bold text-gray-900">Produtos</h1>
          <p className="text-sm text-gray-500 mt-1">
            Gerencie seu catálogo de produtos
          </p>
        </div>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Novo Produto
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
              <p className="text-sm text-gray-600 mb-1">Total de Produtos</p>
              <p className="text-2xl font-bold text-gray-900">2847</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-50">
              <Package className="w-5 h-5 text-blue-500" />
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
              <p className="text-sm text-gray-600 mb-1">Disponíveis</p>
              <p className="text-2xl font-bold text-gray-900">2828</p>
            </div>
            <div className="p-3 rounded-lg bg-green-50">
              <Package className="w-5 h-5 text-green-500" />
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
              <p className="text-sm text-gray-600 mb-1">Estoque Baixo</p>
              <p className="text-2xl font-bold text-gray-900">15</p>
            </div>
            <div className="p-3 rounded-lg bg-yellow-50">
              <Package className="w-5 h-5 text-yellow-500" />
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
              <p className="text-sm text-gray-600 mb-1">Sem Estoque</p>
              <p className="text-2xl font-bold text-gray-900">4</p>
            </div>
            <div className="p-3 rounded-lg bg-red-50">
              <Package className="w-5 h-5 text-red-500" />
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
            placeholder="Buscar produtos por nome ou código..."
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filtros
        </Button>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Lista de Produtos
          </h2>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Código</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Preço</TableHead>
                <TableHead>Estoque</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.id}</TableCell>
                  <TableCell>{product.nome}</TableCell>
                  <TableCell>{product.categoria}</TableCell>
                  <TableCell className="text-blue-600 font-semibold">
                    {product.preco}
                  </TableCell>
                  <TableCell>{product.estoque}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(product.status)}>
                      {product.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Modal */}
      <NewProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Package,
  Users,
  FileText,
  Download,
  Calendar,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { exportToPDF } from '@/utils/pdfExport';

type ReportType = 'vendas' | 'estoque' | 'clientes' | 'fiscal';

const reportCards = [
  {
    id: 'vendas' as ReportType,
    title: 'Relatório de Vendas',
    description: 'Análise completa das vendas por período',
    icon: TrendingUp,
    iconColor: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    id: 'estoque' as ReportType,
    title: 'Relatório de Estoque',
    description: 'Controle de produtos e movimentações',
    icon: Package,
    iconColor: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    id: 'clientes' as ReportType,
    title: 'Relatório de Clientes',
    description: 'Análise do comportamento dos clientes',
    icon: Users,
    iconColor: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    id: 'fiscal' as ReportType,
    title: 'Relatório Fiscal',
    description: 'Notas fiscais emitidas e tributos',
    icon: FileText,
    iconColor: 'text-yellow-500',
    bgColor: 'bg-yellow-50',
  },
];

// Dados do Relatório de Estoque
const estoqueStats = [
  {
    title: 'Total de Produtos',
    value: '2847',
    icon: Package,
    iconColor: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    title: 'Valor do Estoque',
    value: 'R$ 1.245.680,90',
    icon: Package,
    iconColor: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    title: 'Estoque Baixo',
    value: '15',
    icon: Package,
    iconColor: 'text-yellow-500',
    bgColor: 'bg-yellow-50',
  },
  {
    title: 'Sem Estoque',
    value: '4',
    icon: Package,
    iconColor: 'text-red-500',
    bgColor: 'bg-red-50',
  },
];

const movimentacoes = [
  {
    produto: 'Mouse Wireless Pro',
    tipo: 'Saída',
    quantidade: 50,
    data: '14/01/2024',
  },
  {
    produto: 'Teclado Mecânico',
    tipo: 'Entrada',
    quantidade: 100,
    data: '13/01/2024',
  },
  {
    produto: 'Notebook Gamer RGB',
    tipo: 'Saída',
    quantidade: 12,
    data: '13/01/2024',
  },
  {
    produto: 'Monitor 4K Ultra',
    tipo: 'Entrada',
    quantidade: 25,
    data: '12/01/2024',
  },
  {
    produto: 'Webcam Full HD',
    tipo: 'Saída',
    quantidade: 33,
    data: '12/01/2024',
  },
];

// Dados do Relatório de Clientes
const clientesStats = [
  {
    title: 'Total de Clientes',
    value: '1234',
    icon: Users,
    iconColor: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    title: 'Clientes Ativos',
    value: '1156',
    icon: Users,
    iconColor: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    title: 'Novos no Mês',
    value: '89',
    icon: Users,
    iconColor: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    title: 'Inativos',
    value: '78',
    icon: Users,
    iconColor: 'text-yellow-500',
    bgColor: 'bg-yellow-50',
  },
];

const melhoresClientes = [
  {
    cliente: 'Carlos Mendes',
    compras: 25,
    valorTotal: 'R$ 31.200,00',
    ticketMedio: 'R$ 1.248,00',
  },
  {
    cliente: 'Pedro Costa',
    compras: 18,
    valorTotal: 'R$ 23.105,80',
    ticketMedio: 'R$ 1.283,66',
  },
  {
    cliente: 'João Silva',
    compras: 22,
    valorTotal: 'R$ 15.420,50',
    ticketMedio: 'R$ 700,93',
  },
  {
    cliente: 'Maria Santos',
    compras: 12,
    valorTotal: 'R$ 8.950,00',
    ticketMedio: 'R$ 745,83',
  },
  {
    cliente: 'Ana Oliveira',
    compras: 8,
    valorTotal: 'R$ 5.670,30',
    ticketMedio: 'R$ 708,79',
  },
];

export default function Reports() {
  const [selectedReport, setSelectedReport] = useState<ReportType | null>(null);
  const [period, setPeriod] = useState('30');

  const handleExportPDF = () => {
    if (selectedReport) {
      const reportNames = {
        vendas: 'Vendas',
        estoque: 'Estoque',
        clientes: 'Clientes',
        fiscal: 'Fiscal',
      };
      exportToPDF(reportNames[selectedReport]);
    } else {
      exportToPDF('Geral');
    }
  };

  const renderReportContent = () => {
    if (!selectedReport) {
      return null;
    }

    switch (selectedReport) {
      case 'estoque':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Filtro de Período */}
            <div className="flex items-center justify-between bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gray-500" />
                <span className="text-sm text-gray-600">Período:</span>
                <Select value={period} onValueChange={setPeriod}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7">Últimos 7 dias</SelectItem>
                    <SelectItem value="30">Últimos 30 dias</SelectItem>
                    <SelectItem value="90">Últimos 90 dias</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline">Aplicar Filtros</Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {estoqueStats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg border border-gray-200 p-6"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </p>
                    </div>
                    <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                      <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tabela de Movimentações */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  Movimentações Recentes
                </h2>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Produto</TableHead>
                      <TableHead>Tipo</TableHead>
                      <TableHead>Quantidade</TableHead>
                      <TableHead>Data</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {movimentacoes.map((mov, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {mov.produto}
                        </TableCell>
                        <TableCell>
                          <Badge
                            className={
                              mov.tipo === 'Entrada'
                                ? 'bg-green-500 hover:bg-green-600'
                                : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                            }
                          >
                            {mov.tipo}
                          </Badge>
                        </TableCell>
                        <TableCell>{mov.quantidade}</TableCell>
                        <TableCell>{mov.data}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </motion.div>
        );

      case 'clientes':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Filtro de Período */}
            <div className="flex items-center justify-between bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gray-500" />
                <span className="text-sm text-gray-600">Período:</span>
                <Select value={period} onValueChange={setPeriod}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7">Últimos 7 dias</SelectItem>
                    <SelectItem value="30">Últimos 30 dias</SelectItem>
                    <SelectItem value="90">Últimos 90 dias</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline">Aplicar Filtros</Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {clientesStats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg border border-gray-200 p-6"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </p>
                    </div>
                    <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                      <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tabela de Melhores Clientes */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  Melhores Clientes
                </h2>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Cliente</TableHead>
                      <TableHead>Compras</TableHead>
                      <TableHead>Valor Total</TableHead>
                      <TableHead>Ticket Médio</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {melhoresClientes.map((cliente, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {cliente.cliente}
                        </TableCell>
                        <TableCell>{cliente.compras}</TableCell>
                        <TableCell>{cliente.valorTotal}</TableCell>
                        <TableCell>{cliente.ticketMedio}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </motion.div>
        );

      case 'fiscal':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Filtro de Período */}
            <div className="flex items-center justify-between bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gray-500" />
                <span className="text-sm text-gray-600">Período:</span>
                <Select value={period} onValueChange={setPeriod}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7">Últimos 7 dias</SelectItem>
                    <SelectItem value="30">Últimos 30 dias</SelectItem>
                    <SelectItem value="90">Últimos 90 dias</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline">Aplicar Filtros</Button>
            </div>

            {/* Estado Vazio */}
            <div className="bg-white rounded-lg border border-gray-200 p-16 text-center">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Relatório Fiscal
              </h3>
              <p className="text-gray-500">
                Relatório fiscal em desenvolvimento. Em breve disponível.
              </p>
            </div>
          </motion.div>
        );

      case 'vendas':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Filtro de Período */}
            <div className="flex items-center justify-between bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gray-500" />
                <span className="text-sm text-gray-600">Período:</span>
                <Select value={period} onValueChange={setPeriod}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7">Últimos 7 dias</SelectItem>
                    <SelectItem value="30">Últimos 30 dias</SelectItem>
                    <SelectItem value="90">Últimos 90 dias</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline">Aplicar Filtros</Button>
            </div>

            {/* Estado Vazio */}
            <div className="bg-white rounded-lg border border-gray-200 p-16 text-center">
              <TrendingUp className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Relatório de Vendas
              </h3>
              <p className="text-gray-500">
                Relatório de vendas em desenvolvimento. Em breve disponível.
              </p>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Relatórios</h1>
          <p className="text-sm text-gray-500 mt-1">
            Análises e insights do seu negócio
          </p>
        </div>
        <Button 
          onClick={handleExportPDF}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Download className="w-4 h-4 mr-2" />
          Exportar PDF
        </Button>
      </div>

      {/* Report Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reportCards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedReport(card.id)}
            className={`bg-white rounded-lg border-2 p-6 cursor-pointer transition-all hover:shadow-lg ${
              selectedReport === card.id
                ? 'border-blue-500 shadow-md'
                : 'border-gray-200'
            }`}
          >
            <div className="flex flex-col items-center text-center space-y-3">
              <div className={`p-4 rounded-lg ${card.bgColor}`}>
                <card.icon className={`w-8 h-8 ${card.iconColor}`} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{card.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{card.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Report Content */}
      {renderReportContent()}
    </div>
  );
}
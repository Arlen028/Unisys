import { motion } from 'framer-motion';
import { Package, Users, ShoppingCart, DollarSign, TrendingUp, AlertCircle } from 'lucide-react';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Dashboard() {
  const recentSales = [
    { name: 'João Neto', value: 'R$ 1.234,50' },
    { name: 'João Neto', value: 'R$ 890,00' },
    { name: 'Emerson Santos', value: 'R$ 2.134,50' },
    { name: 'João Victor', value: 'R$ 1.234,50' },
    { name: 'José Ravi', value: 'R$ 567,30' },
  ];

  const alerts = [
    {
      title: 'Estoque Baixo',
      description: '13 produtos com estoque abaixo do mínimo',
      icon: '●',
      color: 'text-yellow-500',
    },
    {
      title: 'Nota Fiscal',
      description: '12 notas fiscais pendentes de emissão',
      icon: '●',
      color: 'text-red-500',
    },
    {
      title: 'Clientes',
      description: '5 clientes sem pedidos há mais de 30 dias',
      icon: '●',
      color: 'text-green-500',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header
        title="Dashboard"
        subtitle="Visão geral do seu sistema de gestão"
      />

      <div className="p-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total de Produtos - Blue */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 }}
          >
            <Card className="bg-gradient-to-br from-blue-400 to-blue-600 border-0 text-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-white/90">
                  Total de Produtos
                </CardTitle>
                <Package className="w-5 h-5 text-white/80" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">2,847</div>
                <p className="text-xs text-white/80 mt-1">Produtos cadastrados</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Clientes Ativos - Green */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="bg-gradient-to-br from-green-400 to-green-600 border-0 text-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-white/90">
                  Clientes Ativos
                </CardTitle>
                <Users className="w-5 h-5 text-white/80" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">2,847</div>
                <p className="text-xs text-white/80 mt-1">Clientes cadastrados</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Vendas do Mês - White */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-white border border-gray-200">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-700">
                  Vendas do Mês
                </CardTitle>
                <ShoppingCart className="w-5 h-5 text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">156</div>
                <p className="text-xs text-gray-600 mt-1">Pedidos realizados</p>
                <p className="text-xs text-green-600 mt-1">+23% em relação ao mês anterior</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Receita Total - White */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-white border border-gray-200">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-700">
                  Receita Total
                </CardTitle>
                <DollarSign className="w-5 h-5 text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">R$ 45.231,89</div>
                <p className="text-xs text-gray-600 mt-1">Faturamento mensal</p>
                <p className="text-xs text-green-600 mt-1">+15% em relação ao mês anterior</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Vendas Recentes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-gray-600" />
                  <CardTitle className="text-lg font-bold text-gray-900">
                    Vendas Recentes
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentSales.map((sale, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.05 }}
                      className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                    >
                      <span className="text-sm font-medium text-gray-900">{sale.name}</span>
                      <span className="text-sm font-semibold text-blue-600">{sale.value}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Alertas do Sistema */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-yellow-500" />
                  <CardTitle className="text-lg font-bold text-gray-900">
                    Alertas do Sistema
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {alerts.map((alert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.05 }}
                      className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0"
                    >
                      <span className={`text-2xl ${alert.color} leading-none mt-0.5`}>
                        {alert.icon}
                      </span>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900">{alert.title}</h4>
                        <p className="text-xs text-gray-600 mt-0.5">{alert.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
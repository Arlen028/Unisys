import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';

interface NewInvoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewInvoiceModal({ isOpen, onClose }: NewInvoiceModalProps) {
  const [formData, setFormData] = useState({
    cliente: '',
    pedido: '',
    naturezaOperacao: '',
    cfop: '',
    valor: '',
    observacoes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.cliente || !formData.pedido || !formData.naturezaOperacao || !formData.valor) {
      toast.error('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    // Simular emissão
    toast.success('Nota fiscal emitida com sucesso!');
    onClose();
    
    // Resetar formulário
    setFormData({
      cliente: '',
      pedido: '',
      naturezaOperacao: '',
      cfop: '',
      valor: '',
      observacoes: '',
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Emitir Nota Fiscal</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="cliente">Cliente *</Label>
              <Select
                value={formData.cliente}
                onValueChange={(value) => setFormData({ ...formData, cliente: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um cliente" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="carlos">Carlos Mendes</SelectItem>
                  <SelectItem value="pedro">Pedro Costa</SelectItem>
                  <SelectItem value="joao">João Silva</SelectItem>
                  <SelectItem value="maria">Maria Santos</SelectItem>
                  <SelectItem value="ana">Ana Oliveira</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="pedido">Pedido *</Label>
              <Select
                value={formData.pedido}
                onValueChange={(value) => setFormData({ ...formData, pedido: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um pedido" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PED001">PED001 - R$ 1.234,50</SelectItem>
                  <SelectItem value="PED002">PED002 - R$ 2.145,80</SelectItem>
                  <SelectItem value="PED003">PED003 - R$ 890,00</SelectItem>
                  <SelectItem value="PED004">PED004 - R$ 3.567,20</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="naturezaOperacao">Natureza da Operação *</Label>
              <Select
                value={formData.naturezaOperacao}
                onValueChange={(value) => setFormData({ ...formData, naturezaOperacao: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a natureza" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="venda">Venda de Mercadoria</SelectItem>
                  <SelectItem value="devolucao">Devolução de Mercadoria</SelectItem>
                  <SelectItem value="transferencia">Transferência</SelectItem>
                  <SelectItem value="remessa">Remessa para Conserto</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cfop">CFOP *</Label>
              <Select
                value={formData.cfop}
                onValueChange={(value) => setFormData({ ...formData, cfop: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o CFOP" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5102">5102 - Venda dentro do estado</SelectItem>
                  <SelectItem value="6102">6102 - Venda fora do estado</SelectItem>
                  <SelectItem value="5405">5405 - Venda de bem do ativo</SelectItem>
                  <SelectItem value="5949">5949 - Outras saídas</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="valor">Valor Total (R$) *</Label>
              <Input
                id="valor"
                type="number"
                step="0.01"
                value={formData.valor}
                onChange={(e) => setFormData({ ...formData, valor: e.target.value })}
                placeholder="0,00"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="observacoes">Observações</Label>
            <Input
              id="observacoes"
              value={formData.observacoes}
              onChange={(e) => setFormData({ ...formData, observacoes: e.target.value })}
              placeholder="Adicione observações sobre a nota fiscal..."
            />
          </div>

          {/* Informações Adicionais */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Atenção:</strong> A nota fiscal será emitida automaticamente após a confirmação.
              Certifique-se de que todos os dados estão corretos antes de prosseguir.
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              Emitir Nota Fiscal
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
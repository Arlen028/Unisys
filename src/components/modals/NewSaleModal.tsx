import { useState } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';
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

interface NewSaleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SaleItem {
  id: string;
  produto: string;
  quantidade: number;
  preco: number;
}

export default function NewSaleModal({ isOpen, onClose }: NewSaleModalProps) {
  const [formData, setFormData] = useState({
    cliente: '',
    formaPagamento: '',
    observacoes: '',
  });

  const [items, setItems] = useState<SaleItem[]>([
    { id: '1', produto: '', quantidade: 1, preco: 0 },
  ]);

  const addItem = () => {
    setItems([
      ...items,
      { id: Date.now().toString(), produto: '', quantidade: 1, preco: 0 },
    ]);
  };

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const updateItem = (id: string, field: keyof SaleItem, value: string | number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.quantidade * item.preco, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.cliente || !formData.formaPagamento) {
      toast.error('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    const hasEmptyItems = items.some((item) => !item.produto || item.quantidade <= 0 || item.preco <= 0);
    if (hasEmptyItems) {
      toast.error('Por favor, preencha todos os itens da venda');
      return;
    }

    // Simular salvamento
    toast.success('Venda registrada com sucesso!');
    onClose();
    
    // Resetar formulário
    setFormData({
      cliente: '',
      formaPagamento: '',
      observacoes: '',
    });
    setItems([{ id: '1', produto: '', quantidade: 1, preco: 0 }]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Nova Venda</h2>
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
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Cliente e Pagamento */}
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
              <Label htmlFor="formaPagamento">Forma de Pagamento *</Label>
              <Select
                value={formData.formaPagamento}
                onValueChange={(value) => setFormData({ ...formData, formaPagamento: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a forma de pagamento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dinheiro">Dinheiro</SelectItem>
                  <SelectItem value="cartao-credito">Cartão de Crédito</SelectItem>
                  <SelectItem value="cartao-debito">Cartão de Débito</SelectItem>
                  <SelectItem value="pix">PIX</SelectItem>
                  <SelectItem value="boleto">Boleto</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Itens da Venda */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Itens da Venda *</Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addItem}
                className="text-blue-600 hover:text-blue-700"
              >
                <Plus className="w-4 h-4 mr-1" />
                Adicionar Item
              </Button>
            </div>

            <div className="space-y-3">
              {items.map((item, index) => (
                <div key={item.id} className="flex items-end gap-3">
                  <div className="flex-1 space-y-2">
                    <Label>Produto</Label>
                    <Select
                      value={item.produto}
                      onValueChange={(value) => updateItem(item.id, 'produto', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um produto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mouse">Mouse Wireless Pro</SelectItem>
                        <SelectItem value="teclado">Teclado Mecânico</SelectItem>
                        <SelectItem value="notebook">Notebook Gamer RGB</SelectItem>
                        <SelectItem value="monitor">Monitor 4K Ultra</SelectItem>
                        <SelectItem value="webcam">Webcam Full HD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="w-28 space-y-2">
                    <Label>Quantidade</Label>
                    <Input
                      type="number"
                      min="1"
                      value={item.quantidade}
                      onChange={(e) =>
                        updateItem(item.id, 'quantidade', parseInt(e.target.value) || 1)
                      }
                    />
                  </div>

                  <div className="w-32 space-y-2">
                    <Label>Preço (R$)</Label>
                    <Input
                      type="number"
                      step="0.01"
                      min="0"
                      value={item.preco}
                      onChange={(e) =>
                        updateItem(item.id, 'preco', parseFloat(e.target.value) || 0)
                      }
                    />
                  </div>

                  <div className="w-32 space-y-2">
                    <Label>Subtotal</Label>
                    <Input
                      value={`R$ ${(item.quantidade * item.preco).toFixed(2)}`}
                      disabled
                      className="bg-gray-50"
                    />
                  </div>

                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeItem(item.id)}
                    disabled={items.length === 1}
                    className="text-red-500 hover:text-red-600 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Total */}
          <div className="flex items-center justify-end gap-4 p-4 bg-gray-50 rounded-lg">
            <span className="text-lg font-semibold text-gray-700">Total:</span>
            <span className="text-2xl font-bold text-blue-600">
              R$ {calculateTotal().toFixed(2)}
            </span>
          </div>

          {/* Observações */}
          <div className="space-y-2">
            <Label htmlFor="observacoes">Observações</Label>
            <Input
              id="observacoes"
              value={formData.observacoes}
              onChange={(e) => setFormData({ ...formData, observacoes: e.target.value })}
              placeholder="Adicione observações sobre a venda..."
            />
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              Registrar Venda
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
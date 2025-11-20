import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';

interface NewProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewProductModal({ isOpen, onClose }: NewProductModalProps) {
  const [formData, setFormData] = useState({
    nome: '',
    categoria: '',
    preco: '',
    estoque: '',
    estoqueMinimo: '',
    descricao: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.nome || !formData.categoria || !formData.preco || !formData.estoque) {
      toast.error('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    // Simular salvamento
    toast.success('Produto adicionado com sucesso!');
    onClose();
    
    // Resetar formulário
    setFormData({
      nome: '',
      categoria: '',
      preco: '',
      estoque: '',
      estoqueMinimo: '',
      descricao: '',
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Novo Produto</h2>
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
              <Label htmlFor="nome">Nome do Produto *</Label>
              <Input
                id="nome"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                placeholder="Ex: Mouse Wireless Pro"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="categoria">Categoria *</Label>
              <Select
                value={formData.categoria}
                onValueChange={(value) => setFormData({ ...formData, categoria: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="eletronicos">Eletrônicos</SelectItem>
                  <SelectItem value="perifericos">Periféricos</SelectItem>
                  <SelectItem value="computadores">Computadores</SelectItem>
                  <SelectItem value="acessorios">Acessórios</SelectItem>
                  <SelectItem value="outros">Outros</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="preco">Preço (R$) *</Label>
              <Input
                id="preco"
                type="number"
                step="0.01"
                value={formData.preco}
                onChange={(e) => setFormData({ ...formData, preco: e.target.value })}
                placeholder="0,00"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="estoque">Quantidade em Estoque *</Label>
              <Input
                id="estoque"
                type="number"
                value={formData.estoque}
                onChange={(e) => setFormData({ ...formData, estoque: e.target.value })}
                placeholder="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="estoqueMinimo">Estoque Mínimo</Label>
              <Input
                id="estoqueMinimo"
                type="number"
                value={formData.estoqueMinimo}
                onChange={(e) => setFormData({ ...formData, estoqueMinimo: e.target.value })}
                placeholder="0"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="descricao">Descrição</Label>
            <Textarea
              id="descricao"
              value={formData.descricao}
              onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
              placeholder="Descreva o produto..."
              rows={4}
            />
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              Adicionar Produto
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
import { motion } from 'framer-motion';
import { Save, RotateCcw, Building2, FileText, Settings as SettingsIcon, Shield, Bell, LucideIcon } from 'lucide-react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Settings() {
  const FormSection = ({ icon: Icon, title, children, delay = 0 }: { icon: LucideIcon; title: string; children: React.ReactNode; delay?: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon className="w-5 h-5 text-blue-500" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {children}
        </CardContent>
      </Card>
    </motion.div>
  );

  const FormField = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <div className="space-y-2">
      <Label className="text-sm font-medium text-gray-700">{label}</Label>
      {children}
    </div>
  );

  const ToggleField = ({ label, description, defaultChecked = false }: { label: string; description: string; defaultChecked?: boolean }) => (
    <div className="flex items-center justify-between py-2">
      <div className="space-y-0.5">
        <Label className="text-sm font-medium text-gray-900">{label}</Label>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
      <Switch defaultChecked={defaultChecked} />
    </div>
  );

  return (
    <div className="min-h-screen">
      <Header
        title="Configurações"
        subtitle="Gerencie as configurações do sistema"
        action={
          <div className="flex gap-2">
            <Button variant="outline">
              <RotateCcw className="w-4 h-4 mr-2" />
              Resetar
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600">
              <Save className="w-4 h-4 mr-2" />
              Salvar Alterações
            </Button>
          </div>
        }
      />

      <div className="p-6 space-y-6">
        {/* Company Data */}
        <FormSection icon={Building2} title="Dados da Empresa" delay={0.1}>
          <FormField label="Nome da Empresa">
            <Input defaultValue="Minha Empresa Ltda" />
          </FormField>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="CNPJ">
              <Input defaultValue="12.345.678/0001-90" />
            </FormField>
            <FormField label="Telefone">
              <Input defaultValue="(11) 1234-5678" />
            </FormField>
          </div>
          <FormField label="Endereço">
            <Input defaultValue="Rua das Empresas, 123" />
          </FormField>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField label="Cidade">
              <Input defaultValue="São Paulo" />
            </FormField>
            <FormField label="Estado">
              <Select defaultValue="sp">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sp">São Paulo</SelectItem>
                  <SelectItem value="rj">Rio de Janeiro</SelectItem>
                  <SelectItem value="mg">Minas Gerais</SelectItem>
                </SelectContent>
              </Select>
            </FormField>
            <FormField label="CEP">
              <Input defaultValue="01234-567" />
            </FormField>
          </div>
          <FormField label="Email">
            <Input type="email" defaultValue="contato@minhaempresa.com" />
          </FormField>
        </FormSection>

        {/* Fiscal Notes */}
        <FormSection icon={FileText} title="Notas Fiscais" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="Série">
              <Input defaultValue="1" />
            </FormField>
            <FormField label="Próximo Número">
              <Input defaultValue="000001" />
            </FormField>
          </div>
          <FormField label="Ambiente">
            <Select defaultValue="homologacao">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="homologacao">Homologação</SelectItem>
                <SelectItem value="producao">Produção</SelectItem>
              </SelectContent>
            </Select>
          </FormField>
          <FormField label="Certificado Digital">
            <Input defaultValue="certificado.p12" />
          </FormField>
          <ToggleField
            label="Numeração Série Automática"
            description="Incrementar automaticamente o número da série"
            defaultChecked={true}
          />
          <ToggleField
            label="Email Automático"
            description="Enviar NF por email automaticamente"
            defaultChecked={true}
          />
        </FormSection>

        {/* System Settings */}
        <FormSection icon={SettingsIcon} title="Sistema" delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="Tema">
              <Select defaultValue="claro">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="claro">Claro</SelectItem>
                  <SelectItem value="escuro">Escuro</SelectItem>
                  <SelectItem value="auto">Automático</SelectItem>
                </SelectContent>
              </Select>
            </FormField>
            <FormField label="Idioma">
              <Select defaultValue="pt-br">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pt-br">Português (BR)</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                </SelectContent>
              </Select>
            </FormField>
          </div>
          <FormField label="Timeout de Sessão (minutos)">
            <Input type="number" defaultValue="30" />
          </FormField>
          <ToggleField
            label="Backup Automático"
            description="Realizar backup diário automaticamente"
            defaultChecked={true}
          />
          <ToggleField
            label="Log Detalhado"
            description="Registrar logs detalhados do sistema"
            defaultChecked={false}
          />
        </FormSection>

        {/* Security */}
        <FormSection icon={Shield} title="Segurança" delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="Tentativas de Login">
              <Select defaultValue="3">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">3 tentativas</SelectItem>
                  <SelectItem value="5">5 tentativas</SelectItem>
                  <SelectItem value="10">10 tentativas</SelectItem>
                </SelectContent>
              </Select>
            </FormField>
            <FormField label="Tempo de Bloqueio (min)">
              <Input type="number" defaultValue="15" />
            </FormField>
          </div>
          <ToggleField
            label="Senha Complexa"
            description="Exigir senhas com letras, números e símbolos"
            defaultChecked={true}
          />
          <ToggleField
            label="Log de Auditoria"
            description="Registrar todas as ações dos usuários"
            defaultChecked={true}
          />
          <ToggleField
            label="Backup Criptografado"
            description="Criptografar arquivos de backup"
            defaultChecked={true}
          />
        </FormSection>

        {/* Notifications */}
        <FormSection icon={Bell} title="Notificações" delay={0.5}>
          <ToggleField
            label="Estoque Mínimo"
            description="Alertas quando produtos atingem estoque mínimo"
            defaultChecked={true}
          />
          <ToggleField
            label="Notas Fiscais Pendentes"
            description="Alertas sobre NFs pendentes de emissão"
            defaultChecked={true}
          />
          <ToggleField
            label="Relatório de Vendas"
            description="Resumo diário de vendas por email"
            defaultChecked={true}
          />
          <ToggleField
            label="Relatórios por Email"
            description="Envio automático de relatórios semanais"
            defaultChecked={false}
          />
        </FormSection>
      </div>
    </div>
  );
}
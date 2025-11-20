# Sistema de Gestão - Plano de Desenvolvimento

## Arquivos a serem criados:

### 1. Componentes Reutilizáveis (/src/components)
- **Sidebar.tsx** - Menu lateral com navegação (Dashboard, Produtos, Clientes, Vendas, Notas Fiscais, Relatórios, Usuários, Configurações)
- **Header.tsx** - Cabeçalho com título da página e botão de toggle do sidebar
- **StatCard.tsx** - Card de estatísticas reutilizável
- **PermissionCard.tsx** - Card de permissões por função
- **DataTable.tsx** - Tabela de dados genérica

### 2. Páginas (/src/pages)
- **Dashboard.tsx** - Página inicial com overview
- **Users.tsx** - Gestão de usuários e permissões (RBAC)
- **Settings.tsx** - Configurações do sistema
- **Reports.tsx** - Relatórios e análises

### 3. Layouts (/src/components/layouts)
- **MainLayout.tsx** - Layout principal com sidebar e header

### 4. Estilos
- Atualizar **index.html** com título correto
- Configurar animações com Framer Motion

## Estrutura de Dados:
- Usuários: id, nome, email, função, status, último acesso, criado em
- Permissões: por função (Administrador, Gerente, Vendedor)
- Configurações: empresa, notas fiscais, sistema, segurança, notificações
- Relatórios: vendas, estoque, clientes, fiscal

## Tecnologias:
- React + TypeScript
- Tailwind CSS
- shadcn/ui components
- Framer Motion para animações
- Responsivo mobile-first
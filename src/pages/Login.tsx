import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular login e redirecionar para o dashboard
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md px-4"
      >
        <Card className="border border-gray-200 shadow-lg">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900">
              Sistema de Gestão
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="cadastro">Cadastro</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                      Senha
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full"
                      required
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="remember"
                        checked={rememberMe}
                        onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                      />
                      <Label
                        htmlFor="remember"
                        className="text-sm text-gray-700 cursor-pointer"
                      >
                        Lembrar
                      </Label>
                    </div>
                    <Button
                      type="button"
                      variant="link"
                      className="text-sm text-blue-600 hover:text-blue-700 p-0 h-auto"
                    >
                      Esqueceu a senha?
                    </Button>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5"
                  >
                    Log In
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="cadastro">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome" className="text-sm font-medium text-gray-700">
                        Nome
                      </Label>
                      <Input
                        id="nome"
                        type="text"
                        placeholder="nome"
                        className="w-full"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sobrenome" className="text-sm font-medium text-gray-700">
                        Sobrenome
                      </Label>
                      <Input
                        id="sobrenome"
                        type="text"
                        placeholder="sobrenome"
                        className="w-full"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email-cadastro" className="text-sm font-medium text-gray-700">
                      Email
                    </Label>
                    <Input
                      id="email-cadastro"
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="senha-cadastro" className="text-sm font-medium text-gray-700">
                      Senha
                    </Label>
                    <Input
                      id="senha-cadastro"
                      type="password"
                      placeholder="••••••"
                      className="w-full"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="senha-confirmar" className="text-sm font-medium text-gray-700">
                      Senha
                    </Label>
                    <Input
                      id="senha-confirmar"
                      type="password"
                      placeholder="••••••"
                      className="w-full"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5"
                  >
                    Cadastrar
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
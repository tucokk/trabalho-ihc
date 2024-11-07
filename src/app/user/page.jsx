"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChevronRight,
  Home,
  LogOut,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import Link from "next/link";

export default function UserAccount() {
  const [user, setUser] = useState({
    name: "João Silva",
    email: "joao.silva@example.com",
    phone: "(11) 98765-4321",
    address: "Rua das Flores, 123 - São Paulo, SP",
  });

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the updated user data to your backend
    console.log("Updated user data:", user);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4 py-4">
          <Link href="/home" className="flex items-center gap-2">
            <div className="w-12 h-12">
              <div className="w-full h-full rounded-full bg-cyan-300 flex items-center justify-center">
                <span className="text-white font-bold">TW</span>
              </div>
            </div>
            <span className="font-semibold">TechWave</span>
          </Link>
          <div className="flex-1 max-w-xl relative">
            <Input className="w-full pl-10" placeholder="Pesquisar..." />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/user">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/home">
              <Button variant="ghost" size="icon">
                <Home className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="ghost" size="icon">
                <LogOut className="h-5 w-5" />
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-6">Minha Conta</h1>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile">Perfil</TabsTrigger>
            <TabsTrigger value="orders">Pedidos</TabsTrigger>
            <TabsTrigger value="settings">Configurações</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Informações do Perfil</CardTitle>
                <CardDescription>
                  Atualize suas informações pessoais aqui.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Nome</Label>
                      <Input
                        id="name"
                        name="name"
                        value={user.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={user.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={user.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="address">Endereço</Label>
                      <Input
                        id="address"
                        name="address"
                        value={user.address}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button type="submit" onClick={handleSubmit}>
                  Salvar Alterações
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Histórico de Pedidos</CardTitle>
                <CardDescription>
                  Veja seus pedidos recentes aqui.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((order) => (
                    <div
                      key={order}
                      className="flex items-center justify-between border-b pb-4"
                    >
                      <div>
                        <p className="font-medium">Pedido #{order}</p>
                        <p className="text-sm text-muted-foreground">
                          Data: {new Date().toLocaleDateString()}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Ver Detalhes
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Configurações da Conta</CardTitle>
                <CardDescription>
                  Gerencie as configurações da sua conta.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Notificações por Email</p>
                    <p className="text-sm text-muted-foreground">
                      Receba atualizações sobre seus pedidos
                    </p>
                  </div>
                  <Button variant="outline">Gerenciar</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Alterar Senha</p>
                    <p className="text-sm text-muted-foreground">
                      Atualize sua senha regularmente
                    </p>
                  </div>
                  <Button variant="outline">Alterar</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Preferências de Privacidade</p>
                    <p className="text-sm text-muted-foreground">
                      Gerencie como seus dados são usados
                    </p>
                  </div>
                  <Button variant="outline">Configurar</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

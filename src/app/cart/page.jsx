"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Minus,
  Plus,
  Search,
  ShoppingCart,
  Trash2,
  User,
  LogOut,
} from "lucide-react";
import Link from "next/link";

// This would typically come from a database or API
const initialCartItems = [
  { id: 1, name: "Smartphone Motorola Edge", price: 1999.99, quantity: 1 },
  { id: 2, name: "iPhone 13 Pro", price: 4999.99, quantity: 1 },
  { id: 3, name: "Samsung Galaxy S21", price: 3999.99, quantity: 2 },
];

export default function CartScreen() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id, newQuantity) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 19.99;
  const total = subtotal + shipping;

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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/home"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-6"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Continuar comprando
        </Link>

        <h1 className="text-3xl font-bold mb-6">Carrinho de Compras</h1>

        <div className="grid gap-8 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Itens no Carrinho</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[50vh]">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between py-4"
                  >
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        R$ {item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value, 10))
                        }
                        className="w-16 text-center"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resumo do Pedido</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>R$ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Frete</span>
                  <span>R$ {shipping.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg">
                Finalizar Compra
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

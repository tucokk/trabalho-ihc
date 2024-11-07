import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ChevronRight,
  Home,
  LogOut,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-[220px,1fr] gap-6 py-6">
        {/* Sidebar */}
        <aside>
          <ScrollArea className="h-[calc(100vh-120px)]">
            <nav className="grid gap-2 pr-4">
              <div className="grid gap-1">
                <Link
                  href="#"
                  className="flex items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent"
                >
                  Celulares
                  <ChevronRight className="h-4 w-4" />
                </Link>
                <div className="grid gap-1 pl-6">
                  <Link
                    href="#"
                    className="rounded-md px-3 py-2 text-sm hover:bg-accent"
                  >
                    Samsung
                  </Link>
                  <Link
                    href="#"
                    className="rounded-md px-3 py-2 text-sm hover:bg-accent"
                  >
                    Apple
                  </Link>
                  <Link
                    href="#"
                    className="rounded-md px-3 py-2 text-sm hover:bg-accent"
                  >
                    Motorola
                  </Link>
                  <Link
                    href="#"
                    className="rounded-md px-3 py-2 text-sm hover:bg-accent"
                  >
                    LG
                  </Link>
                </div>
              </div>
              <Link
                href="#"
                className="flex items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent"
              >
                TVs e Video
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent"
              >
                Gerais
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent"
              >
                Suporte
                <ChevronRight className="h-4 w-4" />
              </Link>
            </nav>
          </ScrollArea>
        </aside>

        {/* Main Content */}
        <main className="space-y-6">
          {/* Banner */}
          <div className="relative aspect-[21/9] overflow-hidden rounded-lg bg-[#E31C58]">
            <div className="absolute inset-0 flex items-center justify-between p-8 text-white">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold">
                  celulares e smartphones
                  <br />
                  perto de você
                </h1>
                <div className="space-y-2 text-2xl">
                  <div className="flex items-center gap-4">
                    compre online e retire na loja
                  </div>
                </div>
                <Button className="bg-white text-black hover:bg-white/90">
                  Comprar agora
                </Button>
              </div>
              <div className="text-center">
                <img
                  key="teste"
                  src="apple-pink-iphone-png-photo.png"
                  className="h-[400px] w-[400px] mr-12"
                />
              </div>
            </div>
          </div>

          {/* Products */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Produtos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i}>
                  <CardContent className="pt-4">
                    <div className="grid gap-4">
                      <img
                        key="teste"
                        src="apple-pink-iphone-png-photo.png"
                        className="h-[200px] w-[400px] mr-12"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            Suporte: 0800 871 401
          </p>
        </div>
      </footer>
    </div>
  );
}


import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Plus, 
  Search, 
  Bell, 
  Settings as SettingsIcon,
  Briefcase,
  User,
  MessageCircle,
  Megaphone,
  BarChart,
  MoreHorizontal,
  Link,
  FileText,
  Inbox,
  Smartphone,
  Shield,
  UserCog,
  Users,
  Mic,
  Grid,
  Layout,
  Clock,
  ChevronDown
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Dashboard from "@/components/Dashboard";
import LeadsTable from "@/components/LeadsTable";
import Contacts from "@/components/Contacts";
import AttendanceCenter from "@/components/AttendanceCenter";
import Integrations from "@/components/Integrations";
import SalesFlow from "@/components/SalesFlow";
import Campaigns from "@/components/Campaigns";
import Reports from "@/components/Reports";
import UserManagement from "@/components/UserManagement";
import Settings from "@/components/Settings";
import FunnelManagement from "@/components/FunnelManagement";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "leads":
        return <LeadsTable />;
      case "contacts":
        return <Contacts />;
      case "attendance":
        return <AttendanceCenter />;
      case "integrations":
        return <Integrations />;
      case "sales-flow":
        return <SalesFlow />;
      case "funnels":
        return <FunnelManagement />;
      case "campaigns":
        return <Campaigns />;
      case "reports":
        return <Reports />;
      case "users":
        return <UserManagement />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  const navItems = [
    { label: "Negócios", id: "dashboard", icon: Briefcase },
    { label: "Contatos", id: "contacts", icon: User },
    { label: "Atendimento", id: "attendance", icon: MessageCircle },
    { label: "Campanhas", id: "campaigns", icon: Megaphone },
    { label: "Indicadores", id: "reports", icon: BarChart },
  ];

  const sidebarItems = [
    {
      label: "Customer Care - Alumni by Better",
      id: "customer-care",
      color: "#FFBABA"
    },
    {
      label: "B2C – Alumni by Better",
      id: "b2c",
      color: "#3F86F5"
    },
    {
      label: "B2B – Alumni by Better",
      id: "b2b",
      color: "#A244F5"
    },
    {
      label: "B2B – Escolas – Alumni by Better",
      id: "b2b-escolas",
      color: "#244AFF"
    },
    {
      label: "Produtos Alumni",
      id: "produtos",
      color: "#D5C1F5"
    },
    {
      label: "Remarketing – Alumni by Better",
      id: "remarketing",
      color: "#FF6F61"
    },
    {
      label: "Recuperação de vendas– Alumni by Better",
      id: "recuperacao",
      color: "#FFCE5C"
    },
    {
      label: "B2B – Prefeituras – Alumni by Better",
      id: "prefeituras",
      color: "#4E4E4E"
    },
    {
      label: "Victor Teste",
      id: "teste-victor",
      color: "#00C49F"
    },
    {
      label: "IM",
      id: "im",
      color: "#1F4E79"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header Navbar */}
      <header className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <h1 className="text-xl font-bold text-gray-900">CRM Pro</h1>
            
            {/* Navigation Items */}
            <nav className="flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={activeTab === item.id ? "default" : "ghost"}
                    className={`flex items-center space-x-2 px-3 py-2 ${
                      activeTab === item.id 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Button>
                );
              })}

              {/* Mais Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:bg-gray-100">
                    <MoreHorizontal className="h-4 w-4" />
                    <span>Mais</span>
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white">
                  <DropdownMenuLabel>Aplicativos</DropdownMenuLabel>
                  <DropdownMenuItem onClick={() => setActiveTab("integrations")}>
                    <Link className="mr-2 h-4 w-4" />
                    Integrações
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <SettingsIcon className="mr-2 h-4 w-4" />
                    Ferramentas de Checkout
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <FileText className="mr-2 h-4 w-4" />
                    Central de modelos
                  </DropdownMenuItem>
                  
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>Atendimento</DropdownMenuLabel>
                  <DropdownMenuItem>
                    <Inbox className="mr-2 h-4 w-4" />
                    Inbox
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Smartphone className="mr-2 h-4 w-4" />
                    Canais
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Shield className="mr-2 h-4 w-4" />
                    Permissões de usuários
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <SettingsIcon className="mr-2 h-4 w-4" />
                    Configurações Gerais
                  </DropdownMenuItem>
                  
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>Configurações</DropdownMenuLabel>
                  <DropdownMenuItem>
                    <UserCog className="mr-2 h-4 w-4" />
                    Conta
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setActiveTab("users")}>
                    <Users className="mr-2 h-4 w-4" />
                    Usuários
                  </DropdownMenuItem>
                  
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>Transcrição de Chamadas</DropdownMenuLabel>
                  <DropdownMenuItem>
                    <Mic className="mr-2 h-4 w-4" />
                    Transcrições
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Pesquisar..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-80"
              />
            </div>
            <Button variant="outline" className="bg-blue-600 text-white hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Novo Lead
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <SettingsIcon className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">U</span>
              </div>
              <span className="text-sm font-medium text-gray-700">Usuário</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
          {/* Sidebar Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <Grid className="h-5 w-5 text-gray-600" />
              <h2 className="font-semibold text-gray-900">Origens</h2>
            </div>
            <div className="mt-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Sidebar Items */}
          <div className="flex-1 p-2 space-y-1 overflow-y-auto">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                className="w-full flex items-center space-x-3 px-3 py-2 text-left text-sm text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
              >
                <div 
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="truncate">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Sidebar Footer */}
          <div className="p-2 border-t border-gray-200">
            <button className="w-full flex items-center space-x-3 px-3 py-2 text-left text-sm text-gray-700 rounded-md hover:bg-gray-100 transition-colors">
              <Layout className="h-4 w-4" />
              <span>Visualizações</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-3 py-2 text-left text-sm text-gray-700 rounded-md hover:bg-gray-100 transition-colors">
              <Clock className="h-4 w-4" />
              <span>Recentes</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
          {renderActiveTab()}
        </main>
      </div>
    </div>
  );
};

export default Index;

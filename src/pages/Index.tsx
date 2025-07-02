
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Search, Bell, Settings as SettingsIcon } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";
import LeadsTable from "@/components/LeadsTable";
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
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderActiveTab = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "leads":
        return <LeadsTable />;
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

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />
      
      <div className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-900">CRM Pro</h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Pesquisar leads, contatos..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-96"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
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
        </header>

        {/* Main Content */}
        <main className="p-6">
          {renderActiveTab()}
        </main>
      </div>
    </div>
  );
};

export default Index;

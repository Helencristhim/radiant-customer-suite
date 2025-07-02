
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Users, 
  MessageSquare, 
  Settings, 
  BarChart3, 
  Workflow,
  Mail,
  TrendingUp,
  UserCheck,
  ChevronLeft
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const Sidebar = ({ activeTab, setActiveTab, collapsed, setCollapsed }: SidebarProps) => {
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      id: "leads",
      label: "Leads & Contatos",
      icon: Users,
    },
    {
      id: "attendance",
      label: "Central de Atendimento",
      icon: MessageSquare,
    },
    {
      id: "sales-flow",
      label: "Funis de Venda",
      icon: Workflow,
    },
    {
      id: "campaigns",
      label: "Campanhas",
      icon: Mail,
    },
    {
      id: "integrations",
      label: "Integrações",
      icon: Settings,
    },
    {
      id: "reports",
      label: "Relatórios",
      icon: BarChart3,
    },
    {
      id: "users",
      label: "Usuários",
      icon: UserCheck,
    },
  ];

  return (
    <div className={cn(
      "fixed left-0 top-0 h-full bg-white border-r border-gray-200 transition-all duration-300 z-50",
      collapsed ? "w-16" : "w-64"
    )}>
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">CRM Pro</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="p-1"
        >
          <ChevronLeft className={cn(
            "h-4 w-4 transition-transform",
            collapsed && "rotate-180"
          )} />
        </Button>
      </div>

      <nav className="p-2 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "default" : "ghost"}
              className={cn(
                "w-full justify-start",
                collapsed && "px-2",
                activeTab === item.id && "bg-blue-600 text-white hover:bg-blue-700"
              )}
              onClick={() => setActiveTab(item.id)}
            >
              <Icon className={cn("h-4 w-4", !collapsed && "mr-3")} />
              {!collapsed && item.label}
            </Button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;

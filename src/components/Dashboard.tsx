
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  MessageSquare, 
  TrendingUp, 
  DollarSign,
  Phone,
  Mail,
  Instagram,
  ShoppingCart
} from "lucide-react";

const Dashboard = () => {
  const kpis = [
    {
      title: "Leads Totais",
      value: "1,874",
      change: "+12.5%",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Conversas Ativas",
      value: "347",
      change: "+8.2%",
      icon: MessageSquare,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Taxa de Conversão",
      value: "23.4%",
      change: "+2.1%",
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "Vendas do Mês",
      value: "R$ 125.430",
      change: "+15.8%",
      icon: DollarSign,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    }
  ];

  const funnelData = [
    { stage: "Base", count: 9, total: 1874, color: "bg-gray-400" },
    { stage: "1º Contato", count: 908, total: 1874, color: "bg-blue-500" },
    { stage: "Follow Up", count: 319, total: 1874, color: "bg-green-500" },
    { stage: "No-show", count: 149, total: 1874, color: "bg-orange-500" },
    { stage: "M.O.", count: 240, total: 1874, color: "bg-purple-500" }
  ];

  const recentLeads = [
    { name: "Habudia Lima karaja", status: "1º Contato", time: "2 min atrás", channel: "WhatsApp" },
    { name: "Anna Claudia Rodrigues", status: "Follow Up", time: "5 min atrás", channel: "Instagram" },
    { name: "Danielle teste", status: "Remarketing", time: "10 min atrás", channel: "E-mail" },
    { name: "Julio", status: "No-show", time: "15 min atrás", channel: "Telefone" },
  ];

  const channelStats = [
    { channel: "WhatsApp", count: 547, icon: MessageSquare, color: "text-green-600" },
    { channel: "Instagram", count: 289, icon: Instagram, color: "text-pink-600" },
    { channel: "E-mail", count: 156, icon: Mail, color: "text-blue-600" },
    { channel: "Telefone", count: 89, icon: Phone, color: "text-orange-600" },
  ];

  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{kpi.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
                    <p className="text-sm text-green-600 font-medium">{kpi.change}</p>
                  </div>
                  <div className={`p-3 rounded-full ${kpi.bgColor}`}>
                    <Icon className={`h-6 w-6 ${kpi.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Funil de Vendas */}
        <Card>
          <CardHeader>
            <CardTitle>Funil de Vendas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {funnelData.map((stage, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{stage.stage}</span>
                    <span className="text-sm text-gray-600">{stage.count}</span>
                  </div>
                  <Progress 
                    value={(stage.count / stage.total) * 100} 
                    className="h-2"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Canais de Atendimento */}
        <Card>
          <CardHeader>
            <CardTitle>Canais de Atendimento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {channelStats.map((channel, index) => {
                const Icon = channel.icon;
                return (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon className={`h-5 w-5 ${channel.color}`} />
                      <span className="font-medium">{channel.channel}</span>
                    </div>
                    <Badge variant="secondary">{channel.count}</Badge>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Leads Recentes */}
      <Card>
        <CardHeader>
          <CardTitle>Leads Recentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentLeads.map((lead, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-medium">
                      {lead.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">{lead.name}</p>
                    <p className="text-sm text-gray-600">{lead.time}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="outline">{lead.status}</Badge>
                  <Badge variant="secondary">{lead.channel}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;

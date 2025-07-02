
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Plus, 
  Play, 
  Pause, 
  Edit, 
  Trash2,
  MessageSquare,
  Mail,
  Phone,
  Users,
  Eye,
  MousePointer,
  TrendingUp
} from "lucide-react";

const Campaigns = () => {
  const campaigns = [
    {
      id: 1,
      name: "Boas-vindas WhatsApp",
      type: "WhatsApp",
      status: "active",
      audience: 1247,
      sent: 1205,
      delivered: 1198,
      opened: 856,
      clicked: 234,
      converted: 45,
      schedule: "Imediato",
      created: "Há 2 dias"
    },
    {
      id: 2,
      name: "Follow-up E-mail",
      type: "Email",
      status: "scheduled",
      audience: 589,
      sent: 0,
      delivered: 0,
      opened: 0,
      clicked: 0,
      converted: 0,
      schedule: "Amanhã 09:00",
      created: "Há 1 dia"
    },
    {
      id: 3,
      name: "Recuperação Carrinho",
      type: "Email",
      status: "active",
      audience: 156,
      sent: 145,
      delivered: 142,
      opened: 89,
      clicked: 23,
      converted: 8,
      schedule: "Automática",
      created: "Há 5 dias"
    },
    {
      id: 4,
      name: "SMS Lembrete",
      type: "SMS",
      status: "paused",
      audience: 234,
      sent: 89,
      delivered: 87,
      opened: 0,
      clicked: 0,
      converted: 3,
      schedule: "Pausada",
      created: "Há 1 semana"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Ativa</Badge>;
      case "scheduled":
        return <Badge className="bg-blue-100 text-blue-800">Agendada</Badge>;
      case "paused":
        return <Badge className="bg-yellow-100 text-yellow-800">Pausada</Badge>;
      case "completed":
        return <Badge className="bg-gray-100 text-gray-800">Finalizada</Badge>;
      default:
        return <Badge variant="outline">Rascunho</Badge>;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "WhatsApp":
        return <MessageSquare className="h-4 w-4 text-green-600" />;
      case "Email":
        return <Mail className="h-4 w-4 text-blue-600" />;
      case "SMS":
        return <Phone className="h-4 w-4 text-orange-600" />;
      default:
        return <MessageSquare className="h-4 w-4" />;
    }
  };

  const totalCampaigns = campaigns.length;
  const activeCampaigns = campaigns.filter(c => c.status === 'active').length;
  const scheduledCampaigns = campaigns.filter(c => c.status === 'scheduled').length;
  const totalSent = campaigns.reduce((sum, c) => sum + c.sent, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Campanhas</h2>
          <p className="text-gray-600">Crie e gerencie campanhas multicanal</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Edit className="h-4 w-4 mr-2" />
            Templates
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Nova Campanha
          </Button>
        </div>
      </div>

      {/* Campaign Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total de Campanhas</p>
                <p className="text-2xl font-bold">{totalCampaigns}</p>
              </div>
              <MessageSquare className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Ativas</p>
                <p className="text-2xl font-bold text-green-600">{activeCampaigns}</p>
              </div>
              <Play className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Agendadas</p>
                <p className="text-2xl font-bold text-blue-600">{scheduledCampaigns}</p>
              </div>
              <Pause className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Mensagens Enviadas</p>
                <p className="text-2xl font-bold text-purple-600">{totalSent.toLocaleString()}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Campaign List */}
      <Card>
        <CardHeader>
          <CardTitle>Campanhas Recentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-medium text-gray-600">Campanha</th>
                  <th className="text-left p-4 font-medium text-gray-600">Tipo</th>
                  <th className="text-left p-4 font-medium text-gray-600">Status</th>
                  <th className="text-left p-4 font-medium text-gray-600">Audiência</th>
                  <th className="text-left p-4 font-medium text-gray-600">Enviadas</th>
                  <th className="text-left p-4 font-medium text-gray-600">Taxa de Abertura</th>
                  <th className="text-left p-4 font-medium text-gray-600">Conversões</th>
                  <th className="text-left p-4 font-medium text-gray-600">Ações</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((campaign) => (
                  <tr key={campaign.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div>
                        <p className="font-medium">{campaign.name}</p>
                        <p className="text-sm text-gray-600">{campaign.schedule}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        {getTypeIcon(campaign.type)}
                        <span>{campaign.type}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      {getStatusBadge(campaign.status)}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-gray-400" />
                        <span>{campaign.audience.toLocaleString()}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span>{campaign.sent.toLocaleString()}</span>
                    </td>
                    <td className="p-4">
                      {campaign.sent > 0 ? (
                        <div className="space-y-1">
                          <span className="text-sm font-medium">
                            {((campaign.opened / campaign.sent) * 100).toFixed(1)}%
                          </span>
                          <Progress 
                            value={(campaign.opened / campaign.sent) * 100} 
                            className="h-2 w-16"
                          />
                        </div>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{campaign.converted}</span>
                        {campaign.sent > 0 && (
                          <span className="text-xs text-gray-500">
                            ({((campaign.converted / campaign.sent) * 100).toFixed(1)}%)
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        {campaign.status === 'active' ? (
                          <Button variant="ghost" size="sm">
                            <Pause className="h-4 w-4" />
                          </Button>
                        ) : (
                          <Button variant="ghost" size="sm">
                            <Play className="h-4 w-4" />
                          </Button>
                        )}
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Campaign Templates */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <MessageSquare className="h-8 w-8 text-green-600" />
              <div>
                <CardTitle className="text-lg">WhatsApp Welcome</CardTitle>
                <p className="text-sm text-gray-600">Mensagem de boas-vindas automática</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              Usar Template
            </Button>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <Mail className="h-8 w-8 text-blue-600" />
              <div>
                <CardTitle className="text-lg">Email Follow-up</CardTitle>
                <p className="text-sm text-gray-600">Sequência de follow-up por e-mail</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Usar Template
            </Button>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <Phone className="h-8 w-8 text-orange-600" />
              <div>
                <CardTitle className="text-lg">SMS Reminder</CardTitle>
                <p className="text-sm text-gray-600">Lembretes por SMS</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-orange-600 hover:bg-orange-700">
              Usar Template
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Campaigns;


import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { 
  MessageSquare, 
  Mail, 
  Phone, 
  Instagram, 
  ShoppingCart, 
  Zap,
  CheckCircle,
  AlertCircle,
  Settings,
  Facebook,
  Chrome,
  Calendar,
  Users,
  Building,
  FileText,
  Webhook,
  BarChart3,
  Send
} from "lucide-react";

const Integrations = () => {
  const [activeTab, setActiveTab] = useState("available");
  const [selectedIntegration, setSelectedIntegration] = useState(null);
  const [showConfigModal, setShowConfigModal] = useState(false);

  const integrations = [
    {
      id: "active-campaign",
      name: "Active Campaign",
      description: "Automação de marketing e email marketing",
      icon: Send,
      status: "available",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      category: "Marketing"
    },
    {
      id: "elementor",
      name: "Elementor",
      description: "Captura leads de formulários Elementor",
      icon: Building,
      status: "available",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      category: "Landing Pages"
    },
    {
      id: "facebook-ads",
      name: "Facebook Lead Ads",
      description: "Captura leads do Facebook e Instagram",
      icon: Facebook,
      status: "connected",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      category: "Anúncios",
      lastSync: "Há 2 minutos"
    },
    {
      id: "great-pages",
      name: "Great Pages",
      description: "Integração com landing pages",
      icon: FileText,
      status: "available",
      color: "text-green-600",
      bgColor: "bg-green-50",
      category: "Landing Pages"
    },
    {
      id: "lead-lovers",
      name: "Lead Lovers",
      description: "Captura leads de landing pages",
      icon: Users,
      status: "available",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      category: "Landing Pages"
    },
    {
      id: "manychat",
      name: "ManyChat",
      description: "Automação de chatbot do Facebook",
      icon: MessageSquare,
      status: "available",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      category: "Chatbot"
    },
    {
      id: "rd-station",
      name: "RD Station",
      description: "Plataforma de marketing digital",
      icon: BarChart3,
      status: "available",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      category: "Marketing"
    },
    {
      id: "typeform",
      name: "Typeform",
      description: "Captura leads de formulários interativos",
      icon: FileText,
      status: "available",
      color: "text-gray-600",
      bgColor: "bg-gray-50",
      category: "Formulários"
    },
    {
      id: "webhook",
      name: "Webhook",
      description: "Integração personalizada via webhook",
      icon: Webhook,
      status: "available",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      category: "Personalizado"
    },
    {
      id: "whatsapp",
      name: "WhatsApp Business",
      description: "Conecte sua conta do WhatsApp Business",
      icon: MessageSquare,
      status: "connected",
      color: "text-green-600",
      bgColor: "bg-green-50",
      category: "Mensagens",
      lastSync: "Há 1 minuto"
    },
    {
      id: "instagram",
      name: "Instagram Direct",
      description: "Receba mensagens diretas do Instagram",
      icon: Instagram,
      status: "connected",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      category: "Mensagens",
      lastSync: "Há 3 minutos"
    },
    {
      id: "email",
      name: "Gmail / Outlook",
      description: "Integre sua caixa de e-mail",
      icon: Mail,
      status: "pending",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      category: "Email",
      lastSync: "Configurando..."
    },
    {
      id: "google-ads",
      name: "Google Ads",
      description: "Captura leads do Google Ads",
      icon: Chrome,
      status: "available",
      color: "text-red-600",
      bgColor: "bg-red-50",
      category: "Anúncios"
    },
    {
      id: "zapier",
      name: "Zapier",
      description: "Conecte com milhares de aplicativos",
      icon: Zap,
      status: "available",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      category: "Automação"
    },
    {
      id: "calendly",
      name: "Calendly",
      description: "Integração com agendamento",
      icon: Calendar,
      status: "available",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      category: "Agendamento"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "connected":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "pending":
        return <AlertCircle className="h-5 w-5 text-yellow-600" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "connected":
        return <Badge className="bg-green-100 text-green-800">Conectado</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Configurando</Badge>;
      default:
        return <Badge variant="outline">Disponível</Badge>;
    }
  };

  const handleConnect = (integration) => {
    setSelectedIntegration(integration);
    setShowConfigModal(true);
  };

  const connectedIntegrations = integrations.filter(i => i.status === "connected");
  const availableIntegrations = integrations.filter(i => i.status === "available");
  const pendingIntegrations = integrations.filter(i => i.status === "pending");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Integrações</h2>
          <p className="text-gray-600">Conecte seus canais de comunicação e ferramentas</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          + Nova Integração
        </Button>
      </div>

      {/* Integration Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total</p>
                <p className="text-2xl font-bold">{integrations.length}</p>
              </div>
              <Settings className="h-8 w-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Conectadas</p>
                <p className="text-2xl font-bold text-green-600">{connectedIntegrations.length}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pendentes</p>
                <p className="text-2xl font-bold text-yellow-600">{pendingIntegrations.length}</p>
              </div>
              <AlertCircle className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Disponíveis</p>
                <p className="text-2xl font-bold text-gray-600">{availableIntegrations.length}</p>
              </div>
              <AlertCircle className="h-8 w-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Integrations Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="available">Disponíveis ({availableIntegrations.length})</TabsTrigger>
          <TabsTrigger value="connected">Conectadas ({connectedIntegrations.length})</TabsTrigger>
          <TabsTrigger value="pending">Pendentes ({pendingIntegrations.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="available" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {availableIntegrations.map((integration) => {
              const Icon = integration.icon;
              return (
                <Card key={integration.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`p-3 rounded-full ${integration.bgColor}`}>
                          <Icon className={`h-6 w-6 ${integration.color}`} />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{integration.name}</CardTitle>
                          <p className="text-sm text-gray-600">{integration.description}</p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{integration.category}</Badge>
                      <Button 
                        size="sm" 
                        className="bg-blue-600 hover:bg-blue-700"
                        onClick={() => handleConnect(integration)}
                      >
                        Conectar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="connected" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {connectedIntegrations.map((integration) => {
              const Icon = integration.icon;
              return (
                <Card key={integration.id} className="border-green-200 bg-green-50/30">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`p-3 rounded-full ${integration.bgColor}`}>
                          <Icon className={`h-6 w-6 ${integration.color}`} />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{integration.name}</CardTitle>
                          <p className="text-sm text-gray-600">{integration.description}</p>
                        </div>
                      </div>
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-green-100 text-green-800">Conectado</Badge>
                        <span className="text-xs text-gray-500">{integration.lastSync}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Settings className="h-4 w-4 mr-2" />
                          Configurar
                        </Button>
                        <Button variant="outline" size="sm">
                          Desconectar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="pending" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pendingIntegrations.map((integration) => {
              const Icon = integration.icon;
              return (
                <Card key={integration.id} className="border-yellow-200 bg-yellow-50/30">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`p-3 rounded-full ${integration.bgColor}`}>
                          <Icon className={`h-6 w-6 ${integration.color}`} />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{integration.name}</CardTitle>
                          <p className="text-sm text-gray-600">{integration.description}</p>
                        </div>
                      </div>
                      <AlertCircle className="h-5 w-5 text-yellow-600" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-yellow-100 text-yellow-800">Configurando</Badge>
                        <span className="text-xs text-gray-500">{integration.lastSync}</span>
                      </div>
                      <Button size="sm" className="w-full">
                        Finalizar Configuração
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>

      {/* Configuration Modal */}
      <Dialog open={showConfigModal} onOpenChange={setShowConfigModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>
              {selectedIntegration && `Conectar ${selectedIntegration.name}`}
            </DialogTitle>
          </DialogHeader>
          
          {selectedIntegration && (
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className={`p-2 rounded-full ${selectedIntegration.bgColor}`}>
                  <selectedIntegration.icon className={`h-6 w-6 ${selectedIntegration.color}`} />
                </div>
                <div>
                  <p className="font-medium">{selectedIntegration.name}</p>
                  <p className="text-sm text-gray-600">{selectedIntegration.description}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Token de Acesso
                  </label>
                  <Input placeholder="Cole seu token de acesso aqui" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Webhook URL (opcional)
                  </label>
                  <Input placeholder="https://..." />
                </div>
              </div>

              <div className="flex space-x-3">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setShowConfigModal(false)}
                >
                  Cancelar
                </Button>
                <Button 
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                  onClick={() => setShowConfigModal(false)}
                >
                  Conectar
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Integrations;

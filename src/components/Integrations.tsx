
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  MessageSquare, 
  Mail, 
  Phone, 
  Instagram, 
  ShoppingCart, 
  Zap,
  CheckCircle,
  AlertCircle,
  Settings
} from "lucide-react";

const Integrations = () => {
  const integrations = [
    {
      name: "WhatsApp Business",
      description: "Conecte sua conta do WhatsApp Business para atendimento multicanal",
      icon: MessageSquare,
      status: "connected",
      color: "text-green-600",
      bgColor: "bg-green-50",
      lastSync: "Há 2 minutos"
    },
    {
      name: "Instagram Direct",
      description: "Receba mensagens diretas do Instagram no seu CRM",
      icon: Instagram,
      status: "connected",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      lastSync: "Há 5 minutos"
    },
    {
      name: "Gmail / Outlook",
      description: "Integre sua caixa de e-mail para envios automáticos",
      icon: Mail,
      status: "pending",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      lastSync: "Não configurado"
    },
    {
      name: "VoIP / Telefonia",
      description: "Sistema de telefonia com gravação de chamadas",
      icon: Phone,
      status: "disconnected",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      lastSync: "Não configurado"
    },
    {
      name: "Stripe / Pagar.me",
      description: "Integração com checkout para eventos de pagamento",
      icon: ShoppingCart,
      status: "disconnected",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      lastSync: "Não configurado"
    },
    {
      name: "Zapier",
      description: "Conecte com milhares de aplicativos via Zapier",
      icon: Zap,
      status: "disconnected",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      lastSync: "Não configurado"
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
        return <Badge variant="outline">Desconectado</Badge>;
    }
  };

  const getActionButton = (status: string) => {
    switch (status) {
      case "connected":
        return (
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Configurar
            </Button>
            <Button variant="outline" size="sm">
              Desconectar
            </Button>
          </div>
        );
      case "pending":
        return (
          <Button size="sm">
            Finalizar Configuração
          </Button>
        );
      default:
        return (
          <Button className="bg-blue-600 hover:bg-blue-700">
            Conectar
          </Button>
        );
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Integrações</h2>
        <p className="text-gray-600">Conecte seus canais de comunicação e ferramentas</p>
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
                <p className="text-2xl font-bold text-green-600">
                  {integrations.filter(i => i.status === 'connected').length}
                </p>
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
                <p className="text-2xl font-bold text-yellow-600">
                  {integrations.filter(i => i.status === 'pending').length}
                </p>
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
                <p className="text-2xl font-bold text-gray-600">
                  {integrations.filter(i => i.status === 'disconnected').length}
                </p>
              </div>
              <AlertCircle className="h-8 w-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Integrations List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {integrations.map((integration, index) => {
          const Icon = integration.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
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
                  {getStatusIcon(integration.status)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Status</p>
                      <div className="flex items-center space-x-2 mt-1">
                        {getStatusBadge(integration.status)}
                        <span className="text-xs text-gray-500">
                          {integration.lastSync}
                        </span>
                      </div>
                    </div>
                    <Switch 
                      checked={integration.status === 'connected'} 
                      disabled={integration.status === 'pending'}
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    {getActionButton(integration.status)}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Setup Guide */}
      <Card>
        <CardHeader>
          <CardTitle>Guia de Configuração Rápida</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                1
              </div>
              <div>
                <p className="font-medium">Conecte o WhatsApp Business</p>
                <p className="text-sm text-gray-600">Configure sua conta do WhatsApp Business API para receber mensagens automaticamente</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                2
              </div>
              <div>
                <p className="font-medium">Integre Instagram Direct</p>
                <p className="text-sm text-gray-600">Conecte sua conta business do Instagram para gerenciar DMs</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                3
              </div>
              <div>
                <p className="font-medium">Configure E-mail</p>
                <p className="text-sm text-gray-600">Adicione sua conta Gmail ou Outlook para envios automáticos</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                4
              </div>
              <div>
                <p className="font-medium">Conecte Checkout</p>
                <p className="text-sm text-gray-600">Integre com Stripe ou Pagar.me para automações de pagamento</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Integrations;

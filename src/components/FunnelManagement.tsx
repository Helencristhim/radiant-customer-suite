
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { BarChart3, Plus, Settings, Eye, Building, Users, MessageSquare } from "lucide-react";
import B2BSalesFlow from "./funnels/B2BSalesFlow";
import B2CSalesFlow from "./funnels/B2CSalesFlow";
import CustomerCareSalesFlow from "./funnels/CustomerCareSalesFlow";

const FunnelManagement = () => {
  const [activeFunnel, setActiveFunnel] = useState("b2c");
  const [showIntegrationsModal, setShowIntegrationsModal] = useState(false);
  const [selectedFunnel, setSelectedFunnel] = useState(null);

  const funnels = [
    {
      id: "b2c",
      name: "Leads B2C",
      description: "Funil para clientes pessoa física",
      leads: 968,
      color: "bg-blue-500"
    },
    {
      id: "b2b", 
      name: "Leads B2B",
      description: "Funil para clientes pessoa jurídica",
      leads: 542,
      color: "bg-green-500"
    },
    {
      id: "customer-care",
      name: "Customer Care",
      description: "Atendimento e suporte ao cliente",
      leads: 234,
      color: "bg-purple-500"
    }
  ];

  const integrationOptions = [
    { id: "facebook-ads", name: "Facebook Lead Ads", icon: "📘", description: "Captura leads do Facebook e Instagram" },
    { id: "google-ads", name: "Google Ads", icon: "🔍", description: "Captura leads do Google Ads" },
    { id: "elementor", name: "Elementor", icon: "🏗️", description: "Formulários de landing pages" },
    { id: "typeform", name: "Typeform", icon: "📝", description: "Formulários interativos" },
    { id: "webhook", name: "Webhook", icon: "🔗", description: "Integração personalizada" },
    { id: "rd-station", name: "RD Station", icon: "📊", description: "Plataforma de marketing digital" },
    { id: "lead-lovers", name: "Lead Lovers", icon: "💕", description: "Landing pages e formulários" },
    { id: "manychat", name: "ManyChat", icon: "💬", description: "Chatbot do Facebook" }
  ];

  const handleIntegrations = (funnel) => {
    setSelectedFunnel(funnel);
    setShowIntegrationsModal(true);
  };

  return (
    <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Funis de Venda</h1>
          <p className="text-gray-600">Gerencie seus funis de vendas e atendimento</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Configurar Funis
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Plus className="h-4 w-4 mr-2" />
            Novo Funil
          </Button>
        </div>
      </div>

      {/* Funnel Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {funnels.map((funnel) => (
          <Card 
            key={funnel.id} 
            className={`cursor-pointer transition-all hover:shadow-md ${
              activeFunnel === funnel.id ? 'ring-2 ring-purple-500' : ''
            }`}
            onClick={() => setActiveFunnel(funnel.id)}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {funnel.name}
              </CardTitle>
              <div className={`w-4 h-4 ${funnel.color} rounded-full`}></div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{funnel.leads}</div>
              <p className="text-xs text-muted-foreground">
                {funnel.description}
              </p>
              <div className="flex items-center space-x-2 mt-4">
                <Button 
                  size="sm" 
                  variant="outline"
                  className="flex-1"
                >
                  <Eye className="h-3 w-3 mr-1" />
                  Ver Funil
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleIntegrations(funnel);
                  }}
                >
                  <Building className="h-3 w-3 mr-1" />
                  Integrações
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                >
                  <Settings className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Active Funnel Display */}
      <div className="bg-white rounded-lg">
        {activeFunnel === "b2c" && <B2CSalesFlow />}
        {activeFunnel === "b2b" && <B2BSalesFlow />}
        {activeFunnel === "customer-care" && <CustomerCareSalesFlow />}
      </div>

      {/* Integrations Modal */}
      <Dialog open={showIntegrationsModal} onOpenChange={setShowIntegrationsModal}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>
              Integrações - {selectedFunnel?.name}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <p className="text-gray-600">
              Escolha as integrações que deseja conectar a este funil para capturar leads automaticamente.
            </p>
            
            <Tabs defaultValue="available" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="available">Disponíveis</TabsTrigger>
                <TabsTrigger value="connected">Conectadas</TabsTrigger>
              </TabsList>

              <TabsContent value="available" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {integrationOptions.map((integration) => (
                    <Card key={integration.id} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{integration.icon}</span>
                            <div>
                              <CardTitle className="text-base">{integration.name}</CardTitle>
                              <p className="text-sm text-gray-600">{integration.description}</p>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                          Conectar
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="connected" className="mt-6">
                <div className="text-center py-12">
                  <Building className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhuma integração conectada</h3>
                  <p className="text-gray-600">Conecte integrações para começar a capturar leads automaticamente.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FunnelManagement;

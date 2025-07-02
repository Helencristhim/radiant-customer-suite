
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, Plus, Settings, Eye } from "lucide-react";
import B2BSalesFlow from "./funnels/B2BSalesFlow";
import B2CSalesFlow from "./funnels/B2CSalesFlow";
import CustomerCareSalesFlow from "./funnels/CustomerCareSalesFlow";

const FunnelManagement = () => {
  const [activeFunnel, setActiveFunnel] = useState("b2c");

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
    </div>
  );
};

export default FunnelManagement;

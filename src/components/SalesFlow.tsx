
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Plus, 
  Edit, 
  Trash2, 
  ArrowRight,
  Users,
  TrendingUp,
  Clock,
  DollarSign
} from "lucide-react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";

const SalesFlow = () => {
  const [stages] = useState([
    {
      id: "base",
      name: "Base",
      count: 9,
      value: "R$ 0",
      color: "bg-gray-100",
      leads: [
        { id: "1", name: "Habudia Lima karaja", value: "R$ 0", tags: ["LP-INT-META-F-D"] }
      ]
    },
    {
      id: "first-contact",
      name: "1º Contato",
      count: 908,
      value: "R$ 45.600",
      color: "bg-blue-100",
      leads: [
        { id: "2", name: "Anna Claudia Rodrigues", value: "R$ 2.500", tags: ["Site Alumni"] },
        { id: "3", name: "Julia Nunes", value: "R$ 1.200", tags: ["WhatsApp"] }
      ]
    },
    {
      id: "follow-up",
      name: "Follow Up",
      count: 319,
      value: "R$ 89.750",
      color: "bg-green-100",
      leads: [
        { id: "4", name: "Danielle teste", value: "R$ 3.200", tags: ["Remarketing"] },
        { id: "5", name: "Gabriela Albuquerque", value: "R$ 1.800", tags: ["WhatsApp"] }
      ]
    },
    {
      id: "no-show",
      name: "No-show",
      count: 149,
      value: "R$ 0",
      color: "bg-orange-100",
      leads: [
        { id: "6", name: "Julio", value: "R$ 0", tags: ["Site Alumni"] }
      ]
    },
    {
      id: "closed",
      name: "Fechado",
      count: 240,
      value: "R$ 156.800",
      color: "bg-purple-100",
      leads: [
        { id: "7", name: "Jean Filipe Del", value: "R$ 6.240", tags: ["WhatsApp"] }
      ]
    }
  ]);

  const onDragEnd = (result: DropResult) => {
    // Handle drag and drop logic here
    console.log("Drag ended:", result);
  };

  const conversionRate = 23.4;
  const averageTime = "5.2 dias";
  const totalValue = "R$ 292.150";

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Funis de Venda</h2>
          <p className="text-gray-600">Gerencie seus leads através do pipeline de vendas</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Edit className="h-4 w-4 mr-2" />
            Editar Funil
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Novo Funil
          </Button>
        </div>
      </div>

      {/* Funil Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Taxa de Conversão</p>
                <p className="text-2xl font-bold text-green-600">{conversionRate}%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Tempo Médio</p>
                <p className="text-2xl font-bold text-blue-600">{averageTime}</p>
              </div>
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Valor Total</p>
                <p className="text-2xl font-bold text-purple-600">{totalValue}</p>
              </div>
              <DollarSign className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total de Leads</p>
                <p className="text-2xl font-bold text-gray-900">1,625</p>
              </div>
              <Users className="h-8 w-8 text-gray-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Conversion Funnel Visualization */}
      <Card>
        <CardHeader>
          <CardTitle>Visualização do Funil</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {stages.map((stage, index) => (
              <div key={stage.id} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{stage.name}</span>
                    <Badge variant="secondary">{stage.count}</Badge>
                    <span className="text-sm text-gray-600">{stage.value}</span>
                  </div>
                  {index < stages.length - 1 && (
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">
                        {((stages[index + 1].count / stage.count) * 100).toFixed(1)}%
                      </span>
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </div>
                  )}
                </div>
                <Progress 
                  value={(stage.count / stages[0].count) * 100} 
                  className="h-3"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Kanban Board */}
      <Card>
        <CardHeader>
          <CardTitle>Pipeline Interativo</CardTitle>
        </CardHeader>
        <CardContent>
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 min-h-[500px]">
              {stages.map((stage) => (
                <div key={stage.id} className={`rounded-lg p-4 ${stage.color}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium">{stage.name}</h3>
                    <Badge variant="secondary">{stage.count}</Badge>
                  </div>
                  <div className="text-sm text-gray-600 mb-4">{stage.value}</div>
                  
                  <Droppable droppableId={stage.id}>
                    {(provided) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="space-y-2 min-h-[300px]"
                      >
                        {stage.leads.map((lead, index) => (
                          <Draggable key={lead.id} draggableId={lead.id} index={index}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="bg-white p-3 rounded-lg shadow-sm border cursor-move hover:shadow-md transition-shadow"
                              >
                                <p className="font-medium text-sm">{lead.name}</p>
                                <p className="text-xs text-gray-600 mt-1">{lead.value}</p>
                                <div className="flex flex-wrap gap-1 mt-2">
                                  {lead.tags.map((tag, tagIndex) => (
                                    <Badge key={tagIndex} variant="outline" className="text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>
              ))}
            </div>
          </DragDropContext>
        </CardContent>
      </Card>

      {/* Automation Rules */}
      <Card>
        <CardHeader>
          <CardTitle>Regras de Automação</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Novo Lead → 1º Contato</p>
                  <p className="text-sm text-gray-600">Enviar mensagem de boas-vindas via WhatsApp</p>
                </div>
                <Badge className="bg-green-100 text-green-800">Ativa</Badge>
              </div>
            </div>
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Follow Up → No-show (3 dias)</p>
                  <p className="text-sm text-gray-600">Mover para No-show se não houver resposta em 3 dias</p>
                </div>
                <Badge className="bg-green-100 text-green-800">Ativa</Badge>
              </div>
            </div>
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Pagamento Aprovado → Fechado</p>
                  <p className="text-sm text-gray-600">Mover automaticamente quando pagamento for confirmado</p>
                </div>
                <Badge variant="outline">Inativa</Badge>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Nova Regra
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SalesFlow;

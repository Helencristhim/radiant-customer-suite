
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Plus, 
  Search,
  Filter,
  Settings,
  MoreHorizontal,
  Phone,
  MessageCircle,
  Mail,
  Eye,
  Clock,
  ChevronDown,
  Download,
  RotateCcw,
  X,
  AlertCircle,
  CheckCircle
} from "lucide-react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";

const CustomerCareSalesFlow = () => {
  const [activeFilters, setActiveFilters] = useState({
    data: false,
    campos: false,
    tags: false,
    dono: false,
    status: false,
    prioridade: false
  });
  
  const [searchQuery, setSearchQuery] = useState("");
  
  const [stages] = useState([
    {
      id: "new-tickets",
      name: "Novos Tickets",
      count: 24,
      value: "",
      color: "bg-red-50",
      leads: [
        { 
          id: "1", 
          name: "Ana Silva", 
          value: "", 
          tags: ["URGENTE", "TÉCNICO"],
          avatar: "AS",
          hasPhone: true,
          hasMessage: true,
          hasEmail: true,
          time: "5m",
          priority: "high",
          issue: "Problema no login"
        },
        { 
          id: "2", 
          name: "Carlos Santos", 
          value: "", 
          tags: ["COBRANÇA", "FINANCEIRO"],
          avatar: "CS",
          hasPhone: true,
          hasMessage: false,
          hasEmail: true,
          time: "15m",
          priority: "medium",
          issue: "Dúvida sobre fatura"
        }
      ]
    },
    {
      id: "in-progress",
      name: "Em Atendimento",
      count: 18,
      value: "",
      color: "bg-yellow-50", 
      leads: [
        { 
          id: "3", 
          name: "Maria Oliveira", 
          value: "", 
          tags: ["SUPORTE", "PRODUTO"],
          avatar: "MO",
          hasPhone: true,
          hasMessage: true,
          hasEmail: true,
          time: "2h",
          priority: "medium",
          issue: "Configuração do sistema"
        },
        { 
          id: "4", 
          name: "João Ferreira", 
          value: "", 
          tags: ["INTEGRAÇÃO", "TÉCNICO"],
          avatar: "JF",
          hasPhone: true,
          hasMessage: false,
          hasEmail: true,
          time: "1h",
          priority: "high",
          issue: "Falha na integração"
        }
      ]
    },
    {
      id: "waiting-client",
      name: "Aguardando Cliente",
      count: 12,
      value: "",
      color: "bg-blue-50",
      leads: [
        { 
          id: "5", 
          name: "Paula Costa", 
          value: "", 
          tags: ["AGUARDANDO", "DOCUMENTOS"],
          avatar: "PC",
          hasPhone: true,
          hasMessage: false,
          hasEmail: true,
          time: "1d",
          priority: "low",
          issue: "Envio de documentação"
        }
      ]
    },
    {
      id: "escalated",
      name: "Escalado",
      count: 6,
      value: "",
      color: "bg-orange-50",
      leads: [
        { 
          id: "6", 
          name: "Roberto Lima", 
          value: "", 
          tags: ["CRÍTICO", "SUPERVISOR"],
          avatar: "RL",
          hasPhone: true,
          hasMessage: true,
          hasEmail: true,
          time: "4h",
          priority: "critical",
          issue: "Problema crítico no sistema"
        }
      ]
    },
    {
      id: "resolved",
      name: "Resolvido",
      count: 45,
      value: "",
      color: "bg-green-50",
      leads: [
        { 
          id: "7", 
          name: "Fernanda Rocha", 
          value: "", 
          tags: ["RESOLVIDO", "SATISFEITO"],
          avatar: "FR",
          hasPhone: true,
          hasMessage: false,
          hasEmail: true,
          time: "2d",
          priority: "resolved",
          issue: "Problema resolvido com sucesso"
        },
        { 
          id: "8", 
          name: "Gabriel Mendes", 
          value: "", 
          tags: ["CONCLUÍDO", "FEEDBACK"],
          avatar: "GM",
          hasPhone: true,
          hasMessage: true,
          hasEmail: true,
          time: "1d",
          priority: "resolved",
          issue: "Atendimento concluído"
        }
      ]
    }
  ]);

  const onDragEnd = (result: DropResult) => {
    console.log("Customer Care Drag ended:", result);
  };

  const getTagColor = (tag: string) => {
    if (tag.includes("URGENTE") || tag.includes("CRÍTICO")) return "bg-red-100 text-red-800";
    if (tag.includes("TÉCNICO") || tag.includes("INTEGRAÇÃO")) return "bg-blue-100 text-blue-800";
    if (tag.includes("FINANCEIRO") || tag.includes("COBRANÇA")) return "bg-yellow-100 text-yellow-800";
    if (tag.includes("RESOLVIDO") || tag.includes("CONCLUÍDO")) return "bg-green-100 text-green-800";
    if (tag.includes("AGUARDANDO")) return "bg-gray-100 text-gray-800";
    return "bg-purple-100 text-purple-800";
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "critical":
      case "high":
        return <AlertCircle className="h-3 w-3 text-red-500" />;
      case "medium":
        return <AlertCircle className="h-3 w-3 text-yellow-500" />;
      case "resolved":
        return <CheckCircle className="h-3 w-3 text-green-500" />;
      default:
        return <AlertCircle className="h-3 w-3 text-gray-400" />;
    }
  };

  const filterOptions = [
    { key: "data", label: "Data", active: activeFilters.data },
    { key: "campos", label: "Campos", active: activeFilters.campos },
    { key: "tags", label: "Tags", active: activeFilters.tags },
    { key: "dono", label: "Responsável", active: activeFilters.dono },
    { key: "status", label: "Status", active: activeFilters.status },
    { key: "prioridade", label: "Prioridade", active: activeFilters.prioridade }
  ];

  return (
    <div className="space-y-4 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold text-gray-900">CUSTOMER CARE</h1>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Novo Ticket
        </Button>
      </div>

      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-purple-900">Atendimento ao Cliente</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <RotateCcw className="h-4 w-4 mr-2" />
            Atualizar
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Exportar Tickets
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Configuração
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-4 flex-wrap">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Buscar tickets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 w-64"
          />
        </div>

        {filterOptions.map((filter) => (
          <Button
            key={filter.key}
            variant={filter.active ? "default" : "outline"}
            size="sm"
            className={filter.active ? "bg-purple-600 hover:bg-purple-700" : ""}
            onClick={() => {
              setActiveFilters(prev => ({
                ...prev,
                [filter.key]: !prev[filter.key as keyof typeof prev]
              }));
            }}
          >
            {filter.label}
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        ))}

        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Mais filtros
        </Button>
      </div>

      {/* Stats */}
      <div className="text-sm text-gray-600">
        105 tickets de atendimento
      </div>

      {/* Kanban Board */}
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-5 gap-0 min-h-[600px]">
          {stages.map((stage) => (
            <div key={stage.id} className={`${stage.color} border-r border-gray-200 last:border-r-0`}>
              {/* Stage Header */}
              <div className="p-4 border-b border-gray-200 bg-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-medium text-gray-900">{stage.name}</h3>
                    <Badge variant="secondary" className="bg-gray-100">
                      {stage.count}
                    </Badge>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Stage Content */}
              <Droppable droppableId={stage.id}>
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="p-2 space-y-2 min-h-[500px]"
                  >
                    {stage.leads.map((lead, index) => (
                      <Draggable key={lead.id} draggableId={lead.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-white rounded-lg border border-gray-200 p-3 cursor-move hover:shadow-md transition-shadow"
                          >
                            {/* Lead Header */}
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center space-x-2">
                                <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-medium">
                                  {lead.avatar}
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm font-medium text-gray-900 leading-tight">
                                    {lead.name}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    {lead.issue}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-1">
                                {getPriorityIcon(lead.priority)}
                                <Button variant="ghost" size="sm" className="p-0 h-4 w-4">
                                  <MoreHorizontal className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1 mb-3">
                              {lead.tags.map((tag, tagIndex) => (
                                <Badge 
                                  key={tagIndex} 
                                  className={`text-xs px-2 py-0.5 ${getTagColor(tag)}`}
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>

                            {/* Actions */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                {lead.hasPhone && (
                                  <Button variant="ghost" size="sm" className="p-1 h-6 w-6">
                                    <Phone className="h-3 w-3" />
                                  </Button>
                                )}
                                {lead.hasMessage && (
                                  <Button variant="ghost" size="sm" className="p-1 h-6 w-6">
                                    <MessageCircle className="h-3 w-3" />
                                  </Button>
                                )}
                                {lead.hasEmail && (
                                  <Button variant="ghost" size="sm" className="p-1 h-6 w-6">
                                    <Mail className="h-3 w-3" />
                                  </Button>
                                )}
                              </div>
                              <div className="flex items-center space-x-2 text-xs text-gray-500">
                                <Clock className="h-3 w-3" />
                                {lead.time && <span>{lead.time}</span>}
                              </div>
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
    </div>
  );
};

export default CustomerCareSalesFlow;

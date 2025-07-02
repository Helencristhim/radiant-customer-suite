
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
  X
} from "lucide-react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";

const B2BSalesFlow = () => {
  const [activeFilters, setActiveFilters] = useState({
    data: false,
    campos: false,
    tags: false,
    dono: false,
    status: false
  });
  
  const [searchQuery, setSearchQuery] = useState("");
  
  const [stages] = useState([
    {
      id: "prospect",
      name: "Prospecção",
      count: 45,
      value: "R$0",
      color: "bg-blue-50",
      leads: [
        { 
          id: "1", 
          name: "Empresa ABC Ltda", 
          value: "R$15.000", 
          tags: ["CNPJ", "E-COMMERCE"],
          avatar: "EA",
          hasPhone: true,
          hasMessage: true,
          hasEmail: true,
          time: "2h",
          contact: "João Silva - CEO"
        },
        { 
          id: "2", 
          name: "Tech Solutions", 
          value: "R$25.000", 
          tags: ["SaaS", "STARTUP"],
          avatar: "TS",
          hasPhone: true,
          hasMessage: false,
          hasEmail: true,
          time: "1d",
          contact: "Maria Santos - CTO"
        }
      ]
    },
    {
      id: "qualification",
      name: "Qualificação",
      count: 32,
      value: "R$180.000",
      color: "bg-yellow-50",
      leads: [
        { 
          id: "3", 
          name: "Indústria XYZ", 
          value: "R$50.000", 
          tags: ["MANUFATURA", "GRANDE PORTE"],
          avatar: "IX",
          hasPhone: true,
          hasMessage: true,
          hasEmail: true,
          time: "3h",
          contact: "Carlos Mendes - Diretor"
        }
      ]
    },
    {
      id: "proposal",
      name: "Proposta",
      count: 18,
      value: "R$320.000",
      color: "bg-orange-50",
      leads: [
        { 
          id: "4", 
          name: "Retail Group", 
          value: "R$80.000", 
          tags: ["VAREJO", "MULTI-LOJA"],
          avatar: "RG",
          hasPhone: true,
          hasMessage: false,
          hasEmail: true,
          time: "2d",
          contact: "Ana Paula - Gerente"
        },
        { 
          id: "5", 
          name: "Consulting Pro", 
          value: "R$35.000", 
          tags: ["CONSULTORIA", "SERVIÇOS"],
          avatar: "CP",
          hasPhone: true,
          hasMessage: true,
          hasEmail: true,
          time: "1h",
          contact: "Pedro Costa - Sócio"
        }
      ]
    },
    {
      id: "negotiation",
      name: "Negociação",
      count: 12,
      value: "R$450.000",
      color: "bg-purple-50",
      leads: [
        { 
          id: "6", 
          name: "Global Corp", 
          value: "R$120.000", 
          tags: ["MULTINACIONAL", "ENTERPRISE"],
          avatar: "GC",
          hasPhone: true,
          hasMessage: true,
          hasEmail: true,
          time: "6h",
          contact: "Robert Johnson - VP"
        }
      ]
    },
    {
      id: "closed-won",
      name: "Fechado - Ganho",
      count: 8,
      value: "R$280.000",
      color: "bg-green-50",
      leads: [
        { 
          id: "7", 
          name: "Success Company", 
          value: "R$60.000", 
          tags: ["FECHADO", "IMPLEMENTAÇÃO"],
          avatar: "SC",
          hasPhone: true,
          hasMessage: false,
          hasEmail: true,
          time: "1d",
          contact: "Luiza Fernandes - Diretora"
        }
      ]
    }
  ]);

  const onDragEnd = (result: DropResult) => {
    console.log("B2B Drag ended:", result);
  };

  const getTagColor = (tag: string) => {
    if (tag.includes("CNPJ") || tag.includes("ENTERPRISE")) return "bg-blue-100 text-blue-800";
    if (tag.includes("STARTUP") || tag.includes("SaaS")) return "bg-green-100 text-green-800";
    if (tag.includes("MANUFATURA") || tag.includes("GRANDE PORTE")) return "bg-purple-100 text-purple-800";
    if (tag.includes("FECHADO")) return "bg-green-100 text-green-800";
    return "bg-gray-100 text-gray-800";
  };

  const filterOptions = [
    { key: "data", label: "Data", active: activeFilters.data },
    { key: "campos", label: "Campos", active: activeFilters.campos },
    { key: "tags", label: "Tags", active: activeFilters.tags },
    { key: "dono", label: "Dono do negócio", active: activeFilters.dono },
    { key: "status", label: "Status", active: activeFilters.status }
  ];

  return (
    <div className="space-y-4 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold text-gray-900">NEGÓCIOS B2B</h1>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Novo Negócio B2B
        </Button>
      </div>

      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-purple-900">Leads B2B</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <RotateCcw className="h-4 w-4 mr-2" />
            Atualizar
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Exportar Negócios B2B
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
            placeholder="Buscar empresas..."
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
        115 oportunidades de Negócio B2B
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
                <div className="text-sm text-gray-600 mt-1">{stage.value}</div>
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
                                <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-xs font-medium">
                                  {lead.avatar}
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm font-medium text-gray-900 leading-tight">
                                    {lead.name}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    {lead.contact}
                                  </p>
                                </div>
                              </div>
                              <Button variant="ghost" size="sm" className="p-0 h-4 w-4">
                                <MoreHorizontal className="h-3 w-3" />
                              </Button>
                            </div>

                            {/* Value */}
                            {lead.value && (
                              <div className="text-sm font-medium text-gray-900 mb-2">
                                {lead.value}
                              </div>
                            )}

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
                                <Eye className="h-3 w-3" />
                                <span>0/1</span>
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

export default B2BSalesFlow;

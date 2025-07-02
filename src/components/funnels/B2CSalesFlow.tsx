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

const B2CSalesFlow = () => {
  const [activeFilters, setActiveFilters] = useState({
    data: false,
    campos: false,
    tags: false,
    dono: false,
    status: false
  });
  
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const [stages] = useState([
    {
      id: "base",
      name: "Base",
      count: 11,
      value: "R$0",
      color: "bg-gray-50",
      leads: [
        { 
          id: "1", 
          name: "Felipe", 
          value: "R$0", 
          tags: ["LP-INT-META-F-D", "IG-META-INT-D"],
          avatar: "F",
          hasPhone: true,
          hasMessage: true,
          hasEmail: true,
          time: "6m"
        }
      ]
    },
    {
      id: "first-contact",
      name: "1º Contato",
      count: 319,
      value: "R$0",
      color: "bg-blue-50",
      leads: [
        { 
          id: "2", 
          name: "Danielle teste", 
          value: "R$0", 
          tags: ["Remarketing"],
          avatar: "D",
          hasPhone: true,
          hasMessage: false,
          hasEmail: true,
          time: "6h"
        },
        { 
          id: "3", 
          name: "Gabriela Albuquerque", 
          value: "R$0", 
          tags: ["WHATSAPP - ATIVO CLIENTE"],
          avatar: "G",
          hasPhone: true,
          hasMessage: false,
          hasEmail: true,
          time: "2h"
        }
      ]
    },
    {
      id: "follow-up",
      name: "Follow Up",
      count: 319,
      value: "R$0",
      color: "bg-green-50",
      leads: [
        { 
          id: "4", 
          name: "Fabio", 
          value: "R$0", 
          tags: ["LP-INT-META-F-D", "IG-META-INT-D"],
          avatar: "F",
          hasPhone: true,
          hasMessage: true,
          hasEmail: true,
          time: "4h"
        },
        { 
          id: "5", 
          name: "Neusa faber", 
          value: "R$0", 
          tags: ["LP-INT-META-F-D", "IG-META-INT-D"],
          avatar: "N",
          hasPhone: true,
          hasMessage: false,
          hasEmail: true,
          time: "2h"
        },
        { 
          id: "6", 
          name: "Luciana", 
          value: "R$0", 
          tags: ["LP-INT-META-F-D", "IG-META-INT-D"],
          avatar: "L",
          hasPhone: true,
          hasMessage: false,
          hasEmail: true,
          time: "4h"
        }
      ]
    },
    {
      id: "no-show",
      name: "No-show",
      count: 149,
      value: "R$0",
      color: "bg-orange-50",
      leads: [
        { 
          id: "7", 
          name: "Julio", 
          value: "R$0", 
          tags: ["Remarketing", "Site Alumni"],
          avatar: "J",
          hasPhone: true,
          hasMessage: false,
          hasEmail: true,
          time: "5m"
        }
      ]
    },
    {
      id: "closed",
      name: "M.O.",
      count: 149,
      value: "R$6.240",
      color: "bg-purple-50",
      leads: [
        { 
          id: "8", 
          name: "Jean Filipe Del", 
          value: "R$0", 
          tags: ["LP-INT-META-F-D"],
          avatar: "J",
          hasPhone: true,
          hasMessage: true,
          hasEmail: true,
          time: "6m"
        },
        { 
          id: "9", 
          name: "GISELLE DO NASCIMENTO BOLSA", 
          value: "", 
          tags: ["WHATSAPP - ATIVO"],
          avatar: "G",
          hasPhone: true,
          hasMessage: true,
          hasEmail: true,
          time: ""
        },
        { 
          id: "10", 
          name: "Ricardo", 
          value: "", 
          tags: ["WHATSAPP - ATIVO"],
          avatar: "R",
          hasPhone: true,
          hasMessage: false,
          hasEmail: true,
          time: ""
        },
        { 
          id: "11", 
          name: "Marina M M Cai", 
          value: "", 
          tags: ["WHATSAPP - ATIVO"],
          avatar: "M",
          hasPhone: true,
          hasMessage: false,
          hasEmail: true,
          time: "34d"
        }
      ]
    }
  ]);

  const onDragEnd = (result: DropResult) => {
    console.log("B2C Drag ended:", result);
  };

  const getTagColor = (tag: string) => {
    if (tag.includes("WHATSAPP")) return "bg-green-100 text-green-800";
    if (tag.includes("META")) return "bg-blue-100 text-blue-800";
    if (tag.includes("Remarketing")) return "bg-purple-100 text-purple-800";
    if (tag.includes("Site")) return "bg-orange-100 text-orange-800";
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
          <h1 className="text-xl font-semibold text-gray-900">NEGÓCIOS DA ORIGEM</h1>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Negócio
        </Button>
      </div>

      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-purple-900">Leads B2C</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <RotateCcw className="h-4 w-4 mr-2" />
            Atualizar
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Exportar 968 Negócios
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Configuração
          </Button>
          <Button variant="outline" size="sm">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-4 flex-wrap">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Buscar por..."
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
              if (filter.key === "data") {
                setShowDatePicker(!showDatePicker);
              }
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

      {/* Active Filters Display */}
      {Object.values(activeFilters).some(Boolean) && (
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Filtros ativos:</span>
          {Object.entries(activeFilters).map(([key, active]) => 
            active && (
              <Badge key={key} variant="secondary" className="flex items-center space-x-1">
                <span>{filterOptions.find(f => f.key === key)?.label}</span>
                <X 
                  className="h-3 w-3 cursor-pointer" 
                  onClick={() => setActiveFilters(prev => ({ ...prev, [key]: false }))}
                />
              </Badge>
            )
          )}
        </div>
      )}

      {/* Stats */}
      <div className="text-sm text-gray-600">
        968 oportunidades de Negócio
      </div>

      {/* Kanban Board */}
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-5 gap-0 min-h-[600px]">
          {stages.map((stage, stageIndex) => (
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
                                <div className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs font-medium">
                                  {lead.avatar}
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm font-medium text-gray-900 leading-tight">
                                    {lead.name}
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

      {/* Date Picker Modal */}
      {showDatePicker && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Filtrar por Data</h3>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowDatePicker(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Data inicial
                  </label>
                  <Input type="date" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Data final
                  </label>
                  <Input type="date" />
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setShowDatePicker(false)}
                >
                  Cancelar
                </Button>
                <Button 
                  className="flex-1 bg-purple-600 hover:bg-purple-700"
                  onClick={() => setShowDatePicker(false)}
                >
                  Aplicar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default B2CSalesFlow;

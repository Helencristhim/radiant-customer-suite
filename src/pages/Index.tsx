
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Plus,
  Search,
  Calendar,
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
  Target,
  Archive,
  Trash
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";

const Index = () => {
  const [selectedOrigin, setSelectedOrigin] = useState("leads_b2c");
  const [searchQuery, setSearchQuery] = useState("");
  const [kanbanSearchQuery, setKanbanSearchQuery] = useState("");
  const [isNewOriginModalOpen, setIsNewOriginModalOpen] = useState(false);
  const [isConfigOriginModalOpen, setIsConfigOriginModalOpen] = useState(false);
  const [isIntegrationModalOpen, setIsIntegrationModalOpen] = useState(false);
  const [newOriginName, setNewOriginName] = useState("");
  const [newOriginGroup, setNewOriginGroup] = useState("");
  const [activeFilters, setActiveFilters] = useState({
    data: false,
    campos: false,
    tags: false,
    dono: false,
    status: false,
    mais: false
  });

  const origins = [
    { label: "Customer Care - Alumni by Better", id: "cc_alumni", color: "#FFBABA" },
    { label: "LEADS B2C", id: "leads_b2c", color: "#3F86F5" },
    { label: "B2C - Alumni by Better", id: "b2c_alumni", color: "#A244F5" },
    { label: "B2B - Alumni by better", id: "b2b_alumni", color: "#244AFF" },
    { label: "B2B - Escolas - Alumni by Better", id: "b2b_escolas", color: "#D5C1F5" },
    { label: "Produtos Alumni", id: "produtos", color: "#FF6F61" },
    { label: "Remarketing - Alumni by Better", id: "remarketing", color: "#FFCE5C" },
    { label: "Recuperação de vendas- Alumni by Better", id: "recuperacao", color: "#4E4E4E" },
    { label: "B2B - Prefeituras - Alumni by Better", id: "prefeituras", color: "#00C49F" },
    { label: "IM", id: "im", color: "#1F4E79" },
    { label: "Visualizações", id: "visualizacoes", color: "#9CA3AF" }
  ];

  const stages = [
    {
      id: "base",
      name: "Base",
      count: 11,
      value: "R$0",
      color: "bg-gray-50",
      deals: [
        {
          id: "1",
          nome_cliente: "Felipe",
          email: "felipe@email.com",
          valor: "0",
          tags: ["LP-INT-META-F-D", "IG-META-INT-D"],
          avatar: "F",
          data_criacao: "6m"
        }
      ]
    },
    {
      id: "first-contact",
      name: "1º Contato",
      count: 319,
      value: "R$0",
      color: "bg-blue-50",
      deals: [
        {
          id: "2",
          nome_cliente: "Danielle teste",
          email: "danielle@email.com",
          valor: "0",
          tags: ["Remarketing"],
          avatar: "D",
          data_criacao: "6h"
        },
        {
          id: "3",
          nome_cliente: "Gabriela Albuquerque",
          email: "gabriela@email.com",
          valor: "0",
          tags: ["WHATSAPP - ATIVO CLIENTE"],
          avatar: "G",
          data_criacao: "2h"
        }
      ]
    },
    {
      id: "follow-up",
      name: "Follow Up",
      count: 319,
      value: "R$0",
      color: "bg-green-50",
      deals: [
        {
          id: "4",
          nome_cliente: "Fabio",
          email: "fabio@email.com",
          valor: "0",
          tags: ["LP-INT-META-F-D", "IG-META-INT-D"],
          avatar: "F",
          data_criacao: "4h"
        }
      ]
    },
    {
      id: "no-show",
      name: "No-show",
      count: 149,
      value: "R$0",
      color: "bg-orange-50",
      deals: [
        {
          id: "5",
          nome_cliente: "Julio",
          email: "julio@email.com",
          valor: "0",
          tags: ["Remarketing", "Site alumni"],
          avatar: "J",
          data_criacao: "5m"
        }
      ]
    },
    {
      id: "closed",
      name: "M.O.",
      count: 149,
      value: "R$6.240",
      color: "bg-purple-50",
      deals: [
        {
          id: "6",
          nome_cliente: "Jean Filipe Del",
          email: "jean@email.com",
          valor: "1560",
          tags: ["LP-INT-META-F-D"],
          avatar: "J",
          data_criacao: "6m"
        }
      ]
    }
  ];

  const filterOptions = [
    { key: "data", label: "Data", active: activeFilters.data },
    { key: "campos", label: "Campos", active: activeFilters.campos },
    { key: "tags", label: "Tags", active: activeFilters.tags },
    { key: "dono", label: "Dono do negócio", active: activeFilters.dono },
    { key: "status", label: "Status", active: activeFilters.status },
    { key: "mais", label: "Mais filtros", active: activeFilters.mais }
  ];

  const onDragEnd = (result: DropResult) => {
    console.log("Drag ended:", result);
  };

  const getTagColor = (tag: string) => {
    if (tag.includes("WHATSAPP")) return "bg-green-100 text-green-800";
    if (tag.includes("META")) return "bg-blue-100 text-blue-800";
    if (tag.includes("Remarketing")) return "bg-purple-100 text-purple-800";
    if (tag.includes("Site")) return "bg-orange-100 text-orange-800";
    return "bg-gray-100 text-gray-800";
  };

  const handleAddOrigin = () => {
    console.log("Adding new origin:", { name: newOriginName, group: newOriginGroup });
    setIsNewOriginModalOpen(false);
    setNewOriginName("");
    setNewOriginGroup("");
  };

  const filteredDeals = stages.map(stage => ({
    ...stage,
    deals: stage.deals.filter(deal =>
      deal.nome_cliente.toLowerCase().includes(kanbanSearchQuery.toLowerCase())
    )
  }));

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar - Origins */}
      <div className="w-[280px] bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="font-semibold text-gray-900 mb-3">Origens</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Buscar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="flex-1 p-2 space-y-1 overflow-y-auto">
          {origins.map((origin) => (
            <div key={origin.id} className="flex items-center justify-between group">
              <button
                className={`flex-1 flex items-center space-x-3 px-3 py-2 text-left text-sm rounded-md transition-colors ${
                  selectedOrigin === origin.id
                    ? "bg-blue-100 text-blue-900"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setSelectedOrigin(origin.id)}
              >
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: origin.color }}
                />
                <span className="truncate">{origin.label}</span>
              </button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-1 h-6 w-6"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white">
                  <DropdownMenuItem onClick={() => setIsConfigOriginModalOpen(true)}>
                    <Settings className="mr-2 h-4 w-4" />
                    Configurações
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Target className="mr-2 h-4 w-4" />
                    Selecionar origem
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Archive className="mr-2 h-4 w-4" />
                    Arquivar
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">
                    <Trash className="mr-2 h-4 w-4" />
                    Excluir
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ))}
          
          <button
            className="w-full flex items-center space-x-3 px-3 py-2 text-left text-sm text-blue-600 rounded-md hover:bg-blue-50 transition-colors border-2 border-dashed border-blue-300"
            onClick={() => setIsNewOriginModalOpen(true)}
          >
            <Plus className="h-4 w-4" />
            <span>Nova origem</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 bg-white">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-purple-900">Negócios</h1>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <RotateCcw className="h-4 w-4 mr-2" />
                Atualizar
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Exportar
              </Button>
              <Button variant="outline" size="sm" onClick={() => setIsConfigOriginModalOpen(true)}>
                <Settings className="h-4 w-4 mr-2" />
                Configuração
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Negócio
              </Button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex items-center space-x-4 flex-wrap mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Buscar por nome do cliente"
                className="pl-10 w-64"
                value={kanbanSearchQuery}
                onChange={(e) => setKanbanSearchQuery(e.target.value)}
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
        </div>

        {/* Kanban Board */}
        <div className="flex-1 p-6 bg-gray-50 overflow-auto">
          <div className="text-sm text-gray-600 mb-4">
            968 oportunidades de Negócio
          </div>

          <div className="bg-white rounded-lg shadow-sm">
            <DragDropContext onDragEnd={onDragEnd}>
              <div className="grid grid-cols-5 gap-0 min-h-[600px]">
                {filteredDeals.map((stage) => (
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
                          {stage.deals.map((deal, index) => (
                            <Draggable key={deal.id} draggableId={deal.id} index={index}>
                              {(provided) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className="bg-white rounded-lg border border-gray-200 p-3 cursor-move hover:shadow-md transition-shadow"
                                >
                                  {/* Deal Header */}
                                  <div className="flex items-start justify-between mb-2">
                                    <div className="flex items-center space-x-2">
                                      <div className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs font-medium">
                                        {deal.avatar}
                                      </div>
                                      <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-900 leading-tight">
                                          {deal.nome_cliente}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                          {deal.email}
                                        </p>
                                      </div>
                                    </div>
                                    <Button variant="ghost" size="sm" className="p-0 h-4 w-4">
                                      <MoreHorizontal className="h-3 w-3" />
                                    </Button>
                                  </div>

                                  {/* Value */}
                                  <div className="text-sm font-medium text-gray-900 mb-2 text-right">
                                    R$ {deal.valor}
                                  </div>

                                  {/* Tags */}
                                  <div className="flex flex-wrap gap-1 mb-3">
                                    {deal.tags.map((tag, tagIndex) => (
                                      <Badge
                                        key={tagIndex}
                                        className={`text-xs px-2 py-0.5 ${getTagColor(tag)}`}
                                      >
                                        {tag}
                                      </Badge>
                                    ))}
                                  </div>

                                  {/* Footer */}
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                      <Button variant="ghost" size="sm" className="p-1 h-6 w-6">
                                        <Phone className="h-3 w-3" />
                                      </Button>
                                      <Button variant="ghost" size="sm" className="p-1 h-6 w-6">
                                        <MessageCircle className="h-3 w-3" />
                                      </Button>
                                      <Button variant="ghost" size="sm" className="p-1 h-6 w-6">
                                        <Mail className="h-3 w-3" />
                                      </Button>
                                    </div>
                                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                                      <Clock className="h-3 w-3" />
                                      <span>{deal.data_criacao}</span>
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
        </div>
      </div>

      {/* New Origin Modal */}
      <Dialog open={isNewOriginModalOpen} onOpenChange={setIsNewOriginModalOpen}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Adicionar uma nova origem</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nome
              </label>
              <Input
                placeholder="Exemplo: Prospecção ativa"
                value={newOriginName}
                onChange={(e) => setNewOriginName(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Grupo
              </label>
              <Select value={newOriginGroup} onValueChange={setNewOriginGroup}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um grupo" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="Customer Care - Alumni by Better">
                    Customer Care - Alumni by Better
                  </SelectItem>
                  <SelectItem value="B2C - Alumni by Better">
                    B2C - Alumni by Better
                  </SelectItem>
                  <SelectItem value="B2B - Alumni by Better">
                    B2B - Alumni by Better
                  </SelectItem>
                  <SelectItem value="Produtos Alumni">
                    Produtos Alumni
                  </SelectItem>
                  <SelectItem value="Remarketing - Alumni by Better">
                    Remarketing - Alumni by Better
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsNewOriginModalOpen(false)}>
              Cancelar
            </Button>
            <Button
              className="bg-purple-600 hover:bg-purple-700"
              onClick={handleAddOrigin}
              disabled={!newOriginName || !newOriginGroup}
            >
              Adicionar origem
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Configuration Modal */}
      <Dialog open={isConfigOriginModalOpen} onOpenChange={setIsConfigOriginModalOpen}>
        <DialogContent className="bg-white max-w-4xl">
          <DialogHeader>
            <DialogTitle>Configurar origem</DialogTitle>
          </DialogHeader>
          
          <Tabs defaultValue="geral" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="geral">Geral</TabsTrigger>
              <TabsTrigger value="etapas">Etapas e atividades</TabsTrigger>
              <TabsTrigger value="integracoes">Integrações</TabsTrigger>
            </TabsList>
            
            <TabsContent value="geral" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                  <Input defaultValue="LEADS B2C" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Grupo</label>
                  <Select defaultValue="b2c">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="b2c">B2C - Alumni by Better</SelectItem>
                      <SelectItem value="b2b">B2B - Alumni by Better</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Visualização de negócios</label>
                  <Select defaultValue="todos">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="todos">Usuários veem todos</SelectItem>
                      <SelectItem value="seus">Apenas os seus</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Moeda</label>
                  <Input placeholder="BRL, USD, EUR..." defaultValue="BRL" />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="etapas">
              <div className="p-4 border rounded-lg">
                <p className="text-gray-600">Configuração de etapas e atividades será implementada aqui.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="integracoes" className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Integrações adicionadas</h3>
                <Button onClick={() => setIsIntegrationModalOpen(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Nova integração
                </Button>
              </div>
              <div className="border rounded-lg p-4">
                <p className="text-gray-600 text-center">Nenhuma integração configurada</p>
              </div>
            </TabsContent>
          </Tabs>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsConfigOriginModalOpen(false)}>
              Cancelar
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Salvar configurações
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Integration Modal */}
      <Dialog open={isIntegrationModalOpen} onOpenChange={setIsIntegrationModalOpen}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Nova integração</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">O que você deseja fazer com essa integração?</h3>
              <div className="grid grid-cols-1 gap-3">
                <Card className="cursor-pointer hover:bg-gray-50 transition-colors">
                  <CardContent className="p-4">
                    <h4 className="font-medium">Receber Webhook</h4>
                    <p className="text-sm text-gray-600">Cria ou atualiza negócios/contatos quando uma ferramenta enviar um webhook.</p>
                  </CardContent>
                </Card>
                <Card className="cursor-pointer hover:bg-gray-50 transition-colors">
                  <CardContent className="p-4">
                    <h4 className="font-medium">Enviar Webhook</h4>
                    <p className="text-sm text-gray-600">Envia um webhook quando uma ação acontecer.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsIntegrationModalOpen(false)}>
              Cancelar
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Começar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;

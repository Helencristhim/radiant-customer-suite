import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
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
  Trash,
  Edit,
  BarChart3
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
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import ClientPanel from "@/components/ClientPanel";

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
  
  const [selectedClient, setSelectedClient] = useState<any>(null);
  const [isClientPanelOpen, setIsClientPanelOpen] = useState(false);

  const [isCreateIntegrationModalOpen, setIsCreateIntegrationModalOpen] = useState(false);
  const [isEditIntegrationModalOpen, setIsEditIntegrationModalOpen] = useState(false);
  const [integrationStep, setIntegrationStep] = useState(0);
  const [integrationData, setIntegrationData] = useState({
    tipo_webhook: "",
    nome_integracao: "",
    url_webhook: "",
    aplicativo: "",
    mapeamento_campos: {} as Record<string, string>
  });
  const [editingIntegration, setEditingIntegration] = useState<any>(null);

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

  const integracoes = [
    {
      id: "1",
      nome: "Leads Elementor",
      aplicativo: "Elementor",
      tipo: "receber",
      ativo: true,
      url: "https://webhook.site/xyz",
      mapeamento: { nome: "Nome", email: "Email" }
    },
    {
      id: "2", 
      nome: "Notificações Zapier",
      aplicativo: "Zapier",
      tipo: "enviar",
      ativo: false,
      url: "https://hooks.zapier.com/hooks/catch/xyz",
      mapeamento: { lead: "Nome", contact: "Email" }
    }
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
  
  const handleDealClick = (deal: any) => {
    const clientData = {
      id: deal.id,
      nome: deal.nome_cliente,
      email: deal.email,
      telefone: "+55 11 99999-9999",
      instagram: "@" + deal.nome_cliente.toLowerCase().replace(" ", ""),
      empresa: "Empresa " + deal.nome_cliente,
      cargo: "Gerente",
      origem: "LEADS B2C",
      valor: deal.valor,
      status: "Aberto",
      etapa_atual: stages.find(s => s.deals.includes(deal))?.name || "Base",
      avatar: deal.avatar,
      tags: deal.tags
    };
    
    setSelectedClient(clientData);
    setIsClientPanelOpen(true);
  };

  const filteredDeals = stages.map(stage => ({
    ...stage,
    deals: stage.deals.filter(deal =>
      deal.nome_cliente.toLowerCase().includes(kanbanSearchQuery.toLowerCase())
    )
  }));

  const handleCreateIntegration = () => {
    console.log("Creating integration:", integrationData);
    setIsCreateIntegrationModalOpen(false);
    setIntegrationStep(0);
    setIntegrationData({
      tipo_webhook: "",
      nome_integracao: "",
      url_webhook: "",
      aplicativo: "",
      mapeamento_campos: {}
    });
  };

  const handleEditIntegration = (integration: any) => {
    setEditingIntegration(integration);
    setIsEditIntegrationModalOpen(true);
  };

  const handleSaveEditedIntegration = () => {
    console.log("Saving edited integration:", editingIntegration);
    setIsEditIntegrationModalOpen(false);
    setEditingIntegration(null);
  };

  const handleToggleIntegration = (integrationId: string, currentStatus: boolean) => {
    console.log(`Toggling integration ${integrationId} to ${!currentStatus}`);
  };

  const nextStep = () => {
    if (integrationStep < 3) {
      setIntegrationStep(integrationStep + 1);
    }
  };

  const prevStep = () => {
    if (integrationStep > 0) {
      setIntegrationStep(integrationStep - 1);
    }
  };

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
                                  className="bg-white rounded-lg border border-gray-200 p-3 cursor-pointer hover:shadow-md transition-shadow"
                                  onClick={() => handleDealClick(deal)}
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
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="geral">Geral</TabsTrigger>
              <TabsTrigger value="etapas">Etapas e atividades</TabsTrigger>
              <TabsTrigger value="integracoes">Integrações</TabsTrigger>
              <TabsTrigger value="historico">Histórico de movimentações</TabsTrigger>
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
                <Button onClick={() => setIsCreateIntegrationModalOpen(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Nova Integração
                </Button>
              </div>
              
              <div className="space-y-3">
                {integracoes.length === 0 ? (
                  <div className="border rounded-lg p-8 text-center">
                    <p className="text-gray-600">Nenhuma integração configurada</p>
                  </div>
                ) : (
                  integracoes.map((integracao) => (
                    <Card key={integracao.id} className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div>
                            <h4 className="font-medium">{integracao.nome}</h4>
                            <p className="text-sm text-gray-600">{integracao.aplicativo}</p>
                          </div>
                          <Badge variant={integracao.tipo === 'receber' ? 'default' : 'secondary'}>
                            {integracao.tipo === 'receber' ? 'Receber' : 'Enviar'}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <Label htmlFor={`toggle-${integracao.id}`} className="text-sm">
                              Ativo
                            </Label>
                            <Switch
                              id={`toggle-${integracao.id}`}
                              checked={integracao.ativo}
                              onCheckedChange={(checked) => handleToggleIntegration(integracao.id, integracao.ativo)}
                            />
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEditIntegration(integracao)}
                          >
                            <Edit className="h-4 w-4 mr-2" />
                            Editar
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))
                )}
              </div>
            </TabsContent>

            <TabsContent value="historico" className="space-y-4">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-2">
                  <Label>Filtrar por período:</Label>
                  <Input type="date" className="w-auto" />
                  <span>até</span>
                  <Input type="date" className="w-auto" />
                </div>
                <Select defaultValue="">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Tipo de log" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="">Todos</SelectItem>
                    <SelectItem value="MUDANCA_ETAPA">Mudança de etapa</SelectItem>
                    <SelectItem value="ATIVIDADE_CRIADA">Atividade criada</SelectItem>
                    <SelectItem value="ATIVIDADE_CONCLUIDA">Atividade concluída</SelectItem>
                    <SelectItem value="ATIVIDADE_EXCLUIDA">Atividade excluída</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Ver em Dashboard
                </Button>
              </div>

              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="border-b">
                        <tr>
                          <th className="text-left p-4">Data</th>
                          <th className="text-left p-4">Usuário</th>
                          <th className="text-left p-4">E-mail</th>
                          <th className="text-left p-4">De</th>
                          <th className="text-left p-4">Para</th>
                          <th className="text-left p-4">Motivo</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan={6} className="text-center p-8 text-gray-600">
                            Nenhuma movimentação registrada ainda.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
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

      {/* Create Integration Modal */}
      <Dialog open={isCreateIntegrationModalOpen} onOpenChange={setIsCreateIntegrationModalOpen}>
        <DialogContent className="bg-white max-w-2xl">
          <DialogHeader>
            <DialogTitle>Criar integração - Etapa {integrationStep + 1} de 4</DialogTitle>
          </DialogHeader>
          
          {integrationStep === 0 && (
            <div className="space-y-4">
              <h3 className="font-medium">O que você deseja fazer com essa integração?</h3>
              <RadioGroup 
                value={integrationData.tipo_webhook} 
                onValueChange={(value) => setIntegrationData(prev => ({ ...prev, tipo_webhook: value }))}
              >
                <div className="flex items-center space-x-2 p-4 border rounded-lg">
                  <RadioGroupItem value="receber" id="receber" />
                  <div className="flex-1">
                    <Label htmlFor="receber" className="font-medium">Receber Webhook</Label>
                    <p className="text-sm text-gray-600">
                      Cria ou atualiza negócios/contatos quando uma ferramenta enviar um webhook.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg">
                  <RadioGroupItem value="enviar" id="enviar" />
                  <div className="flex-1">
                    <Label htmlFor="enviar" className="font-medium">Enviar Webhook</Label>
                    <p className="text-sm text-gray-600">
                      Envia um webhook quando uma ação acontecer na Clint/Lovable.
                    </p>
                  </div>
                </div>
              </RadioGroup>
            </div>
          )}

          {integrationStep === 1 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="nome_integracao">Nome da integração</Label>
                <Input
                  id="nome_integracao"
                  placeholder="Ex: Leads de campanha XYZ"
                  value={integrationData.nome_integracao}
                  onChange={(e) => setIntegrationData(prev => ({ ...prev, nome_integracao: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="url_webhook">URL do Webhook</Label>
                <Input
                  id="url_webhook"
                  placeholder="https://..."
                  value={integrationData.url_webhook}
                  onChange={(e) => setIntegrationData(prev => ({ ...prev, url_webhook: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="aplicativo">Aplicativo de origem</Label>
                <Select 
                  value={integrationData.aplicativo} 
                  onValueChange={(value) => setIntegrationData(prev => ({ ...prev, aplicativo: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o aplicativo" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="Elementor">Elementor</SelectItem>
                    <SelectItem value="Hubspot">Hubspot</SelectItem>
                    <SelectItem value="Zapier">Zapier</SelectItem>
                    <SelectItem value="Make">Make</SelectItem>
                    <SelectItem value="RD Station">RD Station</SelectItem>
                    <SelectItem value="Outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {integrationStep === 2 && (
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Mapeamento de campos</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Associe os campos do seu sistema externo aos campos da Lovable
                </p>
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-4">
                    <Label className="font-medium">Campo externo</Label>
                    <Label className="font-medium">Campo da Lovable</Label>
                  </div>
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="grid grid-cols-2 gap-4">
                      <Input placeholder="Ex: first_name" />
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione..." />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="Nome">Nome</SelectItem>
                          <SelectItem value="Email">Email</SelectItem>
                          <SelectItem value="Telefone">Telefone</SelectItem>
                          <SelectItem value="CPF">CPF</SelectItem>
                          <SelectItem value="Origem">Origem</SelectItem>
                          <SelectItem value="Campanha">Campanha</SelectItem>
                          <SelectItem value="Etapa inicial">Etapa inicial</SelectItem>
                          <SelectItem value="Tag">Tag</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {integrationStep === 3 && (
            <div className="space-y-4">
              <p>
                Clique em salvar para ativar sua integração. Ela estará listada na aba Integrações desta origem.
              </p>
            </div>
          )}

          <DialogFooter>
            <div className="flex justify-between w-full">
              <Button 
                variant="outline" 
                onClick={prevStep}
                disabled={integrationStep === 0}
              >
                Voltar
              </Button>
              <div className="space-x-2">
                <Button variant="outline" onClick={() => setIsCreateIntegrationModalOpen(false)}>
                  Cancelar
                </Button>
                {integrationStep < 3 ? (
                  <Button onClick={nextStep} disabled={
                    (integrationStep === 0 && !integrationData.tipo_webhook) ||
                    (integrationStep === 1 && (!integrationData.nome_integracao || !integrationData.url_webhook || !integrationData.aplicativo))
                  }>
                    Próximo
                  </Button>
                ) : (
                  <Button 
                    className="bg-purple-600 hover:bg-purple-700"
                    onClick={handleCreateIntegration}
                  >
                    Salvar integração
                  </Button>
                )}
              </div>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Integration Modal */}
      <Dialog open={isEditIntegrationModalOpen} onOpenChange={setIsEditIntegrationModalOpen}>
        <DialogContent className="bg-white max-w-2xl">
          <DialogHeader>
            <DialogTitle>Editar integração</DialogTitle>
          </DialogHeader>
          
          {editingIntegration && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="edit_nome">Nome da integração</Label>
                <Input
                  id="edit_nome"
                  value={editingIntegration.nome}
                  onChange={(e) => setEditingIntegration(prev => ({ ...prev, nome: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="edit_url">URL do Webhook</Label>
                <Input
                  id="edit_url"
                  value={editingIntegration.url}
                  onChange={(e) => setEditingIntegration(prev => ({ ...prev, url: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="edit_aplicativo">Aplicativo</Label>
                <Select 
                  value={editingIntegration.aplicativo} 
                  onValueChange={(value) => setEditingIntegration(prev => ({ ...prev, aplicativo: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="Elementor">Elementor</SelectItem>
                    <SelectItem value="Zapier">Zapier</SelectItem>
                    <SelectItem value="Make">Make</SelectItem>
                    <SelectItem value="Hubspot">Hubspot</SelectItem>
                    <SelectItem value="RD Station">RD Station</SelectItem>
                    <SelectItem value="Outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Mapeamento de campos</Label>
                <div className="space-y-2 mt-2">
                  <div className="grid grid-cols-2 gap-4">
                    <Label className="font-medium text-sm">Campo externo</Label>
                    <Label className="font-medium text-sm">Campo da Lovable</Label>
                  </div>
                  {Object.entries(editingIntegration.mapeamento || {}).map(([key, value], index) => (
                    <div key={index} className="grid grid-cols-2 gap-4">
                      <Input value={key} readOnly className="bg-gray-50" />
                      <Input value={value as string} readOnly className="bg-gray-50" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditIntegrationModalOpen(false)}>
              Cancelar
            </Button>
            <Button 
              className="bg-purple-600 hover:bg-purple-700"
              onClick={handleSaveEditedIntegration}
            >
              Salvar alterações
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

      {/* Client Panel */}
      <ClientPanel
        cliente={selectedClient}
        isOpen={isClientPanelOpen}
        onClose={() => setIsClientPanelOpen(false)}
      />
    </div>
  );
};

export default Index;

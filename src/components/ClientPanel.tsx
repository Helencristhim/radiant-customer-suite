
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Phone,
  Mail,
  Calendar,
  X,
  Plus,
  Check,
  MessageCircle,
  User,
  Building,
  DollarSign,
  Clock,
  CheckCircle
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

interface Cliente {
  id: string;
  nome: string;
  email: string;
  telefone?: string;
  instagram?: string;
  empresa?: string;
  cargo?: string;
  origem: string;
  valor: string;
  status: string;
  etapa_atual: string;
  avatar: string;
  tags: string[];
}

interface Atividade {
  id: string;
  nome: string;
  tipo: string;
  concluida: boolean;
  data?: string;
}

interface ClientPanelProps {
  cliente: Cliente | null;
  isOpen: boolean;
  onClose: () => void;
}

const ClientPanel = ({ cliente, isOpen, onClose }: ClientPanelProps) => {
  const [isNewActivityModalOpen, setIsNewActivityModalOpen] = useState(false);
  const [newActivity, setNewActivity] = useState({
    nome: "",
    tipo: "",
    data: ""
  });

  const etapas = ["Base", "1º Contato", "Follow Up", "No-show", "M.O.", "Retorno futuro", "Fechado"];
  
  const atividades: Atividade[] = [
    { id: "1", nome: "Pré-qualificação", tipo: "Ligação", concluida: false },
    { id: "2", nome: "Primeira abordagem", tipo: "WhatsApp", concluida: true },
    { id: "3", nome: "Reunião de apresentação", tipo: "Reunião", concluida: false },
  ];

  const mensagens = [
    { id: "1", autor: "Cliente", mensagem: "Olá, gostaria de saber mais sobre os produtos", data: "10:30" },
    { id: "2", autor: "Vendedor", mensagem: "Claro! Vou te enviar mais informações", data: "10:32" },
  ];

  const historico = [
    { id: "1", evento: "Negócio criado", data: "2023-12-01 10:00", usuario: "Sistema" },
    { id: "2", evento: "Primeira ligação realizada", data: "2023-12-01 14:30", usuario: "João Silva" },
    { id: "3", evento: "Email enviado", data: "2023-12-02 09:15", usuario: "João Silva" },
  ];

  const getTagColor = (tag: string) => {
    if (tag.includes("WHATSAPP")) return "bg-green-100 text-green-800";
    if (tag.includes("META")) return "bg-blue-100 text-blue-800";
    if (tag.includes("Remarketing")) return "bg-purple-100 text-purple-800";
    return "bg-gray-100 text-gray-800";
  };

  const getCurrentStepIndex = () => {
    return etapas.indexOf(cliente?.etapa_atual || "Base");
  };

  const handleCompleteActivity = (activityId: string) => {
    console.log("Completing activity:", activityId);
    // Here would be the API call to complete the activity and advance the stage
  };

  const handleAddActivity = () => {
    console.log("Adding new activity:", newActivity);
    setIsNewActivityModalOpen(false);
    setNewActivity({ nome: "", tipo: "", data: "" });
  };

  if (!cliente || !isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white max-w-5xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <DialogHeader className="border-b pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-gray-600 text-white text-lg">
                  {cliente.avatar}
                </AvatarFallback>
              </Avatar>
              <div>
                <DialogTitle className="text-xl font-bold">{cliente.nome}</DialogTitle>
                <p className="text-gray-600">{cliente.etapa_atual}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {cliente.tags.map((tag, index) => (
                    <Badge key={index} className={`text-xs ${getTagColor(tag)}`}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" title="Ligar">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" title="Enviar email">
                <Mail className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" title="WhatsApp">
                <MessageCircle className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" title="Agendar">
                <Calendar className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        {/* Tabs Content */}
        <Tabs defaultValue="atividades" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="atividades">Atividades</TabsTrigger>
            <TabsTrigger value="contato">Contato</TabsTrigger>
            <TabsTrigger value="empresa">Empresa</TabsTrigger>
            <TabsTrigger value="negocio">Negócio</TabsTrigger>
            <TabsTrigger value="conversas">Conversas</TabsTrigger>
            <TabsTrigger value="historico">Histórico</TabsTrigger>
          </TabsList>

          <TabsContent value="atividades" className="space-y-6 mt-4">
            {/* Stepper */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-4">Progresso do Funil</h3>
              <div className="flex items-center justify-between">
                {etapas.map((etapa, index) => (
                  <div key={etapa} className="flex items-center">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                      index <= getCurrentStepIndex() 
                        ? "bg-purple-600 border-purple-600 text-white" 
                        : "bg-white border-gray-300 text-gray-400"
                    }`}>
                      {index < getCurrentStepIndex() ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <span className="text-xs">{index + 1}</span>
                      )}
                    </div>
                    <span className={`ml-2 text-sm ${
                      index <= getCurrentStepIndex() ? "text-purple-600 font-medium" : "text-gray-400"
                    }`}>
                      {etapa}
                    </span>
                    {index < etapas.length - 1 && (
                      <div className={`w-8 h-0.5 mx-2 ${
                        index < getCurrentStepIndex() ? "bg-purple-600" : "bg-gray-300"
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Próximas Atividades */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Próximas atividades</CardTitle>
                <Button onClick={() => setIsNewActivityModalOpen(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Nova atividade
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {atividades.map((atividade, index) => (
                    <div key={atividade.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-gray-500">#{index + 1}</span>
                        <div>
                          <p className="font-medium">{atividade.nome}</p>
                          <p className="text-sm text-gray-500">{atividade.tipo}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {atividade.concluida ? (
                          <Badge className="bg-green-100 text-green-800">
                            <Check className="h-3 w-3 mr-1" />
                            Concluído
                          </Badge>
                        ) : (
                          <Button 
                            size="sm" 
                            onClick={() => handleCompleteActivity(atividade.id)}
                          >
                            Marcar como feita
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Info Card */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Pré-qualificação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-800 text-sm">
                  Apenas oportunidades novas devem ficar nesta etapa. Assim que você começar a trabalhar com o negócio, 
                  marque como feita esta atividade e mova-o para a etapa 2. Caso o negócio esteja sem dono, 
                  quem marcar a atividade como feita será automaticamente atribuído como dono.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contato" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Informações de Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <p className="text-gray-900">{cliente.email}</p>
                </div>
                {cliente.telefone && (
                  <div>
                    <label className="text-sm font-medium text-gray-700">Telefone</label>
                    <p className="text-gray-900">{cliente.telefone}</p>
                  </div>
                )}
                {cliente.instagram && (
                  <div>
                    <label className="text-sm font-medium text-gray-700">Instagram</label>
                    <p className="text-gray-900">{cliente.instagram}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="empresa" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building className="h-5 w-5 mr-2" />
                  Informações da Empresa
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cliente.empresa && (
                  <div>
                    <label className="text-sm font-medium text-gray-700">Empresa</label>
                    <p className="text-gray-900">{cliente.empresa}</p>
                  </div>
                )}
                {cliente.cargo && (
                  <div>
                    <label className="text-sm font-medium text-gray-700">Cargo</label>
                    <p className="text-gray-900">{cliente.cargo}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="negocio" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Detalhes do Negócio
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Origem</label>
                  <p className="text-gray-900">{cliente.origem}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Valor do negócio</label>
                  <p className="text-gray-900 font-semibold">R$ {cliente.valor}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Status</label>
                  <Select defaultValue={cliente.status}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="Aberto">Aberto</SelectItem>
                      <SelectItem value="Ganho">Ganho</SelectItem>
                      <SelectItem value="Perdido">Perdido</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="conversas" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Conversas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {mensagens.map((mensagem) => (
                    <div
                      key={mensagem.id}
                      className={`flex ${mensagem.autor === "Cliente" ? "justify-start" : "justify-end"}`}
                    >
                      <div
                        className={`max-w-xs p-3 rounded-lg ${
                          mensagem.autor === "Cliente"
                            ? "bg-gray-100 text-gray-900"
                            : "bg-purple-600 text-white"
                        }`}
                      >
                        <p className="text-sm">{mensagem.mensagem}</p>
                        <p className="text-xs mt-1 opacity-70">{mensagem.data}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="historico" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Histórico de Atividades
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {historico.map((evento, index) => (
                    <div key={evento.id} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="font-medium">{evento.evento}</p>
                        <p className="text-sm text-gray-500">
                          {evento.data} • {evento.usuario}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* New Activity Modal */}
        <Dialog open={isNewActivityModalOpen} onOpenChange={setIsNewActivityModalOpen}>
          <DialogContent className="bg-white">
            <DialogHeader>
              <DialogTitle>Nova Atividade</DialogTitle>
            </DialogHeader>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome da atividade
                </label>
                <Input
                  value={newActivity.nome}
                  onChange={(e) => setNewActivity(prev => ({ ...prev, nome: e.target.value }))}
                  placeholder="Ex: Ligação de follow-up"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo
                </label>
                <Select 
                  value={newActivity.tipo} 
                  onValueChange={(value) => setNewActivity(prev => ({ ...prev, tipo: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="Ligação">Ligação</SelectItem>
                    <SelectItem value="Reunião">Reunião</SelectItem>
                    <SelectItem value="WhatsApp">WhatsApp</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Agendar para
                </label>
                <Input
                  type="datetime-local"
                  value={newActivity.data}
                  onChange={(e) => setNewActivity(prev => ({ ...prev, data: e.target.value }))}
                />
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setIsNewActivityModalOpen(false)}>
                Cancelar
              </Button>
              <Button
                className="bg-purple-600 hover:bg-purple-700"
                onClick={handleAddActivity}
                disabled={!newActivity.nome || !newActivity.tipo}
              >
                Salvar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </DialogContent>
    </Dialog>
  );
};

export default ClientPanel;

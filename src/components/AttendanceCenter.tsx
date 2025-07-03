
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { 
  MessageSquare, 
  Phone, 
  Send,
  Paperclip,
  Smile,
  MoreVertical,
  Clock,
  CheckCheck,
  Mail,
  Zap,
  FileText
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AttendanceCenter = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [message, setMessage] = useState("");
  const [activeFilter, setActiveFilter] = useState("todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [newNote, setNewNote] = useState("");
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);

  const conversations = [
    {
      id: 1,
      name: "Danilo",
      lastMessage: "Walter, este áudio chegou até a ti?",
      time: "15:07",
      unread: 0,
      channel: "WhatsApp",
      status: "active",
      avatar: "/lovable-uploads/12fc6a01-86c3-4445-9065-5c41b98b844f.png",
      tags: ["Bday", "B2C"],
      phone: "+55 11 99999-9999",
      email: "danilo@exemplo.com",
      instagram: "@danilo_exemplo"
    },
    {
      id: 2,
      name: "Gesa",
      lastMessage: "Mensagem de voz",
      time: "15:05",
      unread: 0,
      channel: "WhatsApp",
      status: "active",
      tags: ["Lead"],
      phone: "+55 11 88888-8888",
      email: "gesa@exemplo.com"
    },
    {
      id: 3,
      name: "Jessica Fanini",
      lastMessage: "Fernanda Soares: Quando...",
      time: "15:04",
      unread: 0,
      channel: "WhatsApp",
      status: "pending",
      tags: ["B2B"],
      phone: "+55 11 77777-7777",
      email: "jessica@exemplo.com"
    },
    {
      id: 4,
      name: "Marcelo Marcelo",
      lastMessage: "Fernanda Soares: Estou na...",
      time: "15:04",
      unread: 0,
      channel: "WhatsApp",
      status: "pending",
      tags: ["Escola"],
      phone: "+55 11 66666-6666",
      email: "marcelo@exemplo.com"
    },
    {
      id: 5,
      name: "Tales Aizawa",
      lastMessage: "Seria iniciante adulto",
      time: "15:03",
      unread: 3,
      channel: "WhatsApp",
      status: "active",
      tags: ["Produto", "Alumni"],
      phone: "+55 11 55555-5555",
      email: "tales@exemplo.com"
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "Danilo",
      content: "Walter, este áudio chegou até a ti?",
      time: "14:49",
      type: "text",
      isUser: false
    },
    {
      id: 2,
      sender: "System",
      content: "https://speak.speechace.co/placement/p/icu5a4g/courses/4434?invitation=4dc53cc6-bc6f-40aa-84e4-bd30e8d7f9a",
      time: "15:05",
      type: "link",
      isUser: true
    }
  ];

  const filteredConversations = conversations.filter(conv => {
    const matchesSearch = conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         conv.lastMessage.toLowerCase().includes(searchQuery.toLowerCase());
    
    switch (activeFilter) {
      case "meus":
        return matchesSearch && conv.status === "active";
      case "nao_lidas":
        return matchesSearch && conv.unread > 0;
      case "transferencia":
        return matchesSearch && conv.status === "pending";
      default:
        return matchesSearch;
    }
  });

  const handleSaveNote = () => {
    console.log("Salvando nota:", newNote);
    setNewNote("");
    setIsNoteModalOpen(false);
  };

  const handleApiCall = (action: string) => {
    console.log(`Executando ação: ${action}`);
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex">
      {/* Left Panel - Conversations List */}
      <div className="w-1/4 border-r border-gray-200 bg-white flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <Input
            placeholder="Buscar atendimentos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mb-4"
          />
          <Tabs value={activeFilter} onValueChange={setActiveFilter}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="meus">Meus</TabsTrigger>
            </TabsList>
            <TabsList className="grid w-full grid-cols-2 mt-2">
              <TabsTrigger value="nao_lidas">Não lidas</TabsTrigger>
              <TabsTrigger value="transferencia">Transferência</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="flex-1 overflow-y-auto">
          {filteredConversations.map((conv) => (
            <div
              key={conv.id}
              className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                selectedConversation?.id === conv.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
              }`}
              onClick={() => setSelectedConversation(conv)}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-medium">
                    {conv.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-gray-900 truncate">{conv.name}</p>
                    <span className="text-xs text-gray-500">{conv.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge variant="outline" className="text-xs">
                      {conv.channel}
                    </Badge>
                    {conv.unread > 0 && (
                      <Badge className="bg-blue-600 text-white text-xs">
                        {conv.unread}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Center Panel - Chat Window */}
      <div className="flex-1 flex flex-col">
        {selectedConversation ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 bg-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-medium">
                      {selectedConversation.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-medium">{selectedConversation.name}</h3>
                    <p className="text-sm text-gray-600">
                      {selectedConversation.channel} • Online
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      msg.isUser
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-900 border'
                    }`}
                  >
                    {msg.type === 'link' ? (
                      <a
                        href={msg.content}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`underline ${msg.isUser ? 'text-blue-100' : 'text-blue-600'}`}
                      >
                        Link do curso
                      </a>
                    ) : (
                      <p>{msg.content}</p>
                    )}
                    <div className="flex items-center justify-between mt-1">
                      <span className={`text-xs ${msg.isUser ? 'text-blue-100' : 'text-gray-500'}`}>
                        {msg.time}
                      </span>
                      {msg.isUser && (
                        <CheckCheck className="h-3 w-3 text-blue-100" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="border-t p-4 bg-white">
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Input
                  placeholder="Digite sua mensagem..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      setMessage("");
                    }
                  }}
                />
                <Button variant="ghost" size="sm">
                  <Smile className="h-4 w-4" />
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <MessageSquare className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Selecione uma conversa
              </h3>
              <p className="text-gray-600">
                Escolha uma conversa da lista para começar a responder
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Right Panel - Contact Info */}
      <div className="w-1/4 border-l border-gray-200 bg-white overflow-y-auto">
        {selectedConversation && (
          <div className="p-4 space-y-4">
            {/* Deal Card */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Negócio Selecionado</CardTitle>
                <div className="flex flex-wrap gap-1">
                  {selectedConversation.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <p className="text-gray-600">Funil</p>
                  <p className="font-medium">B2C - Alumni by Better > Leads B2C</p>
                </div>
                <div className="text-sm">
                  <p className="text-gray-600">Valor</p>
                  <p className="font-medium">R$ 0,00</p>
                </div>
                <div className="flex space-x-2">
                  <Badge className="bg-green-100 text-green-800 text-xs">Aberto</Badge>
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-2 pt-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => handleApiCall('phone')}
                    title="Ligar"
                  >
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => handleApiCall('email')}
                    title="Enviar e-mail"
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => handleApiCall('whatsapp')}
                    title="WhatsApp"
                  >
                    <Zap className="h-4 w-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => setIsNoteModalOpen(true)}
                    title="Adicionar nota"
                  >
                    <FileText className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Details Accordion */}
            <Accordion type="single" collapsible defaultValue="contato">
              <AccordionItem value="contato">
                <AccordionTrigger className="text-sm">Contato</AccordionTrigger>
                <AccordionContent className="space-y-2 text-sm">
                  <div>
                    <p className="text-gray-600">Nome</p>
                    <p>{selectedConversation.name}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Email</p>
                    <p>{selectedConversation.email}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Telefone</p>
                    <p>{selectedConversation.phone}</p>
                  </div>
                  {selectedConversation.instagram && (
                    <div>
                      <p className="text-gray-600">Instagram</p>
                      <p>{selectedConversation.instagram}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-gray-600">Tags</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {selectedConversation.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="negocio">
                <AccordionTrigger className="text-sm">Negócio</AccordionTrigger>
                <AccordionContent className="space-y-2 text-sm">
                  <div>
                    <p className="text-gray-600">Origem</p>
                    <p>B2C - Alumni by Better</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Etapa</p>
                    <p>Leads B2C</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Valor</p>
                    <p>R$ 0,00</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="notas">
                <AccordionTrigger className="text-sm">Notas</AccordionTrigger>
                <AccordionContent className="space-y-2">
                  <Textarea 
                    placeholder="Adicionar uma nota"
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    className="min-h-[80px]"
                  />
                  <Button 
                    size="sm" 
                    onClick={handleSaveNote}
                    disabled={!newNote.trim()}
                  >
                    Salvar
                  </Button>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="historico">
                <AccordionTrigger className="text-sm">Histórico</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-gray-600">Nenhum histórico disponível</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="conversas">
                <AccordionTrigger className="text-sm">Conversas</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm">Total de conversas: 2</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        )}
      </div>

      {/* Note Modal */}
      <Dialog open={isNoteModalOpen} onOpenChange={setIsNoteModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Nova Nota</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Textarea 
              placeholder="Digite a nota"
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              className="min-h-[120px]"
            />
            <div className="flex justify-end space-x-2">
              <Button 
                variant="outline" 
                onClick={() => setIsNoteModalOpen(false)}
              >
                Cancelar
              </Button>
              <Button 
                onClick={handleSaveNote}
                disabled={!newNote.trim()}
              >
                Salvar nota
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AttendanceCenter;

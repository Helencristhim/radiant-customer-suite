
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MessageSquare, 
  Phone, 
  Send,
  Paperclip,
  Smile,
  MoreVertical,
  Clock,
  CheckCheck
} from "lucide-react";

const AttendanceCenter = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [message, setMessage] = useState("");

  const conversations = [
    {
      id: 1,
      name: "Danilo",
      lastMessage: "Walter, este áudio chegou até a ti?",
      time: "15:07",
      unread: 0,
      channel: "WhatsApp",
      status: "active",
      avatar: "/lovable-uploads/12fc6a01-86c3-4445-9065-5c41b98b844f.png"
    },
    {
      id: 2,
      name: "Gesa",
      lastMessage: "Mensagem de voz",
      time: "15:05",
      unread: 0,
      channel: "WhatsApp",
      status: "active"
    },
    {
      id: 3,
      name: "Jessica Fanini",
      lastMessage: "Fernanda Soares: Quando...",
      time: "15:04",
      unread: 0,
      channel: "WhatsApp",
      status: "pending"
    },
    {
      id: 4,
      name: "Marcelo Marcelo",
      lastMessage: "Fernanda Soares: Estou na...",
      time: "15:04",
      unread: 0,
      channel: "WhatsApp",
      status: "pending"
    },
    {
      id: 5,
      name: "Tales Aizawa",
      lastMessage: "Seria iniciante adulto",
      time: "15:03",
      unread: 3,
      channel: "WhatsApp",
      status: "active"
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "closed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="h-[calc(100vh-8rem)]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
        {/* Conversations List */}
        <div className="lg:col-span-1">
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Conversas</CardTitle>
                <Badge variant="secondary">8</Badge>
              </div>
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="all">Todas</TabsTrigger>
                  <TabsTrigger value="active">Ativas</TabsTrigger>
                  <TabsTrigger value="pending">Pendentes</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent className="p-0 overflow-y-auto">
              <div className="space-y-1">
                {conversations.map((conv) => (
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
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                          {conv.unread > 0 && (
                            <Badge className="bg-blue-600 text-white text-xs">
                              {conv.unread}
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {conv.channel}
                          </Badge>
                          <Badge className={`text-xs ${getStatusColor(conv.status)}`}>
                            {conv.status === 'active' ? 'Ativa' : 'Pendente'}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chat Area */}
        <div className="lg:col-span-2">
          {selectedConversation ? (
            <Card className="h-full flex flex-col">
              {/* Chat Header */}
              <CardHeader className="border-b">
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
                        {selectedConversation.channel} - Online
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        msg.isUser
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-900'
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
              </CardContent>

              {/* Message Input */}
              <div className="border-t p-4">
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
                        // Handle send message
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
            </Card>
          ) : (
            <Card className="h-full flex items-center justify-center">
              <div className="text-center">
                <MessageSquare className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Selecione uma conversa
                </h3>
                <p className="text-gray-600">
                  Escolha uma conversa da lista para começar a responder
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>

      {/* Lead Info Sidebar */}
      {selectedConversation && (
        <div className="fixed right-6 top-24 w-80 h-[calc(100vh-12rem)] bg-white border rounded-lg shadow-lg overflow-y-auto">
          <div className="p-4 border-b">
            <h3 className="font-medium">Informações do Lead</h3>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <h4 className="font-medium text-sm text-gray-600 mb-2">PRÓXIMO NEGÓCIO</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm font-medium">D</span>
                  </div>
                  <div>
                    <p className="font-medium">{selectedConversation.name}</p>
                    <Badge className="bg-green-100 text-green-800 text-xs">Bday</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-sm text-gray-600 mb-2">NEGÓCIO SELECIONADO</h4>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-medium">Remarketing - Alumni by Better</p>
                <p className="text-sm text-gray-600">R$ 0,00</p>
                <div className="flex space-x-2 mt-2">
                  <Badge className="bg-green-100 text-green-800 text-xs">Ganho</Badge>
                  <Badge className="bg-red-100 text-red-800 text-xs">Perdido</Badge>
                  <Badge className="bg-blue-100 text-blue-800 text-xs">Aberto</Badge>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                Conexão
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Contato
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Negócio
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Notas
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Histórico
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Conversas <Badge variant="secondary" className="ml-auto">2</Badge>
              </Button>
            </div>

            <div className="pt-4 border-t">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Ligar
              </Button>
              <Button variant="outline" className="w-full mt-2">
                Enviar e-mail
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttendanceCenter;

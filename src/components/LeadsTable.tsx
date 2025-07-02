
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus, 
  Upload, 
  Download, 
  Filter,
  Phone,
  Mail,
  MessageSquare,
  MoreHorizontal,
  Edit,
  Trash2
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LeadsTable = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");

  const leads = [
    {
      id: 1,
      name: "Habudia Lima karaja",
      email: "habudia@email.com",
      phone: "(11) 99999-9999",
      status: "1º Contato",
      stage: "Base",
      origin: "WhatsApp",
      responsible: "Vendedor A",
      lastContact: "2 min atrás",
      value: "R$ 0",
      tags: ["LP-INT-META-F-D", "IG-META-INT-D"]
    },
    {
      id: 2,
      name: "Anna Claudia Rodrigues",
      email: "anna@email.com",
      phone: "(11) 88888-8888",
      status: "Follow Up",
      stage: "1º Contato",
      origin: "Instagram",
      responsible: "Vendedor B",
      lastContact: "5 min atrás",
      value: "R$ 2.500",
      tags: ["Site Alumni", "IG-META-INT-D"]
    },
    {
      id: 3,
      name: "Danielle teste",
      email: "danielle@email.com",
      phone: "(11) 77777-7777",
      status: "Remarketing",
      stage: "Follow Up",
      origin: "E-mail",
      responsible: "Vendedor C",
      lastContact: "1 hora atrás",
      value: "R$ 1.200",
      tags: ["Remarketing"]
    },
    {
      id: 4,
      name: "Julio",
      email: "julio@email.com",
      phone: "(11) 66666-6666",
      status: "No-show",
      stage: "No-show",
      origin: "Telefone",
      responsible: "Vendedor A",
      lastContact: "2 horas atrás",
      value: "R$ 0",
      tags: ["Site Alumni"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "1º Contato":
        return "bg-blue-100 text-blue-800";
      case "Follow Up":
        return "bg-green-100 text-green-800";
      case "Remarketing":
        return "bg-purple-100 text-purple-800";
      case "No-show":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Leads & Contatos</h2>
          <p className="text-gray-600">Gerencie todos os seus leads e contatos</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Upload className="h-4 w-4 mr-2" />
            Importar CSV
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Novo Lead
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex-1">
              <Input placeholder="Buscar por nome, e-mail ou telefone..." />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Status Tabs */}
      <Tabs value={selectedStatus} onValueChange={setSelectedStatus}>
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="base">Base (9)</TabsTrigger>
          <TabsTrigger value="first-contact">1º Contato (908)</TabsTrigger>
          <TabsTrigger value="follow-up">Follow Up (319)</TabsTrigger>
          <TabsTrigger value="no-show">No-show (149)</TabsTrigger>
          <TabsTrigger value="closed">M.O. (240)</TabsTrigger>
        </TabsList>

        <TabsContent value={selectedStatus} className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Lista de Leads</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-medium text-gray-600">Nome</th>
                      <th className="text-left p-4 font-medium text-gray-600">Contato</th>
                      <th className="text-left p-4 font-medium text-gray-600">Status</th>
                      <th className="text-left p-4 font-medium text-gray-600">Origem</th>
                      <th className="text-left p-4 font-medium text-gray-600">Responsável</th>
                      <th className="text-left p-4 font-medium text-gray-600">Último Contato</th>
                      <th className="text-left p-4 font-medium text-gray-600">Valor</th>
                      <th className="text-left p-4 font-medium text-gray-600">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leads.map((lead) => (
                      <tr key={lead.id} className="border-b hover:bg-gray-50">
                        <td className="p-4">
                          <div>
                            <p className="font-medium">{lead.name}</p>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {lead.tags.map((tag, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              <Mail className="h-4 w-4 text-gray-400" />
                              <span className="text-sm">{lead.email}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Phone className="h-4 w-4 text-gray-400" />
                              <span className="text-sm">{lead.phone}</span>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge className={getStatusColor(lead.status)}>
                            {lead.status}
                          </Badge>
                        </td>
                        <td className="p-4">
                          <Badge variant="outline">{lead.origin}</Badge>
                        </td>
                        <td className="p-4">
                          <span className="text-sm">{lead.responsible}</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm text-gray-600">{lead.lastContact}</span>
                        </td>
                        <td className="p-4">
                          <span className="font-medium">{lead.value}</span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm">
                              <Phone className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MessageSquare className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Mail className="h-4 w-4" />
                            </Button>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent>
                                <DropdownMenuItem>
                                  <Edit className="h-4 w-4 mr-2" />
                                  Editar
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">
                                  <Trash2 className="h-4 w-4 mr-2" />
                                  Excluir
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LeadsTable;

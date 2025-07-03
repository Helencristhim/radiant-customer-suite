
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { 
  Search, 
  Filter, 
  PlusCircle, 
  Tag, 
  Download, 
  MoreHorizontal, 
  Eye,
  Edit,
  Trash2,
  ArrowUpDown
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Contacts = () => {
  const [selectedContacts, setSelectedContacts] = useState<number[]>([]);
  const [showCreateDealModal, setShowCreateDealModal] = useState(false);
  const [showTagModal, setShowTagModal] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTagTab, setActiveTagTab] = useState("include");

  // Mock data
  const contacts = [
    {
      id: 1,
      nome: "João Silva",
      telefone: "(11) 99999-9999",
      email: "joao@email.com",
      avatar: "",
      tags: ["viagem", "WhatsApp"]
    },
    {
      id: 2,
      nome: "Maria Santos",
      telefone: "(11) 88888-8888",
      email: "maria@email.com",
      avatar: "",
      tags: ["Site", "Transferido"]
    },
    {
      id: 3,
      nome: "Pedro Costa",
      telefone: "(11) 77777-7777",
      email: "pedro@email.com",
      avatar: "",
      tags: ["Sem tag"]
    }
  ];

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedContacts(contacts.map(c => c.id));
    } else {
      setSelectedContacts([]);
    }
  };

  const handleSelectContact = (contactId: number, checked: boolean) => {
    if (checked) {
      setSelectedContacts([...selectedContacts, contactId]);
    } else {
      setSelectedContacts(selectedContacts.filter(id => id !== contactId));
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Contatos</h2>
          <p className="text-gray-600">Gerencie todos os seus contatos</p>
        </div>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Buscar contatos..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex space-x-2">
              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Campos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nome">Nome</SelectItem>
                  <SelectItem value="cpf">CPF</SelectItem>
                  <SelectItem value="empresa">Empresa</SelectItem>
                  <SelectItem value="cargo">Cargo</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Tags" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="viagem">viagem</SelectItem>
                  <SelectItem value="transferido">Transferido</SelectItem>
                  <SelectItem value="site">Site</SelectItem>
                  <SelectItem value="whatsapp">WhatsApp</SelectItem>
                  <SelectItem value="sem-tag">Sem tag</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Mais filtros
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contacts Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Contatos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 w-12">
                    <Checkbox 
                      checked={selectedContacts.length === contacts.length}
                      onCheckedChange={handleSelectAll}
                    />
                  </th>
                  <th className="text-left p-4 w-12"></th>
                  <th className="text-left p-4 font-medium text-gray-600">
                    <div className="flex items-center space-x-1">
                      <span>Nome</span>
                      <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </th>
                  <th className="text-left p-4 font-medium text-gray-600">Telefone</th>
                  <th className="text-left p-4 font-medium text-gray-600">Email</th>
                  <th className="text-left p-4 font-medium text-gray-600">Tags</th>
                  <th className="text-left p-4 font-medium text-gray-600">Ações</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <Checkbox 
                        checked={selectedContacts.includes(contact.id)}
                        onCheckedChange={(checked) => handleSelectContact(contact.id, checked as boolean)}
                      />
                    </td>
                    <td className="p-4">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={contact.avatar} />
                        <AvatarFallback className="bg-blue-600 text-white text-xs">
                          {getInitials(contact.nome)}
                        </AvatarFallback>
                      </Avatar>
                    </td>
                    <td className="p-4">
                      <span className="font-medium">{contact.nome}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm">{contact.telefone}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm">{contact.email}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-wrap gap-1">
                        {contact.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          Ver negócio
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
                              Editar contato
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Excluir contato
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              Mover para outro funil
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

      {/* Bulk Actions Footer Bar */}
      {selectedContacts.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-purple-600 text-white p-4 flex items-center justify-between shadow-lg z-50">
          <div className="flex items-center space-x-4">
            <span className="font-medium">{selectedContacts.length} selecionados</span>
          </div>
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-purple-700"
              onClick={() => setShowCreateDealModal(true)}
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              Criar negócio
            </Button>
            <Button 
              variant="ghost" 
              className="text-white hover:bg-purple-700"
              onClick={() => setShowTagModal(true)}
            >
              <Tag className="h-4 w-4 mr-2" />
              Tag
            </Button>
            <Button 
              variant="ghost" 
              className="text-white hover:bg-purple-700"
              onClick={() => setShowExportModal(true)}
            >
              <Download className="h-4 w-4 mr-2" />
              Exportar
            </Button>
          </div>
        </div>
      )}

      {/* Create Deal Modal */}
      <Dialog open={showCreateDealModal} onOpenChange={setShowCreateDealModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Adicionar um novo negócio</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="origem">Origem</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecionar origem" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="leads-b2c">Leads B2C</SelectItem>
                  <SelectItem value="remarketing">Remarketing</SelectItem>
                  <SelectItem value="recuperacao">Recuperação</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="etapa">Etapa</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecionar etapa" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="base">Base</SelectItem>
                  <SelectItem value="meio">Meio</SelectItem>
                  <SelectItem value="fechamento">Fechamento</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="dono">Dono do negócio</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecionar usuário" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vendedor-a">Vendedor A</SelectItem>
                  <SelectItem value="vendedor-b">Vendedor B</SelectItem>
                  <SelectItem value="vendedor-c">Vendedor C</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="valor">Valor do negócio</Label>
              <Input type="number" placeholder="R$ 0,00" defaultValue="0" />
            </div>
            <div>
              <Label>Contatos selecionados</Label>
              <Input 
                value={`${selectedContacts.length} contatos selecionados`} 
                readOnly 
                className="bg-gray-100"
              />
            </div>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              Adicionar negócio
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Tag Modal */}
      <Dialog open={showTagModal} onOpenChange={setShowTagModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Alterar tag dos contatos</DialogTitle>
          </DialogHeader>
          <Tabs value={activeTagTab} onValueChange={setActiveTagTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="include">Incluir</TabsTrigger>
              <TabsTrigger value="remove">Remover</TabsTrigger>
            </TabsList>
            <TabsContent value="include" className="space-y-4">
              <div>
                <Label htmlFor="nova-tag">Nova tag</Label>
                <Input placeholder="Digite a nova tag" />
              </div>
            </TabsContent>
            <TabsContent value="remove" className="space-y-4">
              <div>
                <Label htmlFor="tag-remover">Tag a remover</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecionar tag" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="viagem">viagem</SelectItem>
                    <SelectItem value="transferido">Transferido</SelectItem>
                    <SelectItem value="site">Site</SelectItem>
                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </TabsContent>
          </Tabs>
          <Button className="w-full bg-purple-600 hover:bg-purple-700 mt-4">
            Aplicar alteração
          </Button>
        </DialogContent>
      </Dialog>

      {/* Export Modal */}
      <Dialog open={showExportModal} onOpenChange={setShowExportModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Exportar contatos</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>Campos para exportar</Label>
              <div className="space-y-2 mt-2">
                {["Nome", "Telefone", "Email", "Tags", "Negócios", "Data de criação"].map((field) => (
                  <div key={field} className="flex items-center space-x-2">
                    <Checkbox id={field} defaultChecked />
                    <Label htmlFor={field}>{field}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Label htmlFor="formato">Formato</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecionar formato" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="csv">CSV</SelectItem>
                  <SelectItem value="excel">Excel</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="nome-arquivo">Nome do arquivo</Label>
              <Input placeholder="contatos_exportados" />
            </div>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              Exportar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Contacts;

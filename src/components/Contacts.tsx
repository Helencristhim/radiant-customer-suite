
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
  ArrowUpDown,
  ChevronDown,
  ChevronUp
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
  const [showMoreFilters, setShowMoreFilters] = useState(false);

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

      {/* Main Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Buscar contatos..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter Row */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Select>
                <SelectTrigger className="w-full sm:w-[160px]">
                  <SelectValue placeholder="Campos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nome">Nome</SelectItem>
                  <SelectItem value="cpf">CPF</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="telefone">Telefone</SelectItem>
                  <SelectItem value="empresa">Empresa</SelectItem>
                  <SelectItem value="cargo">Cargo</SelectItem>
                  <SelectItem value="segmento">Segmento</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-full sm:w-[160px]">
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

              <Select>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Motivo de Perda" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nao-informar">Não informar</SelectItem>
                  <SelectItem value="duplicado-whatsapp">Duplicado por WhatsApp</SelectItem>
                  <SelectItem value="proximo-semestre">Próximo semestre</SelectItem>
                  <SelectItem value="interacao-instagram">Interação Instagram</SelectItem>
                  <SelectItem value="nao-atua-empresa">Não atua mais na empresa</SelectItem>
                  <SelectItem value="rh-exterior">RH no Exterior</SelectItem>
                  <SelectItem value="fora-perfil">Fora do perfil</SelectItem>
                  <SelectItem value="desconhece-cadastro">Desconhece o cadastro</SelectItem>
                </SelectContent>
              </Select>

              <Button 
                variant="outline" 
                onClick={() => setShowMoreFilters(!showMoreFilters)}
                className="flex items-center space-x-2"
              >
                <Filter className="h-4 w-4" />
                <span>Mais filtros</span>
                {showMoreFilters ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </div>

            {/* More Filters Section */}
            {showMoreFilters && (
              <div className="border-t pt-4">
                <h4 className="font-medium text-gray-700 mb-4">Filtros Avançados</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="filtro-data">Data de criação</Label>
                    <Input type="date" id="filtro-data" />
                  </div>

                  <div>
                    <Label>Com negócio em origens</Label>
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
                    <Label>Com negócio em etapa</Label>
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
                    <Label>Com negócio em status</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecionar status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ativo">Ativo</SelectItem>
                        <SelectItem value="perdido">Perdido</SelectItem>
                        <SelectItem value="ganho">Ganho</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Com/Sem dono do negócio</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecionar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="com">Com dono</SelectItem>
                        <SelectItem value="sem">Sem dono</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Com/Sem negócio</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecionar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="com">Com negócio</SelectItem>
                        <SelectItem value="sem">Sem negócio</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Com/Sem telefone</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecionar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="com">Com telefone</SelectItem>
                        <SelectItem value="sem">Sem telefone</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Campanhas de SMS</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecionar campanha" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="campanha-1">Campanha SMS 1</SelectItem>
                        <SelectItem value="campanha-2">Campanha SMS 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Campanhas de Voz</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecionar campanha" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="campanha-voz-1">Campanha Voz 1</SelectItem>
                        <SelectItem value="campanha-voz-2">Campanha Voz 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Campanhas de SMS Flash</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecionar campanha" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="campanha-flash-1">Campanha Flash 1</SelectItem>
                        <SelectItem value="campanha-flash-2">Campanha Flash 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}
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

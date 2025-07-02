
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, Plus, Settings, Users, Building } from "lucide-react";

const WhatsAppSettings = () => {
  const [attendants] = useState([
    {
      id: 1,
      name: "Walter Rogerio",
      email: "walter.rogerio@alumni.org.br",
      avatar: "WR",
      devices: "Atendimento Alumni - kids/YL/EA, Customer care - Alumni",
      mainDevice: "",
      permissions: "Padrão"
    },
    {
      id: 2,
      name: "Valdir Medeiros", 
      email: "valdir.junior@alumnibybetter.com.br",
      avatar: "V",
      devices: "Sales FAAP, B2B- Alumni by Better, B2B- Valdir",
      mainDevice: "",
      permissions: "Padrão"
    },
    {
      id: 3,
      name: "Tiago Santos",
      email: "tiago.santos@alumni.org.br", 
      avatar: "T",
      devices: "Atendimento Alumni - kids/YL/EA, Customer care - Alumni",
      mainDevice: "",
      permissions: "Padrão"
    },
    {
      id: 4,
      name: "Tatiane Lima",
      email: "tatiane.adelaide@alumni.org.br",
      avatar: "T",
      devices: "Atendimento Alumni - kids/YL/EA, Customer care - Alumni",
      mainDevice: "Atendimento Alumni - kids/YL/EA",
      permissions: "Padrão"
    },
    {
      id: 5,
      name: "Rodrigo Guedes",
      email: "rodrigo.guedes@alumnibybetter.com.br",
      avatar: "R",
      devices: "Sales FAAP, Better EdTech - vendas, Rodrigo Guedes +11",
      mainDevice: "",
      permissions: "Padrão"
    },
    {
      id: 6,
      name: "Rodrigo Credico",
      email: "rodrigoc@alumnibybetter.com.br",
      avatar: "R",
      devices: "Sales FAAP, Better EdTech - vendas, Envio de links - aulas +14",
      mainDevice: "",
      permissions: "Admin"
    },
    {
      id: 7,
      name: "Raphael Ruiz",
      email: "raphael.ruiz@betteredu.com.br",
      avatar: "R",
      devices: "Sales FAAP, Better EdTech - vendas, INSTITUTO MSI +16",
      mainDevice: "",
      permissions: "Padrão"
    },
    {
      id: 8,
      name: "Natasha Garcia",
      email: "natasha.garcia@alumnibybetter.com.br",
      avatar: "N",
      devices: "Sales FAAP, B2B- Alumni by Better",
      mainDevice: "B2B- Alumni by Better",
      permissions: "Padrão"
    }
  ]);

  const sectors = [
    { id: 1, name: "B2B - Alumni by Better", accounts: 3, attendants: 6, color: "bg-red-500" },
    { id: 2, name: "B2C - Comercial Alumni by Better", accounts: 16, attendants: 8, color: "bg-blue-500" },
    { id: 3, name: "COMERCIAL MI", accounts: 1, attendants: 2, color: "bg-teal-500" },
    { id: 4, name: "Customer care - Alumni by Better", accounts: 1, attendants: 6, color: "bg-yellow-500" },
    { id: 5, name: "Produtos Alumni", accounts: 1, attendants: 9, color: "bg-purple-500" }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <MessageCircle className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <CardTitle>WhatsApp</CardTitle>
              <p className="text-sm text-gray-600 mt-1">
                Configurações de canais e atendimento
              </p>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Tabs defaultValue="devices" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="devices">Dispositivos</TabsTrigger>
          <TabsTrigger value="users-permissions">Usuários e Permissões</TabsTrigger>
          <TabsTrigger value="sectors">Setores</TabsTrigger>
        </TabsList>

        <TabsContent value="devices" className="mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Configurações de atendentes</CardTitle>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Plus className="h-4 w-4 mr-2" />
                Adicionar dispositivo
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-600 border-b pb-2">
                  <div className="col-span-2">USUÁRIO</div>
                  <div className="col-span-4">DISPOSITIVOS QUE TEM ACESSO</div>
                  <div className="col-span-3">DISPOSITIVO PRINCIPAL</div>
                  <div className="col-span-2">PERMISSÕES</div>
                  <div className="col-span-1"></div>
                </div>
                
                {attendants.map((attendant) => (
                  <div key={attendant.id} className="grid grid-cols-12 gap-4 items-center py-3 border-b border-gray-100">
                    <div className="col-span-2 flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                        {attendant.avatar}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{attendant.name}</p>
                        <p className="text-sm text-gray-500">{attendant.email}</p>
                      </div>
                    </div>
                    
                    <div className="col-span-4">
                      <p className="text-sm text-gray-700">{attendant.devices}</p>
                    </div>
                    
                    <div className="col-span-3">
                      <p className="text-sm text-gray-700">{attendant.mainDevice}</p>
                    </div>
                    
                    <div className="col-span-2">
                      <Badge variant={attendant.permissions === "Admin" ? "default" : "secondary"}>
                        {attendant.permissions}
                      </Badge>
                    </div>
                    
                    <div className="col-span-1">
                      <Button variant="outline" size="sm">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users-permissions" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Usuários e Permissões</CardTitle>
              <p className="text-sm text-gray-600">
                Gerencie as permissões de acesso dos usuários
              </p>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Configurações de usuários e permissões</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sectors" className="mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Setores</CardTitle>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Plus className="h-4 w-4 mr-2" />
                Novo setor
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-600 border-b pb-2">
                  <div className="col-span-6">SETOR</div>
                  <div className="col-span-2">CONTA/DISPOSITIVO</div>
                  <div className="col-span-2">ATENDENTES</div>
                  <div className="col-span-2"></div>
                </div>
                
                {sectors.map((sector) => (
                  <div key={sector.id} className="grid grid-cols-12 gap-4 items-center py-3 border-b border-gray-100">
                    <div className="col-span-6 flex items-center space-x-3">
                      <div className={`w-8 h-8 ${sector.color} text-white rounded-lg flex items-center justify-center text-sm font-medium`}>
                        {sector.name.charAt(0)}
                      </div>
                      <span className="font-medium text-gray-900">{sector.name}</span>
                    </div>
                    
                    <div className="col-span-2">
                      <span className="text-gray-700">{sector.accounts}</span>
                    </div>
                    
                    <div className="col-span-2">
                      <span className="text-gray-700">{sector.attendants}</span>
                    </div>
                    
                    <div className="col-span-2 flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600">
                        <Button variant="ghost" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WhatsAppSettings;

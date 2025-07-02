
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { MessageCircle, Plus, Settings, Users, Building, Smartphone, QrCode } from "lucide-react";

const WhatsAppSettings = () => {
  const [showQRModal, setShowQRModal] = useState(false);
  const [showDeviceModal, setShowDeviceModal] = useState(false);

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

  const [devices] = useState([
    {
      id: 1,
      name: "Atendimento Alumni - kids/YL/EA",
      number: "+55 (11) 94599-2361",
      status: "connected",
      sector: "Customer care - Alumni by Better",
      attendants: 3
    },
    {
      id: 2,
      name: "B2B- Alumni by Better",
      number: "+55 (11) 97845-1234",
      status: "connected",
      sector: "B2B - Alumni by Better",
      attendants: 4
    },
    {
      id: 3,
      name: "Sales FAAP",
      number: "+55 (11) 95632-7890",
      status: "connected",
      sector: "B2C - Comercial Alumni by Better",
      attendants: 6
    },
    {
      id: 4,
      name: "Customer care - Alumni",
      number: "+55 (11) 91234-5678",
      status: "disconnected",
      sector: "Customer care - Alumni by Better",
      attendants: 0
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
              <CardTitle>WhatsApp Business</CardTitle>
              <p className="text-sm text-gray-600 mt-1">
                Configurações de canais e atendimento
              </p>
            </div>
          </div>
          <Button 
            className="bg-green-600 hover:bg-green-700"
            onClick={() => setShowDeviceModal(true)}
          >
            <Plus className="h-4 w-4 mr-2" />
            Novo Dispositivo
          </Button>
        </CardHeader>
      </Card>

      <Tabs defaultValue="devices" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="devices">
            <Smartphone className="h-4 w-4 mr-2" />
            Dispositivos
          </TabsTrigger>
          <TabsTrigger value="users-permissions">
            <Users className="h-4 w-4 mr-2" />
            Usuários e Permissões
          </TabsTrigger>
          <TabsTrigger value="sectors">
            <Building className="h-4 w-4 mr-2" />
            Setores
          </TabsTrigger>
        </TabsList>

        <TabsContent value="devices" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {devices.map((device) => (
              <Card key={device.id} className={`${device.status === 'connected' ? 'border-green-200 bg-green-50/30' : 'border-gray-200'}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-full ${device.status === 'connected' ? 'bg-green-100' : 'bg-gray-100'}`}>
                        <MessageCircle className={`h-6 w-6 ${device.status === 'connected' ? 'text-green-600' : 'text-gray-400'}`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{device.name}</CardTitle>
                        <p className="text-sm text-gray-600">{device.number}</p>
                      </div>
                    </div>
                    <Badge className={device.status === 'connected' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                      {device.status === 'connected' ? 'Conectado' : 'Desconectado'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Setor:</span>
                      <span className="text-sm font-medium">{device.sector}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Atendentes:</span>
                      <Badge variant="secondary">{device.attendants}</Badge>
                    </div>
                    <div className="flex space-x-2 pt-2">
                      {device.status === 'connected' ? (
                        <>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Settings className="h-4 w-4 mr-2" />
                            Configurar
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600">
                            Desconectar
                          </Button>
                        </>
                      ) : (
                        <Button 
                          size="sm" 
                          className="w-full bg-green-600 hover:bg-green-700"
                          onClick={() => setShowQRModal(true)}
                        >
                          <QrCode className="h-4 w-4 mr-2" />
                          Conectar
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="users-permissions" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Configurações de atendentes</CardTitle>
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
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* QR Code Modal */}
      <Dialog open={showQRModal} onOpenChange={setShowQRModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5 text-green-600" />
              <span>Novo dispositivo de WhatsApp</span>
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 text-center">
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-4">
                Abra o WhatsApp no seu celular e na aba de Configurações procure por Aparelhos conectados. E clique em Conectar um aparelho. Aponte a câmera do seu celular para o QR code abaixo.
              </p>
              
              <div className="w-48 h-48 bg-white border-2 border-gray-200 rounded-lg mx-auto flex items-center justify-center">
                <div className="text-center">
                  <QrCode className="h-16 w-16 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">QR Code</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" className="flex-1">
                Alterar configurações de sincronização
              </Button>
            </div>
            
            <p className="text-sm text-blue-600 cursor-pointer hover:underline">
              Use o WhatsApp no seu celular para escanear.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Device Modal */}
      <Dialog open={showDeviceModal} onOpenChange={setShowDeviceModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Adicionar Dispositivo WhatsApp</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome do Dispositivo
              </label>
              <Input placeholder="Ex: Atendimento Comercial" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Setor
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option value="">Selecione um setor</option>
                {sectors.map(sector => (
                  <option key={sector.id} value={sector.id}>{sector.name}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <Switch />
              <span className="text-sm text-gray-600">Dispositivo principal</span>
            </div>

            <div className="flex space-x-3">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => setShowDeviceModal(false)}
              >
                Cancelar
              </Button>
              <Button 
                className="flex-1 bg-green-600 hover:bg-green-700"
                onClick={() => {
                  setShowDeviceModal(false);
                  setShowQRModal(true);
                }}
              >
                Conectar
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WhatsAppSettings;

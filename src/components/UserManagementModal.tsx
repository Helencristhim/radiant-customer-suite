
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  User, 
  Shield, 
  ShieldCheck, 
  Building, 
  MessageSquare, 
  Trash2,
  Plus,
  Settings
} from "lucide-react";

interface UserManagementModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: any;
}

const UserManagementModal = ({ isOpen, onClose, user }: UserManagementModalProps) => {
  const [activeTab, setActiveTab] = useState("info");
  const [userInfo, setUserInfo] = useState(user || {});

  const departments = [
    { id: "b2b", name: "B2B - Alumni by Better", color: "bg-red-500", enabled: true },
    { id: "b2c", name: "B2C - Comercial Alumni by Better", color: "bg-blue-500", enabled: false },
    { id: "comercial-mi", name: "COMERCIAL MI", color: "bg-teal-500", enabled: false },
    { id: "customer-care", name: "Customer care - Alumni by Better", color: "bg-yellow-500", enabled: true },
    { id: "produtos", name: "Produtos Alumni", color: "bg-purple-500", enabled: false }
  ];

  const whatsappDevices = [
    { id: "device1", name: "Atendimento Alumni - kids/YL/EA", connected: true, isMain: true },
    { id: "device2", name: "B2B- Alumni by Better", connected: true, isMain: false },
    { id: "device3", name: "Customer care - Alumni", connected: false, isMain: false },
    { id: "device4", name: "Sales FAAP", connected: false, isMain: false }
  ];

  const permissions = [
    { id: "leads", name: "Gestão de Leads", enabled: true },
    { id: "attendance", name: "Central de Atendimento", enabled: true },
    { id: "campaigns", name: "Campanhas", enabled: false },
    { id: "reports", name: "Relatórios", enabled: true },
    { id: "integrations", name: "Integrações", enabled: false },
    { id: "settings", name: "Configurações", enabled: false }
  ];

  if (!user) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-medium text-lg">
                {user.name?.split(' ').map(n => n[0]).join('') || 'U'}
              </span>
            </div>
            <div>
              <h2 className="text-xl font-bold">Gerenciar Usuário</h2>
              <p className="text-gray-600">{user.name}</p>
            </div>
          </DialogTitle>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="info">Informações</TabsTrigger>
            <TabsTrigger value="departments">Departamentos</TabsTrigger>
            <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
            <TabsTrigger value="permissions">Permissões</TabsTrigger>
          </TabsList>

          <TabsContent value="info" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Informações Pessoais</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo
                    </label>
                    <Input 
                      value={userInfo.name || ''} 
                      onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input 
                      value={userInfo.email || ''} 
                      onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Função
                    </label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option value="admin">Administrador</option>
                      <option value="seller">Vendedor</option>
                      <option value="support">Suporte</option>
                      <option value="custom">Personalizado</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Status
                    </label>
                    <div className="flex items-center space-x-3 mt-3">
                      <Switch checked={userInfo.active !== false} />
                      <span className="text-sm text-gray-600">
                        {userInfo.active !== false ? 'Ativo' : 'Inativo'}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Último Login
                  </label>
                  <p className="text-sm text-gray-600">{userInfo.lastLogin || 'Nunca logou'}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="departments" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building className="h-5 w-5" />
                  <span>Acesso a Departamentos</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {departments.map((dept) => (
                    <div key={dept.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 ${dept.color} text-white rounded-lg flex items-center justify-center text-sm font-medium`}>
                          {dept.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium">{dept.name}</p>
                          <p className="text-sm text-gray-600">Departamento</p>
                        </div>
                      </div>
                      <Switch checked={dept.enabled} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="whatsapp" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5" />
                  <span>Dispositivos WhatsApp</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {whatsappDevices.map((device) => (
                    <div key={device.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 ${device.connected ? 'bg-green-500' : 'bg-gray-400'} text-white rounded-lg flex items-center justify-center text-sm font-medium`}>
                          W
                        </div>
                        <div>
                          <p className="font-medium">{device.name}</p>
                          <div className="flex items-center space-x-2">
                            <Badge className={device.connected ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                              {device.connected ? 'Conectado' : 'Desconectado'}
                            </Badge>
                            {device.isMain && (
                              <Badge variant="outline">Principal</Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch checked={device.connected} />
                        <Button variant="outline" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t">
                  <Button variant="outline" className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar Dispositivo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="permissions" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>Permissões do Sistema</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {permissions.map((permission) => (
                    <div key={permission.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Shield className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="font-medium">{permission.name}</p>
                          <p className="text-sm text-gray-600">Acesso ao módulo</p>
                        </div>
                      </div>
                      <Switch checked={permission.enabled} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-between items-center pt-6 border-t">
          <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
            <Trash2 className="h-4 w-4 mr-2" />
            Excluir Usuário
          </Button>
          <div className="flex space-x-3">
            <Button variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Salvar Alterações
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserManagementModal;

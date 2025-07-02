
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Users, Plus, Search, MoreHorizontal } from "lucide-react";

const UserManagement = () => {
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [users] = useState([
    {
      id: 1,
      name: "Carol Moraes",
      email: "carol.moraes@alumnibybetter.com.br",
      avatar: "C",
      role: "Administradores",
      active: true
    },
    {
      id: 2,
      name: "Adm Better",
      email: "adm@betteredu.com.br",
      avatar: "A",
      role: "Administradores", 
      active: true
    },
    {
      id: 3,
      name: "Edson Ribeiro",
      email: "edson.barbosa@alumni.org.br",
      avatar: "E",
      role: "Personalizado",
      active: true
    },
    {
      id: 4,
      name: "Andressa Neves",
      email: "nuvramarketing@gmail.com",
      avatar: "A",
      role: "Personalizado",
      active: false
    },
    {
      id: 5,
      name: "Larissa Gomes",
      email: "larissa.gomes@alumnibybetter.com.br",
      avatar: "L",
      role: "Personalizado",
      active: true
    }
  ]);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <CardTitle>Usuários</CardTitle>
              <p className="text-sm text-gray-600 mt-1">
                Aqui você pode adicionar e editar os usuários.
              </p>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">
          Assentos ativos: 23/28
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="text-blue-600">
            Grupos de permissão
          </Button>
          <Button 
            className="bg-purple-600 hover:bg-purple-700"
            onClick={() => setShowAddUserModal(true)}
          >
            <Plus className="h-4 w-4 mr-2" />
            Adicionar usuário
          </Button>
        </div>
      </div>

      {/* Users Table */}
      <Card>
        <CardContent className="p-0">
          <div className="p-4 border-b">
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm text-gray-600">Selecionar todos</span>
              </label>
            </div>
          </div>
          
          <div className="space-y-0">
            {users.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50">
                <div className="flex items-center space-x-4">
                  <input type="checkbox" className="rounded" />
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      {user.avatar}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Badge 
                    variant={user.role === "Administradores" ? "default" : "secondary"}
                    className={user.role === "Administradores" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"}
                  >
                    {user.role}
                  </Badge>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">ON</span>
                    <Switch checked={user.active} />
                  </div>
                  
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Add User Modal */}
      <Dialog open={showAddUserModal} onOpenChange={setShowAddUserModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adicionar usuário</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <Input placeholder="usuario@empresa.com" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Setores
              </label>
              <Button variant="outline" className="w-full justify-start text-gray-500">
                Selecione um ou mais setores
              </Button>
            </div>

            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700"
              onClick={() => setShowAddUserModal(false)}
            >
              Enviar convite →
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserManagement;

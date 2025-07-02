
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Building, Search, Edit, Trash2, Plus, User, X } from "lucide-react";

const SectorManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [selectedSector, setSelectedSector] = useState(null);

  const [sectors] = useState([
    { 
      id: 1, 
      name: "B2B - Alumni by Better", 
      accounts: 3, 
      attendants: 6, 
      color: "bg-red-500",
      users: [
        { id: 1, name: "Adm Better", email: "adm@betteredu.com.br", avatar: "A" },
        { id: 2, name: "Helen Mendes", email: "helen.mendes@betteredu.com.br", avatar: "H" },
        { id: 3, name: "Jessica Delena", email: "jessica.fraga@alumni.org.br", avatar: "J" },
        { id: 4, name: "Rodrigo Guedes", email: "rodrigo.guedes@alumnibybetter.com.br", avatar: "R" },
        { id: 5, name: "Rodrigo Credico", email: "rodrigoc@alumnibybetter.com.br", avatar: "R" },
        { id: 6, name: "Valdir Medeiros", email: "valdir.junior@alumnibybetter.com.br", avatar: "V" }
      ]
    },
    { 
      id: 2, 
      name: "B2C - Comercial Alumni by Better", 
      accounts: 16, 
      attendants: 8, 
      color: "bg-blue-500",
      users: []
    },
    { 
      id: 3, 
      name: "COMERCIAL MI", 
      accounts: 1, 
      attendants: 2, 
      color: "bg-teal-500",
      users: []
    },
    { 
      id: 4, 
      name: "Customer care - Alumni by Better", 
      accounts: 1, 
      attendants: 6, 
      color: "bg-yellow-500",
      users: []
    },
    { 
      id: 5, 
      name: "Produtos Alumni", 
      accounts: 1, 
      attendants: 9, 
      color: "bg-purple-500",
      users: []
    }
  ]);

  const colorOptions = [
    "bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", 
    "bg-purple-500", "bg-pink-500", "bg-indigo-500", "bg-teal-500",
    "bg-orange-500", "bg-cyan-500", "bg-emerald-500", "bg-lime-500",
    "bg-amber-500", "bg-rose-500", "bg-violet-500", "bg-sky-500",
    "bg-slate-500", "bg-gray-500", "bg-neutral-500", "bg-stone-500"
  ];

  const handleEditSector = (sector) => {
    setSelectedSector(sector);
    setShowEditModal(true);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Building className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <CardTitle>Setores</CardTitle>
              <p className="text-sm text-gray-600 mt-1">
                Gerencie seus setores
              </p>
            </div>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Plus className="h-4 w-4 mr-2" />
            Novo setor
          </Button>
        </CardHeader>
      </Card>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Buscar setores..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Sectors Table */}
      <Card>
        <CardContent className="p-0">
          <div className="space-y-0">
            <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-600 border-b p-4">
              <div className="col-span-6">SETOR</div>
              <div className="col-span-2">CONTA/DISPOSITIVO</div>
              <div className="col-span-2">ATENDENTES</div>
              <div className="col-span-2"></div>
            </div>
            
            {sectors.map((sector) => (
              <div key={sector.id} className="grid grid-cols-12 gap-4 items-center p-4 border-b border-gray-100 hover:bg-gray-50">
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
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleEditSector(sector)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Edit Sector Modal */}
      <Dialog open={showEditModal} onOpenChange={setShowEditModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Editar setor</DialogTitle>
          </DialogHeader>
          
          {selectedSector && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome do setor
                </label>
                <Input defaultValue={selectedSector.name} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Adicione usuários a este setor
                </label>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setShowAddUserModal(true)}
                >
                  Adicione um usuário no setor
                </Button>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Usuários selecionados
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input placeholder="Buscar usuários..." className="pl-10" />
                </div>
                
                <div className="space-y-2 mt-4 max-h-60 overflow-y-auto">
                  {selectedSector.users.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                          {user.avatar}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{user.name}</p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Cores
                </label>
                <div className="grid grid-cols-10 gap-2">
                  {colorOptions.map((color, index) => (
                    <button
                      key={index}
                      className={`w-8 h-8 ${color} rounded-lg border-2 ${
                        selectedSector.color === color ? 'border-gray-900' : 'border-transparent'
                      } hover:border-gray-400 transition-colors`}
                      onClick={() => {
                        setSelectedSector({...selectedSector, color});
                      }}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ícones
                </label>
                <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center">
                  <Building className="h-8 w-8 text-white" />
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <Button variant="outline" onClick={() => setShowEditModal(false)}>
                  Cancelar
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Salvar
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SectorManagement;

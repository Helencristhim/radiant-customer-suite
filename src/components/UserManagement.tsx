
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Shield, 
  ShieldCheck,
  User,
  Users,
  Settings,
  Activity
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UserManagement = () => {
  const users = [
    {
      id: 1,
      name: "João Silva",
      email: "joao@empresa.com",
      role: "Admin",
      status: "active",
      lastLogin: "Há 2 horas",
      leadsAssigned: 234,
      permissions: ["all"]
    },
    {
      id: 2,
      name: "Maria Santos",
      email: "maria@empresa.com",
      role: "Vendedor",
      status: "active",
      lastLogin: "Há 1 dia",
      leadsAssigned: 156,
      permissions: ["leads", "attendance"]
    },
    {
      id: 3,
      name: "Pedro Costa",
      email: "pedro@empresa.com",
      role: "Suporte",
      status: "active",
      lastLogin: "Há 3 horas",
      leadsAssigned: 89,
      permissions: ["attendance", "reports"]
    },
    {
      id: 4,
      name: "Ana Oliveira",
      email: "ana@empresa.com",
      role: "Vendedor",
      status: "inactive",
      lastLogin: "Há 1 semana",
      leadsAssigned: 45,
      permissions: ["leads"]
    }
  ];

  const activityLogs = [
    {
      id: 1,
      user: "João Silva",
      action: "Criou novo lead",
      target: "Habudia Lima karaja",
      timestamp: "Há 5 min"
    },
    {
      id: 2,
      user: "Maria Santos",
      action: "Moveu lead para Follow Up",
      target: "Anna Claudia Rodrigues",
      timestamp: "Há 15 min"
    },
    {
      id: 3,
      user: "Pedro Costa",
      action: "Respondeu conversa",
      target: "WhatsApp - Danilo",
      timestamp: "Há 32 min"
    },
    {
      id: 4,
      user: "João Silva",
      action: "Criou nova campanha",
      target: "E-mail Follow-up",
      timestamp: "Há 1 hora"
    }
  ];

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "Admin":
        return <Badge className="bg-red-100 text-red-800">Admin</Badge>;
      case "Vendedor":
        return <Badge className="bg-blue-100 text-blue-800">Vendedor</Badge>;
      case "Suporte":
        return <Badge className="bg-green-100 text-green-800">Suporte</Badge>;
      default:
        return <Badge variant="outline">{role}</Badge>;
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "Admin":
        return <ShieldCheck className="h-4 w-4 text-red-600" />;
      case "Vendedor":
        return <User className="h-4 w-4 text-blue-600" />;
      case "Suporte":
        return <Shield className="h-4 w-4 text-green-600" />;
      default:
        return <User className="h-4 w-4" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Ativo</Badge>;
      case "inactive":
        return <Badge variant="outline">Inativo</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const totalUsers = users.length;
  const activeUsers = users.filter(u => u.status === 'active').length;
  const adminUsers = users.filter(u => u.role === 'Admin').length;
  const totalLeads = users.reduce((sum, u) => sum + u.leadsAssigned, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Gerenciamento de Usuários</h2>
          <p className="text-gray-600">Gerencie permissões e atividades da equipe</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Configurações
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Novo Usuário
          </Button>
        </div>
      </div>

      {/* User Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total de Usuários</p>
                <p className="text-2xl font-bold">{totalUsers}</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Usuários Ativos</p>
                <p className="text-2xl font-bold text-green-600">{activeUsers}</p>
              </div>
              <User className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Administradores</p>
                <p className="text-2xl font-bold text-red-600">{adminUsers}</p>
              </div>
              <ShieldCheck className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Leads Atribuídos</p>
                <p className="text-2xl font-bold text-purple-600">{totalLeads}</p>
              </div>
              <Activity className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Users List */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Lista de Usuários</CardTitle>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Buscar usuários..."
                    className="pl-10 w-64"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-medium text-gray-600">Usuário</th>
                      <th className="text-left p-4 font-medium text-gray-600">Função</th>
                      <th className="text-left p-4 font-medium text-gray-600">Status</th>
                      <th className="text-left p-4 font-medium text-gray-600">Leads</th>
                      <th className="text-left p-4 font-medium text-gray-600">Último Login</th>
                      <th className="text-left p-4 font-medium text-gray-600">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id} className="border-b hover:bg-gray-50">
                        <td className="p-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-blue-600 font-medium">
                                {user.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <p className="font-medium">{user.name}</p>
                              <p className="text-sm text-gray-600">{user.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center space-x-2">
                            {getRoleIcon(user.role)}
                            {getRoleBadge(user.role)}
                          </div>
                        </td>
                        <td className="p-4">
                          {getStatusBadge(user.status)}
                        </td>
                        <td className="p-4">
                          <Badge variant="secondary">{user.leadsAssigned}</Badge>
                        </td>
                        <td className="p-4">
                          <span className="text-sm text-gray-600">{user.lastLogin}</span>
                        </td>
                        <td className="p-4">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <Settings className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem>
                                <Edit className="h-4 w-4 mr-2" />
                                Editar
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Shield className="h-4 w-4 mr-2" />
                                Permissões
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                <Trash2 className="h-4 w-4 mr-2" />
                                Remover
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Activity Log */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Log de Atividades</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activityLogs.map((log) => (
                  <div key={log.id} className="border-l-2 border-blue-500 pl-4 pb-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium text-sm">{log.user}</p>
                        <p className="text-sm text-gray-600">{log.action}</p>
                        <p className="text-sm text-blue-600">{log.target}</p>
                      </div>
                      <span className="text-xs text-gray-500">{log.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Role Permissions */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Permissões por Função</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <ShieldCheck className="h-4 w-4 text-red-600" />
                    <span className="font-medium">Admin</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    Acesso total ao sistema, gerenciamento de usuários, configurações
                  </div>
                </div>
                <div className="border rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <User className="h-4 w-4 text-blue-600" />
                    <span className="font-medium">Vendedor</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    Gestão de leads, funis de venda, atendimento, campanhas
                  </div>
                </div>
                <div className="border rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="h-4 w-4 text-green-600" />
                    <span className="font-medium">Suporte</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    Central de atendimento, visualização de relatórios
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;

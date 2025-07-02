
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Download, 
  Calendar, 
  Filter,
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  MessageSquare,
  Mail,
  Phone
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const Reports = () => {
  const monthlyData = [
    { month: 'Jan', leads: 145, conversions: 32, revenue: 15600 },
    { month: 'Fev', leads: 189, conversions: 43, revenue: 21500 },
    { month: 'Mar', leads: 234, conversions: 56, revenue: 28900 },
    { month: 'Abr', leads: 201, conversions: 48, revenue: 24300 },
    { month: 'Mai', leads: 278, conversions: 67, revenue: 33800 },
    { month: 'Jun', leads: 312, conversions: 78, revenue: 39600 }
  ];

  const channelData = [
    { name: 'WhatsApp', value: 547, color: '#25D366' },
    { name: 'Instagram', value: 289, color: '#E4405F' },
    { name: 'E-mail', value: 156, color: '#1DA1F2' },
    { name: 'Telefone', value: 89, color: '#FF6B35' },
    { name: 'Site', value: 123, color: '#6C5CE7' }
  ];

  const conversionFunnelData = [
    { stage: 'Visitantes', count: 2847, conversion: 100 },
    { stage: 'Leads', count: 1874, conversion: 65.8 },
    { stage: '1º Contato', count: 908, conversion: 48.5 },
    { stage: 'Follow Up', count: 319, conversion: 35.1 },
    { stage: 'Fechado', count: 240, conversion: 75.2 }
  ];

  const topPerformers = [
    { name: 'Vendedor A', leads: 234, conversions: 45, rate: 19.2 },
    { name: 'Vendedor B', leads: 189, conversions: 38, rate: 20.1 },
    { name: 'Vendedor C', leads: 156, conversions: 29, rate: 18.6 },
    { name: 'Vendedor D', leads: 145, conversions: 25, rate: 17.2 }
  ];

  const kpis = [
    {
      title: "Leads Totais",
      value: "1,874",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Taxa de Conversão",
      value: "23.4%",
      change: "+2.1%",
      trend: "up",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      title: "Receita Total",
      value: "R$ 292.150",
      change: "+15.8%",
      trend: "up",
      icon: DollarSign,
      color: "text-purple-600"
    },
    {
      title: "Ticket Médio",
      value: "R$ 1.217",
      change: "-3.2%",
      trend: "down",
      icon: DollarSign,
      color: "text-orange-600"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Relatórios e BI</h2>
          <p className="text-gray-600">Análise completa de performance e métricas</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Período
          </Button>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, index) => {
          const Icon = kpi.icon;
          const TrendIcon = kpi.trend === 'up' ? TrendingUp : TrendingDown;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{kpi.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <TrendIcon className={`h-3 w-3 ${kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}`} />
                      <span className={`text-sm font-medium ${kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {kpi.change}
                      </span>
                    </div>
                  </div>
                  <div className="p-3 rounded-full bg-gray-50">
                    <Icon className={`h-6 w-6 ${kpi.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="leads">Leads</TabsTrigger>
          <TabsTrigger value="sales">Vendas</TabsTrigger>
          <TabsTrigger value="team">Equipe</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Performance Mensal */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Mensal</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="leads" fill="#3B82F6" name="Leads" />
                    <Bar dataKey="conversions" fill="#10B981" name="Conversões" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Origem dos Leads */}
            <Card>
              <CardHeader>
                <CardTitle>Origem dos Leads</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={channelData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {channelData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Funil de Conversão */}
          <Card>
            <CardHeader>
              <CardTitle>Funil de Conversão</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {conversionFunnelData.map((stage, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{stage.stage}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">{stage.count.toLocaleString()}</span>
                        <Badge variant="secondary">{stage.conversion}%</Badge>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${(stage.count / conversionFunnelData[0].count) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="leads" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Leads por Canal */}
            <Card>
              <CardHeader>
                <CardTitle>Leads por Canal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {channelData.map((channel, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: channel.color }}
                        />
                        <span className="font-medium">{channel.name}</span>
                      </div>
                      <Badge variant="secondary">{channel.value}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Evolução de Leads */}
            <Card>
              <CardHeader>
                <CardTitle>Evolução de Leads</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="leads" 
                      stroke="#3B82F6" 
                      strokeWidth={2}
                      name="Novos Leads"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sales" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance de Vendas</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="revenue" fill="#8B5CF6" name="Receita (R$)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance da Equipe</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-medium text-gray-600">Vendedor</th>
                      <th className="text-left p-4 font-medium text-gray-600">Leads</th>
                      <th className="text-left p-4 font-medium text-gray-600">Conversões</th>
                      <th className="text-left p-4 font-medium text-gray-600">Taxa</th>
                      <th className="text-left p-4 font-medium text-gray-600">Performance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topPerformers.map((performer, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-blue-600 font-medium text-sm">
                                {performer.name.charAt(performer.name.length - 1)}
                              </span>
                            </div>
                            <span className="font-medium">{performer.name}</span>
                          </div>
                        </td>
                        <td className="p-4">{performer.leads}</td>
                        <td className="p-4">{performer.conversions}</td>
                        <td className="p-4">
                          <Badge className="bg-green-100 text-green-800">
                            {performer.rate}%
                          </Badge>
                        </td>
                        <td className="p-4">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${performer.rate * 4}%` }}
                            />
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

export default Reports;


import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign,
  Calendar,
  Filter,
  Download,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Facebook,
  Chrome
} from "lucide-react";

const Reports = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [metaAdsConnected, setMetaAdsConnected] = useState(false);
  const [googleAdsConnected, setGoogleAdsConnected] = useState(false);

  const metaAdsMetrics = {
    totalLeads: 1247,
    leadsWithWhatsApp: 1086,
    leadsWithEmail: 892,
    cac: 45.30,
    spend: 12450.00,
    conversions: 89
  };

  const googleAdsMetrics = {
    totalLeads: 856,
    leadsWithWhatsApp: 743,
    leadsWithEmail: 678,
    cac: 52.80,
    spend: 8930.00,
    conversions: 67
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Relatórios</h2>
          <p className="text-gray-600">Análise de performance e métricas de leads</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <RefreshCw className="h-4 w-4 mr-2" />
            Atualizar
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total de Leads</p>
                <p className="text-2xl font-bold">2,103</p>
                <p className="text-xs text-green-600">+12% vs mês anterior</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">CAC Médio</p>
                <p className="text-2xl font-bold">R$ 48,50</p>
                <p className="text-xs text-red-600">+5% vs mês anterior</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Conversões</p>
                <p className="text-2xl font-bold">156</p>
                <p className="text-xs text-green-600">+18% vs mês anterior</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Investimento</p>
                <p className="text-2xl font-bold">R$ 21,380</p>
                <p className="text-xs text-gray-600">Este mês</p>
              </div>
              <BarChart3 className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Reports Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="meta-ads">Meta Ads</TabsTrigger>
          <TabsTrigger value="google-ads">Google Ads</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Filtros de Data</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Data Inicial
                    </label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Data Final
                    </label>
                    <Input type="date" />
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">Hoje</Button>
                  <Button variant="outline" size="sm">Esta Semana</Button>
                  <Button variant="outline" size="sm">Este Mês</Button>
                  <Button variant="outline" size="sm">Últimos 30 dias</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Métricas Consolidadas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Leads com WhatsApp válido</span>
                    <span className="font-bold">1,829 (87%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Leads com email válido</span>
                    <span className="font-bold">1,570 (75%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Taxa de conversão</span>
                    <span className="font-bold">7.4%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="meta-ads" className="mt-6">
          <div className="space-y-6">
            {/* Meta Ads Connection */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Facebook className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle>Meta Ads Integration</CardTitle>
                    <p className="text-sm text-gray-600">Conecte sua conta Meta Ads para relatórios detalhados</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">Status:</span>
                    {metaAdsConnected ? (
                      <Badge className="bg-green-100 text-green-800">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Conectado
                      </Badge>
                    ) : (
                      <Badge variant="outline">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        Desconectado
                      </Badge>
                    )}
                  </div>
                  <Switch 
                    checked={metaAdsConnected} 
                    onCheckedChange={setMetaAdsConnected}
                  />
                </div>
              </CardHeader>
            </Card>

            {/* Meta Ads Metrics */}
            {metaAdsConnected && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-4">
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-600">Total de Leads</p>
                      <p className="text-3xl font-bold text-blue-600">{metaAdsMetrics.totalLeads.toLocaleString()}</p>
                      <p className="text-xs text-gray-500 mt-1">Meta Ads</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-600">CAC</p>
                      <p className="text-3xl font-bold text-green-600">R$ {metaAdsMetrics.cac.toFixed(2)}</p>
                      <p className="text-xs text-gray-500 mt-1">Custo por Lead</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-600">Conversões</p>
                      <p className="text-3xl font-bold text-purple-600">{metaAdsMetrics.conversions}</p>
                      <p className="text-xs text-gray-500 mt-1">Este mês</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="md:col-span-3">
                  <CardHeader>
                    <CardTitle>Detalhamento Meta Ads</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-gray-600">Leads com WhatsApp</p>
                        <p className="text-xl font-bold">{metaAdsMetrics.leadsWithWhatsApp}</p>
                        <p className="text-xs text-blue-600">{((metaAdsMetrics.leadsWithWhatsApp / metaAdsMetrics.totalLeads) * 100).toFixed(1)}%</p>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <p className="text-sm text-gray-600">Leads com Email</p>
                        <p className="text-xl font-bold">{metaAdsMetrics.leadsWithEmail}</p>
                        <p className="text-xs text-green-600">{((metaAdsMetrics.leadsWithEmail / metaAdsMetrics.totalLeads) * 100).toFixed(1)}%</p>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <p className="text-sm text-gray-600">Investimento</p>
                        <p className="text-xl font-bold">R$ {metaAdsMetrics.spend.toLocaleString()}</p>
                        <p className="text-xs text-purple-600">Este período</p>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-lg">
                        <p className="text-sm text-gray-600">ROAS</p>
                        <p className="text-xl font-bold">3.2x</p>
                        <p className="text-xs text-orange-600">Return on Ad Spend</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {!metaAdsConnected && (
              <Card>
                <CardContent className="p-8 text-center">
                  <Facebook className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Conecte sua conta Meta Ads</h3>
                  <p className="text-gray-600 mb-4">Conecte sua conta para visualizar relatórios detalhados de leads do Facebook e Instagram.</p>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Facebook className="h-4 w-4 mr-2" />
                    Conectar Meta Ads
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="google-ads" className="mt-6">
          <div className="space-y-6">
            {/* Google Ads Connection */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Chrome className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <CardTitle>Google Ads Integration</CardTitle>
                    <p className="text-sm text-gray-600">Conecte sua conta Google Ads para relatórios detalhados</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">Status:</span>
                    {googleAdsConnected ? (
                      <Badge className="bg-green-100 text-green-800">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Conectado
                      </Badge>
                    ) : (
                      <Badge variant="outline">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        Desconectado
                      </Badge>
                    )}
                  </div>
                  <Switch 
                    checked={googleAdsConnected} 
                    onCheckedChange={setGoogleAdsConnected}
                  />
                </div>
              </CardHeader>
            </Card>

            {/* Google Ads Metrics */}
            {googleAdsConnected && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-4">
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-600">Total de Leads</p>
                      <p className="text-3xl font-bold text-red-600">{googleAdsMetrics.totalLeads.toLocaleString()}</p>
                      <p className="text-xs text-gray-500 mt-1">Google Ads</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-600">CAC</p>
                      <p className="text-3xl font-bold text-green-600">R$ {googleAdsMetrics.cac.toFixed(2)}</p>
                      <p className="text-xs text-gray-500 mt-1">Custo por Lead</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-600">Conversões</p>
                      <p className="text-3xl font-bold text-purple-600">{googleAdsMetrics.conversions}</p>
                      <p className="text-xs text-gray-500 mt-1">Este mês</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="md:col-span-3">
                  <CardHeader>
                    <CardTitle>Detalhamento Google Ads</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-gray-600">Leads com WhatsApp</p>
                        <p className="text-xl font-bold">{googleAdsMetrics.leadsWithWhatsApp}</p>
                        <p className="text-xs text-blue-600">{((googleAdsMetrics.leadsWithWhatsApp / googleAdsMetrics.totalLeads) * 100).toFixed(1)}%</p>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <p className="text-sm text-gray-600">Leads com Email</p>
                        <p className="text-xl font-bold">{googleAdsMetrics.leadsWithEmail}</p>
                        <p className="text-xs text-green-600">{((googleAdsMetrics.leadsWithEmail / googleAdsMetrics.totalLeads) * 100).toFixed(1)}%</p>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <p className="text-sm text-gray-600">Investimento</p>
                        <p className="text-xl font-bold">R$ {googleAdsMetrics.spend.toLocaleString()}</p>
                        <p className="text-xs text-purple-600">Este período</p>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-lg">
                        <p className="text-sm text-gray-600">CPC Médio</p>
                        <p className="text-xl font-bold">R$ 2.45</p>
                        <p className="text-xs text-orange-600">Custo por Clique</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {!googleAdsConnected && (
              <Card>
                <CardContent className="p-8 text-center">
                  <Chrome className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Conecte sua conta Google Ads</h3>
                  <p className="text-gray-600 mb-4">Conecte sua conta para visualizar relatórios detalhados de leads do Google Ads.</p>
                  <Button className="bg-red-600 hover:bg-red-700">
                    <Chrome className="h-4 w-4 mr-2" />
                    Conectar Google Ads
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Reports;

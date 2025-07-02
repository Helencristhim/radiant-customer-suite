
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, User, Clock, DollarSign } from "lucide-react";

const PhoneSettings = () => {
  const [calls] = useState([
    {
      id: 1,
      dealName: "Renata Hebraica",
      userAvatar: "W",
      userName: "Walter Rogerio",
      userEmail: "walter.rogerio@alumni.org.br",
      phone: "(11) 99731-2328",
      date: "02/07/2025",
      duration: "8 mins 25 segs",
      value: "R$ 1,98"
    },
    {
      id: 2,
      dealName: "Renata Hebraica",
      userAvatar: "W", 
      userName: "Walter Rogerio",
      userEmail: "walter.rogerio@alumni.org.br",
      phone: "(11) 99731-2328",
      date: "02/07/2025",
      duration: "4 segs",
      value: "R$ 0,22"
    },
    {
      id: 3,
      dealName: "Teacher Talita Moreira",
      userAvatar: "T",
      userName: "Tatiane Lima",
      userEmail: "tatiane.adelaide@alumni.org.br",
      phone: "(11) 94783-8803",
      date: "02/07/2025",
      duration: "1 min 32 segs",
      value: "R$ 0,44"
    },
    {
      id: 4,
      dealName: "Luciana",
      userAvatar: "R",
      userName: "Rodrigo Guedes",
      userEmail: "rodrigo.guedes@alumnibybetter.com.br",
      phone: "(11) 98690-8068",
      date: "02/07/2025",
      duration: "4 segs",
      value: "R$ 0,22"
    },
    {
      id: 5,
      dealName: "Rogerio Liporaci",
      userAvatar: "R",
      userName: "Rodrigo Guedes", 
      userEmail: "rodrigo.guedes@alumnibybetter.com.br",
      phone: "(11) 98182-4202",
      date: "01/07/2025",
      duration: "15 segs",
      value: ""
    },
    {
      id: 6,
      dealName: "Kaique eduardo",
      userAvatar: "F",
      userName: "Fernanda Soares",
      userEmail: "fernanda.soares@alumni.org.br",
      phone: "(11) 97444-2396",
      date: "01/07/2025",
      duration: "7 mins 17 segs",
      value: "R$ 1,76"
    }
  ]);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Phone className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <CardTitle>Telefonia</CardTitle>
              <p className="text-sm text-gray-600 mt-1">
                Informações sobre saldo e ligações
              </p>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Current Balance */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">SALDO ATUAL</p>
              <p className="text-3xl font-bold text-gray-900">R$ 161,25</p>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Adicionar saldo
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Calls Table */}
      <Card>
        <CardContent className="p-0">
          <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-600 border-b p-4">
            <div className="col-span-2">NEGÓCIO</div>
            <div className="col-span-2">USUÁRIO</div>
            <div className="col-span-2">TELEFONE</div>
            <div className="col-span-2">DATA</div>
            <div className="col-span-2">DURAÇÃO</div>
            <div className="col-span-2">VALOR</div>
          </div>
          
          <div className="space-y-0">
            {calls.map((call) => (
              <div key={call.id} className="grid grid-cols-12 gap-4 items-center p-4 border-b border-gray-100 hover:bg-gray-50">
                <div className="col-span-2 flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <span className="text-sm text-gray-900">{call.dealName}</span>
                </div>
                
                <div className="col-span-2 flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-500 text-white rounded-full flex items-center justify-center text-xs font-medium">
                    {call.userAvatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{call.userName}</p>
                    <p className="text-xs text-gray-500">{call.userEmail}</p>
                  </div>
                </div>
                
                <div className="col-span-2">
                  <span className="text-sm text-gray-700">{call.phone}</span>
                </div>
                
                <div className="col-span-2">
                  <span className="text-sm text-gray-700">{call.date}</span>
                </div>
                
                <div className="col-span-2">
                  <span className="text-sm text-gray-700">{call.duration}</span>
                </div>
                
                <div className="col-span-2">
                  <span className="text-sm font-medium text-gray-900">{call.value}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PhoneSettings;

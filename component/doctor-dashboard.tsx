import { Avatar, Badge, Button, Card, CardBody, CardHeader } from "@heroui/react"
import { Bell, User, Activity, Settings, Zap, Target, Minus, Edit, MoreHorizontal, ShoppingCart } from "lucide-react"

export function DoctorDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
     <div className="hidden lg:flex w-16 bg-white border-r flex-col items-center py-6 space-y-6">
        <Button variant="ghost" className="rounded-full p-2 bg-blue-500 text-white">
          <Activity className="w-5 h-5" />
        </Button>
        <Button variant="solid" className="text-black">
          <Activity className="h-5 w-5" />
        </Button>
        <Button variant="solid" className="text-black">
          <Settings className="h-5 w-5" />
        </Button>
        <Button variant="solid" className="text-black">
          <Zap className="h-5 w-5" />
        </Button>
        <Button variant="solid" className="text-black">
          <Target className="h-5 w-5" />
        </Button>
        <Button variant="solid" className="text-black">
          <Minus className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex-1">
        {/* Header */}
       <header className="bg-white border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
                <span className="text-xl font-semibold text-black">genetiQ</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Button
                  variant="ghost"
                  className="text-blue-600 border-b-2 border-blue-600"
                >
                  Dashboard
                </Button>
                <Button variant="ghost" className="text-black">Goals</Button>
                <Button variant="ghost" className="text-black">Report</Button>
                <Button variant="ghost" className="text-black">GenetiQ Pharmacy</Button>
                <Button variant="ghost" className="text-black">Data Management</Button>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="p-3 bg-[#F6F6F6] rounded-full">
                <Bell className="h-5 w-5 text-[#FF4E28]" />
              </Button>
              <Button variant="ghost" className="relative">
                <ShoppingCart className="h-5 w-5 text-black" />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs text-black">
                  5
                </Badge>
              </Button>
              <Avatar>
                <User className="h-4 w-4 text-black" />
              </Avatar>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Overview</h1>
            <p className="text-gray-600">Patient Health</p>
          </div>

          {/* Patient Info Card */}
          <Card className="mb-6 bg-[#F6F6F605] rounded-lg"
              style={{
                backdropFilter: "blur(24px)",
                boxShadow: "0px 2px 26px 0px #00000014",
              }}>
            <CardBody className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-black">
                  <Avatar className="w-12 h-12">
                    MB
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">Ahmed Ali (Mr)</h3>
                    <p className="text-sm text-gray-600">MRN: 2024-5678 • 49 year</p>
                  </div>
                </div>
                <div className="flex items-center space-x-8 text-sm text-black">
                  <div>
                    <p className="text-gray-600">Weight</p>
                    <p className="font-medium">
                      78 kg <span className="text-gray-500">+1.5 kg</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Height</p>
                    <p className="font-medium">5.4 feet</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Blood Type</p>
                    <p className="font-medium">O+</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Sex</p>
                    <p className="font-medium">Male</p>
                  </div>
                  <div>
                    <p className="text-gray-600">DoB</p>
                    <p className="font-medium">10/08/1968</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Last Visit</p>
                    <p className="font-medium">May 3</p>
                  </div>
                </div>
                <div className="text-center text-black">
                  <div className="relative w-20 h-20 mb-2">
                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="3"
                        strokeDasharray="72, 100"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold">72%</span>
                    </div>
                  </div>
                  <p className="text-sm text-black">Above Average</p>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Health Conditions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 text-black">
             <Card className="mb-6 bg-[#F6F6F605] rounded-lg"
              style={{
                backdropFilter: "blur(24px)",
                boxShadow: "0px 2px 26px 0px #00000014",
              }}>
              <CardBody className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Hypertension</h3>
                  <Button className="text-blue-600 p-0 h-auto">
                    View report
                  </Button>
                </div>
                <div className="flex items-center space-x-2 mb-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-2xl font-bold">89</span>
                  <span className="text-gray-600">/100</span>
                </div>
                <p className="text-xs text-gray-600">12 mo. ago</p>
                <p className="text-xs text-gray-600">Last check</p>
              </CardBody>
            </Card>
             <Card className="mb-6 bg-[#F6F6F605] rounded-lg"
              style={{
                backdropFilter: "blur(24px)",
                boxShadow: "0px 2px 26px 0px #00000014",
              }}>
              <CardBody className="p-4">
                <h3 className="font-medium mb-2">Pulmonary Hypertension</h3>
                <div className="flex items-center space-x-2 mb-1">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-2xl font-bold">56</span>
                  <span className="text-gray-600">/100</span>
                </div>
                <p className="text-xs text-gray-600">12 mo. ago</p>
                <p className="text-xs text-gray-600">Last check</p>
              </CardBody>
            </Card>
             <Card className="mb-6 bg-[#F6F6F605] rounded-lg"
              style={{
                backdropFilter: "blur(24px)",
                boxShadow: "0px 2px 26px 0px #00000014",
              }}>
              <CardBody className="p-4">
                <h3 className="font-medium mb-2">Endocarditis</h3>
                <div className="flex items-center space-x-2 mb-1">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-2xl font-bold">22</span>
                  <span className="text-gray-600">/100</span>
                </div>
                <p className="text-xs text-gray-600">12 mo. ago</p>
                <p className="text-xs text-gray-600">Last check</p>
              </CardBody>
            </Card>
           <Card className="mb-6 bg-[#F6F6F605] rounded-lg"
              style={{
                backdropFilter: "blur(24px)",
                boxShadow: "0px 2px 26px 0px #00000014",
              }}>
              <CardBody className="p-4">
                <h3 className="font-medium mb-2">Arrhythmia</h3>
                <div className="flex items-center space-x-2 mb-1">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-2xl font-bold">19</span>
                  <span className="text-gray-600">/100</span>
                </div>
                <p className="text-xs text-gray-600">12 mo. ago</p>
                <p className="text-xs text-gray-600">Last check</p>
              </CardBody>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 text-black">
            {/* Test Results */}
            <Card className="mb-6 bg-[#F6F6F605] rounded-lg"
              style={{
                backdropFilter: "blur(24px)",
                boxShadow: "0px 2px 26px 0px #00000014",
              }}>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>Test Results</div>
                <div className="flex space-x-2">
                  <Badge>BLOOD</Badge>
                  <Badge>MICROBIOME</Badge>
                  <Badge>GENETIC</Badge>
                </div>
                <Button className="text-blue-600">
                  Show all
                </Button>
              </CardHeader>
              <CardBody>
                <div className="space-y-4">
                  <div className="grid grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="font-medium">Hemoglobin</p>
                      <p className="text-gray-600">g/dL</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium">14.8</p>
                      <p className="text-gray-600">RESULT</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium">13.5 - 17.5</p>
                      <p className="text-gray-600">RANGE</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium">328.6</p>
                      <p className="text-gray-600">Total Iron Binding Capacity (TIBC)</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="font-medium">Hematocrit</p>
                      <p className="text-gray-600">%</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium">31.5</p>
                      <p className="text-gray-600">RESULT</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium">38.3 - 48.6</p>
                      <p className="text-gray-600">RANGE</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium">41.5</p>
                      <p className="text-gray-600">Lymphocytes</p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Medical History */}
          <Card className="mb-6 bg-[#F6F6F605] rounded-lg"
              style={{
                backdropFilter: "blur(24px)",
                boxShadow: "0px 2px 26px 0px #00000014",
              }}>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>Medical History</div>
                <Button variant="ghost">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button className="text-blue-600">
                  Show all
                </Button>
              </CardHeader>
              <CardBody>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Blood Test Results</h4>
                    <div className="flex items-center justify-between text-sm">
                      <span>Diagnostic</span>
                      <span>01/02/2025</span>
                      <span>Normal</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">MRI Results</h4>
                    <div className="flex items-center justify-between text-sm">
                      <span>Imaging</span>
                      <span>01/02/2025</span>
                      <span>No Abnormalities</span>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-black">
            {/* Lifestyle */}
            <Card className="mb-6 bg-[#F6F6F605] rounded-lg"
              style={{
                backdropFilter: "blur(24px)",
                boxShadow: "0px 2px 26px 0px #00000014",
              }}>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>Lifestyle</div>
                <Button className="text-blue-600">
                  Show all
                </Button>
              </CardHeader>
              <CardBody>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Stress Management</p>
                      <p className="text-sm text-gray-600">
                        Your cortisol levels indicate a need for stress reduction techniques
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Sleep Optimization</p>
                      <p className="text-sm text-gray-600">
                        Aim for 7-9 hours of quality sleep to maximize recovery and growth hormone release
                      </p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Recommended Supplements */}
             <Card className="mb-6 bg-[#F6F6F605] rounded-lg"
              style={{
                backdropFilter: "blur(24px)",
                boxShadow: "0px 2px 26px 0px #00000014",
              }}>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>Recommended Supplements</div>
                <Button className="text-blue-600">
                  Show all
                </Button>
              </CardHeader>
              <CardBody>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Advanced Omega Complex</h4>
                    <p className="text-xs text-gray-600 mb-2">
                      Supports heart health and may manage blood pressure. Beneficial for patients on statin
                      medications.
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <span>⭐ W3 EPA • 4.2</span>
                      <span>1000 mg</span>
                    </div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Advanced Omega Complex</h4>
                    <p className="text-xs text-gray-600 mb-2">
                      Supports heart health and may manage blood pressure. Beneficial for patients on statin
                      medications.
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <span>⭐ W3 EPA • 4.2</span>
                      <span>1000 mg</span>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

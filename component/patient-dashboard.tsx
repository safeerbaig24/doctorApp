import {
  Avatar,
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "@heroui/react";
import {
  Bell,
  ShoppingCart,
  User,
  Activity,
  Settings,
  Zap,
  Target,
  Minus,
} from "lucide-react";
import Image from "next/image";

export function PatientDashboard() {
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

        <div className="flex">
          {/* Main Content */}
          <div className="flex-1 p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Activity className="h-5 w-5 text-blue-600" />
              <span className="font-medium">Total Health</span>
            </div>

            {/* Patient Photo Section */}
            <div className="relative mb-8">
              <div className="w-[800] h-[800px]">
                <Image
                  src="/bg.png"
                  alt="Patient"
                  fill
                />
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-full lg:w-1/2 p-6 space-y-6">
            {/* Stay Tuned Card */}
            <Card   className="bg-[#F6F6F605] "
              style={{
                backdropFilter: "blur(24px)",
                boxShadow: "0px 2px 26px 0px #00000014",
              }}>
              <CardBody className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-medium text-black">Stay tuned</h3>
                      <p className="text-sm text-[#746C7A]">
                        We are checking your Results
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-black">Expect results</p>
                    <p className="text-xs text-[#746C7A]">approximate time</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-xs">×</span>
                      </div>
                      <span className="text-sm font-medium text-black">3 days left</span>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Aging Card */}
            <Card
              className="bg-[#F6F6F605] "
              style={{
                backdropFilter: "blur(24px)",
                boxShadow: "0px 2px 26px 0px #00000014",
              }}
            >
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Activity className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-black">Aging</span>
                  <span className="text-sm text-[#0000008C]">Tru Diagnostics</span>
                </div>
              </CardHeader>
              <CardBody className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center space-x-1 mb-1">
                      <span className="text-sm font-medium text-black">
                        Biological age
                      </span>
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-xs text-white">i</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded"></div>
                      <span className="text-2xl font-bold text-black">47</span>
                      <span className="text-sm text-black">yrs</span>
                    </div>
                    <p className="text-xs text-black mt-1">
                      10 years higher
                      <br />
                      than chronological age
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center space-x-1 mb-1">
                      <span className="text-sm font-medium text-black">
                        DunedinPACE of Aging
                      </span>
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-xs text-white">i</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-4 bg-gradient-to-r from-green-400 to-green-600 rounded"></div>
                      <span className="text-2xl font-bold text-black">1.05</span>
                    </div>
                    <p className="text-xs text-black mt-1">
                      Biological age exceeds
                      <br />
                      calendar age
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Live Data Card */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Activity className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-black">Live Data</span>
                </div>
              </CardHeader>
              <CardBody>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      <span className="text-sm text-black">Heart Rate</span>
                    </div>
                    <div className="text-2xl font-bold text-black">98</div>
                    <div className="text-x text-black">bpm</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-black">Blood Sugar</span>
                    </div>
                    <div className="text-2xl font-bold text-black">80</div>
                    <div className="text-xs text-black">mg / dL</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-black">Blood Pressure</span>
                    </div>
                    <div className="text-2xl font-bold text-black">102</div>
                    <div className="text-xs text-black">/ 72 mmhg</div>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Total Health Card */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Activity className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-black">Total Health</span>
                </div>
              </CardHeader>
              <CardBody>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      <div className="w-6 h-6 border-2 border-blue-500 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-black">Cardiovascular system</span>
                    </div>
                    <div className="text-2xl font-bold text-red-500">89</div>
                    <div className="text-xs text-gray-600">/100</div>
                    <div className="text-xs text-gray-500 mt-1">
                      Checked 15 days ago
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      <div className="w-6 h-6 border-2 border-blue-500 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-black">Digestive system</span>
                    </div>
                    <div className="text-2xl font-bold text-yellow-500">56</div>
                    <div className="text-xs text-gray-600">/100</div>
                    <div className="text-xs text-gray-500 mt-1">
                      Checked 1 mo. ago
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      <div className="w-6 h-6 border-2 border-blue-500 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-black">Metabolic system</span>
                    </div>
                    <div className="text-2xl font-bold text-green-500">23</div>
                    <div className="text-xs text-gray-600">/100</div>
                    <div className="text-xs text-gray-500 mt-1">
                      Checked 6 mo. ago
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

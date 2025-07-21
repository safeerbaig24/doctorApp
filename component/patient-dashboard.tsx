import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export function PatientDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}

      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Image src={"/Logo.png"} alt="logo" width={160} height={48} />
            </div>
            <nav className="hidden md:flex space-x-8">
              <Button
                variant="ghost"
                className="text-black border-b-2 border-blue-600"
              >
                Dashboard
              </Button>
              <Button variant="ghost" className="text-black">
                Goals
              </Button>
              <Button variant="ghost" className="text-black">
                Report
              </Button>
              <Button variant="ghost" className="text-black">
                GenetiQ Pharmacy
              </Button>
              <Button variant="ghost" className="text-black">
                Data Management
              </Button>
            </nav>
            <div className="flex items-center space-x-4">
              <Image src={"/bell.png"} alt="bell" width={48} height={48} />
              <Image src={"/cart.png"} alt="bell" width={74} height={48} />
              <Image src={"/person.png"} alt="bell" width={48} height={48} />
            </div>
          </div>
        </header>

        <div className="flex h-full">
          {/* Main Content */}
          <div
            className="flex-1 p-6"
            style={{
              backgroundImage: "url('/bg.png')",
              backgroundSize: "",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className="flex gap-2 p-3 mb-6 w-fit rounded-md"
              style={{ boxShadow: "0px 2px 4px 0px #0000000A" }}
            >
              <Image src={"/health.png"} alt="bell" width={24} height={24} />
              <span className="font-medium text-black">Total Health</span>
              <ArrowDown color="black" width={24} height={24} />
            </div>

            {/* Sidebar Button Group */}
            <div className="hidden lg:flex h-full flex-col py-6 space-y-6">
              <Button
                variant="ghost"
                className="rounded-full p-2 bg-blue-500 text-white w-[57px] h-[57px] flex justify-center items-center"
              >
                <Image src={"/1.png"} alt="icon1" width={23} height={22} />
              </Button>
              <Button
                variant="solid"
                className="text-black w-[57px] h-[57px] flex justify-center items-center"
              >
                <Image src={"/2.png"} alt="icon2" width={25} height={18} />
              </Button>
              <Button
                variant="solid"
                className="text-black w-[57px] h-[57px] flex justify-center items-center"
              >
                <Image src={"/3.png"} alt="icon3" width={26} height={26} />
              </Button>
              <Button
                variant="solid"
                className="text-black w-[57px] h-[57px] flex justify-center items-center"
              >
                <Image src={"/4.png"} alt="icon4" width={22} height={25} />
              </Button>
              <Button
                variant="solid"
                className="text-black w-[57px] h-[57px] flex justify-center items-center"
              >
                <Image src={"/5.png"} alt="icon5" width={18} height={18} />
              </Button>
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-full lg:w-1/2 space-y-4">
            {/* Stay Tuned Card */}
            <Card
              className="bg-[#F6F6F605] rounded-2xl"
              style={{
                backdropFilter: "blur(24px)",
                boxShadow: "0px 2px 26px 0px #00000014",
              }}
            >
              <CardBody className="px-4 py-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={"/tuned.png"}
                      alt="bell"
                      width={42}
                      height={42}
                    />
                    <div>
                      <h3 className="font-medium text-black">Stay tuned</h3>
                      <p className="text-sm text-[#746C7A]">
                        We are checking your Results
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex items-center space-x-2 justify-between w-1/2 bg-[#FFFFFF99] p-4 rounded-lg"
                    style={{ boxShadow: "0px 10px 12px 0px #EBEBEB" }}
                  >
                    <div className="text-right">
                      <p className="text-sm font-medium text-black">
                        Expect results
                      </p>
                      <p className="text-xs text-[#746C7A]">approximate time</p>
                    </div>
                    <div className="flex items-center space-x-1 mt-1">
                      <Image
                        src={"/timer.png"}
                        alt="bell"
                        width={42}
                        height={42}
                      />
                      <span className="text-sm font-medium text-black">
                        3 days left
                      </span>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Aging Card */}
            <Card
              className="bg-[#F6F6F605] rounded-2xl p-6"
              style={{
                backdropFilter: "blur(24px)",
                boxShadow: "0px 2px 26px 0px #00000014",
              }}
            >
              <CardHeader className="p-0">
                <div className="flex items-center gap-3 mb-7">
                  <Image src={"/aging.svg"} alt="bell" width={34} height={32} />
                  <div className="flex items-center gap-2">
                    <span className="text-black text-2xl">Aging</span>
                    <span className="text-sm text-[#0000008C]">
                      Tru Diagnostics
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="p-0">
                <div className="grid grid-cols-2 gap-4">
                  <div
                    style={{ boxShadow: "0px 0px 8px 0px #EBEBEB inset" }}
                    className="p-6 rounded-2xl bg-[#FFFFFF99]"
                  >
                    <div className="flex items-center space-x-1 mb-1 w-full">
                      <span className="text-base font-medium text-black">
                        Biological age
                      </span>
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-xs text-white">i</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 w-full">
                      <div className="flex items-center space-x-2">
                        <Image
                          src={"/biological.png"}
                          alt="bell"
                          width={40}
                          height={26}
                        />
                        <span className="text-4xl font-bold text-black">
                          47
                        </span>
                        <span className="text-sm text-black">yrs</span>
                      </div>
                      <p className="text-sm text-black mt-1">
                        10 years higher
                        <br />
                        than chronological age
                      </p>
                    </div>
                  </div>
                  <div
                    style={{ boxShadow: "0px 0px 8px 0px #EBEBEB inset" }}
                    className="p-6 rounded-2xl bg-[#FFFFFF99]"
                  >
                    <div className="flex items-center space-x-1 mb-1">
                      <span className="text-base font-medium text-black">
                        DunedinPACE of Aging
                      </span>
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-xs text-white">i</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-2">
                        <Image
                          src={"/speed.svg"}
                          alt="bell"
                          width={40}
                          height={26}
                        />
                        <span className="text-4xl font-bold text-black">
                          1.05
                        </span>
                      </div>
                      <p className="text-base text-black mt-1">
                        Biological age exceeds
                        <br />
                        calendar age
                      </p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Live Data Card */}
            <Card
              className="bg-[#F6F6F605] rounded-2xl p-6"
              style={{
                backdropFilter: "blur(24px)",
                boxShadow: "0px 2px 26px 0px #00000014",
              }}
            >
              <CardHeader className="p-0">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Image
                      src={"/live-data.png"}
                      alt="bell"
                      width={37}
                      height={31}
                    />
                  </div>
                  <span className="text-2xl text-black">Live Data</span>
                </div>
              </CardHeader>
              <CardBody className="p-0">
                <div className="grid grid-cols-3 gap-4">
                  <div
                    style={{ boxShadow: "0px 0px 8px 0px #EBEBEB inset" }}
                    className="p-5 rounded-2xl bg-[#FFFFFF99]"
                  >
                    <div>
                      <div className="flex items-center space-x-1 mb-2">
                        <div
                          className="h-14 w-14 rounded-2xl flex justify-center items-center"
                          style={{
                            boxShadow:
                              "2.51px 7.54px 27.93px -3.63px #1634501A",
                          }}
                        >
                          <div className=" relative w-[29px] h-[27px]">
                            <Image src={"/heart.png"} alt="bell" fill />
                          </div>
                        </div>
                        <span className="text-sm text-black">Heart Rate</span>
                      </div>
                      <div className="text-4xl font-bold text-black">
                        <span>98</span>
                        <span className="text-base text-[#818181] ml-2">
                          bpm
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{ boxShadow: "0px 0px 8px 0px #EBEBEB inset" }}
                    className="p-5 rounded-2xl bg-[#FFFFFF99]"
                  >
                    <div>
                      <div className="flex items-center space-x-1 mb-2">
                        <div
                          className="h-14 w-14 rounded-2xl flex justify-center items-center"
                          style={{
                            boxShadow:
                              "2.51px 7.54px 27.93px -3.63px #1634501A",
                          }}
                        >
                          <div className=" relative w-5 h-[34px]">
                            <Image src={"/sugar.png"} alt="bell" fill />
                          </div>
                        </div>
                        <span className="text-sm text-black">Blood Sugar</span>
                      </div>
                      <div className="text-4xl font-bold text-black">
                        <span>80</span>
                        <span className="text-base text-[#818181] ml-2">
                          mg / dL
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{ boxShadow: "0px 0px 8px 0px #EBEBEB inset" }}
                    className="p-5 rounded-2xl bg-[#FFFFFF99]"
                  >
                    <div>
                      <div className="flex items-center space-x-1 mb-2">
                        <div
                          className="h-14 w-14 rounded-2xl flex justify-center items-center"
                          style={{
                            boxShadow:
                              "2.51px 7.54px 27.93px -3.63px #1634501A",
                          }}
                        >
                          <div className=" relative w-[35px] h-[35px]">
                            <Image src={"/blood.png"} alt="bell" fill />
                          </div>
                        </div>
                        <span className="text-sm text-black">
                          Blood Pressure
                        </span>
                      </div>
                      <div className="text-4xl font-bold text-black">
                        <span>102</span>
                        <span className="text-base text-[#818181] ml-2">
                          / 72 mmhg
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Total Health Card */}
            <Card
              className="bg-[#F6F6F605] rounded-2xl p-6"
              style={{
                backdropFilter: "blur(24px)",
                boxShadow: "0px 2px 26px 0px #00000014",
              }}
            >
              <CardHeader className="p-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Image
                      src={"/health.svg"}
                      alt="bell"
                      width={40}
                      height={40}
                    />
                  </div>
                  <span className="text-black text-2xl">Total Health</span>
                </div>
              </CardHeader>
              <CardBody className="p-0">
                <div className="grid grid-cols-3 gap-4">
                  <div
                    style={{ boxShadow: "0px 0px 8px 0px #EBEBEB inset" }}
                    className="p-3 rounded-2xl bg-[#FFFFFF99]"
                  >
                    <div>
                      <div className="flex items-center justify-between space-x-1 mb-2">
                        <span className="text-base text-black">
                          Cardiovascular system
                        </span>
                          <Image src={"/cardi.png"} alt="cardi" width={46} height={46}/>
                      </div>
                       <div className="flex items-center space-x-2"> 
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="text-4xl font-bold text-black">
                        89 
                      </div>
                      <div className="text-base text-[#808080]">/ 100</div>
                        </div>
                      <div className="text-xs text-[#808080] mt-1">
                        Checked 15 days ago
                      </div>
                    </div>
                  </div>
                  <div
                    style={{ boxShadow: "0px 0px 8px 0px #EBEBEB inset" }}
                    className="p-3 rounded-2xl bg-[#FFFFFF99]"
                  >
                    <div>
                      <div className="flex items-center justify-between space-x-1 mb-2">
                        <span className="text-base text-black">
                          Digestive system
                        </span>
                         <Image src={"/digest.png"} alt="cardi" width={46} height={46}/>
                      </div>
                      <div className="flex items-center space-x-2">   
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="text-4xl font-bold text-black">
                        56
                      </div>
                      <div className="text-base text-[#808080]">
                        / 100
                      </div>
                      </div>
                        <div className="text-xs text-[#808080] mt-1">
                          Checked 1 mo. ago
                        </div>
                    </div>
                  </div>
                  <div
                    style={{ boxShadow: "0px 0px 8px 0px #EBEBEB inset" }}
                    className="p-3 rounded-2xl bg-[#FFFFFF99]"
                  >
                    <div>
                      <div className="flex items-center justify-between space-x-1 mb-2">
                        <span className="text-base text-black">
                          Metabolic system
                        </span>
                         <Image src={"/meta.png"} alt="cardi" width={46} height={46}/>
                      </div>
                        <div className="flex items-center space-x-2"> 
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="text-4xl font-bold text-black">
                        23
                      </div>
                        <div className="text-base text-[#808080]">/100</div>
                        </div>
                      <div className="text-xs text-[#808080] mt-1">
                        Checked 6 mo. ago
                      </div>
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

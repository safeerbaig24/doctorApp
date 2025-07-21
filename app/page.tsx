"use client"

import { DoctorDashboard } from "@/component/doctor-dashboard"
import { PatientDashboard } from "@/component/patient-dashboard"
import { Button } from "@heroui/react"
import { useState } from "react"

export default function Home() {
  const [activeView, setActiveView] = useState<"patient" | "doctor">("patient")

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-4 bg-white border-b">
        <div className="flex gap-2 max-w-7xl mx-auto">
          <Button variant={activeView === "patient" ? "flat" : "solid"} className="text-black" onClick={() => setActiveView("patient")}>
            Patient Dashboard
          </Button>
          <Button variant={activeView === "doctor" ? "flat" : "solid"} className="text-black" onClick={() => setActiveView("doctor")}>
            Doctor Dashboard
          </Button>
        </div>
      </div>

      {activeView === "patient" ? <PatientDashboard /> : <DoctorDashboard />}
    </div>
  )
}

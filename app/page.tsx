"use client";

import { DoctorDashboard } from "@/component/doctor-dashboard";
import { PatientDashboard } from "@/component/patient-dashboard";
import { Button } from "@heroui/react";
import { useState } from "react";

export default function Home() {
  return <PatientDashboard />;
}

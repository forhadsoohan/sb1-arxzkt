import React from 'react'
import { Card } from "@/components/ui/card"
import { Select } from "@/components/ui/select"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts'

export default function Analytics({ isDarkMode }) {
  const patientData = [
    { month: 'Jan', newPatients: 65, totalVisits: 200 },
    { month: 'Feb', newPatients: 59, totalVisits: 180 },
    { month: 'Mar', newPatients: 80, totalVisits: 250 },
    { month: 'Apr', newPatients: 81, totalVisits: 220 },
    { month: 'May', newPatients: 56, totalVisits: 190 },
    { month: 'Jun', newPatients: 55, totalVisits: 175 },
  ]

  const diagnosisData = [
    { name: 'Hypertension', value: 30 },
    { name: 'Diabetes', value: 25 },
    { name: 'Asthma', value: 20 },
    { name: 'Arthritis', value: 15 },
    { name: 'Anxiety', value: 10 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-600">Analytics Dashboard</h1>
        <Select className={`w-40 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}>
          <option value="lastMonth">Last Month</option>
          <option value="last3Months">Last 3 Months</option>
          <option value="lastYear">Last Year</option>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className={`p-6 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-lg rounded-lg border`}>
          <h2 className="text-xl font-semibold mb-4 text-blue-600">Patient Visits</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={patientData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="newPatients" stroke="#8884d8" name="New Patients" />
              <Line type="monotone" dataKey="totalVisits" stroke="#82ca9d" name="Total Visits" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className={`p-6 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-lg rounded-lg border`}>
          <h2 className="text-xl font-semibold mb-4 text-blue-600">Top Diagnoses</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={diagnosisData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  )
}
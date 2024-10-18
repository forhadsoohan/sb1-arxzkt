import React from 'react'
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Plus } from 'lucide-react'

export default function Patients({ isDarkMode }) {
  const patients = [
    { id: 1, name: "John Doe", age: 45, lastVisit: "2023-08-15" },
    { id: 2, name: "Jane Smith", age: 32, lastVisit: "2023-08-10" },
    { id: 3, name: "Alice Johnson", age: 28, lastVisit: "2023-08-05" },
    { id: 4, name: "Bob Williams", age: 52, lastVisit: "2023-07-30" },
    { id: 5, name: "Eva Brown", age: 39, lastVisit: "2023-07-25" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-600">Patients</h1>
        <Button className="bg-blue-500 hover:bg-blue-600">
          <Plus className="w-5 h-5 mr-2" />
          Add New Patient
        </Button>
      </div>

      <Card className={`p-6 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-lg rounded-lg border`}>
        <div className="flex mb-4">
          <Input
            className={`flex-grow mr-2 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}
            placeholder="Search patients..."
          />
          <Button>
            <Search className="w-5 h-5" />
          </Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Last Visit</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell>{patient.name}</TableCell>
                <TableCell>{patient.age}</TableCell>
                <TableCell>{patient.lastVisit}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" className="mr-2">View</Button>
                  <Button variant="outline" size="sm">Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}
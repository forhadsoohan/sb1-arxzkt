import React from 'react'
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, FileText, Download } from 'lucide-react'

export default function Records({ isDarkMode }) {
  const records = [
    { id: 1, patientName: "John Doe", type: "SOAP Note", date: "2023-08-15", doctor: "Dr. Smith" },
    { id: 2, patientName: "Jane Smith", type: "Lab Result", date: "2023-08-10", doctor: "Dr. Johnson" },
    { id: 3, patientName: "Alice Johnson", type: "Prescription", date: "2023-08-05", doctor: "Dr. Williams" },
    { id: 4, patientName: "Bob Williams", type: "SOAP Note", date: "2023-07-30", doctor: "Dr. Brown" },
    { id: 5, patientName: "Eva Brown", type: "Imaging Report", date: "2023-07-25", doctor: "Dr. Davis" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-600">Medical Records</h1>
      </div>

      <Card className={`p-6 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-lg rounded-lg border`}>
        <div className="flex mb-4">
          <Input
            className={`flex-grow mr-2 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}
            placeholder="Search records..."
          />
          <Button>
            <Search className="w-5 h-5" />
          </Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient Name</TableHead>
              <TableHead>Record Type</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Doctor</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {records.map((record) => (
              <TableRow key={record.id}>
                <TableCell>{record.patientName}</TableCell>
                <TableCell>{record.type}</TableCell>
                <TableCell>{record.date}</TableCell>
                <TableCell>{record.doctor}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" className="mr-2">
                    <FileText className="w-4 h-4 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}
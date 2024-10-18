import React from 'react'
import { Card } from "@/components/ui/card"
import { AudioRecorder } from '@/components/AudioRecorder'
import { SOAPNoteGenerator } from '@/components/SOAPNoteGenerator'

export default function Home({ isDarkMode }) {
  const [transcription, setTranscription] = React.useState('')

  const handleTranscriptionComplete = (newTranscription) => {
    setTranscription(newTranscription);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="lg:w-3/4 space-y-8">
        <Card className={`p-6 space-y-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg rounded-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-blue-600">Record Patient Notes</h2>
          </div>

          <AudioRecorder onTranscriptionComplete={handleTranscriptionComplete} />

          {transcription && (
            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <h3 className="text-xl font-semibold mb-2 text-blue-600">Transcription</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>{transcription}</p>
            </div>
          )}

          {transcription && (
            <SOAPNoteGenerator transcription={transcription} />
          )}
        </Card>
      </div>

      <div className="lg:w-1/4 space-y-8">
        <Card className={`p-6 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-lg rounded-lg border`}>
          <h2 className="text-xl font-semibold mb-4 text-blue-600">Recent Activity</h2>
          <ul className="space-y-3">
            <li className="flex items-center space-x-3">
              <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>SOAP Note for John Doe</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Transcription for Jane Smith</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>SOAP Note for Alex Johnson</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}
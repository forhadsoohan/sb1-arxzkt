import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Mic, StopCircle } from 'lucide-react';
import { transcribeAudio } from '@/lib/audioTranscription';

export function AudioRecorder({ onTranscriptionComplete }) {
  const [isRecording, setIsRecording] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        setIsTranscribing(true);
        try {
          const transcription = await transcribeAudio(audioBlob);
          onTranscriptionComplete(transcription);
        } catch (error) {
          console.error("Transcription error:", error);
          // Handle error (e.g., show error message to user)
        } finally {
          setIsTranscribing(false);
        }
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error starting recording:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <div className="flex justify-center">
      <Button
        onClick={isRecording ? stopRecording : startRecording}
        className={`w-20 h-20 rounded-full ${isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'} transition-colors duration-200 shadow-lg`}
        disabled={isTranscribing}
      >
        {isRecording ? (
          <StopCircle className="w-10 h-10" />
        ) : (
          <Mic className="w-10 h-10" />
        )}
      </Button>
      {isTranscribing && <p>Transcribing...</p>}
    </div>
  );
}
import Groq from "groq-sdk";

const groq = new Groq();

export async function transcribeAudio(audioBlob) {
  try {
    const transcription = await groq.audio.transcriptions.create({
      file: audioBlob,
      model: "whisper-large-v3-turbo",
      language: "en",
      temperature: 0.0,
    });
    return transcription.text;
  } catch (error) {
    console.error("Error transcribing audio:", error);
    throw error;
  }
}
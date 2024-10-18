import { TextGeneration } from "deepinfra";

const DEEPINFRA_API_KEY = process.env.DEEPINFRA_API_KEY;
const MODEL_URL = 'https://api.deepinfra.com/v1/inference/nvidia/Llama-3.1-Nemotron-70B-Instruct';

const client = new TextGeneration(MODEL_URL, DEEPINFRA_API_KEY);

export async function generateSOAPNote(transcription) {
  try {
    const response = await client.generate({
      "input": `<|begin_of_text|><|start_header_id|>system<|end_header_id|>
You are an AI medical assistant trained to generate SOAP notes based on transcribed patient interactions. Ensure all information is accurate and follows medical best practices.<|eot_id|><|start_header_id|>user<|end_header_id|>
Generate a SOAP note based on the following transcription: ${transcription}<|eot_id|><|start_header_id|>assistant<|end_header_id|>
`,
      "stop": [
        "<|eot_id|>"
      ],
      "temperature": 0.5,
      "max_tokens": 1000
    });

    return response.results[0].generated_text;
  } catch (error) {
    console.error("Error generating SOAP note:", error);
    throw error;
  }
}
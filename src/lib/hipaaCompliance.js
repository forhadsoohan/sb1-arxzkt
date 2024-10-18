import crypto from 'crypto';

// ... (keep the existing functions)

// Add a new function for secure API key management
export function getSecureApiKey() {
  // In a production environment, this should be fetched from a secure key management system
  return process.env.DEEPINFRA_API_KEY;
}

// Update the secureLog function to use structured logging
export function secureLog(message, level = 'info', metadata = {}) {
  const sanitizedMetadata = Object.entries(metadata).reduce((acc, [key, value]) => {
    acc[key] = typeof value === 'string' ? sanitizeInput(value) : value;
    return acc;
  }, {});

  const logEntry = JSON.stringify({
    timestamp: new Date().toISOString(),
    level,
    message: sanitizeInput(message),
    ...sanitizedMetadata
  });

  // In a production environment, use a secure logging service
  console.log(logEntry);
}
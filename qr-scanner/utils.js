// Utility functions for QR-AI App

/* 
    Mini-project: "QR Helper Utilities"

        Build helper functions: generate random ID (string/number), format text (truncate), clean whitespace.
        Focus: Understand functions as first-class citizens.
*/

// Generate Random ID
export function generateRandomID() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
}

// Clean extra whitespace
export function cleanWhitespace(str) {
  return str.trim().replace(/\s+/g, " ");
}

// Format Text (capitalize first letter)
export function formatText(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

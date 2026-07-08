import axios from "axios";

// Determine CRM API Base URL
// In development, the CRM server runs on localhost:8080.
// In production, it points to the CRM backend endpoint.
const CRM_API_BASE_URL = process.env.NODE_ENV === "production"
  ? "https://crm-backend-spvr.onrender.com"
  : "http://localhost:8080";

/**
 * Converts a File object to a Base64 Data URL string.
 * @param {File} file 
 * @returns {Promise<string>}
 */
const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

/**
 * Compiles project requirement payload, attaches files as base64, and sends to CRM.
 * @param {Object} payload - The requirement payload matching CRM model
 * @param {File[]} files - Selected raw files from Step 8
 * @returns {Promise<Object>} The server response data
 */
export const submitRequirement = async (payload, files) => {
  try {
    const processedAttachments = [];

    // Convert all attachments to Base64 sequentially
    for (const file of files) {
      const base64Url = await fileToBase64(file);
      processedAttachments.push({
        fileName: file.name,
        url: base64Url,
        size: file.size,
        mimetype: file.type,
      });
    }

    // Merge attachments into the payload
    const finalPayload = {
      ...payload,
      attachments: processedAttachments,
      source: "Website", // Ensure source is labeled as Website
    };

    // Make the API call directly to the CRM Backend
    const response = await axios.post(
      `${CRM_API_BASE_URL}/api/public/project-request`,
      finalPayload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error submitting project requirement:", error);
    // Extract server-side error message if present
    const serverMessage = error.response?.data?.message || error.response?.data?.error;
    throw new Error(serverMessage || error.message || "Failed to submit requirement");
  }
};

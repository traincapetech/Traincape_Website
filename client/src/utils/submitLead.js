export async function submitLead(lead) {
  try {
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      throw new Error("EmailJS environment variables are not fully configured.");
    }

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          title: lead.subject || "Contact Us Inquiry",
          name: lead.name,
          email: lead.email,
          phone: lead.phoneNumber || "N/A",
          location: lead.location || "N/A",
          message: lead.message,
          time: new Date().toLocaleString(),
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("EmailJS Error details:", errorText);
      throw new Error(errorText || `EmailJS returned status ${response.status}`);
    }

    return {
      success: true,
      message: "Lead submitted successfully!",
    };
  } catch (error) {
    console.error("EmailJS sending error:", error);
    throw new Error(error.message || "Failed to submit request. Please try again.");
  }
}

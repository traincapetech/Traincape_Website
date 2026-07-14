export async function submitCareerApplication(application) {
  try {
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_CAREER_TEMPLATE_ID;
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
          name: application.name,
          email: application.email,
          phone: application.phone,
          position: application.position,
          experience: application.experience || "N/A",
          linkedinUrl: application.linkedinUrl || "N/A",
          resumeLink: application.resumeLink || "N/A",
          cover_letter: application.coverLetter || application.cover_letter || "",
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
      message: "Application submitted successfully!",
    };
  } catch (error) {
    console.error("EmailJS sending error:", error);
    throw new Error(error.message || "Failed to submit application. Please try again.");
  }
}

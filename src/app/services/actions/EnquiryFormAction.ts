'use server' 

export const handlePostEnquiry = async (formData:{
name: string,
age: string,
mobile: string,
email: string,
mode?: "online" | "offline",
terms?: boolean,
message?: string,
password?: string,
description?: string,
adminName?: string,
requirement?: string,
}) => {
  if (!formData) return { error: "Form data not found" };
  try {
    const response = await fetch(
      "https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/Wez9PSMD",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const result = await response.json();

    if (!result) return { error: "Failed to submit enquiry" };

    return result;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};

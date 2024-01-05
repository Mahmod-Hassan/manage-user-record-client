export const savedUser = async (data) => {
  try {
    const response = await fetch("https://manage-user-record.vercel.app/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};
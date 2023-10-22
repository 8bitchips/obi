import HttpError from '@wasp/core/HttpError.js'

export const generateForm = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  // Implement the logic to generate the form based on the prompt
  // and return the well-formatted HTML

  // Example implementation:
  const form = {
    title: "Sample Form",
    inputs: [
      { name: "Name", type: "text" },
      { name: "Email", type: "email" },
      { name: "Message", type: "textarea" }
    ]
  };

  return form;
}
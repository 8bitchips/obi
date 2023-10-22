import HttpError from '@wasp/core/HttpError.js'

export const createForm = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  const { title, content } = args;
  const userId = context.user.id;

  const form = await context.entities.Form.create({
    data: {
      title,
      content,
      userId
    }
  });

  return form;
}

export const createInput = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  const form = await context.entities.Form.create({
    data: {
      title: args.title,
      content: args.content,
      userId: context.user.id
    }
  });

  const input = await context.entities.Input.create({
    data: {
      name: args.name,
      type: args.type,
      formId: form.id
    }
  });

  return input;
}
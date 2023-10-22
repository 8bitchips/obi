import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import getForm from '@wasp/queries/getForm';
import createForm from '@wasp/actions/createForm';
import createInput from '@wasp/actions/createInput';

export function Form() {
  const { formId } = useParams();
  const { data: form, isLoading, error } = useQuery(getForm, { formId });
  const createFormFn = useAction(createForm);
  const createInputFn = useAction(createInput);
  const [generatedForm, setGeneratedForm] = useState('');

  useEffect(() => {
    // Fetch the generated form based on the prompt
    // Replace the following line with the actual implementation
    // setGeneratedForm(generatedFormHtml);
  }, []);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleCreateForm = () => {
    createFormFn({
      title: form.title,
      content: form.content
    });
  };

  const handleCreateInput = () => {
    createInputFn({
      formId: form.id,
      name: 'Input Name',
      type: 'text'
    });
  };

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>{form.title}</h1>
      {generatedForm && (
        <div dangerouslySetInnerHTML={{ __html: generatedForm }}></div>
      )}
      <button
        onClick={handleCreateForm}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'
      >
        Create Form
      </button>
      <button
        onClick={handleCreateInput}
        className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 ml-4'
      >
        Create Input
      </button>
      <Link
        to='/'
        className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4 ml-4'
      >
        Go Back
      </Link>
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import { useQuery } from '@wasp/queries';
import getUserForms from '@wasp/queries/getUserForms';

export function DashboardPage() {
  const { data: forms, isLoading, error } = useQuery(getUserForms);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div className='p-4'>
      {forms.map((form) => (
        <div
          key={form.id}
          className='p-4 bg-gray-100 mb-4 rounded-lg'
        >
          <h2 className='text-xl font-bold'>{form.title}</h2>
          <p className='text-gray-600'>{form.content}</p>
        </div>
      ))}
    </div>
  );
}
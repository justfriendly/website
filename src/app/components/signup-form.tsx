'use client'

import React, { useState, FormEvent, useEffect } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Participant, addParticipant, getParticipants } from '../api';
import countryListAlpha2 from '../all-countries';

const SignupForm: React.FC = () => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');

  const { isLoading: isLoadingList, isError: errorLoadingList, data: participants, error: getListError, refetch } = useQuery<Participant[], Error>({
    queryKey: ['todos'],
    queryFn: getParticipants as any,
  })

  const mutation = useMutation<unknown, Error, Participant>({
    mutationFn: async ()=> {
      const res = await addParticipant({ name, country });

      // refetch the list
      refetch();

      return res;
    },
  });

  useEffect(() => {
    if (mutation.isSuccess) {
      setName('');
    }
  }, [mutation.isSuccess]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutation.mutate({ name, country });
  };

  return (
    <>
    <h2 className='text-4xl mt-4 mb-4 font-bold'>Join the list together with {participants?.length ?? ''} other human beings</h2>
    <p>I hereby confirm that I will do my best to be as friendly as I possibly can towards all human beings I meet, showing them that I wish them well—even those I don’t like or disagree with.</p>

      <form action="#" method="POST" className="mt-4 max-w-sm mx-auto"  onSubmit={handleSubmit}>
        <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} disabled={mutation.isPending} name="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
        </div>

        <div className="mb-4">
            <label htmlFor="country" className="block text-gray-700 font-medium">Country</label>
            <select id="country" onChange={(e) => setCountry(e.target.value)} name="country" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" defaultValue={''} required>
                <option value="" disabled>Select Country</option>
                {Object.entries(countryListAlpha2).map(([code, name]) => (
                    <option key={code} value={code}>{name}</option>
                ))}
            </select>
        </div>
            
        <div className="text-center">
            <button disabled={mutation.isPending} type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">Be friendly</button>
        </div>

        {/* success message */}
        {mutation.isSuccess && (
          <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Thank you!</strong>
            <span className="block">You are now on the list</span>
          </div>
        )}
      </form>
      <h2 className='text-4xl mt-4 mb-2 font-bold'>The list of friendly people</h2>
      {isLoadingList && <span>Loading...</span>}
      {errorLoadingList && <span>Error: {getListError.message}</span>}
      {(participants ?? []).map((participant, index) => (
        <div className="flex items-center space-x-2" key={index}>
          <span className="font-bold">{participant.name}</span>
          <span className="normal-case">{participant.country}</span>
          {/* <span className="italic text-gray-500">{participant.createdAt}</span> */}
        </div>
      ))}
    </>
  );
};

export default SignupForm;
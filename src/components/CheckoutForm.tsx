'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import Button from './Button';
import { useSession } from 'next-auth/react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getUserData, setUserData } from '@/features/user/userSlice';
import { useState } from 'react';
import { Edit } from 'lucide-react';

const checkoutSchema = z.object({
  fullName: z.string(),
  email: z.string(),
  mobileNumber: z
    .string()
    .regex(/^\+?[0-9()-\s]{3,}$/, { message: 'Invalid mobile number' })
    .min(10, { message: 'Invalid mobile number' }),
  address: z.string().min(6, { message: 'Please enter a valid address' }),
});

type CheckoutSchemaType = z.infer<typeof checkoutSchema>;

function CheckoutForm() {
  const dispatch = useAppDispatch();
  const [filledForm, setFilledForm] = useState(false);

  const { data: session } = useSession();
  const fullName = session?.user?.name ?? '';
  const email = session?.user?.email ?? '';

  const {
    address,
    mobileNumber,
    fullName: name,
    email: mail,
  } = useAppSelector(getUserData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutSchemaType>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fullName: fullName || name,
      email: email || mail,
      mobileNumber: mobileNumber || '',
      address: address || '',
    },
  });

  const onSubmit: SubmitHandler<CheckoutSchemaType> = (data) => {
    const newUserData = data;
    dispatch(setUserData(newUserData));
    setFilledForm(true);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-5 flex-col sm:gap-7 md:gap-8 rounded-xl bg-white px-4 sm:px-6 sm:py-10 md:px-12 md:py-16 py-7 lg:px-6"
    >
      <h1 className="font-semibold text-lg tracking-wide text-text-medium-gray border-primary-navy-blue/60 pb-2 border-b-2">
        Shipping information
      </h1>
      <div className="flex flex-col gap-1 sm:gap-2 md:gap-4">
        <label
          htmlFor="fullName"
          className="text-sm text-primary-navy-blue font-semibold tracking-wide"
        >
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          defaultValue={fullName}
          disabled
          {...register('fullName')}
          className="border border-primary-navy-blue rounded-md px-2 py-1 outline-none focus:outline-none hover:outline-none focus:border-secondary-warm-yellow focus:ring-1 focus:ring-secondary-warm-yellow focus:ring-offset-2 sm:px-4 sm:py-2"
        />
        {errors.fullName && (
          <p className="text-sm text-red-500">{errors.fullName?.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1 sm:gap-2 md:gap-4">
        <label
          htmlFor="email"
          className="text-sm text-primary-navy-blue font-semibold tracking-wide"
        >
          Email Address
        </label>
        <input
          id="email"
          type="text"
          defaultValue={email}
          disabled
          {...register('email')}
          className="border border-primary-navy-blue rounded-md px-2 py-1 outline-none focus:outline-none hover:outline-none focus:border-secondary-warm-yellow focus:ring-1 focus:ring-secondary-warm-yellow focus:ring-offset-2 sm:px-4 sm:py-2"
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email?.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1 sm:gap-2 md:gap-4">
        <label
          htmlFor="mobileNumber"
          className="text-sm text-primary-navy-blue font-semibold tracking-wide"
        >
          Mobile Number
        </label>
        <input
          id="mobileNumber"
          type="tel"
          {...register('mobileNumber')}
          className="border border-primary-navy-blue rounded-md px-2 py-1 outline-none focus:outline-none hover:outline-none focus:border-secondary-warm-yellow focus:ring-1 focus:ring-secondary-warm-yellow focus:ring-offset-2 sm:px-4 sm:py-2"
          disabled={filledForm}
        />
        {errors.mobileNumber && (
          <p className="text-sm text-red-500">{errors.mobileNumber?.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1 sm:gap-2 md:gap-4">
        <label
          htmlFor="address"
          className="text-sm text-primary-navy-blue font-semibold tracking-wide"
        >
          Address
        </label>
        <input
          id="address"
          type="text"
          {...register('address')}
          className="border border-primary-navy-blue rounded-md px-2 py-1 outline-none focus:outline-none hover:outline-none focus:border-secondary-warm-yellow focus:ring-1 focus:ring-secondary-warm-yellow focus:ring-offset-2 sm:px-4 sm:py-2"
          disabled={filledForm}
        />
        {errors.address && (
          <p className="text-sm text-red-500">{errors.address?.message}</p>
        )}
      </div>
      {filledForm && (
        <p className="">
          Your shipping information has been updated. Click{' '}
          <span
            className="underline text-secondary-warm-yellow font-semibold cursor-pointer"
            onClick={() => setFilledForm(false)}
          >
            here
          </span>{' '}
          to make changes.
        </p>
      )}
      {!filledForm && <Button variant="primary">Continue</Button>}
    </form>
  );
}

export default CheckoutForm;

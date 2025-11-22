import React from 'react';
import { Link } from 'react-router-dom';
import SubmitButton from '../../components/SubmitButton';
import UseCreateApi from '../../components/UseCreateApi';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const CreateCustome2 = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  // ✅ Zod validation schema
  const schema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email"),
    mobile: z.string().min(8, "Phone must be at least 8 characters"),
    address: z.string().optional(), // Optional field
    photo: z.instanceof(FileList).refine(
    (files) => files.length > 0, 
    "Photo is required"
  ).refine(
    (files) => {
      const file = files[0];
      return file && file.type.startsWith('image/');
    },
    "Only image files are allowed"
  ).refine(
    (files) => {
      const file = files[0];
      return file && file.size <= 5 * 1024 * 1024; // 5MB limit
    },
    "File size must be less than 5MB"
  ),
  });

  // ✅ Hook Form setup
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  // ✅ Use your custom hook for API calls
  const { loading, data, err, submit } = UseCreateApi(`${baseUrl}/customer/save`);

  // ✅ Handle form submission
  const onSubmit = (formData) => {
    const items = new FormData();
    items.append('name', formData.name);
    items.append('email', formData.email);
    items.append('mobile', formData.mobile);
    items.append('address', formData.address || '');
    items.append('photo', formData.photo[0]); // File is an array

    submit(items); // Your custom hook handles the API call
    reset(); // Clear the form after submission
  };

  return (
    <>
      <Link to="/customer">Customer list</Link>
      <br />

      <form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
        <div>
          <label>Name</label>
          <input {...register('name')}   type="text" />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <label>Mobile</label>
          <input {...register('mobile')} type="text" />
          {errors.mobile && <p>{errors.mobile.message}</p>}
        </div>

        <div>
          <label>Email</label>
          <input {...register('email')} type="text" />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label>Address</label>
          <input {...register('address')} type="text" /> {/* Optional field */}
        </div>

        <div>
          <label>Photo</label>
          <input 
            {...register('photo')} 
            type="file" 
            accept="image/*" 
          />
        </div>

        <div>
          <SubmitButton name="Save" type="submit" color="red" />
          <SubmitButton name="Reset" type="reset" color="green" />
        </div>
      </form>
    </>
  );
};

export default CreateCustome2;
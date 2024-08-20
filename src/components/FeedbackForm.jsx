import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetForm } from '../slices/feedbackSlice';

const FeedbackForm = () => {
  const dispatch = useDispatch();

  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    address: '',
    country: '',
    email: '',
    phone: '',
    feedback: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted', formData);
    dispatch(resetForm()); // Reset form data in Redux state
    // Reset local form data
    setFormData({
      name: '',
      lastName: '',
      address: '',
      country: '',
      email: '',
      phone: '',
      feedback: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 rounded-lg mt-2 w-[500px] bg-gray-100">
      <h2 className="font-bold text-lg mb-1">Thank you so much for taking the time!</h2>
      <p>Please provide the below details!</p>
    
      {/* Name Input */}
      <p className='p-2'>First Name :</p>
      <input
        type="text"
        name="name"
        placeholder="First Name"
        value={formData.name}
        onChange={handleChange}
        className="block w-[300px] p-2 mb-2 border border-gray-300 rounded-lg"
        required
      />

      {/* Last Name Input */}
      <p className='p-2'>Last Name :</p>
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        className="block w-[300px] p-2 mb-2 border border-gray-300 rounded-lg"
        required
      />

      {/* Address Input */}
      <p className='p-2'>Address :</p>
      <textarea
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        className="block w-full p-2 mb-2 border border-gray-300 rounded-lg"
        required
      />

      {/* Country Input */}
      <p className='p-2'>Country :</p>
      <input
        type="text"
        name="country"
        placeholder="Country"
        value={formData.country}
        onChange={handleChange}
        className="block w-[300px] p-2 mb-2 border border-gray-300 rounded-lg"
        required
      />

      {/* Email Input */}
      <p className='p-2'>Email :</p>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="block w-[300px] p-2 mb-2 border border-gray-300 rounded-lg"
        required
      />

      {/* Phone Number Input */}
      <p className='p-2'>Phone no. :</p>
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="block w-[300px] p-2 mb-2 border border-gray-300 rounded-lg"
        required
      />

      {/* Submit Button */}
      <button type="submit" className="px-4 py-2 mt-2 bg-green-400 text-white rounded-lg">
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;

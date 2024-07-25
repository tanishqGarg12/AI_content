import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    contentType: '',
    product: '',
    role: '',
    companyLink: '',
    targetAudience: '',
    emotion: '',
    tone: '',
    length: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navi=()=>{
    navigate("/Content")
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center bg-black">
      <div className="w-full max-w-6xl bg-black shadow-md rounded-md">
        <h1 className="text-2xl font-bold mt-2 mb-5 text-white">AI GENERATOR CONTENT</h1>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-white">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 bg-slate-800 rounded-md text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">Content Type</label>
            <input
              type="text"
              name="contentType"
              placeholder="Content Type"
              value={formData.contentType}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 bg-slate-800 rounded-md text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">Product</label>
            <input
              type="text"
              name="product"
              placeholder="Product"
              value={formData.product}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 bg-slate-800 rounded-md text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">Role</label>
            <input
              type="text"
              name="role"
              placeholder="Role"
              value={formData.role}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 bg-slate-800 rounded-md text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">Company Link</label>
            <input
              type="text"
              name="companyLink"
              placeholder="Company Link"
              value={formData.companyLink}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 bg-slate-800 rounded-md text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">Target Audience</label>
            <input
              type="text"
              name="targetAudience"
              placeholder="Target Audience"
              value={formData.targetAudience}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 bg-slate-800 rounded-md text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">Emotion</label>
            <input
              type="text"
              name="emotion"
              placeholder="Emotion"
              value={formData.emotion}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 bg-slate-800 rounded-md text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">Tone</label>
            <input
              type="text"
              name="tone"
              placeholder="Tone"
              value={formData.tone}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 bg-slate-800 rounded-md text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">Length</label>
            <input
              type="text"
              name="length"
              placeholder="Length"
              value={formData.length}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 bg-slate-800 rounded-md text-white"
            />
          </div>

          <button
            type="submit"
            className="mt-6 bg-slate-800 text-white py-2 px-4 rounded-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 w-52"
            onClick={navi}
          >
            Generate Content
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

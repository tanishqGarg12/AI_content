  import React from 'react';
  import { Navigate,useNavigate } from 'react-router-dom';

  const Form = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      navigate('/content');
    };
    return (
      <div className="flex items-center justify-center bg-black">
        <div className="w-full max-w-6xl  bg-black shadow-md rounded-md">
          <h1 className="text-2xl font-bold mt-2 mb-5 text-white">AI GENERATOR CONTENT</h1>
          
          <form className="flex flex-col space-y-4">
            <div>
              <label className="block text-sm font-medium text-white">Name</label>
              <input type="text" placeholder="Name" className="mt-1 block w-full p-2 border border-gray-300
              bg-slate-800 rounded-md text-white" />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">Content Type</label>
              <input type="text" placeholder="Content Type" className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-slate-800 text-white" />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">Product</label>
              <input type="text" placeholder="Product" className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-slate-800 text-white" />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">Password</label>
              <input type="password" placeholder="Role" className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-slate-800 text-white" />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">Company Link</label>
              <input type="text" placeholder="Company Link" className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-slate-800 text-white" />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">target Audience</label>
              <input type="text" placeholder="Ptarget Audience" className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-slate-800 text-white" />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">Emotion</label>
              <input type="text" placeholder="Emotion" className="mt-1 bg-slate-800 block w-full p-2 border border-gray-300 rounded-md text-white" />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">Tone</label>
              <input type="text" placeholder="Tone" className="mt-1 bg-slate-800 block w-full p-2 border border-gray-300 rounded-md text-white" />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">Length</label>
              <input type="text" placeholder="Length" className="mt-1 block w-full bg-slate-800 p-2 border border-gray-300 rounded-md text-white" />
            </div>

            <div>
              <label className="block text-sm font-medium text-white">Tone</label>
              <input type="text" placeholder="City" className="mt-1 block w-full bg-slate-800 p-2 border border-gray-300 rounded-md text-white" />
            </div>

            <button className="mt-6 bg-slate-800 text-white py-2 px-4 rounded-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 w-52" onClick={handleSubmit}>
              Generate Content
            </button>

          </form>
          

    
        </div>
      </div>
    );
  }

  export default Form;

import { useState } from "react";
import axios from "axios";

const CreateProductForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    // Add other product details as needed
  });

  const [apiConfig, setApiConfig] = useState({
    apiKey: "", // Bearer token
    apiUrl: "", // Reverb API endpoint
    contentType: "application/json", // Content-Type
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(apiConfig.apiUrl, formData, {
        headers: {
          "Content-Type": apiConfig.contentType,
          Authorization: `Bearer ${apiConfig.apiKey}`,
        },
      });
      console.log("Product created:", response.data);
      // Add any additional success handling here
    } catch (error) {
      console.error("Error creating product:", error);
      // Add error handling here
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleApiConfigChange = (e) => {
    const { name, value } = e.target;
    setApiConfig({ ...apiConfig, [name]: value });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        <h1 className="text-2xl font-bold mb-6">Create Product</h1>
        <form onSubmit={handleFormSubmit}>
          {/* Product details */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Title:</label>
            <input
              className="w-full border rounded-md p-2"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Description:
            </label>
            <textarea
              className="w-full border rounded-md p-2"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Price:</label>
            <input
              className="w-full border rounded-md p-2"
              type="text"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
          </div>

          {/* API Configuration */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Bearer Token:
            </label>
            <input
              className="w-full border rounded-md p-2"
              type="text"
              name="apiKey"
              value={apiConfig.apiKey}
              onChange={handleApiConfigChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Reverb API Endpoint:
            </label>
            <input
              className="w-full border rounded-md p-2"
              type="text"
              name="apiUrl"
              value={apiConfig.apiUrl}
              onChange={handleApiConfigChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-1">
              Content-Type:
            </label>
            <input
              className="w-full border rounded-md p-2"
              type="text"
              name="contentType"
              value={apiConfig.contentType}
              onChange={handleApiConfigChange}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProductForm;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ShippingForm = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const [errors, setErrors] = useState({});

  // Load shipping info from localStorage on mount
  useEffect(() => {
    const savedShippingInfo = localStorage.getItem("shippingInfo");
    if (savedShippingInfo) {
      try {
        const parsedData = JSON.parse(savedShippingInfo);
        setFormData(parsedData);
      } catch (error) {
        console.error("Error parsing saved shipping info:", error);
      }
    }
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = "Postal code is required";
    }
    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Save to localStorage
      localStorage.setItem("shippingInfo", JSON.stringify(formData));
      // Redirect to next step
      navigate("/checkout/payment");
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="flex justify-center items-center py-8">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl mx-2">
          <h1 className="text-3xl font-bold mb-6">Shipping Address</h1>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="text-sm font-medium mb-2 block">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-300"
              />
              {errors.fullName && (
                <p className="text-red-600 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="text-sm font-medium mb-2 block">
                Street Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="123 Main Street"
                className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-300"
              />
              {errors.address && (
                <p className="text-red-600 text-xs mt-1">{errors.address}</p>
              )}
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="text-sm font-medium mb-2 block">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="New York"
                className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-300"
              />
              {errors.city && (
                <p className="text-red-600 text-xs mt-1">{errors.city}</p>
              )}
            </div>

            {/* Postal Code */}
            <div>
              <label htmlFor="postalCode" className="text-sm font-medium mb-2 block">
                Postal Code
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                placeholder="10001"
                className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-300"
              />
              {errors.postalCode && (
                <p className="text-red-600 text-xs mt-1">{errors.postalCode}</p>
              )}
            </div>

            {/* Country */}
            <div>
              <label htmlFor="country" className="text-sm font-medium mb-2 block">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="United States"
                className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-300"
              />
              {errors.country && (
                <p className="text-red-600 text-xs mt-1">{errors.country}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-yellow-300 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg mt-4 cursor-pointer transition"
            >
              Continue to Payment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShippingForm;

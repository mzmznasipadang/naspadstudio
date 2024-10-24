// src/app/about/page.tsx
"use client"
import React, { useState } from 'react';
import Header from '../contact/Header';
import Footer from '../contact/Footer';

//for the form
type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);
    setErrorMessage(null);
  
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
          throw new Error('Failed to send email');
        }
  
        // Clear form
        setFormData({ name: '', email: '', message: '' });
        setShowSuccess(true);
        
        // Hide success message after 3 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      } catch (error) {
        console.error('Error submitting form:', error);
        setErrorMessage('Failed to send message. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    }
  }
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <>
    <Header />
    <main className="min-h-screen bg-[#101111] flex flex-col">
      <div className="flex-grow max-w-[1000px] mx-auto px-4 py-16">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-['SF Pro'] mb-12 animate-fade-in">
          <span className="text-white">Ready to make your </span>
          <span className="text-[#1b98e0] font-semibold">dream come true?</span>
        </h1>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row gap-10 pb-0">
          {/* Form Section */}
          <div className="w-full lg:w-2/3">
            {/* Success Message */}
            {showSuccess && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500 rounded-lg text-green-500 animate-fade-in">
                Message sent successfully! We&apos;ll get back to you soon.
              </div>
            )}

             {/* Error Message */}
             {errorMessage && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500 animate-fade-in">
                  {errorMessage}
                </div>
              )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="text-white mb-2 block">What is your name?</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name Surname"
                  className={`w-full bg-transparent border-b ${errors.name ? 'border-red-500' : 'border-gray-600'} text-white px-2 py-2 focus:outline-none focus:border-[#1b98e0] transition-colors`}
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="text-white mb-2 block">Where can we email you?</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="name@emailhere.com"
                  className={`w-full bg-transparent border-b ${errors.email ? 'border-red-500' : 'border-gray-600'} text-white px-2 py-2 focus:outline-none focus:border-[#1b98e0] transition-colors`}
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="text-white mb-2 block">How can we help you?</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Your messages..."
                  className={`w-full bg-transparent border-b ${errors.message ? 'border-red-500' : 'border-gray-600'} text-white px-2 py-2 focus:outline-none focus:border-[#1b98e0] transition-colors resize-none`}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`relative text-white bg-transparent border border-[#1b98e0] px-6 py-2 rounded-[20px] hover:bg-[#1b98e0]/10 transition-all duration-300
                  ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <span className="opacity-0">Send it!</span>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  </>
                ) : (
                  'Send it!'
                )}
              </button>
            </form>
          </div>

          {/* Information Section */}
          <div className="w-full lg:w-1/3 text-white">
            <h2 className="text-2xl font-semibold mb-6">Informations</h2>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <p>info@naspadstudio.id</p>
              <p>tel : +6281119903888</p>
            </div>

            {/* Address */}
            <div className="mb-8">
              <p className="font-semibold mb-2">HQ</p>
              <p>PT. Naspad Studio Digital</p>
              <p>South Tangerang, Banten</p>
              <p>Indonesia</p>
            </div>

            {/* Bank Details */}
            {/* <div>
              <p className="font-semibold mb-2">Bank number</p>
              <p>BCA 5275025400</p>
              <p>NasPad Studio Digital PT</p>
            </div> */}
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </> 
  );
}

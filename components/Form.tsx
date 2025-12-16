'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useState } from 'react';
import { toast } from 'sonner';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);

  const services = [
    { value: 'construction', label: 'Building Construction' },
    { value: 'designs', label: 'Architecture & Structural Designs' },
    { value: 'engineering', label: 'Infrastructure & Civil Engineering' },
    { value: 'procurement', label: 'Project Management & Procurement' },
    { value: 'logistics', label: 'International Trade Logistics' },
    { value: 'development', label: 'Real Estates Development' },
    { value: 'others', label: 'Other Services' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceChange = (value) => {
    setFormData({
      ...formData,
      service: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.service || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Validate phone format (basic validation)
    const phoneRegex = /^[0-9+\-\s()]{10,}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      toast.error('Please enter a valid phone number');
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading('Sending your message...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Message sent successfully!', {
          id: toastId,
          description: 'We will get back to you soon.'
        });
        // Reset form and close dialog
        setFormData({ 
          firstName: '', 
          lastName: '', 
          email: '', 
          phone: '', 
          service: '', 
          message: '' 
        });
        setOpen(false);
      } else {
        toast.error('Failed to send message', {
          id: toastId,
          description: result.message || 'Please try again later.'
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Network error', {
        id: toastId,
        description: 'Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          type="button"
          className="border-none bg-transparent font-bold uppercase cursor-pointer w-100"
        >
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90vw] max-w-[500px] max-h-[90vh] overflow-y-auto bg-white rounded-sm">
        <DialogHeader>
          <DialogTitle className="dia-title font-bold text-gray-800 mb-4 text-[18px] text-start after:animate-pulse">
            Request Quote
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col space-y-4">
            <Input 
              placeholder="First Name" 
              className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-purple-900 transition ease-in-out duration-150" 
              type="text" 
              id="firstName" 
              name="firstName" 
              value={formData.firstName} 
              onChange={handleChange} 
              required 
              disabled={isSubmitting} 
            />

            <Input 
              placeholder="Last Name" 
              className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-purple-900 transition ease-in-out duration-150" 
              type="text" 
              id="lastName" 
              name="lastName" 
              value={formData.lastName} 
              onChange={handleChange} 
              required 
              disabled={isSubmitting} 
            />

            <Input 
              placeholder="Email" 
              className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-purple-900 transition ease-in-out duration-150" 
              type="text" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              disabled={isSubmitting} 
            />
            
            <Input 
              placeholder="Phone" 
              className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-purple-900 transition ease-in-out duration-150" 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
              disabled={isSubmitting}
            />

            <Select
              value={formData.service}
              onValueChange={handleServiceChange}
              disabled={isSubmitting}
            >
              <SelectTrigger className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-purple-900 transition ease-in-out duration-150">
                <SelectValue placeholder="Select Your Service" className="text-gray-800" />
              </SelectTrigger>
              <SelectContent className="bg-gray-100 text-gray-800">
                <SelectGroup>
                  <SelectLabel>Our Services</SelectLabel>
                  {services.map((service) => (
                    <SelectItem 
                      key={service.value} 
                      value={service.value} 
                      className="text-gray-800"
                    >
                      {service.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* Hidden input for form validation of select */}
            <input
              type="text"
              name="service"
              value={formData.service}
              onChange={() => {}}
              required
              className="hidden"
              tabIndex={-1}
            />

            <Textarea 
              placeholder="Message" 
              className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 min-h-[100px] focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-purple-900 transition ease-in-out duration-150" 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
              disabled={isSubmitting}  
            />
          </div>

          <DialogFooter className="mt-6">
            <Button 
              className="bg-linear-to-r from-indigo-500 to-purple-900 text-white font-bold py-2 px-4 uppercase rounded-md w-full hover:bg-indigo-600 hover:to-purple-950 transition ease-in-out duration-150 cursor-pointer" 
              type="submit" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Request A Quote'
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Form;
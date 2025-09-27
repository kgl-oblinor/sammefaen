import React, { useState, useRef } from 'react';
import './mobile-responsive.css';

const MobileForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  // Validate email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    }
    
    if (!formData.role) {
      newErrors.role = 'Please select your role';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      
      // Focus on first error field
      const firstErrorField = Object.keys(newErrors)[0];
      const errorElement = formRef.current.querySelector(`[name="${firstErrorField}"]`);
      if (errorElement) {
        errorElement.focus();
      }
      
      return;
    }

    // Submit form
    setIsSubmitting(true);
    
    try {
      await onSubmit(formData);
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        message: ''
      });
      
      // Show success message
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Form submission error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} className="mobile-form" onSubmit={handleSubmit} noValidate>
      {/* Name Field */}
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`form-input touchable ${errors.name ? 'error' : ''}`}
          placeholder="John Doe"
          autoComplete="name"
          required
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <span id="name-error" className="form-error" role="alert">
            {errors.name}
          </span>
        )}
      </div>

      {/* Email Field */}
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`form-input touchable ${errors.email ? 'error' : ''}`}
          placeholder="john@company.com"
          autoComplete="email"
          required
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <span id="email-error" className="form-error" role="alert">
            {errors.email}
          </span>
        )}
      </div>

      {/* Company Field */}
      <div className="form-group">
        <label htmlFor="company" className="form-label">
          Company *
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className={`form-input touchable ${errors.company ? 'error' : ''}`}
          placeholder="Acme Corporation"
          autoComplete="organization"
          required
          aria-describedby={errors.company ? 'company-error' : undefined}
        />
        {errors.company && (
          <span id="company-error" className="form-error" role="alert">
            {errors.company}
          </span>
        )}
      </div>

      {/* Role Select */}
      <div className="form-group">
        <label htmlFor="role" className="form-label">
          Your Role *
        </label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          className={`form-select touchable ${errors.role ? 'error' : ''}`}
          required
          aria-describedby={errors.role ? 'role-error' : undefined}
        >
          <option value="">Select your role</option>
          <option value="investor">Institutional Investor</option>
          <option value="corporate">Corporate Executive</option>
          <option value="analyst">Financial Analyst</option>
          <option value="developer">Developer</option>
          <option value="other">Other</option>
        </select>
        {errors.role && (
          <span id="role-error" className="form-error" role="alert">
            {errors.role}
          </span>
        )}
      </div>

      {/* Message Field */}
      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Message (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="form-textarea touchable"
          placeholder="Tell us more about your requirements..."
          rows="4"
          aria-describedby="message-hint"
        />
        <span id="message-hint" className="form-hint">
          Any specific features or requirements you're interested in?
        </span>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="btn-primary"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className="spinner"></span>
            <span>Submitting...</span>
          </>
        ) : (
          <>
            <span>Schedule Demo</span>
            <svg className="btn-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M6 10H14M14 10L10 6M14 10L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </>
        )}
      </button>

      {/* Privacy Notice */}
      <p className="form-privacy">
        By submitting this form, you agree to our{' '}
        <a href="#privacy" className="form-link">Privacy Policy</a> and{' '}
        <a href="#terms" className="form-link">Terms of Service</a>.
      </p>
    </form>
  );
};

export default MobileForm;
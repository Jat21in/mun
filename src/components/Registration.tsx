import React, { useState } from 'react';

type FormData = {
  fullName: string;
  email: string;
  university: string;
  phoneNumber: string;
  delegateType: string;
  committeePreference1: string;
  committeePreference2: string;
  previousExperience: string;
  accommodationRequired: boolean;
  agreeToTerms: boolean;
};

// New type for errors
type FormErrors = {
  [K in keyof FormData]?: string;
};

const initialFormData: FormData = {
  fullName: '',
  email: '',
  university: '',
  phoneNumber: '',
  delegateType: '',
  committeePreference1: '',
  committeePreference2: '',
  previousExperience: '',
  accommodationRequired: false,
  agreeToTerms: false,
};

const committees = [
  'United Nations General Assembly (UNGA)',
  'United Nations Security Council (UNSC)',
  'United Nations Human Rights Council (UNHRC)',
  'World Health Organization (WHO)',
  'International Monetary Fund (IMF)',
  'Crisis Committee: Global Cyber Security Council',
];

const Registration = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, type, value } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Required';
    if (!formData.email.trim()) {
      newErrors.email = 'Required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.university.trim()) newErrors.university = 'Required';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Required';
    if (!formData.delegateType) newErrors.delegateType = 'Required';
    if (!formData.committeePreference1) newErrors.committeePreference1 = 'Required';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData(initialFormData);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <section id="registration" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-red-600 mb-4">Registration Successful!</h2>
            <p className="text-gray-600 mb-8">
              Thank you for registering for the JGU MUN Conference 2025. We have received your application and
              will be in touch shortly with further details.
            </p>
            <p className="text-gray-600 mb-8">
              Please check your email for a confirmation message. If you don't receive it within 24 hours, please
              check your spam folder or contact us.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors duration-300"
            >
              Register Another Delegate
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="registration" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">Registration</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Join us for the CU-MUN Conference 2025. Fill out the form below to register as a delegate. Early
            registration is recommended as committee spots fill up quickly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 bg-red-600 p-8 text-white hidden lg:block">
              <h3 className="text-2xl font-bold mb-6">Registration Details</h3>
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-2">Registration Fee</h4>
                <p className="text-red-100 mb-1">Individual Delegate: $50</p>
                <p className="text-red-100 mb-1">Delegation (5+ delegates): $40 per delegate</p>
                <p className="text-red-100">Observer: $30</p>
              </div>
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-2">Important Dates</h4>
                <p className="text-red-100 mb-1">Early Bird Registration: June 1 - July 15, 2025</p>
                <p className="text-red-100 mb-1">Regular Registration: July 16 - August 1, 2025</p>
                <p className="text-red-100">Position Paper Deadline: August 5, 2025</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Need Help?</h4>
                <p className="text-red-100 mb-1">Email: jgumun@jgu.edu.in</p>
                <p className="text-red-100">Phone: +91 XXX XXX XXXX</p>
              </div>
            </div>

            <div className="w-full lg:w-2/3 p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 ${
                        errors.fullName ? 'border-red-600' : 'border-gray-300'
                      }`}
                    />
                    {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 ${
                        errors.email ? 'border-red-600' : 'border-gray-300'
                      }`}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-1">
                      University / Institution*
                    </label>
                    <input
                      type="text"
                      id="university"
                      name="university"
                      value={formData.university}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 ${
                        errors.university ? 'border-red-600' : 'border-gray-300'
                      }`}
                    />
                    {errors.university && <p className="mt-1 text-sm text-red-600">{errors.university}</p>}
                  </div>
                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 ${
                        errors.phoneNumber ? 'border-red-600' : 'border-gray-300'
                      }`}
                    />
                    {errors.phoneNumber && <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>}
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="delegateType" className="block text-sm font-medium text-gray-700 mb-1">
                    Delegate Type*
                  </label>
                  <select
                    id="delegateType"
                    name="delegateType"
                    value={formData.delegateType}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 ${
                      errors.delegateType ? 'border-red-600' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select delegate type</option>
                    <option value="Individual Delegate">Individual Delegate</option>
                    <option value="Observer">Observer</option>
                    <option value="Delegation">Delegation (Group)</option>
                  </select>
                  {errors.delegateType && <p className="mt-1 text-sm text-red-600">{errors.delegateType}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="committeePreference1"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Committee Preference 1*
                    </label>
                    <select
                      id="committeePreference1"
                      name="committeePreference1"
                      value={formData.committeePreference1}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 ${
                        errors.committeePreference1 ? 'border-red-600' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select committee</option>
                      {committees.map(committee => (
                        <option key={committee} value={committee}>
                          {committee}
                        </option>
                      ))}
                    </select>
                    {errors.committeePreference1 && (
                      <p className="mt-1 text-sm text-red-600">{errors.committeePreference1}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="committeePreference2"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Committee Preference 2
                    </label>
                    <select
                      id="committeePreference2"
                      name="committeePreference2"
                      value={formData.committeePreference2}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    >
                      <option value="">Select committee (optional)</option>
                      {committees.map(committee => (
                        <option key={committee} value={committee}>
                          {committee}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="previousExperience" className="block text-sm font-medium text-gray-700 mb-1">
                    Previous MUN Experience (optional)
                  </label>
                  <textarea
                    id="previousExperience"
                    name="previousExperience"
                    value={formData.previousExperience}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Briefly describe any previous MUN participation or related experience"
                  />
                </div>

                <div className="mb-6 flex items-center">
                  <input
                    type="checkbox"
                    id="accommodationRequired"
                    name="accommodationRequired"
                    checked={formData.accommodationRequired}
                    onChange={handleChange}
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <label htmlFor="accommodationRequired" className="ml-2 block text-gray-700 text-sm">
                    Accommodation required during the conference
                  </label>
                </div>

                <div className="mb-6 flex items-center">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className={`h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded ${
                      errors.agreeToTerms ? 'border-red-600' : ''
                    }`}
                  />
                  <label htmlFor="agreeToTerms" className="ml-2 block text-gray-700 text-sm">
                    I agree to the{' '}
                    <a
                      href="#"
                      className="text-red-600 hover:text-red-700 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      terms and conditions
                    </a>
                    *
                  </label>
                </div>
                {errors.agreeToTerms && <p className="text-red-600 text-sm mb-4">{errors.agreeToTerms}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition-colors duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;

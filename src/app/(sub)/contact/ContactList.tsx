const ContactList: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="space-y-16">
        {/* Legal Enquiries */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-[#35075B] border-b-4 border-[#CF7650] pb-2">
            Legal Enquiries
          </h2>
          <p className="text-[#35075B] leading-relaxed">
          We are currently at capacity assisting many current clients. We are volunteer powered and are yet to be funded. Should you require legal help, we are happy to assist in connecting you to our referral partners. 
          </p>
        </div>

        {/* Law Students */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-[#35075B] border-b-4 border-[#CF7650] pb-2">
            Law Students
          </h2>
          <p className="text-[#35075B] leading-relaxed">
          Please apply by email with your distinction average academic transcript, resume & cover letter: {' '}
            <a 
              href="mailto:info@racialjustice.au" 
              className="text-[#35075B] hover:text-purple-600 underline"
            >
              info@racialjustice.au
            </a>
            .
          </p>
        </div>

        {/* Other Enquiries */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-[#35075B] border-b-4 border-[#CF7650] pb-2">
            Other Enquiries
          </h2>
          <p className="text-[#35075B] leading-relaxed">
          Would you like to partner with us? Please reach out with any collaboration pitches.
          </p>
        </div>

        {/* Media Request */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-[#35075B] border-b-4 border-[#CF7650] pb-2">
            Media Request
          </h2>
          <p className="text-[#35075B] leading-relaxed">
          If you have any media request for us, please email: {' '}
            <a 
              href="mailto:info@racialjustice.au" 
              className="text-[#35075B] hover:text-purple-600 underline"
            >
              info@racialjustice.au
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
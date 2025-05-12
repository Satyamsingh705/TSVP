import React from 'react';

const FeeStructure: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Fee Structure</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            We strive to provide quality education at reasonable costs. Our fee structure is transparent and designed to cover the educational and operational expenses of the school.
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-primary text-white">
                <th className="py-4 px-6 text-left">Fee Component</th>
                <th className="py-4 px-6 text-center">Classes 1-5</th>
                <th className="py-4 px-6 text-center">Classes 6-8</th>
                <th className="py-4 px-6 text-center">Classes 9-10</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="py-4 px-6 font-medium">Registration Fee (One time)</td>
                <td className="py-4 px-6 text-center">₹ 500</td>
                <td className="py-4 px-6 text-center">₹ 500</td>
                <td className="py-4 px-6 text-center">₹ 500</td>
              </tr>
              <tr className="border-b border-gray-300 bg-gray-50">
                <td className="py-4 px-6 font-medium">Admission Fee (One time)</td>
                <td className="py-4 px-6 text-center">₹ 5,000</td>
                <td className="py-4 px-6 text-center">₹ 6,000</td>
                <td className="py-4 px-6 text-center">₹ 7,000</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-4 px-6 font-medium">Annual Fee</td>
                <td className="py-4 px-6 text-center">₹ 8,000</td>
                <td className="py-4 px-6 text-center">₹ 10,000</td>
                <td className="py-4 px-6 text-center">₹ 12,000</td>
              </tr>
              <tr className="border-b border-gray-300 bg-gray-50">
                <td className="py-4 px-6 font-medium">Tuition Fee (Monthly)</td>
                <td className="py-4 px-6 text-center">₹ 1,200</td>
                <td className="py-4 px-6 text-center">₹ 1,500</td>
                <td className="py-4 px-6 text-center">₹ 1,800</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-4 px-6 font-medium">Transport Fee (Optional, Monthly)</td>
                <td className="py-4 px-6 text-center">₹ 600 - ₹ 1,000*</td>
                <td className="py-4 px-6 text-center">₹ 600 - ₹ 1,000*</td>
                <td className="py-4 px-6 text-center">₹ 600 - ₹ 1,000*</td>
              </tr>
              <tr className="border-b border-gray-300 bg-gray-50">
                <td className="py-4 px-6 font-medium">Computer Lab Fee (Annual)</td>
                <td className="py-4 px-6 text-center">₹ 1,500</td>
                <td className="py-4 px-6 text-center">₹ 2,000</td>
                <td className="py-4 px-6 text-center">₹ 2,500</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-medium">Science Lab Fee (Annual)</td>
                <td className="py-4 px-6 text-center">-</td>
                <td className="py-4 px-6 text-center">₹ 1,500</td>
                <td className="py-4 px-6 text-center">₹ 2,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 text-gray-600">
          <p className="text-sm">* Transport fee varies based on distance from school</p>
          <p className="text-sm mt-1">Note: All fees are subject to revision. Parents will be notified of any changes in advance.</p>
        </div>
        
        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Payment Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-primary mb-2">Fee Payment Schedule</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Annual Fee: At the beginning of the academic year</li>
                <li>Tuition Fee: Monthly (by the 10th of each month)</li>
                <li>Quarterly payment option available (5% discount)</li>
                <li>Annual payment option available (10% discount)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-2">Payment Methods</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Direct payment at school office (cash/cheque)</li>
                <li>Bank transfer</li>
                <li>Online payment through school portal</li>
                <li>UPI payment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeeStructure;
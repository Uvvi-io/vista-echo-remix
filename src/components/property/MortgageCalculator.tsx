
import React, { useState, useEffect } from 'react';
import { DollarSign, Percent } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(749000);
  const [downPayment, setDownPayment] = useState(149800);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(4.5);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  // Calculate monthly payment
  useEffect(() => {
    const principal = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;
    
    if (principal > 0 && monthlyRate > 0) {
      const payment = 
        (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
        (Math.pow(1 + monthlyRate, numPayments) - 1);
      
      setMonthlyPayment(payment);
    } else {
      setMonthlyPayment(0);
    }
  }, [homePrice, downPayment, loanTerm, interestRate]);

  // Update down payment when percentage changes
  const handleDownPaymentPercentChange = (value: number[]) => {
    const percent = value[0];
    setDownPaymentPercent(percent);
    setDownPayment(Math.round(homePrice * (percent / 100)));
  };

  // Update percentage when down payment changes
  const handleDownPaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value.replace(/[^0-9.]/g, ''));
    if (!isNaN(value)) {
      setDownPayment(value);
      setDownPaymentPercent(Math.round((value / homePrice) * 100));
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader className="bg-estate-primary text-white rounded-t-lg">
        <CardTitle className="text-xl font-bold">Mortgage Calculator</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-estate-gray-dark">
              Home Price
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <DollarSign size={16} className="text-estate-gray-dark" />
              </div>
              <Input 
                type="text" 
                value={homePrice.toLocaleString('en-US')}
                onChange={(e) => {
                  const value = parseFloat(e.target.value.replace(/[^0-9.]/g, ''));
                  if (!isNaN(value)) {
                    setHomePrice(value);
                    setDownPayment(Math.round(value * (downPaymentPercent / 100)));
                  }
                }}
                className="pl-10"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-estate-gray-dark">
              Down Payment ({downPaymentPercent}%)
            </label>
            <div className="relative mb-3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <DollarSign size={16} className="text-estate-gray-dark" />
              </div>
              <Input 
                type="text" 
                value={downPayment.toLocaleString('en-US')}
                onChange={handleDownPaymentChange}
                className="pl-10"
              />
            </div>
            <Slider 
              defaultValue={[downPaymentPercent]} 
              max={100} 
              step={1}
              onValueChange={handleDownPaymentPercentChange}
              value={[downPaymentPercent]}
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-estate-gray-dark">
              Loan Term (Years)
            </label>
            <div className="flex space-x-3">
              {[15, 20, 30].map((term) => (
                <Button
                  key={term}
                  type="button"
                  variant={loanTerm === term ? "default" : "outline"}
                  onClick={() => setLoanTerm(term)}
                  className={`flex-1 ${
                    loanTerm === term 
                      ? "bg-estate-primary text-white" 
                      : "border-estate-primary text-estate-primary"
                  }`}
                >
                  {term}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-estate-gray-dark">
              Interest Rate (%)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Percent size={16} className="text-estate-gray-dark" />
              </div>
              <Input 
                type="text" 
                value={interestRate}
                onChange={(e) => {
                  const value = parseFloat(e.target.value.replace(/[^0-9.]/g, ''));
                  if (!isNaN(value)) setInterestRate(value);
                }}
                className="pl-10"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <div className="text-center">
              <h4 className="text-sm text-estate-gray-dark">Estimated Monthly Payment</h4>
              <p className="text-3xl font-bold text-estate-primary mt-1">
                ${monthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </p>
              <p className="text-xs text-estate-gray-dark mt-1">
                Principal & Interest Only
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MortgageCalculator;

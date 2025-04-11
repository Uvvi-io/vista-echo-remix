
import React from 'react';
import { Phone, Mail, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactForm = () => {
  return (
    <Card className="mb-6">
      <CardHeader className="bg-estate-primary text-white rounded-t-lg">
        <CardTitle className="text-xl font-bold">Contact Agent</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-center mb-6">
          <img 
            src="https://randomuser.me/api/portraits/women/68.jpg" 
            alt="Agent" 
            className="w-16 h-16 rounded-full mr-4 object-cover"
          />
          <div>
            <h4 className="font-bold text-estate-gray-dark">Sarah Johnson</h4>
            <p className="text-estate-gray-dark text-sm">Lead Real Estate Agent</p>
            <div className="flex items-center mt-1">
              <div className="flex items-center text-yellow-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="ml-1 text-sm text-estate-gray-dark">5.0</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mb-6">
          <Button className="w-full bg-estate-accent hover:bg-estate-accent/90 text-white">
            <Phone size={16} className="mr-2" /> Call Agent
          </Button>
          <Button className="w-full border-estate-primary text-estate-primary hover:bg-estate-primary/10" variant="outline">
            <Mail size={16} className="mr-2" /> Email Agent
          </Button>
          <Button className="w-full border-estate-primary text-estate-primary hover:bg-estate-primary/10" variant="outline">
            <Calendar size={16} className="mr-2" /> Schedule Tour
          </Button>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-estate-gray-dark">Send a Message</h4>
          <div className="space-y-3">
            <Input placeholder="Your Name" />
            <Input placeholder="Email Address" type="email" />
            <Input placeholder="Phone Number" type="tel" />
            <Textarea 
              placeholder="I'm interested in this property. Please contact me with more information."
              rows={4}
            />
            <Button className="w-full bg-estate-primary hover:bg-estate-primary/90 text-white">
              Send Message
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactForm;

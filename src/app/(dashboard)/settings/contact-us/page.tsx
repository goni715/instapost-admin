"use client";

import { useState } from "react";
import { Mail, Phone, Plus, X } from "lucide-react";
import { Input } from "@/components/ui/input";

const ContactUsPage = () => {
  const [emails, setEmails] = useState(["", ""]);
  const [phones, setPhones] = useState(["", ""]);
  const [socials, setSocials] = useState([
    { platform: "Facebook", url: "", icon: "facebook" },
    { platform: "YouTube", url: "", icon: "youtube" },
    { platform: "Instagram", url: "", icon: "instagram" },
  ]);

  const handleEmailChange = (index: number, value: string) => {
    const newEmails = [...emails];
    newEmails[index] = value;
    setEmails(newEmails);
  };

  const handlePhoneChange = (index: number, value: string) => {
    const newPhones = [...phones];
    newPhones[index] = value;
    setPhones(newPhones);
  };

  const handleSocialChange = (index: number, value: string) => {
    const newSocials = [...socials];
    newSocials[index].url = value;
    setSocials(newSocials);
  };

  const clearEmail = (index: number) => {
    handleEmailChange(index, "");
  };

  const clearPhone = (index: number) => {
    handlePhoneChange(index, "");
  };

  const clearSocial = (index: number) => {
    handleSocialChange(index, "");
  };

  const addSocialField = () => {
    setSocials([
      ...socials,
      { platform: `Social Link ${socials.length}`, url: "", icon: "link" },
    ]);
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Contact Us
        </h1>

        {/* Write to US and Call to US Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
          {/* Write to US */}
          <div className="bg-white shadow-md p-4 rounded-md">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-cyan-400 rounded-full p-2">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                Write to US
              </h2>
            </div>

            <div className="space-y-4">
              {emails.map((email, index) => (
                <div key={index} className="relative">
                  <Input
                    type="email"
                    placeholder="xxxxxxx@gmail.com"
                    value={email}
                    onChange={(e) => handleEmailChange(index, e.target.value)}
                    className="border-cyan-400 focus:border-cyan-500 focus:ring-cyan-400"
                  />
                  {email && (
                    <button
                      onClick={() => clearEmail(index)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-400 hover:text-cyan-600"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <button className="bg-cyan-400 hover:bg-cyan-500 text-white rounded-full p-4 transition-colors">
                <Plus className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Call to US */}
          <div className="bg-white shadow-md p-4 rounded-md">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-cyan-400 rounded-full p-2">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                Call to US
              </h2>
            </div>

            <div className="space-y-4">
              {phones.map((phone, index) => (
                <div key={index} className="relative">
                  <Input
                    type="tel"
                    placeholder="+88834246534"
                    value={phone}
                    onChange={(e) => handlePhoneChange(index, e.target.value)}
                    className="border-cyan-400 focus:border-cyan-500 focus:ring-cyan-400"
                  />
                  {phone && (
                    <button
                      onClick={() => clearPhone(index)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-400 hover:text-cyan-600"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <button className="bg-cyan-400 hover:bg-cyan-500 text-white rounded-full p-4 transition-colors">
                <Plus className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Add Social Media Link Section */}
        <div className="bg-white shadow-md p-4 rounded-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-8">
            Add Social Media Link
          </h3>

          <div className="space-y-6">
            {socials.map((social, index) => (
              <div key={index}>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  {social.platform}
                </label>
                <div className="relative">
                  <Input
                    type="url"
                    placeholder={`${social.platform} URL`}
                    value={social.url}
                    onChange={(e) => handleSocialChange(index, e.target.value)}
                    className="border-cyan-400 focus:border-cyan-500 focus:ring-cyan-400"
                  />
                  {social.url && (
                    <button
                      onClick={() => clearSocial(index)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-400 hover:text-cyan-600"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={addSocialField}
              className="bg-cyan-400 hover:bg-cyan-500 text-white rounded-full p-4 transition-colors"
            >
              <Plus className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUsPage;

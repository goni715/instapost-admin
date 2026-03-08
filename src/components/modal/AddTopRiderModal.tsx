"use client";

import { useState } from "react";
import { Upload, Ruler, User } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const riders = [
  {
    id: 1,
    name: "SOLD",
    bgColor: "bg-blue-600",
    size: '24" x 6"',
    owner: "Instapost",
    rental: 5.0,
    printPrice: 26.0,
  },
  {
    id: 2,
    name: "ACREAGE",
    bgColor: "bg-black",
    textColor: "text-white",
    size: '24" x 6"',
    owner: "Instapost",
    rental: 5.0,
    printPrice: 26.0,
  },
  {
    id: 3,
    name: "COMING SOON",
    bgColor: "bg-gray-100",
    textColor: "text-black",
    size: '24" x 6"',
    owner: "Instapost",
    rental: 5.0,
    printPrice: 26.0,
  },
  {
    id: 4,
    name: "OPEN SUN 2-4",
    bgColor: "bg-red-600",
    textColor: "text-white",
    size: '24" x 6"',
    owner: "Instapost",
    rental: 5.0,
    printPrice: 26.0,
  },
];

const AddTopRiderModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showDesignOrder, setShowDesignOrder] = useState(false);
  const [selectedRider, setSelectedRider] = useState(riders[0]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [agentName, setAgentName] = useState("");
  const [agentPhone, setAgentPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [activeTab, setActiveTab] = useState("rider");

  const handleSelectRider = (rider: (typeof riders)[0]) => {
    setSelectedRider(rider);
  };

  const handleDesignClick = () => {
    setShowDesignOrder(true);
  };

  const handlePlaceOrder = () => {
    console.log("Order placed:", {
      selectedRider,
      selectedSize,
      selectedMaterial,
      agentName,
      agentPhone,
      notes,
    });
    setModalOpen(false);
  };

  return (
    <>
      <div
        onClick={() => setModalOpen(true)}
        className="absolute left-16 top-2 right-4 cursor-pointer border-2 border-dashed border-gray-300 rounded-xl h-20 flex items-center justify-center text-gray-500"
      >
        + Add top rider
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0">
          <DialogHeader className="sticky top-0 bg-white border-b p-4">
            <DialogTitle className="text-xl font-semibold">
              Add top rider
            </DialogTitle>
          </DialogHeader>

          {/* Tabs */}
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="px-4 pt-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="rider">Rider</TabsTrigger>
                <TabsTrigger value="designer">Designer</TabsTrigger>
                <TabsTrigger value="custom">Custom</TabsTrigger>
              </TabsList>
            </div>

            {/* Rider Tab */}
            <TabsContent value="rider" className="p-6">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Search...</span>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="flex-1 px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Riders Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {riders.map((rider) => (
                    <Card
                      key={rider.id}
                      className="overflow-hidden hover:shadow-xl pt-0 transition-shadow cursor-pointer rounded-lg"
                      onClick={() => handleSelectRider(rider)}
                    >
                      {/* Rider Header */}
                      <div
                        className={`${rider.bgColor} ${rider.textColor || "text-white"} p-6 text-center`}
                      >
                        <div className="text-4xl font-bold tracking-wider mb-1">
                          {rider.name}
                        </div>
                        <div className="text-xs opacity-80">
                          Instapost | instapost.com | XXX-XXX-XXXX
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-5 space-y-5">
                        {/* Size and Owner Row */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-start gap-3">
                            <Ruler
                              size={18}
                              className="text-blue-400 mt-1 shrink-0"
                            />
                            <div>
                              <div className="text-xs text-gray-500">Size</div>
                              <div className="text-sm font-semibold text-gray-900">
                                {rider.size}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <User
                              size={18}
                              className="text-blue-400 mt-1 shrink-0"
                            />
                            <div>
                              <div className="text-xs text-gray-500">Owner</div>
                              <div className="text-sm font-semibold text-gray-900">
                                {rider.owner}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Pricing Row */}
                        <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-200">
                          <div>
                            <div className="text-xs text-gray-400 mb-1">
                              Rental
                            </div>
                            <div className="text-sm font-semibold text-gray-900">
                              ${rider.rental.toFixed(2)}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-400 mb-1">
                              Print Price
                            </div>
                            <div className="text-sm font-semibold text-gray-900">
                              ${rider.printPrice.toFixed(2)}
                            </div>
                          </div>
                        </div>

                        {/* Select Button */}
                        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded">
                          Select Rider
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Designer Tab */}
            <TabsContent value="designer" className="p-6">
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-base mb-2">
                    Do you need a customized sign panel or rider? Create one
                    here.
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Choose from the available templates below and add your
                    desired text, material, and options. We&apos;ll print it for
                    you right away.
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    Looking for a special template for your office or team? We
                    would be happy to create one for you. Feel welcome to
                    contact our office at or by phone at XXXXXXX.
                  </p>
                  <p className="text-sm text-gray-600">Thank you!</p>
                </div>

                {!showDesignOrder ? (
                  <>
                    {/* Designer Preview */}
                    <div className="space-y-4">
                      <div
                        className={`${selectedRider.bgColor} ${selectedRider.textColor || "text-white"} p-8 text-center text-3xl font-bold tracking-wider`}
                      >
                        {selectedRider.name}
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-gray-500">📏</span>
                          <span className="font-semibold text-gray-700">
                            {selectedRider.size}
                          </span>
                        </div>
                      </div>

                      <Button
                        onClick={handleDesignClick}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 text-lg font-semibold"
                      >
                        Design
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Designer Order Form */}
                    <div className="space-y-6">
                      {/* Design Preview */}
                      <div className="flex gap-4">
                        <div className="shrink-0">
                          <div
                            className={`${selectedRider.bgColor} ${selectedRider.textColor || "text-white"} p-6 text-center text-2xl font-bold w-40 h-24 flex items-center justify-center`}
                          >
                            {selectedRider.name}
                          </div>
                          <div className="flex gap-1 mt-3">
                            {[
                              "bg-blue-600",
                              "bg-black",
                              "bg-red-600",
                              "bg-yellow-400",
                              "bg-purple-600",
                              "bg-pink-600",
                              "bg-green-600",
                              "bg-teal-700",
                            ].map((color, idx) => (
                              <div
                                key={idx}
                                className={`${color} w-6 h-6 rounded cursor-pointer hover:opacity-80`}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Form Fields */}
                        <div className="flex-1 space-y-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Agent Name
                            </label>
                            <Input
                              placeholder="e.g. Jhon"
                              value={agentName}
                              onChange={(e) => setAgentName(e.target.value)}
                              className="border-gray-300"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Agent Phone Number
                            </label>
                            <Input
                              placeholder="e.g. +5545166444"
                              value={agentPhone}
                              onChange={(e) => setAgentPhone(e.target.value)}
                              className="border-gray-300"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Select Material
                            </label>
                            <Select
                              value={selectedMaterial}
                              onValueChange={setSelectedMaterial}
                            >
                              <SelectTrigger className="border-gray-300">
                                <SelectValue placeholder="Search to select" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="plastic">Plastic</SelectItem>
                                <SelectItem value="metal">Metal</SelectItem>
                                <SelectItem value="wood">Wood</SelectItem>
                                <SelectItem value="vinyl">Vinyl</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      {/* Notes */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Notes
                        </label>
                        <Textarea
                          placeholder="e.g. The key is under the front door mat"
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          className="border-gray-300 resize-none"
                          rows={3}
                        />
                      </div>

                      {/* Price Breakdown */}
                      <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Price breakdown
                        </h4>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Post install :</span>
                          <span>$50.00</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600 border-b pb-3 mb-3">
                          <span>Credit card fee :</span>
                          <span>$50.00</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-gray-900">
                            Total Price :
                          </span>
                          <span className="text-2xl font-bold text-gray-900">
                            $100.00
                          </span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Button
                          onClick={() => setShowDesignOrder(false)}
                          variant="outline"
                          className="flex-1"
                        >
                          Back
                        </Button>
                        <Button
                          onClick={handlePlaceOrder}
                          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white"
                        >
                          Place Order <span className="ml-2">→</span>
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </TabsContent>

            {/* Custom Tab */}
            <TabsContent value="custom" className="p-6">
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-base mb-2">
                    Do you have your own design you&apos;d like us to print?
                    Upload it here.
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Your uploaded file should be a full-size rendering of your
                    design, in one of these formats: PDF, EPS, PNG, or SVG for
                    printing at least 300dpi. Note: Should be converted to an
                    outline form.
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    After uploading, you can monitor the progress of your print
                    in the Print Orders section at left. One of our staff will
                    contact you if we have any questions regarding your design.
                    If you have any questions for us, feel welcome to contact
                    our office at or by phone at XXXXXXX.
                  </p>
                  <p className="text-sm text-gray-600">Thank you!</p>
                </div>

                {/* Upload Section */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <Upload size={32} className="text-gray-400" />
                    <button className="text-blue-500 hover:text-blue-600 font-semibold text-sm">
                      Upload file
                    </button>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Select Size
                    </label>
                    <Select
                      value={selectedSize}
                      onValueChange={setSelectedSize}
                    >
                      <SelectTrigger className="border-gray-300">
                        <SelectValue placeholder="Search to select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="24x8">24&quot; x 8&quot;</SelectItem>
                        <SelectItem value="24x6">24&quot; x 6&quot;</SelectItem>
                        <SelectItem value="18x6">18&quot; x 6&quot;</SelectItem>
                        <SelectItem value="36x12">
                          36&quot; x 12&quot;
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Select Material
                    </label>
                    <Select
                      value={selectedMaterial}
                      onValueChange={setSelectedMaterial}
                    >
                      <SelectTrigger className="border-gray-300">
                        <SelectValue placeholder="Search to select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="plastic">Plastic</SelectItem>
                        <SelectItem value="metal">Metal</SelectItem>
                        <SelectItem value="wood">Wood</SelectItem>
                        <SelectItem value="vinyl">Vinyl</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Notes
                    </label>
                    <Textarea
                      placeholder="e.g. The key is under the front door mat"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="border-gray-300 resize-none"
                      rows={3}
                    />
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Price breakdown
                  </h4>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Post install :</span>
                    <span>$50.00</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 border-b pb-3 mb-3">
                    <span>Credit card fee :</span>
                    <span>$50.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">
                      Total Price :
                    </span>
                    <span className="text-2xl font-bold text-gray-900">
                      $100.00
                    </span>
                  </div>
                </div>

                {/* Place Order Button */}
                <Button
                  onClick={handlePlaceOrder}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 text-lg font-semibold"
                >
                  Place Order <span className="ml-2">→</span>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddTopRiderModal;

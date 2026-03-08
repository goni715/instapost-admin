"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Info, Calendar, Plus, ArrowLeft, Eye } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useRouter } from "next/navigation";
import AddTopRiderModal from "@/components/modal/AddTopRiderModal";

const NewSignInstallPage = () => {
  const [formData, setFormData] = useState({
    address: "",
    unitAptNumber: "",
    listingId: "",
    dueDate: "",
    asap: false,
    rushOrder: false,
    firstName: "",
    lastName: "",
    postType: "",
    installType: "single",
    notes: "",
    propertyType: "",
    signPlacement: "",
    gateCode: "",
    addressConfirmed: "",
    lockbox: "",
    sprinkler: false,
    restrictedAccess: false,
    dogFence: false,
    brochureBox: false,
    showCovers: false,
  });

  const router = useRouter();

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-4 py-4 flex items-center gap-3">
          <ArrowLeft
            onClick={() => router.push("/")}
            className="w-5 h-5 cursor-pointer"
          />
          <h1 className="text-xl font-semibold text-gray-900">
            New Sign Install
          </h1>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6 py-4">
          {/* Left Column - Form */}
          <div className="flex-1 space-y-6">
            {/* Address Section */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium text-gray-700">
                    Address *
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="w-4 h-4 inline-block ml-1 cursor-pointer" />
                      </TooltipTrigger>
                      <TooltipContent>
                        Enter the property address
                      </TooltipContent>
                    </Tooltip>
                  </Label>
                  <Button variant="outline" size="sm" className="text-xs">
                    + Add manually
                  </Button>
                </div>
                <Input
                  placeholder="Lookup address or intersection"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  className="text-sm"
                />

                {/* Unit and Listing ID Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-700">
                      Unit/Apt. Number
                    </Label>
                    <Input
                      placeholder="e.g. 204A"
                      value={formData.unitAptNumber}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          unitAptNumber: e.target.value,
                        })
                      }
                      className="text-sm"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700">
                      Listing Id
                    </Label>
                    <Input
                      placeholder="e.g. 29690"
                      value={formData.listingId}
                      onChange={(e) =>
                        setFormData({ ...formData, listingId: e.target.value })
                      }
                      className="text-sm"
                    />
                  </div>
                </div>

                {/* Due Date */}
                <div>
                  <Label className="text-sm font-medium text-gray-700">
                    Due Date
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="w-4 h-4 inline-block ml-1 cursor-pointer" />
                      </TooltipTrigger>
                      <TooltipContent>
                        Select the installation date
                      </TooltipContent>
                    </Tooltip>
                  </Label>
                  <div className="relative">
                    <Input
                      type="date"
                      value={formData.dueDate}
                      onChange={(e) =>
                        setFormData({ ...formData, dueDate: e.target.value })
                      }
                      className="text-sm"
                    />
                    <Calendar className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* ASAP and Rush Order */}
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="asap"
                      checked={formData.asap}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, asap: Boolean(checked) })
                      }
                    />
                    <Label
                      htmlFor="asap"
                      className="text-sm font-medium cursor-pointer"
                    >
                      ASAP
                    </Label>
                  </div>
                  <Button variant="outline" size="sm" className="text-xs">
                    ⚡ Rush Order
                  </Button>
                </div>
              </div>
            </div>

            {/* Occupant Section */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Occupant
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-gray-700">
                    First Name
                  </Label>
                  <Input
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="text-sm"
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700">
                    Last Name
                  </Label>
                  <Input
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Post Type Section */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Select Post Type *
              </h3>
              <Select
                value={formData.postType}
                onValueChange={(value) =>
                  setFormData({ ...formData, postType: value })
                }
              >
                <SelectTrigger className="text-sm">
                  <SelectValue placeholder="Search to select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vinyl">Vinyl Post</SelectItem>
                  <SelectItem value="aluminum">Aluminum Post</SelectItem>
                  <SelectItem value="wood">Wood Post</SelectItem>
                </SelectContent>
              </Select>

              {/* Install Type Buttons */}
              <div className="flex gap-3 mt-4">
                <Button
                  variant={
                    formData.installType === "single" ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() =>
                    setFormData({ ...formData, installType: "single" })
                  }
                  className="flex-1"
                >
                  Single Install
                </Button>
                <Button
                  variant={
                    formData.installType === "dual" ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() =>
                    setFormData({ ...formData, installType: "dual" })
                  }
                  className="flex-1"
                >
                  Dual Install
                </Button>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <Label className="text-sm font-medium text-gray-700">
                Notes
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="w-4 h-4 inline-block ml-1 cursor-pointer" />
                  </TooltipTrigger>
                  <TooltipContent>
                    e.g The key is under the front door mat
                  </TooltipContent>
                </Tooltip>
              </Label>
              <Textarea
                placeholder="e.g The key is under the front door mat"
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
                className="text-sm mt-2"
              />
            </div>

            {/* Property Type Section */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <Label className="text-sm font-medium text-gray-700 mb-4 block">
                Property Type *
              </Label>
              <Select
                value={formData.propertyType}
                onValueChange={(value) =>
                  setFormData({ ...formData, propertyType: value })
                }
              >
                <SelectTrigger className="text-sm">
                  <SelectValue placeholder="Search to select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="industrial">Industrial</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Sign Placement Section */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <Label className="text-sm font-medium text-gray-700 mb-2 block">
                Where should the sign be placed? *
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="w-4 h-4 inline-block ml-1 cursor-pointer" />
                  </TooltipTrigger>
                  <TooltipContent>
                    e.g Place the sign in front of house
                  </TooltipContent>
                </Tooltip>
              </Label>
              <Textarea
                placeholder="e.g Place the sign in front of house"
                value={formData.signPlacement}
                onChange={(e) =>
                  setFormData({ ...formData, signPlacement: e.target.value })
                }
                className="text-sm"
              />
            </div>

            {/* Gate Code Section */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <Label className="text-sm font-medium text-gray-700 mb-2 block">
                Please provide gate code (if applicable)
              </Label>
              <Textarea
                placeholder="e.g Place the sign in front of house"
                value={formData.gateCode}
                onChange={(e) =>
                  setFormData({ ...formData, gateCode: e.target.value })
                }
                className="text-sm"
              />
            </div>

            {/* Upload Image Section */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <Label className="text-sm font-medium text-gray-700 mb-4 block">
                Upload image
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="w-4 h-4 inline-block ml-1 cursor-pointer" />
                  </TooltipTrigger>
                  <TooltipContent>
                    Upload a photo of the property
                  </TooltipContent>
                </Tooltip>
              </Label>
              <Button
                variant="outline"
                className="w-full text-sm justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Click here to upload
              </Button>
            </div>

            {/* Address Confirmation Section */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <Label className="text-sm font-medium text-gray-700 mb-4 block">
                I confirm that the address is accurate *
              </Label>
              <Select
                value={formData.addressConfirmed}
                onValueChange={(value) =>
                  setFormData({ ...formData, addressConfirmed: value })
                }
              >
                <SelectTrigger className="text-sm">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Lockbox Section */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <Label className="text-sm font-medium text-gray-700 mb-4 block">
                Lockbox
              </Label>
              <Select
                value={formData.lockbox}
                onValueChange={(value) =>
                  setFormData({ ...formData, lockbox: value })
                }
              >
                <SelectTrigger className="text-sm">
                  <SelectValue placeholder="Assign Lockbox" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lockbox1">Lockbox 1</SelectItem>
                  <SelectItem value="lockbox2">Lockbox 2</SelectItem>
                  <SelectItem value="lockbox3">Lockbox 3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Site Warnings Section */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Site Warnings
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="sprinkler"
                    checked={formData.sprinkler}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, sprinkler: Boolean(checked) })
                    }
                  />
                  <Label htmlFor="sprinkler" className="text-sm cursor-pointer">
                    Underground sprinkler system
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="restricted"
                    checked={formData.restrictedAccess}
                    onCheckedChange={(checked) =>
                      setFormData({
                        ...formData,
                        restrictedAccess: Boolean(checked),
                      })
                    }
                  />
                  <Label
                    htmlFor="restricted"
                    className="text-sm cursor-pointer"
                  >
                    Restricted/gated access
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="dogFence"
                    checked={formData.dogFence}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, dogFence: Boolean(checked) })
                    }
                  />
                  <Label htmlFor="dogFence" className="text-sm cursor-pointer">
                    Invisible dog fence
                  </Label>
                </div>
              </div>
            </div>

            {/* Add-on Services Section */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Add-on Services
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" size="sm" className="text-xs">
                  + Add Brochure Box
                </Button>
                <Button variant="outline" size="sm" className="text-xs gap-1">
                  <Eye className="w-4 h-4" />
                  Show Covers
                  <Info className="w-3 h-3" />
                </Button>
              </div>
            </div>

            {/* Price Breakdown Section */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Price breakdown
              </h3>
              <div className="space-y-3 border-b border-gray-200 pb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Post Install</span>
                  <span className="font-medium">$60.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Credit card fee</span>
                  <span className="font-medium">$40.00</span>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm font-medium text-gray-700">
                  Total Price:
                </span>
                <span className="text-2xl font-bold text-gray-900">
                  $100.00
                </span>
              </div>
              <Button className="w-full mt-4 bg-primary text-white cursor-pointer">
                Place Order →
              </Button>
            </div>
          </div>

          {/* Right Column - Preview Panel */}
          <div className="lg:w-125">
            <div className="bg-white p-8 rounded-lg border border-gray-200 sticky top-6">
              {/* Sign Preview */}
              <div className="w-full min-h-96 flex items-center justify-center bg-white">
                <div className="relative w-105 h-130">
                  {/* Vertical bar */}
                  <div className="absolute left-0 top-0 h-full w-6 bg-gray-300"></div>

                  {/* Horizontal bar */}
                  <div className="absolute left-0 top-24 w-full h-6 bg-gray-300"></div>

                  {/* Top rider */}
                 
                  <AddTopRiderModal/>

                  {/* Main panel */}
                  <div className="absolute left-16 top-32 right-4 border-2 border-dashed border-gray-300 rounded-xl h-60 flex items-center justify-center text-gray-500">
                    + Add main panel
                  </div>

                  {/* Bottom rider */}
                  <div className="absolute left-16 bottom-4 right-4 border-2 border-dashed border-gray-300 rounded-xl h-20 flex items-center justify-center text-gray-500">
                    + Add bottom rider
                  </div>
                </div>
              </div>

              {/* Favorite Section */}
              <div className="p-4 border-t border-gray-200 flex items-center gap-2">
                <Checkbox id="favorite" />
                <Label htmlFor="favorite" className="text-sm cursor-pointer">
                  Save As Favorite
                </Label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default NewSignInstallPage;

"use client";

import DetailItem from "@/components/order/DetailItem";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import OrderDetailsModal from "./OrderDetailsModal";
import { TOrderStatus } from "@/types/order.type";
import Section from "@/components/order/Section";

interface Installer {
  name: string;
  avatar?: string;
}

interface SignInstallationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  status: TOrderStatus;
  orderId: string;
  scheduledDate: string;
  address: string;
  unitApt: string;
  id: string;
  dueDate: string;
  occupant: string;
  note: string;
  propertyType: string;
  whereToPlace: string;
  gateCode?: string;
  addressConfirmed: string;
  lockbox: string;
  siteWarnings: string[];
  addOnServices: string[];
  installer?: Installer;
  postType: string;
  installType: string;
  riderSize: string;
  riderMaterial: string;
  mainPanelSize: string;
  mainPanelMaterial: string;
  propertyImages: string[];
  completionImages?: string[];
  priceBreakdown: { label: string; value: string }[];
}

export function SignInstallationModal({
  open,
  onOpenChange,
  status,
  orderId,
  scheduledDate,
  address,
  unitApt,
  id,
  dueDate,
  occupant,
  note,
  propertyType,
  whereToPlace,
  gateCode,
  addressConfirmed,
  lockbox,
  siteWarnings,
  addOnServices,
  installer,
  postType,
  installType,
  riderSize,
  riderMaterial,
  mainPanelSize,
  mainPanelMaterial,
  propertyImages,
  completionImages,
  priceBreakdown,
}: SignInstallationModalProps) {
  const leftContent = (
    <>
      {/* Installer Info (if available) */}
      {status === "Completed" && installer && (
        <Section title="Assigned Installer">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={installer.avatar} />
              <AvatarFallback>{installer.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-gray-900">
                {installer.name}
              </p>
            </div>
          </div>
        </Section>
      )}

      {/* Address Information */}
      <Section title="Address">
        <div className="space-y-2">
          <DetailItem label="Address" value={address} />
          <DetailItem label="Unit/Apt. Number" value={unitApt} />
          <DetailItem label="ID" value={id} />
        </div>
      </Section>

      {/* Order Details */}
      <Section title="Order Details">
        <div className="space-y-2">
          <DetailItem label="Scheduled Date" value={scheduledDate} />
          <DetailItem label="Due Date" value={dueDate} />
          <DetailItem label="Occupant" value={occupant} />
        </div>
      </Section>

      {/* Installation Instructions */}
      <Section title="Installation Instructions">
        <div className="space-y-2">
          <DetailItem label="Note" value={note} />
          <DetailItem label="Property type" value={propertyType} />
          <DetailItem
            label="Where should the sign be placed?"
            value={whereToPlace}
          />
          {gateCode && <DetailItem label="Gate code" value={gateCode} />}
        </div>
      </Section>

      {/* Property Access */}
      <Section title="Property Access">
        <div className="space-y-2">
          <DetailItem
            label="I confirm that the address is accurate"
            value={addressConfirmed}
          />
          <DetailItem label="Lockbox" value={lockbox} />
          <DetailItem label="Site Warnings" value={siteWarnings.join(", ")} />
          {addOnServices.length > 0 && (
            <DetailItem
              label="Add on service"
              value={addOnServices.join(", ")}
            />
          )}
        </div>
      </Section>
    </>
  );

  const rightContent = (
    <>
      {/* Property Images */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-900">Sign References</h3>
        <div className="grid grid-cols-2 gap-2">
          {propertyImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Property reference ${index + 1}`}
              className="h-24 w-full rounded border border-gray-200 object-cover"
              width={400}
              height={400}
            />
          ))}
        </div>
      </div>

      {/* Sign Specifications */}
      <div className="space-y-3 border-t pt-4">
        <div className="space-y-2">
          <DetailItem label="Post type" value={postType} />
          <DetailItem label="Install type" value={installType} />
        </div>
      </div>

      {/* Rider Information */}
      <div className="space-y-3 border-t pt-4">
        <h3 className="text-sm font-semibold text-gray-900">Rider</h3>
        <div className="space-y-2">
          <DetailItem label="Size" value={riderSize} />
          <DetailItem label="Material" value={riderMaterial} />
        </div>
      </div>

      {/* Main Panel Information */}
      <div className="space-y-3 border-t pt-4">
        <h3 className="text-sm font-semibold text-gray-900">Main panel</h3>
        <div className="space-y-2">
          <DetailItem label="Size" value={mainPanelSize} />
          <DetailItem label="Material" value={mainPanelMaterial} />
        </div>
      </div>

      {/* Completion Images */}
      {status === "Completed" &&
        completionImages &&
        completionImages.length > 0 && (
          <div className="space-y-3 border-t pt-4">
            <h3 className="text-sm font-semibold text-gray-900">
              Completion image
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {completionImages.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Completion photo ${index + 1}`}
                  className="h-16 w-full rounded border border-gray-200 object-cover"
                  height={400}
                  width={400}
                />
              ))}
            </div>
          </div>
        )}
    </>
  );

  return (
    <OrderDetailsModal
      open={open}
      onOpenChange={onOpenChange}
      title="Sign installation order details"
      status={status}
      orderId={orderId}
      leftContent={leftContent}
      rightContent={rightContent}
      priceBreakdown={priceBreakdown}
    />
  );
}

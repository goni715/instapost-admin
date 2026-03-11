export interface IItem {
  id: string;
  name: string;
}

export const DUMMY_ITEMS: IItem[] = [
  { id: "1", name: "Modern Logo Design" },
  { id: "2", name: "Minimal Business Card" },
  { id: "3", name: "Website Banner Design" },
  { id: "4", name: "Product Label Design" },
  { id: "5", name: "Poster Layout Design" },
  { id: "6", name: "Packaging Design" },
  { id: "7", name: "Flyer Promotion Design" },
  { id: "8", name: "Social Media Post Design" },
  { id: "9", name: "Event Invitation Design" },
  { id: "10", name: "Company Brochure Design" },
];

export const ITEM_META_DATA = {
  page: 1,
  limit: 10,
  total: 10,
  totalPages: 1,
};

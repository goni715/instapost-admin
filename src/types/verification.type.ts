export interface IVerification {
  id: string;
  fullName: string;
  email: string;
  documents: string[];
  submittedDate: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  avatar?: string;
}
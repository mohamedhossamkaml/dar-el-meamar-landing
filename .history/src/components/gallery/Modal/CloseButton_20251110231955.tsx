import React from 'react';
import { X } from 'lucide-react';

interface Props {
  onClose: () => void;
  label: string;
}

const CloseButton: React.FC<Props> = ({ onClose, label }) => (
  <button
    onClick={onClose}
    className="bg-red-600 text-white rounded-md px-2 py-1 text-sm hover:bg-red-700 transition flex items-center gap-1"
  >
    <X size={20} />
    {label}
  </button>
);

export default CloseButton;

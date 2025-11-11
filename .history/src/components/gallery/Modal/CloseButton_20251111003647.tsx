import React from 'react';
import { X } from 'lucide-react';

interface Props {
  onClose: () => void;
  label: string;
  className?: string;
}

const CloseButton: React.FC<Props> = ({ onClose, label }) => (
  <button
    onClick={onClose}
    className="bg-red-600 text-white rounded-md px-3 py-1  hover:bg-red-700 transition flex items-center "
  >
    <X size={16} />
    {label}
  </button>
);

export default CloseButton;

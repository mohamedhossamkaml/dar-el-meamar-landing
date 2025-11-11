import React from 'react';
import { Building2 } from 'lucide-react';

interface Props {
  project: any;
}

const ProjectDetails: React.FC<Props> = ({ project }) => (
  <div className="flex flex-col">
    <h2 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h2>
    <p className="text-gray-600 dark:text-gray-400 text-sm">{project.description}</p>
    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
      <Building2 size={16} className="mr-2" />
      {project.location}
    </div>
    <span className="inline-block bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full text-xs mt-2">
      {project.category}
    </span>
  </div>
);

export default ProjectDetails;

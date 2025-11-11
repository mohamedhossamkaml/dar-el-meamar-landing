import React from 'react';


interface Props {
  project: any;
}

const ProjectDetails: React.FC<Props> = ({ project }) => (
  <div className="flex flex-col">
    <h2 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h2>
    <p className="text-gray-600 dark:text-gray-400 text-sm">{project.description}</p>
    <span className="inline-block bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full text-xs mt-2">
      {project.category}
    </span>
  </div>
);

export default ProjectDetails;

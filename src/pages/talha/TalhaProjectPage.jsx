import { useParams } from 'react-router';
import { Counter } from '@/components/talha';

export const TalhaProjectPage = () => {
  const { projectId } = useParams();

  const componentMap = {
    'counter-app': <Counter />,
  };

  const selectedProject = componentMap[projectId];

  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  return <div className="w-8/12">{selectedProject}</div>;
};

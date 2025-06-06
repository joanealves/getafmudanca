import { statesData, servedStatesData } from '../../data/statesData';

export const isStateServed = (stateCode: string): boolean => {
  return servedStatesData.some((state) => state.code === stateCode);
};

export const getStateStyle = (stateCode: string, isHovered: boolean): React.CSSProperties => {
  const isServed = isStateServed(stateCode);
  
  let fillColor = '#60A5FA'; 
  if (isServed) {
    fillColor = '#1E3A8A';
  }
  
  if (isHovered) {
    fillColor = isServed ? '#1E40AF' : '#3B82F6'; 
  }

  return {
    fill: fillColor,
    stroke: '#FFFFFF',
    strokeWidth: '1.5',
    cursor: 'pointer',
    transition: 'fill 0.3s ease-in-out',
  };
};
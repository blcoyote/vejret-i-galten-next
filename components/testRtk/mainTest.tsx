import React from 'react';
import { useGetCurrentWeatherQuery } from '../../services/weatherApi';

export const Main = () => {
  const {
    isLoading: isCurrentLoading,
    data: currentData,
    refetch: refetchCurrent,
    error: currentError,
    isError: isCurrentError,
  } = useGetCurrentWeatherQuery({});

  React.useEffect(() => {
    if (currentData) {
      console.log('current: ', { ...currentData });
    }
  }, [currentData]);

  return <div></div>;
};

export default Main;

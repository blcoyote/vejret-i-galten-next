import React from 'react';
import { useGetAppConfigQuery } from '../../services/appConfiguration';

export const App = () => {
  const { isLoading, data, refetch, error, isError } = useGetAppConfigQuery({});
  React.useEffect(() => {
    if (data) {
      console.log('reply: ', data?.data);
    }
  }, [data]);

  return <></>;
};

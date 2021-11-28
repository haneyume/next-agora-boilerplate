import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import { AppContext } from '../utils/AppContext';

export const Header = () => {
  const appCtx = React.useContext(AppContext);
  const router = useRouter();
  const { t, i18n } = useTranslation();

  return (
    <div className="border-b border-gray-300 mb-5">
      <div className="container mx-auto px-5">
        <div className="flex justify-start items-center py-5 space-x-3">
          <div
            className="text-2xl text-gray-700 cursor-pointer"
            onClick={() => router.push('/')}
          >
            next-agora-boilerplate
          </div>

          <div className="flex-1" />

          <div
            className="cursor-pointer"
            onClick={() => router.push('/account')}
          >
            <img
              className="w-8 h-8 bg-gray-100 rounded"
              src={`https://avatars.dicebear.com/api/jdenticon/${appCtx.user?.uid}.svg`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

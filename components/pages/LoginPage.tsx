import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import { AppContext } from '../utils/AppContext';

import { QuickForm } from '@haneyume/ui-libs';

export const LoginPage = () => {
  const appCtx = React.useContext(AppContext);
  const router = useRouter();
  const { t, i18n } = useTranslation();

  return (
    <div className="container mx-auto px-5">
      <div className="w-full md:w-1/2 mx-auto">
        <QuickForm<{ email: string; password: string }>
          properties={{
            email: { type: 'email', required: true },
            password: { type: 'password', required: true },
          }}
          onSubmit={(data) => {
            appCtx.loginWithEmail(data.email, data.password).catch((error) => {
              appCtx.showNotification('Error', error.message);
              alert(error.message);
            });
          }}
        />
      </div>
    </div>
  );
};

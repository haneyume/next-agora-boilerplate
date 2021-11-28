import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import { AppContext, IndexPage, HomePage, LoginPage } from '../components';

export default function Index() {
  const appCtx = React.useContext(AppContext);
  const router = useRouter();
  const { t, i18n } = useTranslation();

  return <IndexPage authedPage={<HomePage />} unauthedPage={<LoginPage />} />;
}

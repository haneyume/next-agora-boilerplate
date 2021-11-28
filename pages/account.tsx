import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import { AppContext, AuthPage, Header } from '../components';

export default function Account() {
  const appCtx = React.useContext(AppContext);
  const router = useRouter();
  const { t, i18n } = useTranslation();

  return (
    <AuthPage>
      <Header />

      <div className="container mx-auto px-5">
        <h1 className="text-2xl mb-10">{t('Account')}</h1>

        <div className="flex items-start mb-10">
          <img
            className="w-32 h-32 bg-gray-100 rounded"
            src={`https://avatars.dicebear.com/api/jdenticon/${appCtx.user?.uid}.svg`}
          />

          <div className="ml-10">
            <p>email: {appCtx.user?.email}</p>
            <p>uid: {appCtx.user?.uid}</p>
          </div>
        </div>

        <div className="mb-10">
          <select
            value={i18n.language}
            onChange={(evt) => i18n.changeLanguage(evt.target.value)}
          >
            <option value="en">English</option>
            <option value="ja">日本語</option>
            <option value="zhHant">繁體中文</option>
            <option value="zhHans">简体中文</option>
          </select>
        </div>

        <input
          className="bg-red-500"
          type="button"
          value={t('Logout').toString()}
          onClick={() => appCtx.logout()}
        />
      </div>
    </AuthPage>
  );
}

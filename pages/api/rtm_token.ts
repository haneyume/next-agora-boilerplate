// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { RtmTokenBuilder, RtmRole } from 'agora-access-token';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const appID = process.env.NEXT_PUBLIC_AGORA_APP_ID!;
  const appCertificate = process.env.NEXT_PUBLIC_AGORA_APP_CERTIFICATE!;
  const account = 'demo@demo.com';

  const expirationTimeInSeconds = 3600;
  const currentTimestamp = Math.floor(Date.now() / 1000);

  const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;

  const token = RtmTokenBuilder.buildToken(
    appID,
    appCertificate,
    account,
    RtmRole as any,
    privilegeExpiredTs,
  );

  res.status(200).json({ token });
}

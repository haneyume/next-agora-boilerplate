import React from 'react';
import axios from 'axios';
import AgoraRTM from 'agora-rtm-sdk';

const Chat = () => {
  const init = async () => {
    try {
      let client = await AgoraRTM.createInstance(
        process.env.NEXT_PUBLIC_AGORA_APP_ID!,
      );

      const req = await axios.get<{ token: string }>(`/api/rtm_token`);

      await client.login({
        uid: 'demo@demo.com',
        token: req.data.token,
      });

      const channel = client.createChannel('aaa');
      await channel.join();

      await channel.sendMessage({ text: 'hello' });
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    init();
  }, []);

  return (
    <>
      <div className="">Chat</div>
    </>
  );
};

export default Chat;

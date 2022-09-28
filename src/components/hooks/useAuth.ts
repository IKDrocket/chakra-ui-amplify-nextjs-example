import { useQuery } from '@tanstack/react-query';
import { Auth } from 'aws-amplify';
import { atom, useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { UserInfo } from '@/types/user';

export const userAtom = atom<UserInfo>({
  uid: '',
  name: '',
  email: '',
});

export const useAuth = (): {
  user: UserInfo;
  singOutUser: () => Promise<void>;
} => {
  const router = useRouter();
  const [user, setUser] = useAtom(userAtom);

  const getUserInfo = async () => {
    return await Auth.currentUserPoolUser();
  };

  const { data, status } = useQuery(['user'], getUserInfo);
  useEffect(() => {
    if (status === 'success' && data) {
      setUser({
        uid: data.attributes.sub,
        name: data.attributes?.name,
        email: data.attributes?.email,
      });
    }
  }, [status, data]);

  const singOutUser = async () => {
    await Auth.signOut({ global: true })
      .then(() => {
        router.push('/');
      })
      .catch((err) => console.log(err));
  };

  return {
    user,
    singOutUser,
  };
};

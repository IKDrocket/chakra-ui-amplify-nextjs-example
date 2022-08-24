import { Box, Text } from '@chakra-ui/react';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';

export const Logout = () => {
  const router = useRouter();
  return (
    <Box>
      <Text
        onClick={() => {
          Auth.signOut({ global: true })
            .then(() => {
              router.push('/');
            })
            .catch((err) => console.log(err));
        }}
      >
        Sign out
      </Text>
    </Box>
  );
};

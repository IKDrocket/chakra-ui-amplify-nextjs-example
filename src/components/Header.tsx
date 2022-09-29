// import { AmplifySignOut } from '@aws-amplify/ui-react';
import {
  Box,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';

import { useBook } from '@/components/hooks/useBook';
import { isbnSchema } from '@/lib/validation';
import { GoogleBooks } from '@/types/googleBooks';

import { Button } from './Button';
import { InputForm } from './InputForm';
import { Settings } from './Settings';
import { ThemeButton } from './ThemeButton';

export const Header = () => {
  const rowBackgroundColor = useColorModeValue('gray.100', 'gray.700');
  const { getBookInfo } = useBook();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isbn, setIsbn] = useState('');
  const [bookInfo, setBookInfo] = useState<GoogleBooks>();
  const [state, setState] = useState<'initial' | 'fetched'>('initial');

  const isInvalid = !isbnSchema.safeParse(isbn).success;

  const handleSubmit = async () => {
    const res = await getBookInfo(isbn);
    setBookInfo(res);
    setState('fetched');
    console.log(res);
  };

  const handlePost = () => {
    console.log('post');
    onClose();
  };

  return (
    <>
      <HStack
        justifyContent="flex-end"
        alignItems="center"
        p={2}
        spacing={2}
        borderBottom="1px"
        borderColor={rowBackgroundColor}
      >
        <Text fontWeight="bold">chakra-ui amplify nextjs example</Text>
        <Spacer />
        <Button label="購入申請" onClick={onOpen} isPrimary />

        <Settings />
        <ThemeButton />
      </HStack>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>購入申請</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <InputForm
              formLabel="ISBNコード"
              placeholder="Search ISBN"
              helpMessage="ISBNコード(13桁)を入力してください。"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              validationSchema={isbnSchema}
            />
            {bookInfo && (
              <Box my="16px">
                <Text fontSize="12px">{`タイトル: ${bookInfo.items[0].volumeInfo.title}`}</Text>
                <Image
                  src={bookInfo.items[0].volumeInfo.imageLinks.thumbnail}
                  alt=""
                  maxHeight="150px"
                  borderRadius="2px"
                />
              </Box>
            )}
          </ModalBody>
          <ModalFooter>
            <Button
              label="submit"
              onClick={state === 'initial' ? handleSubmit : handlePost}
              isPrimary
              disabled={isInvalid}
            />
            <Button label="cancel" onClick={onClose} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

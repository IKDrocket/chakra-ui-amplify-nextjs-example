import { GoogleBooks } from '@/types/googleBooks';

export const useBook = () => {
  // const [isbn, setIsbn] = useState('');

  // google books api fetch
  const getBookInfo = async (isbnCode: string) => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbnCode}`
      );
      const data: GoogleBooks = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getBookInfo,
  };
};

// import { useQuery } from '@tanstack/react-query';
// import { ChangeEvent, useCallback, useMemo, useState } from 'react';

// import { postBookSchema } from '../../lib/validation';

// interface BookPostFunctions {
//   setIsbn: (e: ChangeEvent<HTMLInputElement>) => void;
//   reset: () => void;
// }

// type Book = {
//   isbn: string;
// };

// const initBookConfig = {
//   isbn: '',
// };

// export const useBook = (): {
//   renderConfig: Book;
//   validationResult: boolean;
//   BookPostFunc: BookPostFunctions;
// } => {
//   const [renderConfig, setRenderConfig] = useState(initBookConfig);

//   const setIsbn = useCallback(
//     (e: ChangeEvent<HTMLInputElement>) => {
//       setRenderConfig({
//         ...renderConfig,
//         isbn: e.target.value,
//       });
//     },
//     [renderConfig, setRenderConfig]
//   );

//   const getBookInfo = useCallback(async () => {
//     try {
//     return await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${renderConfig.isbn}`)
//     } catch (error) {
//       console.log(error);
//     }
//   }, [renderConfig]);

//   const PostBook = useCallback(async () => {
//     const { data, status } = useQuery(['bookInfo', renderConfig.isbn], getBookInfo);

//     if (status === 'success' && data) {

//   const validationResult = useMemo(() => {
//     return postBookSchema.safeParse(renderConfig).success;
//   }, [renderConfig]);

//   const reset = useCallback(() => {
//     setRenderConfig(initBookConfig);
//   }, [setRenderConfig]);

//   return {
//     renderConfig: renderConfig,
//     // submitFormat: submitFormat,
//     validationResult: validationResult,
//     BookPostFunc: {
//       setIsbn,
//       reset,
//     },
//   };
// };

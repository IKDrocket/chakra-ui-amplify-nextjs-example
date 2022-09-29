import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import {
  Box,
  Heading,
  Icon,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useMemo, useState } from 'react';

type Book = {
  url: string;
  isbn: string;
  title: string;
};

const Home: NextPage = () => {
  const rowBackgroundColor = useColorModeValue('gray.100', 'gray.700');

  const [rowSelection, setRowSelection] = useState({});
  const [sorting, setSorting] = useState<SortingState>([]);

  const columns = useMemo<ColumnDef<Book>[]>(
    () => [
      {
        header: 'サムネイル',
        accessorKey: 'url',
        enableSorting: false,
        cell: ({ row }) => (
          <Image
            src={row.original.url}
            alt=""
            maxHeight="150px"
            borderRadius="2px"
          />
        ),
      },
      {
        header: 'タイトル',
        accessorKey: 'title',
      },
      {
        header: 'ISBN ID',
        accessorKey: 'isbn',
      },
    ],
    []
  );

  const data = useMemo<Book[]>(
    () => [
      {
        isbn: '9784899775300',
        url: 'http://books.google.com/books/content?id=Q5FMzwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        title:
          'AWS Amplify Studioではじめるフロントエンド+バックエンド統合開発',
      },
      {
        isbn: '9784297129163',
        url: 'http://books.google.com/books/content?id=SfUqzwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        title: 'TypeScriptとReact/Next.jsでつくる実践Webアプリケーション開発',
      },
      {
        isbn: '9784839980177',
        url: 'http://books.google.com/books/content?id=qY86zwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
        title: '作って学ぶ Next.js/React Webサイト構築',
      },
    ],
    []
  );

  const table = useReactTable({
    columns: columns,
    data: data,
    state: {
      rowSelection,
      sorting,
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
  });

  return (
    <>
      <Head>
        <title>書籍一覧</title>
      </Head>
      <Box mx="24px">
        <Heading size="md" my={4}>
          書籍一覧
        </Heading>

        <TableContainer borderTop="1px" borderColor={rowBackgroundColor}>
          <Table variant="simple">
            <Thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <Tr h="48px" key={headerGroup.id}>
                  {headerGroup.headers.map((header) =>
                    header.isPlaceholder ? null : (
                      <Th
                        textTransform="none"
                        key={header.id}
                        colSpan={header.colSpan}
                        {...{
                          onClick: header.column.getToggleSortingHandler(),
                          cursor: header.column.getCanSort() ? 'pointer' : '',
                          alignItems: 'center',
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: <Icon as={TriangleUpIcon} ml="4px" />,
                          desc: <Icon as={TriangleDownIcon} ml="4px" />,
                        }[header.column.getIsSorted() as string] ?? null}
                      </Th>
                    )
                  )}
                </Tr>
              ))}
            </Thead>
            <Tbody>
              {table.getRowModel().rows.map((row) => {
                return (
                  <Tr
                    role="group"
                    key={row.id}
                    _hover={{
                      backgroundColor: rowBackgroundColor,
                    }}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <Td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </Td>
                    ))}
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Home;

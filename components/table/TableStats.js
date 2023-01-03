import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export default function tableXp() {
  return (
    <TableContainer maxWidth={"50em"}>
      <Table>
        <Thead>
          <Tr>
            <Th>Stats</Th>
            <Th>Fonctionnement</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Th>stats</Th>
            <Td>explication</Td>
          </Tr>
          <Tr>
            <Th>stats</Th>
            <Td>explication</Td>
          </Tr>
          <Tr>
            <Th>stats</Th>
            <Td>explication</Td>
          </Tr>
          <Tr>
            <Th>stats</Th>
            <Td>explication</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

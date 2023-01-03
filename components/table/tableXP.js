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
    <TableContainer maxWidth={"15em"}>
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>Level</Th>
            <Th>XP for up</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Th>1</Th>
            <Td>88</Td>
          </Tr>
          <Tr>
            <Th>2</Th>
            <Td>468</Td>
          </Tr>
          <Tr>
            <Th>3</Th>
            <Td>1 521</Td>
          </Tr>
          <Tr>
            <Th>4</Th>
            <Td>3 751</Td>
          </Tr>
          <Tr>
            <Th>5</Th>
            <Td>7 852</Td>
          </Tr>
          <Tr>
            <Th>6</Th>
            <Td>Ø</Td>
          </Tr>
          <Tr>
            <Th>7</Th>
            <Td>25 246</Td>
          </Tr>
          <Tr>
            <Th>8</Th>
            <Td>40 794</Td>
          </Tr>
          <Tr>
            <Th>9</Th>
            <Td>62 711</Td>
          </Tr>
          <Tr>
            <Th>10</Th>
            <Td>185 133</Td>
          </Tr>
          <Tr>
            <Th>11</Th>
            <Td>264 347</Td>
          </Tr>
          <Tr>
            <Th>12</Th>
            <Td>367 115</Td>
          </Tr>
          <Tr>
            <Th>13</Th>
            <Td>497 864s</Td>
          </Tr>
          <Tr>
            <Th>14</Th>
            <Td>761 281</Td>
          </Tr>
          <Tr>
            <Th>15</Th>
            <Td>1 594 305</Td>
          </Tr>
          <Tr>
            <Th>16</Th>
            <Td>1 962 539</Td>
          </Tr>
          <Tr>
            <Th>17</Th>
            <Td>2 633 155</Td>
          </Tr>
          <Tr>
            <Th>18</Th>
            <Td>Ø</Td>
          </Tr>
          <Tr>
            <Th>19</Th>
            <Td>Ø</Td>
          </Tr>
          <Tr>
            <Th>20</Th>
            <Td>Ø</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

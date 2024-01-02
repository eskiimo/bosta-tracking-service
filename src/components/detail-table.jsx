/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import "./detail-table.css";

function ShippingDetailTable({ list }) {
  const { t } = useTranslation();
  return (
    <>
      <div className="shipping">
        <h1>{t("ship-details")}</h1>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>{t("branch")}</Th>
                <Th>{t("date")}</Th>
                <Th>{t("time")}</Th>
                <Th>
                  {t("details")} {list.length}
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {list.map((item) => {
                return (
                  <>
                    <Tr>
                      <Td>Nasr City</Td>
                      <Td>{item.timestamp.split("T")[0]}</Td>
                      <Td>{item.timestamp.split("T")[1].split(".")[0]}</Td>
                      <Td key={item.timestamp}>{item.state}</Td>
                    </Tr>
                  </>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default ShippingDetailTable;

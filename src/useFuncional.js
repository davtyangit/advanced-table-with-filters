import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import MedicineData from '../src/mock/Data.json';
import * as XLSX from 'xlsx';

export const useFunctional = () => {
  const [dataSource] = useState(MedicineData);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [active, setActive] = useState(false);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleXLS = () => {
    let wb = XLSX.utils.book_new();
    let ws = XLSX.utils.json_to_sheet(dataSource);

    XLSX.utils.book_append_sheet(wb, ws, 'first');
    XLSX.writeFile(wb, 'MyExcell.xlsx');
  };

  return {
    handleXLS,
    componentRef,
    dataSource,
    page,
    setPage,
    pageSize,
    setPageSize,
    active,
    setActive,
    handlePrint,
  };
};

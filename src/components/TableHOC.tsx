import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  TableOptions,
  useReactTable,
} from "@tanstack/react-table";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";

function TableHOC<T extends object>(
  columns: ColumnDef<T>[],
  data: T[],
  containerClassname: string,
  heading: string,
  showPagination: boolean = false
) {
  return function HOC() {
    const options: TableOptions<T> = {
      columns,
      data,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      initialState: {
        pagination: { pageSize: 6 },
      },
    };
    const {
      getHeaderGroups,
      getRowModel,
      previousPage,
      nextPage,
      getCanNextPage,
      getCanPreviousPage,
      getPageCount,
      getState,
    } = useReactTable(options);

    const { pageIndex } = getState().pagination;

    return (
      <div className={containerClassname}>
        <h2 className="heading">{heading}</h2>
        <table className="table">
          <thead>
            {getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.column.getIsSorted() && (
                      <span>
                        {" "}
                        {header.column.getIsSorted() === "desc" ? (
                          <AiOutlineSortDescending />
                        ) : (
                          <AiOutlineSortAscending />
                        )}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {showPagination && (
          <div className="table-pagination">
            <button disabled={!getCanPreviousPage()} onClick={previousPage}>
              Prev
            </button>
            <span>{`${pageIndex + 1} of ${getPageCount()}`}</span>
            <button disabled={!getCanNextPage()} onClick={nextPage}>
              Next
            </button>
          </div>
        )}
      </div>
    );
  };
}

export default TableHOC;

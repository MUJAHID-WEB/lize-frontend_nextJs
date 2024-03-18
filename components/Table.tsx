import { useRouter } from "next/router";
import React, { FC, ReactNode, useEffect, useState } from "react";

export type columnData = {
  heading: string;
  headingFr?: string;
  value: string | number;
  sortable?: boolean;
  CustomComponent?: ({ data, value, Item }: any) => JSX.Element;
}[];

type tableData = {
  key: string;
  value: string | number;
}[][];

type tableProps = {
  title?: string;
  tableData: tableData;
  column: columnData;
};

type sortDirectionType = {
  indexValue: string;
  direction: "" | "asc" | "desc" | "default";
};

const Table: FC<tableProps> = ({ title, tableData, column }) => {
  const router = useRouter();

  const [sortStatus, setSortStatus] = useState<sortDirectionType>({
    indexValue: "",
    direction: "",
  });

  let original = Array.from(tableData);
  const [data, setData] = useState<any>(tableData);
  const [loading, setLoading] = useState<any>("loading..");

  const sortData = (index: string) => {
    if (sortStatus.direction === "") {
      setData(
        original.sort((a: any, b: any) => (a[index] < b[index] ? -1 : 1))
      );
      setSortStatus({ indexValue: index, direction: "desc" });
    } else if (sortStatus.direction === "desc") {
      setData(data.sort((a: any, b: any) => (a[index] > b[index] ? -1 : 1)));
      setSortStatus({ indexValue: index, direction: "default" });
    } else if (sortStatus.direction === "default") {
      setData(original);
      setSortStatus({ indexValue: index, direction: "" });
    } else {
      console.error("Something Went wrong in table Core component");
    }
  };
  useEffect(() => {
    setData(tableData);
    setTimeout(() => {
      console.log("working");
      if (tableData.length === 0) setLoading("Data not found !");
    }, 3000);
  }, [tableData]);
  // if(data.length==0  ){
  //   return <p className='flex flex-row justify-center w-full py-[10%]'>{loading}</p>
  // }
  return (
    <div className="flex w-full flex-col items-start justify-start rounded-xl bg-white-primary ">
      {title && (
        <h3 className="py-6 pl-10 text-[20px] font-medium capitalize leading-[22px] text-secondary ">
          {title}
        </h3>
      )}
      {data.length == 0 ? (
        <p className="flex w-full flex-row justify-center py-[10%]">
          {loading}
        </p>
      ) : (
        <table className="w-full">
          <thead className="border-t border-b border-white-tertiary ">
            <tr className="">
              {column.map((value: any, id: any) => (
                <th key={id} className="py-2 px-2.5 xl:px-4">
                  <button
                    type="button"
                    onClick={() => {
                      if (value.sortable) {
                        sortData(value.heading);
                      }
                    }}
                    className={`flex w-full flex-row items-center justify-center gap-1 py-3 capitalize text-black-secondary ${
                      !value.sortable ? "cursor-default" : ""
                    } `}
                  >
                    <p className="text-sm font-semibold xl:text-base xl:font-semibold">
                      {router.locale === "fr" ? value.headingFr : value.heading}
                    </p>
                    {value.sortable && (
                      <span className="flex flex-col justify-center">
                        <i
                          className={`fa-solid fa-sort-up !leading-[0.1] ${
                            sortStatus.indexValue === value.heading &&
                            sortStatus.direction !== "asc"
                              ? "text-black-primary"
                              : "text-gray"
                          } `}
                        ></i>
                        <i
                          className={`fa-solid fa-sort-down !leading-[0.1] ${
                            sortStatus.indexValue === value.heading &&
                            sortStatus.direction !== "desc"
                              ? "text-black-primary"
                              : "text-gray"
                          } `}
                        ></i>
                      </span>
                    )}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Empty Cell on top for top gap */}
            <tr className="">
              {column.map((value: any, id: any) => (
                <td className="pb-4 text-center" key={id} />
              ))}
            </tr>

            {data &&
              data.map((item: any, index: any) => (
                <tr key={index}>
                  {column.map((columnItem: any, index: any) => {
                    if (columnItem.CustomComponent) {
                      let { CustomComponent, value } = columnItem;
                      return (
                        <td className="py-4 text-center " key={index}>
                          {/* <p className='text-sm font-medium text-gray'> */}
                          {/* {customComponent} */}
                          <CustomComponent
                            data={item[`${columnItem.value}`]}
                            value={value}
                            item={item}
                          />
                          {/* </p> */}
                        </td>
                      );
                    }
                    if (columnItem.value.includes(".")) {
                      const itemSplit = columnItem.value.split(".");
                      return (
                        <td className="py-4 text-center" key={index}>
                          <p className="text-sm font-medium text-gray">
                            {itemSplit.length == 2
                              ? item[itemSplit[0]][itemSplit[1]]
                              : item[itemSplit[0]][itemSplit[1]][itemSplit[2]]}
                          </p>
                        </td>
                      );
                    }

                    return (
                      <td className="py-4 text-center" key={index}>
                        <p className="text-sm font-medium text-gray">
                          {item[`${columnItem.value}`] || "-"}
                        </p>
                      </td>
                    );
                  })}
                </tr>
              ))}
            {/* data */}
            {/* Empty Cell on bottom for bottom gap */}
            <tr className="">
              {column.map((value: any, id: any) => (
                <td className="pt-4 text-center" key={id} />
              ))}
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;

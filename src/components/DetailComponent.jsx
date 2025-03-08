
export function DetailComponent({
  detailLabel,
  imgSrc,
  detailCnt,
  percentRate
}) {
  return (
    <>
      <div className="border-0 p-10 gap-5 flex flex-col rounded-md h-[150px]  w-[100%] text-black justify-center  rounded-b-md bg-slate-100  dark:bg-card-dark">
        <div className="flex justify-between">
          <p className="font-bold  text-gray-600"> {detailLabel}</p>
          <img src={imgSrc} className=""/>
        </div>
        <div className="flex justify-between">
          <p className="text-4xl font-bold  dark:text-textheader-dark"> {detailCnt}</p>
          <div className="flex items-center ">
            <img
              src={
                percentRate >= 0
                  ? "./images/icon-up.svg"
                  : "./images/icon-down.svg"
              }
              alt=""
              className="object-contain pe-2"
            />
            <p
              className={` ${
                percentRate >= 0 ? "text-green-400" : "text-red-700"
              } font-bold`}
            >
              {" "}
              {Math.abs(percentRate)}%
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

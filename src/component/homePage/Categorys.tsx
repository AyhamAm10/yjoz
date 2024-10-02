import { QueryKey, useQuery } from "@tanstack/react-query";
import bgImg from "../../assets/home/background.png";
import { useGetCategoryApi } from "../../api/getAPIs/useGetCategory";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryApi } from "../../redux/slice/categorySlice";
import { categorysType } from "../../type/reduxType";
import { LongStaleTime } from "../../api/API__information_conect";

interface resData {
  data: categorysType;
}

const Categorys: React.FC = () => {
  const categotysData = useSelector(
    (state: any) => state.categorySlice
  );
  const dispatch = useDispatch();

  const { data, isLoading } = useQuery<
    unknown,
    Error,
    resData,
    QueryKey
  >({
    queryKey: ["categorys api "],
    queryFn: useGetCategoryApi,
    staleTime: LongStaleTime,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });

  useEffect(() => {
    if (data) {
      dispatch(getCategoryApi(data.data));
      console.log(data)
    }
  }, [data ]);

  return (
    <section>
      <div className="flex-center px-4  ">
        <div
          className="w-[60rem] py-5 text-white text-center text-3xl font-normal "
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          SPACE ADS 970 * 70
        </div>
      </div>
      <div className="my-10 p-2 flex-center flex-col gap-5 ">
        <button className="px-8 py-4 rounded-[0.5rem] text-red cursor-pointer bg-[#FFC21B1A] text-sm font-medium ">
          Category
        </button>
        <h1 className="text-dark text-4xl font-medium ">
          Most <span className="text-gradient">popular</span> Category
        </h1>
      </div>

      <div className="my-10">
        {isLoading && <div className="text-center text-7xl ">loading</div>}
        {categotysData && (
          <div  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 px-3 sm:px-5 md:px-10 cursor-pointer">
            {categotysData.category.map((item: any) => (
              <button key={item.category} className="rounded-md relative flex items-center gap-2 px-5 py-2 bg-white shadow-md ">
                <img
                  src={item.image}
                  className=" w-8 sm:w-10 md:w-12 lg:w-[3.25rem]  "
                  alt={"category icon "}
                />
                <h1 className="text-dark text-sm md:text-xl xl:text-2xl font-semibold uppercase  ">{item.category}</h1>
                <span className=" absolute h-full left-0 top-0 w-3 bg-linear bg-gradient-to-r from-red to-yalwe">

                </span>
              </button>
            ))}
          </div>
        ) }
      </div>
    </section>
  );
};

export default Categorys;

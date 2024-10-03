import { useEffect } from "react";
import Slider from "../costumeComponent/Slider";
import CartSlider from "./CartSlider";
import { useGetProductByCategory } from "../../api/getAPIs/useGetProductByCategory";
import { useDispatch, useSelector } from "react-redux";
import { QueryKey, useQuery } from "@tanstack/react-query";
import { LongStaleTime } from "../../api/API__information_conect";
import { getProductByCategory } from "../../redux/slice/ProductByCategoru";

const CarSLider: React.FC = () => {
  const products = useSelector((state: any) => state.productByCategorySlice);
  const dispatch = useDispatch();

  const { data } = useQuery<unknown, Error, { data: any[] }, QueryKey>({
    queryKey: ["product category "],
    queryFn: useGetProductByCategory,
    staleTime: LongStaleTime,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });

  useEffect(() => {
    if (data) {
      dispatch(getProductByCategory(data.data));
      console.log(data);
    }
  }, [data]);

  return (
    <div>
      {products && (
        <>
          <div className="px-3 sm:px-6 lg:px-20">
            <Slider
              data={products.productByCategory[0].products}
              Component={CartSlider}
              bg="#F6F5F5"
            />
            <Slider
              data={products.productByCategory[1].products}
              Component={CartSlider}
              bg="#F8F8F8"
            />
            <Slider
              data={products.productByCategory[2].products}
              Component={CartSlider}
              bg="#F6F5F5"
            />
            <Slider
              data={products.productByCategory[3].products}
              Component={CartSlider}
              bg="#F8F8F8"
            />
            <Slider
              data={products.productByCategory[4].products}
              Component={CartSlider}
              bg="#F6F5F5"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default CarSLider;

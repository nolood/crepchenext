import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import { fetchOffers } from "@/store/userSlice/userAsync";
import { selectOffers } from "@/store/userSlice/userSelectors";
import { useEffect } from "react";
import OfferItem from "./offeritem/OfferItem";

const OffersList = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectOffers);
  useEffect(() => {
    dispatch(fetchOffers());
  }, []);
  return (
    <>
      {items.map((item) => (
        <OfferItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default OffersList;

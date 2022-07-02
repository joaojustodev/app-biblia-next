import { Heart, Share } from "phosphor-react";
import { memo } from "react";
import { getAllChapterResponse } from "../store/bible/types";
import api from "../lib/api";
import useSWR from "swr";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { fetchBibleError, fetchBibleSuccess } from "../store/bible";

const Lecture = () => {
  const { url, loading } = useAppSelector((state) => state.bible);
  const dispatch = useAppDispatch();

  const { data, error } = useSWR(url, async () => {
    const res = await api
      .get<getAllChapterResponse>(url)
      .then((res) => res.data);

    return res;
  });

  if (data) {
    dispatch(fetchBibleSuccess());
  }

  if (error) {
    dispatch(fetchBibleError());
  }

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="mt-6 bg-white shadow-md border-t border-b border-t-blue-300 border-b-blue-300 lg:border lg:border-blue-300">
      <div>
        <div className="my-6">
          <h1 className="text-3xl font-bold font-quick">Gênesis 1</h1>
        </div>
        <div className="w-full flex flex-col gap-6 p-1">
          {data?.verses.map((verse) => {
            return (
              <>
                <div className="rounded shadow-sm" key={verse.number}>
                  <p className="text-md font-semibold font-quick leading-relaxed">
                    <sup className="mx-1">{verse.number}</sup>
                    {verse.text}
                  </p>
                  <div className="w-full flex gap-2 items-center justify-end px-2">
                    <Heart size={24} />
                    <Share size={24} />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(Lecture);

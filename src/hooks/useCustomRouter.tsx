"use client";

import {useRouter, useSearchParams} from "next/navigation";

const useCustomRouter = () => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const query: {search?: string} = {};

    let search = searchParams.get("search");

    if (search) query.search = search;

    const pushQuery = ({search}: {search: string}) => {
        // router.push(`?search=${search}`)
        if (search !== undefined) {
            search === "" ? delete query.search : query.search = search;
        }

        const newQuery = new URLSearchParams(query).toString();

        router.push(`?${newQuery}`);
    }

    return {pushQuery, query};
};

export default useCustomRouter;

"use client";

import {ButtonSubmit} from "@/components";
import useCustomRouter from "@/hooks/useCustomRouter";

const Search = () => {

    const {pushQuery, query} = useCustomRouter();

    const handleSearch = async (formData: FormData) => {
        const search = formData.get("search") as string;

        pushQuery({search});
    }

    return (
        <form action={handleSearch}>
            <input type="search" className="" name="search" placeholder="Search" defaultValue={query.search || ""}/>
            <ButtonSubmit title="Search"/>
        </form>
    );
};

export default Search;

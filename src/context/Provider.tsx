"use client";
import {createContext, FC, ReactNode, useContext, useState} from "react";

const Context = createContext<{
    editPost: IPost | null;
    setEditPost: (post: IPost | null) => void;
}>({
    editPost: {},
    setEditPost: ()=> {}
});

export const useMyContext = () => {
    const postContext = useContext(Context);

    if (!postContext) throw new Error("Something went wrong!");

    return postContext;
}

export const Provider: FC<{ children: ReactNode }> = ({children}) => {

    const [editPost, setEditPost] = useState<IPost | null>(null);

    const value = {editPost, setEditPost};

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};

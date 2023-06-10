"use client";

import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import {FC} from "react";

const ButtonSubmit:FC<{title: string}> = ({title}) => {

    const { pending } = useFormStatus()

    return (
        <button type="submit" className="border rounded-sm px-5 bg-white py-1" disabled={pending}>{pending ? "Loading..." : title}</button>
    );
};

export default ButtonSubmit;

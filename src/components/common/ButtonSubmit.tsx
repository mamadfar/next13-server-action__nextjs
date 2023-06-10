"use client";

import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import {ButtonHTMLAttributes, FC} from "react";

interface IButtonSubmitProps extends ButtonHTMLAttributes<any> {
title: string
}

const ButtonSubmit:FC<IButtonSubmitProps> = ({title, ...props}) => {

    const { pending } = useFormStatus()

    return (
        <button type="submit" className="border rounded-sm px-5 bg-white py-1" disabled={pending} {...props}>{pending ? "Loading..." : title}</button>
    );
};

export default ButtonSubmit;

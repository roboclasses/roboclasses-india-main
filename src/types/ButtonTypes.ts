import { ReactNode } from "react";

export type ButtonTypes ={
    name:string;
    type:'button'|'submit'|'reset';
    onClick?:()=>void;
    icon?: ReactNode;
    className?: string;
}
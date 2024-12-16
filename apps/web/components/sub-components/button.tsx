import { EIBtnInType, IBtnInput } from '@repo/types/web.js'
import Link from 'next/link'
import React from 'react'

const Button = ({ type = EIBtnInType.PRIMARY, input, arrow = true, link, background = true }: IBtnInput) => {
    return (
        <Link href={link} className={`${background ? "bg-neutral-0 border-2 border-neutral-400 text-neutral-700" : "border-2 border-neutral-60 text-neutral-0"} ${type == EIBtnInType.PRIMARY ? "btn-primary" : "btn-secondary"} px-6 py-2 rounded-lg shadow-md`}>{input} {arrow ? "→" : null}</Link>
    )
}

export default Button
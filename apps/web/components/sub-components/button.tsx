import { EIBtnInType, IBtnInput } from '@repo/types/web.js'
import Link from 'next/link'
import React from 'react'

const Button = ({ type = EIBtnInType.PRIMARY, input, arrow = true, link, background = true }: IBtnInput) => {
    return (
        <Link href={link} className={`${background ? "bg-yellow-200" : null} ${type == EIBtnInType.PRIMARY ? "btn-primary" : "btn-secondary"} px-4 py-2 rounded-lg border-2 border-yellow-500 shadow-md`}>{input} {arrow ? "→" : null}</Link>
    )
}

export default Button
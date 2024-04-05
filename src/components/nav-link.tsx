import { ComponentProps } from "react"

interface NavLinkProps extends ComponentProps<'a'> { //pode receber todas as propriedades de uma
    children: string,
    href: string
}

export function NavLink(props: NavLinkProps) {
    return (
        <a {...props} href={props.href} className="font-medium text-sm">{props.children}</a>
    ) //{...props} serve para incluir todas as propriedades de âncora que forem informadas no componente NavLink como atributos na tag a
}
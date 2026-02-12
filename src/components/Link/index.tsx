import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

type LinkProps = {
    href: string;
    children: string;
} & React.ComponentProps<'a'>;

export function Link({ href, children, className, ...props } : LinkProps) {
    const hoverStyles = 'group-hover:underline group-hover:underline-offset-8 group-hover:decoration-2';
    return ( 
        <a href={href} className={`text-primary-blue font-bold text-link group ${className}`} {...props}>
            <span className={hoverStyles}>{children}</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={`w-3 h-3 ml-2 ${hoverStyles}`}/>
        </a>
    )
}
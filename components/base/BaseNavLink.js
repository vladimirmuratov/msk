import Link from "next/link";
import {useEffect, useState} from "react";

export const BaseNavLink = ({linksOptions, onClose = undefined, activeStyles = null, router}) => {
    const [isHash, setHash] = useState(false)

    useEffect(() => {
        if(router.pathname === '/' || router.pathname.includes('#')){
            setHash(true)
        }else {
            setHash(false)
        }
    }, [router.pathname])

    const activeClasses = (isActive) => {
        return isActive ?
            activeStyles
                ? activeStyles
                : {textDecoration: 'underline'}
            : null
    }

    return (
        <>
            {linksOptions.length
                ? linksOptions.map(({id, label, path, mobPath}) => (
                    <Link
                        // scroll={false}
                        key={id}
                        href={isHash ? path : mobPath}
                        // href={{base: mobPath, md: isHash ? path : mobPath}}
                        onClick={onClose}
                        // style={router.pathname === path ? activeStyles : null}
                        style={activeClasses(router.pathname === mobPath)}
                    >
                        {label}
                    </Link>
                ))
                : null
            }
        </>
    )
}

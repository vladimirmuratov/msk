import Link from "next/link";

export const BaseNavLink = ({linksOptions, onClose = undefined, activeStyles = null, router}) => {

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
                ? linksOptions.map(({id, label, path}) => (
                    <Link
                        key={id}
                        href={path}
                        onClick={onClose}
                        // style={router.pathname === path ? activeStyles : null}
                        style={activeClasses(router.pathname === path)}
                    >
                        {label}
                    </Link>
                ))
                : null
            }
        </>
    )
}

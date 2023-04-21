import Link from "next/link";

export const BaseMobLink = ({linksOptions, onClose, router, activeStyles = null}) => {
    const activeClasses = (isActive) => {
        return isActive ?
            activeStyles
                ? activeStyles
                : {textDecoration: 'underline'}
            : null
    }

    return(
        <>
            {linksOptions.length
                ? linksOptions.map(({id, label, mobPath}) => (
                    <Link
                        key={id}
                        href={mobPath}
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

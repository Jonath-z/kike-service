import React from 'react'

interface IProps {
    className: string
    onClick: () => void
}

const MenuVector = ({className,onClick}:IProps) => {
    return (
        <svg
            className={className}
            onClick={onClick}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
            >
            </path>
        </svg>
    );
}

export default MenuVector;
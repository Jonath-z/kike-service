import React from 'react';
import { MdZoomOutMap } from 'react-icons/md';

interface IProps{
    className: string
    onClick: () => void;
}

const OutMapVector = ({
    className,
    onClick
}: IProps) => {
    return (
        <MdZoomOutMap className={className} onClick={onClick}/>
    );
}

export default OutMapVector;
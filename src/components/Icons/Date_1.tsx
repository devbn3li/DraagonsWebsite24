import React from "react";
interface SVGProps extends React.SVGProps<SVGSVGElement> { }

export default function Date_1(props: SVGProps) {
    return (
        <svg
            fill="currentColor"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M6,22H18a3,3,0,0,0,3-3V7a2,2,0,0,0-2-2H17V3a1,1,0,0,0-2,0V5H9V3A1,1,0,0,0,7,3V5H5A2,2,0,0,0,3,7V19A3,3,0,0,0,6,22ZM5,12.5a.5.5,0,0,1,.5-.5h13a.5.5,0,0,1,.5.5V19a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1Z" />
        </svg>
    )
}

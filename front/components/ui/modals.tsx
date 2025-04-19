import { ReactNode } from "react"

type ModalsProps = {
    isOpen: Boolean,
    onClose: () => void,
    children: ReactNode
}

export default function Modals ({isOpen, onClose, children}: ModalsProps) {
    if(!isOpen) return null

    return (
        <div className="fixed top-0 left-0 inset-0 w-full h-full z-20 flex items-center  justify-center bg-black/50"
        onClick={onClose}>
            <div
            onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}
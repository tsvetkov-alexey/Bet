import { useSelector } from "react-redux";
import { selectInfo, setModal } from "../redux/slices/info";
import { useAppDispatch } from "../redux/store"
import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

export const Modal = ({children}: ModalProps) => {
  const dispatch = useAppDispatch();
  const { modal } = useSelector(selectInfo)

  return (
    <div className={`modal ${modal ? 'active' : ''}`} onClick={() => dispatch(setModal(false))}>
      <div className={`modal__content ${modal ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

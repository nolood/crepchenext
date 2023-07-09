import { ReactNode } from "react";

export interface IModal {
  children: ReactNode;
  open: boolean;
  handleOpen?: (content: string) => void;
  handleClose: () => void;
  modalContent?: string;
}

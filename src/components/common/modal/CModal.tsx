import { type FC } from "react";
import { Box, Modal } from "@mui/material";
import { IModal } from "@/components/common/modal/cmodal.interface";
import { ModalBoxStyle } from "@/styles/ModalBoxStyle";

const CModal: FC<IModal> = ({ children, handleClose, open }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...ModalBoxStyle }}>{children}</Box>
    </Modal>
  );
};

export default CModal;

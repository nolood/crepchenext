"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import { selectMessage } from "@/store/userSlice/userSelectors";
import { changeMessage } from "@/store/userSlice/userSlice";
import { Snackbar, Alert } from "@mui/material";

const Message = () => {
  const messageOpen = useAppSelector(selectMessage).open;
  const messageTitle = useAppSelector(selectMessage).title;
  const messageType = useAppSelector(selectMessage).type;
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(
      changeMessage({
        message: { open: false, title: null, type: messageType },
      })
    );
  };
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={messageOpen}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={messageType}
        sx={{ width: "100%" }}
      >
        {messageTitle}
      </Alert>
    </Snackbar>
  );
};

export default Message;

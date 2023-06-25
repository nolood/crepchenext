"use client";
import CModal from "@/components/common/modal/CModal";
import { useState } from "react";
import styles from "@/components/navbar/navbar.module.scss";
import DeliveryInfo from "@/components/info/DeliveryInfo";
import ContactsInfo from "@/components/info/ContactsInfo";

const HeaderModal = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string>("delivery");
  const handleOpenModal = (content: string) => {
    setOpenModal(true);
    setModalContent(content);
  };

  const handleCloseModal = () => setOpenModal(false);
  return (
    <>
      <div className={styles.item}>
        <a
          className={styles.link}
          href="#delivery"
          onClick={() => handleOpenModal("delivery")}
        >
          Доставка
        </a>
      </div>
      <div className={styles.item}>
        <a
          className={styles.link}
          href="#contacts"
          onClick={() => handleOpenModal("contacts")}
        >
          Связь с нами
        </a>
      </div>
      <CModal
        open={openModal}
        handleOpen={handleOpenModal}
        handleClose={handleCloseModal}
        modalContent={modalContent}
      >
        {modalContent === "delivery" ? <DeliveryInfo /> : <ContactsInfo />}
      </CModal>
    </>
  );
};

export default HeaderModal;

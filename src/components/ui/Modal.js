export const Modal = ({ onCloseModal, children }) => {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-[100%] h-[100vh] z-10 bg-black/[0.7]"
        onClick={onCloseModal}
      />
      <div className="fixed rounded-xl top-0 left-0 ml-[380px] max-h-[5rentEndedAt50px] mt-[80px] w-[550px] z-20 overflow-hidden bg-white/[1]">
        {children}
      </div>
    </>
  );
};

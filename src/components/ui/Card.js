export const Card = ({ color, bgColor, shadow, children }) => {
  const boxShadow = shadow ? "shadow-xl" : "";
  return (
    <div className={`w-[500px] min-h-[300px] overflow-hidden rounded-lg ${bgColor} ${color} ${boxShadow} `}>
      {children}
    </div>
  );
};

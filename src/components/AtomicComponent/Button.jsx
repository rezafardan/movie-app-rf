const Button = ({ children, className = "", type, onClick }) => {
  return (
    <button
      type={type}
      className={`flex items-center gap-2 rounded-3xl font-normal py-2 hover:bg-gray-600 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

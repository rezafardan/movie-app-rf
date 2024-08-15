const Button = ({ children, className = "", type }) => {
  return (
    <button
      type={type}
      className={`flex items-center gap-2 rounded-3xl font-normal py-2 hover:bg-gray-600 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

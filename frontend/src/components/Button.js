function Button({ disabled, label, styleClass, onClick }) {
  return (
    <button className={styleClass} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}

export default Button;

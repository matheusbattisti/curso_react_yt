function Input({ type, text, name, placeholder, handleOnChange }) {
  return (
    <div>
      <label htmlFor={name}>{text}:</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
      />
    </div>
  )
}

export default Input

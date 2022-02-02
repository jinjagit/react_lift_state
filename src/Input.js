export const Input = ({ onChange, value, label}) => {
  return (
    <div className='col-lg-6 card input'>
      <h3>Input component [child of App]</h3>
      <label className='form-label'>{label}</label>
      <input
        className='form-control'
        placeholder={label}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>  
  )
};

import PropTypes from 'prop-types'
function Input ({type, label, name, value, placeholder, onChange,  }) {
  return (
    <div style={{ gap: 0}}>
      <label>
        {label}
        <input className='border-4 border-slate-200	bg-slate-200 rounded-full	' type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} />
      </label>
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string
}
export default Input

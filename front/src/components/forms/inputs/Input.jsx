import PropTypes from 'prop-types'
function Input ({ label, name, value, placeholder, onChange, errors }) {
  return (
    <div style={{ gap: 0 }}>

      <label>
        {label}
        <input name={name} value={value} onChange={onChange} placeholder={placeholder} />
      </label>
      {
        errors & <p style={{ color: 'red' }}>{errors}</p>
      }
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  errors: PropTypes.string
}
export default Input


import { IDateInput } from '../Types/Input'
import { CSSProperties } from 'react'

const  generalStyle: CSSProperties = {

  fontSize: '1rem',
  color: 'var(--color-2)',
  padding: 'var(--gap-s) .75rem',
  background: 'var(--color-4)',
}

const labelStyle: CSSProperties = {
  display: 'block',
  marginBottom: 'var(--gap-s)',
  fontWeight: '600',
  ...generalStyle
}

const inputStyle: CSSProperties = {
  border: 'none',
  fontFamily:'monospace',
  ...generalStyle

}

const DateInput = ({label, ...props}: IDateInput) => {
  return (
    <div>
      <label style={labelStyle} htmlFor={label}>{label}</label>
      <input style={inputStyle} id={label} name={label}  type="date" {...props} />
    </div>
  )
}

export default DateInput

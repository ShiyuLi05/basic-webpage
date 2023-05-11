function Button (props) {
  return (
      <button className={props.wantMore ? 'color' : 'no-color'}>
          {props.wantMore ? 'Learn more' : 'Not interest'}
      </button>
  )
}

export default Button
function Button({
  //fallback values
  icon: Icon,
  children,
  className = '',
  iconSize = 32,
  iconWeight = 'regular',
  ...props
}) {
  return (
    <button className={className} {...props}>
      {Icon && <Icon size={iconSize} weight={iconWeight} />}

      {children && <span>{children}</span>}
      {/* Children is the text / content to be displayed inside the tag*/}
    </button>
  );
}

export default Button;

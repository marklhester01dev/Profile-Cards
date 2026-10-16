function Stats({
  icon: IconName,
  children,
  divisionClasses = '',
  className = '',
  iconSize = 32,
  iconWeight = 'regular',
  iconColor = '',
}) {
  return (
    <div className={divisionClasses}>
      <p className={className}>{children}</p>
      {IconName && (
        <IconName size={iconSize} weight={iconWeight} color={iconColor} />
      )}
    </div>
  );
}

export default Stats;

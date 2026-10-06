/** Scroll-reveal wrapper: fades + lifts its children into view on intersection. */
export default function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  className = '',
  ...rest
}) {
  const delayClass = delay ? ` reveal-delay-${Math.min(delay, 5)}` : ''
  return (
    <Tag className={`reveal${delayClass} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}

import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { useCounter } from '../../hooks/useCounter'

export default function AnimatedCounter({ value, label, prefix = '', suffix = '', large = false }) {
  const { ref, isVisible } = useScrollAnimation(0.3)
  const count = useCounter(value, 2000, isVisible)

  const textSize = large ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'

  return (
    <div ref={ref} className="flex flex-col">
      <span
        className={`${textSize} font-bold text-gradient`}
        style={{ fontFamily: 'Syne, sans-serif' }}
      >
        {prefix}{count.toLocaleString('en-IN')}{suffix}
      </span>
      <span className="text-white/40 text-xs mt-1">{label}</span>
    </div>
  )
}
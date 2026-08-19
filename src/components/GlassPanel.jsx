function GlassPanel({ className = '', children }) {
  return <div className={`glass-panel ${className}`.trim()}>{children}</div>
}

export default GlassPanel

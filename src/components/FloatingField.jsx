function FloatingField({ as = 'input', label, className = '', ...props }) {
  const Tag = as;

  return (
    <label className="group relative block">
      <Tag
        {...props}
        placeholder=" "
        className={`peer input-shell ${className}`.trim()}
      />
      <span className="floating-label">{label}</span>
    </label>
  );
}

export default FloatingField;

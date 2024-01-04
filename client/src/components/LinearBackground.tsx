const LinearBackground = ({ style = {} }) => {
  return (
    <div className="hero" style={style}>
      <div
        className="shape"
        style={{
          '--color': '#B0FFB3',
          '--translateX-direction': 'alternate-reverse'
        } as React.CSSProperties}
      />
      <div
        className="shape"
        style={{
          '--color': '#E',
          '--translateX-direction': 'alternate-reverse'
        } as React.CSSProperties}
      />
      <div
        className="shape"
        style={{
          '--color': '#A1FFD2',
          '--direction': 'alternate-reverse'
        } as React.CSSProperties}
      />
      <div
        className="shape"
        style={{
          '--color': '#BAC2F1',
          '--translateY-direction': 'alternate-reverse'
        } as React.CSSProperties}
      />
    </div>
  );
};

export default LinearBackground;
const CodeStyle = ({ children }) => (
  <pre
    style={{
      backgroundColor: "#f5f5f5",
      padding: "16px",
      borderRadius: "8px",
      textAlign: "left",
      fontFamily: "monospace",
      overflowX: "auto", // если строка будет слишком длинной, появится горизонтальный скролл
    }}
  >
    {children}
  </pre>
);

export default CodeStyle;

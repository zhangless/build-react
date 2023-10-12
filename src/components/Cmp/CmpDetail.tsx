export function Text({ value }: { value: string | undefined }) {
  return <>{value}</>;
}

export function Img({ style, props }: any) {
  return <img {...props} alt="" style={style} />;
}

export function Input({
  inputType = "text",
  label,
  placeholder,
  formItemName,
  formKey,
}: any) {
  return (
    <>
      <input
        className={"input" + formKey}
        type={inputType}
        name={formItemName}
        placeholder={placeholder}
        style={{ width: "100%", height: "100%" }}
        aria-label={label}
      />
    </>
  );
}

export function Button({ value }: { value: string | undefined }) {
  return <>{value}</>;
}

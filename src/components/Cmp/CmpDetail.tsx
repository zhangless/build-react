export function Text({ props }: { props: { value: string } }) {
  return <>{props.value}</>;
}

export function Img({ props }: { props: { src: string } }) {
  return <img src={props.src} alt="" />;
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

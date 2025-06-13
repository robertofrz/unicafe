type ButtonProps = {
  onClick: () => void;
  imgPath: string;
  altText: string;
};

function Button({ onClick, imgPath, altText }: ButtonProps) {
  return (
    <button className="cursor-pointer" onClick={onClick}>
      <img
        className="w-20 border-neutral-400"
        src={`/${imgPath}.png`}
        alt={altText}
      />
    </button>
  );
}
export default Button;

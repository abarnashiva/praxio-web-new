import { Arrow } from ".";

const Button: React.FC<{
  text: string;
  outline?: boolean;
  onClick?: () => void;
}> = (props) => {
  const baseStyles = `group flex items-center shadow-sm shadow-neutral-500 lg:px-5 px-3 lg:py-3 py-1 transition-all rounded border-2 border-primary `;
  const filledStyles = `bg-primary hover:bg-primary-200 text-white`;
  const outlinedStyles = ` hover:border-primary-200 text-primary`;
  const btnStyles = `${baseStyles} ${
    props.outline ? outlinedStyles : filledStyles
  } my-4`;
  return (
    <button className={`${btnStyles}   md:m-0 `} onClick={props.onClick}>
      <span className="text-lg">{props.text}</span>
      <span className="group-hover:translate-x-4 transition-transform lg:w-4 w-3 lg:mx-4 mx-2">
        <Arrow fill={`${props.outline ? "#ED1F24CC" : ""}`} />
      </span>
    </button>
  );
};

const SecondaryButton: React.FC<{
  text: string;
  outline?: boolean;
  onClick?: () => void;
}> = (props) => {
  const baseStyles = `group flex items-center shadow-sm shadow-neutral-500 lg:px-5 px-3 lg:py-3 py-1 transition-all rounded border-2 border-white `;
  const filledStyles = `bg-white hover:bg-white hover:shadow-md text-primary font-semibold`;
  const outlinedStyles = `hover:border-primary-400 text-primary`;
  const btnStyles = `${baseStyles} ${
    props.outline ? outlinedStyles : filledStyles
  } my-4 lg:min-w-[200px] min-w-[170px]`; // Adjusted margin and width for different screen sizes

  return (
    <button className={`${btnStyles} `} onClick={props.onClick}>
      <span className="text-lg">{props.text}</span>
      <span className="group-hover:translate-x-4 transition-transform w-3 lg:w-4 lg:mx-4 mx-2">
        <Arrow fill="#106FB1" />
      </span>
    </button>
  );
};

const SimpleButton: React.FC<{
  text: string;
  outline?: boolean;
  onClick?: () => void;
}> = (props) => {
  const baseStyles = `group flex items-center shadow-sm shadow-neutral-500 lg:px-5 px-3 lg:py-3 py-1 transition-all rounded border-2 border-primary `;
  const filledStyles = `bg-primary hover:bg-primary-200 text-white`;
  const outlinedStyles = ` hover:border-primary-400 text-primary`;
  const btnStyles = `${baseStyles} ${
    props.outline ? outlinedStyles : filledStyles
  } my-4 mx-auto`;
  return (
    <button className={`${btnStyles}`} onClick={props.onClick}>
      <span>{props.text}</span>
    </button>
  );
};

const HeaderButton: React.FC<{
  text: string;
  outline?: boolean;
  onClick?: () => void;
}> = (props) => {
  const baseStyles = `group flex items-center shadow-sm shadow-neutral-500 px-3 py-2 transition-all rounded border-2 border-primary `;
  const filledStyles = `bg-primary hover:bg-primary-200 text-white`;
  const outlinedStyles = ` hover:border-primary-200 text-primary`;
  const btnStyles = `${baseStyles} ${
    props.outline ? outlinedStyles : filledStyles
  }`;
  return (
    <button className={`${btnStyles} text-base  md:m-0 `} onClick={props.onClick}>
      <span>{props.text}</span>
      <span className="group-hover:translate-x-3 transition-transform w-3 lg:mx-3 mx-2">
        <Arrow fill={`${props.outline ? "#ED1F24CC" : ""}`} />
      </span>
    </button>
  );
};

export { Button, SecondaryButton, SimpleButton, HeaderButton };

import './Button.scss';

export enum ButtonSize {
  NORMAL,
  SMALL
}
interface IProps {
  onClick: any;
  type: boolean;
  name: string;
  size?: ButtonSize;
  className?: string;
  style?: any;
  disabled?: boolean;
}

const Button = (props: IProps) => {
  const { name, type, onClick, size, className, style, disabled } = props;

  const handleButtonSizes = (size: ButtonSize) => {
    switch (size) {
      case ButtonSize.NORMAL:
        return { ...style };
      case ButtonSize.SMALL:
        return { ...style, height: 25, width: 80, lineHeight: '25px', fontSize: 12 };
    }
  };

  const handleClick = () => {
    onClick?.();
  };

  return (
    <div
      style={handleButtonSizes(size || ButtonSize.NORMAL)}
      className={` ${className ?? ''} ${type ? 'button' : 'light_button'} ${disabled ? 'disabled-button' : ''}`}
      onClick={!disabled ? handleClick : () => {}}
    >
      {name}
    </div>
  );
};

export default Button;

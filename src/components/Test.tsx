import React from 'react';

const tuple = <T extends string[]>(...args: T) => args;
const normalSizes = tuple('mini', 'small', 'medium', 'large');
type NormalSizes = typeof normalSizes[number];
const withDefaults = <P, DP>(
  component: React.ComponentType<P>,
  defaultProps: DP
) => {
  type Props = Partial<DP> & Omit<P, keyof DP>;
  component.defaultProps = defaultProps;
  return (component as React.ComponentType<any>) as React.ComponentType<Props>;
};

interface Props {
  src?: string;
  stacked?: boolean;
  text?: string;
  size?: NormalSizes | number;
  isSquare?: boolean;
  className?: string;
}

const defaultProps = {
  stacked: false,
  text: '',
  size: 'small' as NormalSizes,
  isSquare: false,
  className: ''
};

type NativeAttrs = React.ImgHTMLAttributes<any> & React.HTMLAttributes<any>;
export type AvatarProps = Props & typeof defaultProps & Partial<NativeAttrs>;

const Avatar: React.FC<AvatarProps> = React.memo(
  ({ src, className, ...props }) => {
    const showText = !src;

    return (
      <span className={`avatar ${className}`}>
        {!showText && <img className="avatar-img" src={src} {...props} />}
      </span>
    );
  }
);

export default withDefaults(Avatar, defaultProps);

import React, { FC } from 'react';
import withStyles from 'react-jss';

interface IBlockProps {
  border?: string;
  borderRadius?: string;
  color?: string;
  padding?: string;
  margin?: string;
  width?: string | number;
  height?: string | number;
  position?: 'relative' | 'absolute' | 'fixed' | 'static';
  boxShadow?: string;
  center?: boolean;
  cursor?: string;
  background?: string;
}

const blockStyles = {
  border: (props: IBlockProps) => props.border || 'none',
  borderRadius: (props: IBlockProps) => props.borderRadius || 0,
  color: (props: IBlockProps) => props.color,
  padding: (props: IBlockProps) => props.padding || 0,
  margin: (props: IBlockProps) => props.margin || 0,
  width: (props: IBlockProps) => props.width || 'auto',
  height: (props: IBlockProps) => props.height || 'auto',
  position: (props: IBlockProps) => props.position,
  boxShadow: (props: IBlockProps) => props.boxShadow,
  lineHeight: (props: IBlockProps) => (props.center ? props.height : null),
  textAlign: (props: IBlockProps) => (props.center ? 'center' : null),
  cursor: (props: IBlockProps) => props.cursor,
  background: (props: IBlockProps) => props.background,
};

interface IFlexBoxProps extends IBlockProps {
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  alignContent?: string;
}

const flexStartDefaultValue = 'flex-start';
const flexboxStyles = {
  display: 'flex',
  flexDirection: ({ flexDirection = 'row' }: IFlexBoxProps) => flexDirection,
  justifyContent: ({ justifyContent = flexStartDefaultValue }: IFlexBoxProps) => justifyContent,
  alignItems: ({ alignItems = flexStartDefaultValue }: IFlexBoxProps) => alignItems,
  alignContent: ({ alignContent = flexStartDefaultValue }: IFlexBoxProps) => alignContent,
};

interface IFlexItemProps extends IBlockProps {
  grow?: string | number;
  shrink?: string | number;
  basis?: string | number;
}

const flexboxItemStyles = {
  grow: ({ grow = '0' }: IFlexItemProps) => grow,
  shrink: ({ shrink = '1' }: IFlexItemProps) => shrink,
  basis: ({ basis = 'auto' }: IFlexItemProps) => basis,
};

export const FlexBox: FC<IFlexBoxProps> = withStyles({
  flexbox: { ...flexboxStyles, ...blockStyles },
})(({ children, classes }) => <div className={classes.flexbox}>{children}</div>);

export const FlexItem: FC<IFlexItemProps> = withStyles({
  flexItem: { ...flexboxItemStyles, ...blockStyles },
})(({ children, classes }) => <div className={classes.flexItem}>{children}</div>);

export const Block: FC<IBlockProps> = withStyles({ box: { ...blockStyles } })(
  ({ children, classes }) => <div className={classes.box}>{children}</div>,
);

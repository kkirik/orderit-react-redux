import React, { FC } from 'react';
import withStyles, { WithStyles } from 'react-jss';

export interface IBlockProps {
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
  onClick?: () => void;
}

export const blockStyles = {
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
  justifycontent?: 'space-between' | 'center' | 'flex-start' | 'flex-end' | 'space-around';
  alignitems?: string;
  flexdirection?: string;
  aligncontent?: string;
}

const flexStartDefaultValue = 'flex-start';
const flexboxStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: ({ flexdirection = 'row' }: IFlexBoxProps) => flexdirection,
  justifyContent: ({ justifycontent = flexStartDefaultValue }: IFlexBoxProps) => justifycontent,
  alignItems: ({ alignitems = flexStartDefaultValue }: IFlexBoxProps) => alignitems,
  alignContent: ({ aligncontent = flexStartDefaultValue }: IFlexBoxProps) => aligncontent,
};

interface IFlexItemProps extends IBlockProps {
  grow?: string | number;
  shrink?: string | number;
  basis?: string | number;
}

const flexboxItemStyles = {
  flexGrow: ({ grow = '0' }: IFlexItemProps) => grow,
  flexShrink: ({ shrink = '1' }: IFlexItemProps) => shrink,
  flexBasis: ({ basis = 'auto' }: IFlexItemProps) => basis,
};

const flexbox = { flexbox: { ...flexboxStyles, ...blockStyles } };
type FlexBoxStyledProps = WithStyles<typeof flexbox> & IFlexBoxProps & IBlockProps;

const FlexBoxComponent: FC<FlexBoxStyledProps> = ({ children, classes, onClick }) => (
  <div className={classes.flexbox} onClick={onClick}>
    {children}
  </div>
);

export const FlexBox = withStyles({ ...flexbox })(FlexBoxComponent);

const flexItem = { flexItem: { ...flexboxItemStyles, ...blockStyles } };
type FlexItemStyledProps = WithStyles<typeof flexItem> & IFlexItemProps & IBlockProps;

const FlexItemComponent: FC<FlexItemStyledProps> = ({ children, classes, onClick }) => (
  <div className={classes.flexItem} onClick={onClick}>
    {children}
  </div>
);

export const FlexItem = withStyles({ ...flexItem })(FlexItemComponent);

const box = { box: { ...blockStyles } };

type BlockStyledProps = WithStyles<typeof box> & IBlockProps;

const BlockComponent: FC<BlockStyledProps> = ({ children, classes, onClick }) => {
  return (
    <div className={classes.box} onClick={onClick}>
      {children}
    </div>
  );
};

export const Block = withStyles({ ...box })(BlockComponent);

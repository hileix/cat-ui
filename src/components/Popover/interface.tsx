import React from 'react';

export interface genChildProps {
  trigger: any;
  content: any;
}

export type ModeType = Array<'click' | 'hover'> | 'click' | 'hover';

export type HorizontalPosition = 'left' | 'center' | 'right';

export type VerticalPosition = 'top' | 'center' | 'bottom';

export type PositionType = [HorizontalPosition, VerticalPosition];

export type PositionNameType =
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'topLeft'
  | 'topRight'
  | 'rightTop'
  | 'rightBottom'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom';

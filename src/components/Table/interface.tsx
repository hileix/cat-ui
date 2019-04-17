import * as React from 'react'

export interface ColumnProps {
  id: string;
  render: string | React.ReactNode;
}

export interface EmptyInnerProps {
  image: string;
}

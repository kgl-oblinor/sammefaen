export type Variant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'success';
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface InteractiveComponentProps extends BaseComponentProps {
  disabled?: boolean;
  loading?: boolean;
}
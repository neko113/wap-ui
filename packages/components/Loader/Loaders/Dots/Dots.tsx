import React from 'react';
import * as S from './Dots.styles';

export interface DotsProps {
  size: 'sm' | 'md' | 'lg';
  color: 'primary' | 'secondary';
}

export const Dots = ({ size, color }: DotsProps) => {
  return (
    <S.Container size={size}>
      {[0, 0.5, 1].map((number) => (
        <S.Dot key={number} delay={number} color={color} />
      ))}
    </S.Container>
  );
};

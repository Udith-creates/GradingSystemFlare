'use client';

import React from 'react';

interface StarBorderProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  color?: string;
  speed?: string;
  children?: React.ReactNode;
}

const StarBorder: React.FC<StarBorderProps> = ({
  as: Component = 'div',
  className = '',
  color = 'cyan',
  speed = '5s',
  children,
  ...props
}: StarBorderProps) => {
  const colorMap: { [key: string]: string } = {
    cyan: '#00d4ff',
    blue: '#0099ff',
    green: '#00ff00',
    purple: '#ff00ff',
    pink: '#ff0080',
    yellow: '#ffff00',
    red: '#ff0000',
    white: '#ffffff',
  };

  const borderColor = colorMap[color] || colorMap.cyan;

  const style = `
    @keyframes star-border-${color} {
      0% {
        clip-path: polygon(
          0% 0%,
          100% 0%,
          100% 100%,
          0% 100%
        );
      }
      25% {
        clip-path: polygon(
          0% 0%,
          100% 0%,
          100% calc(100% - 2px),
          0% calc(100% - 2px)
        );
      }
      50% {
        clip-path: polygon(
          0% 0%,
          100% 0%,
          100% 100%,
          calc(100% - 2px) 100%,
          calc(100% - 2px) 2px,
          2px 2px,
          2px calc(100% - 2px),
          100% calc(100% - 2px)
        );
      }
      75% {
        clip-path: polygon(
          2px 0%,
          100% 0%,
          calc(100% - 2px) 2px,
          calc(100% - 2px) 100%,
          0% 100%
        );
      }
      100% {
        clip-path: polygon(
          0% 0%,
          100% 0%,
          100% 100%,
          0% 100%
        );
      }
    }
    
    .star-border-container-${color} {
      position: relative;
      display: inline-block;
    }

    .star-border-container-${color}::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(45deg, ${borderColor}, transparent, ${borderColor});
      border-radius: inherit;
      z-index: -1;
      animation: star-border-${color} ${speed} linear infinite;
    }
  `;

  const safeComponent = Component as React.ElementType;

  return (
    <>
      <style>{style}</style>
      {React.createElement(
        safeComponent,
        {
          className: `star-border-container-${color} ${className}`,
          ...props,
        },
        children
      )}
    </>
  );
};

export default StarBorder;

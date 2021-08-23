import React from 'react';
import { StyledCursor } from './styled';
import { useCursorContext } from 'context/cursor';

const Cursor = () => {
  const cursorRef = React.useRef<HTMLDivElement>(null);
  const [{cursorStyle, position}] = useCursorContext();
  React.useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      const x = position ? position?.x : event.clientX;
      const y = position ? position?.y : event.clientY;
      if (null !== cursorRef.current){
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, [position]);

  return (
    <StyledCursor
      ref={cursorRef}
      color={cursorStyle.color}
      bordered={cursorStyle.bordered}
    />
  );
};

export default React.memo(Cursor);

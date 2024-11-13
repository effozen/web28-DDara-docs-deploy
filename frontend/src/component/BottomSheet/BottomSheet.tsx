import React from 'react';
import { motion } from 'framer-motion';
import { useBottomSheet } from '@/hooks/useBottomSheet';

interface IBottomSheetProps {
  minHeight: number;
  maxHeight: number;
  children: React.ReactNode;
}

/**
 * `BottomSheet` 컴포넌트는 하단에서 올라오는 시트 형태의 UI를 제공합니다.
 *
 * @param {IBottomSheetProps} props - `children`을 포함한 컴포넌트 속성
 * @returns {ReactNode} - 하단 시트를 렌더링합니다.
 *
 * @remarks
 * - 드래그 동작을 통해 시트를 열고 닫을 수 있습니다.
 * - `useBottomSheet` 훅을 사용하여 위치 및 드래그 동작을 관리합니다.
 *
 * @example
 * ```tsx
 * <BottomSheet>
 *   <div className="p-4">
 *     <h2>예시 콘텐츠</h2>
 *     <p>BottomSheet의 children</p>
 *   </div>
 * </BottomSheet>
 * ```
 */

export const BottomSheet = (props: IBottomSheetProps) => {
  const { sheet } = useBottomSheet({ minHeight: props.minHeight, maxHeight: props.maxHeight });

  return (
    <motion.div
      ref={sheet}
      className="z-100 fixed left-0 right-0 flex h-full flex-col rounded-t-lg transition-transform duration-700"
      style={{
        top: `calc(100% - ${props.minHeight * 100}%)`,
        background: '#FEFEFEF2',
      }}
    >
      <div className="flex items-center justify-center pb-1 pt-2">
        <div className="h-1.5 w-12 rounded-full bg-gray-300" />
      </div>
      {props.children}
    </motion.div>
  );
};

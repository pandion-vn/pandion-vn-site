import { useState } from 'react';
import type { ComponentProps } from 'react';
import { WithClassName } from '@/types/shared';
import { placeholderBlurhash } from '@/common/utils';
import cn from 'clsx';
import Image from 'next/legacy/image';

interface BlurImageProps extends WithClassName, ComponentProps<typeof Image> {
  alt: string;
}

const BlurImage = (props: BlurImageProps) => {
  const [isLoading, setLoading] = useState(false);

  return (
    <>
      <Image
        {...props}
        alt={props.alt}
        height={props.height ?? 300}
        width={props.width ?? 540}
        placeholder="blur"
        blurDataURL={placeholderBlurhash}
        className={cn(props.className, isLoading ? 'unblur' : '')}
        onLoadingComplete={() => setLoading(true)}
      />
      <style jsx global>{`
        .unblur {
          animation: unblur 1s linear;
        }

        @keyframes unblur {
          from {
            filter: blur(20px);
          }
          to {
            filter: blur(0);
          }
        }
      `}</style>
    </>
  );
};

export default BlurImage;

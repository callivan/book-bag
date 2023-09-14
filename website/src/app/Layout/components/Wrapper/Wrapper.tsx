import classNames from 'classnames';

export function Wrapper({ children }: { children: React.ReactNode }) {
  const BLURE_SIDE = (
    <div
      className={classNames(
        //Position
        'relative',

        //Size
        `w-3 h-full`,
        //Mobile big
        's:w-2',
        //Mobile small
        'xs:w-1',

        //Flex
        'flex-shrink-0',

        //Effect
        'backdrop-blur-custom',

        //Color
        'bg-gray-bg',

        //Layers
        'z-[-1]',
      )}
    />
  );

  return (
    <main
      className={classNames(
        //Positiom
        'relative isolate',

        //Flex
        'flex',

        //Size
        'w-full h-full',

        //Visibility
        'overflow-hidden',
      )}
    >
      {BLURE_SIDE}
      <section
        className={classNames(
          //Flex
          'flex-grow',
        )}
      >
        {children}
      </section>
      {BLURE_SIDE}
    </main>
  );
}

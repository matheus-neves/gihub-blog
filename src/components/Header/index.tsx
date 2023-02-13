import logo from '@assets/logo.svg';

export function Header() {
  return (
    <header
      className="
        w-full
        h-[150px]
        bg-[length:100%100%]
        bg-header-pattern
        bg-no-repeat

        flex
        items-center
        justify-center

        md:h-[296px]
      "
    >
      <img
        src={logo}
        alt=""
        className="
        h-[60px]
        mt-[-30px]

        md:h-[98px]
        md:mt-[-50px]
      "
      />
    </header>
  );
}

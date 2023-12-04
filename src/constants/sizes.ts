export interface Sizes {
  up(size: string): string;
  down(size: string): string;
}

interface Size {
  [key: string]: string;
}

const sizes = {
  up() {},
  down(size: string): string {
    const sizes: Size = {
      xs: '600px',
      sm: '780px',
      md: '992px',
      lg: '1200px',
      xl: '1800px',
    };
    return `@media (max-width: ${sizes[size]})`;
  },
};

export default sizes;

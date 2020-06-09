import btn from '../components/btn';

export default {
  title: 'Button',
};

export const white = () => ({
  components: { btn },
  template: `
    <btn color='white'>
      Click here
    </btn>
  `,
});

export const amber = () => ({
  components: { btn },
  template: `
    <btn color='amber'>
      Click here
    </btn>
  `,
});

export const red = () => ({
  components: { btn },
  template: `
    <btn color='red'>
      Click here
    </btn>
  `,
});

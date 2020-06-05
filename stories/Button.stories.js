import btn from '../src/components/btn';

export default {
  title: 'Button'
};

export const white = () => ({
  components: { btn },
  template: `
    <btn
      text='Click here'
      color='white'
    />
  `
})

export const amber = () => ({
  components: { btn },
  template: `
    <btn
      text='Click here'
      color='amber'
    />
  `
})

export const red = () => ({
  components: { btn },
  template: `
    <btn
      text='Click here'
      color='red'
    />
  `
})

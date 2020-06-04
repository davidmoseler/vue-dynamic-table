import modal from '../src/components/modal';

export default {
  title: 'Modal'
};

export const fixed_footer = () => ({
  components: { modal },
  template: `
    <modal
      :open=true
      title='Test Modal'
      close_text='Cancel'
    >
      <p> A paragraph. </p>
    </modal>
  `
})

export const short = () => ({
  components: { modal },
  template: `
    <modal
      :open=true
      title='Test Modal'
      close_text='Cancel'
      type='short'
    >
      <p> A paragraph. </p>
    </modal>
  `
})

export const bottom = () => ({
  components: { modal },
  template: `
    <modal
      :open=true
      title='Test Modal'
      close_text='Cancel'
      type='bottom'
    >
      <p> A paragraph. </p>
    </modal>
  `
})

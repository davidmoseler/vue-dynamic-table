import modal from '../src/components/modal';
import btn from '../src/components/btn';

export default {
  title: 'Modal'
};

export const fixed_footer = () => ({
  components: { modal, btn },
  template: `
    <modal
      :open=true
      title='Test Modal'
      close_text='Cancel'
    >
      <p> A paragraph. </p>
      <template slot='additional_buttons'>
        <btn color='amber'>
          Ok!
        </btn>
      </template>
    </modal>
  `
})

export const short = () => ({
  components: { modal, btn },
  template: `
    <modal
      :open=true
      title='Test Modal'
      close_text='Cancel'
      type='short'
    >
      <p> A paragraph. </p>
      <template slot='additional_buttons'>
        <btn color='amber'>
          Ok!
        </btn>
      </template>
    </modal>
  `
})

export const bottom = () => ({
  components: { modal, btn },
  template: `
    <modal
      :open=true
      title='Test Modal'
      close_text='Cancel'
      type='bottom'
    >
      <p> A paragraph. </p>
      <template slot='additional_buttons'>
        <btn color='amber'>
          Ok!
        </btn>
      </template>
    </modal>
  `
})

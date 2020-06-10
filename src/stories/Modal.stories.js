import modal from '../components/modal.vue';
import btn from '../components/btn.vue';

export default {
  title: 'Modal'
};

export const fixedFooter = () => ({
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
});

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
});

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
});

import Ember from 'ember';
import Base from './base';
import Confirmation from 'api-umbrella-admin-ui/mixins/confirmation';
import UncachedModel from 'api-umbrella-admin-ui/mixins/uncached-model';

export default Base.extend(Confirmation, UncachedModel, {
  // Return a promise for loading multiple models all together.
  fetchModels(record) {
    return Ember.RSVP.hash({
      record: record,
      groupOptions: this.get('store').findAll('admin-group', { reload: true }),
    });
  },
});

import classic from 'ember-classic-decorator';
import Model, { attr, belongsTo } from '@ember-data/model';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  httpMethod: [
    validator('presence', true),
  ],
  regex: [
    validator('presence', true),
  ],
});

// eslint-disable-next-line ember/no-classic-classes
@classic
class SubSettings extends Model.extend(Validations) {
  @attr('number')
  sortOrder;

  @attr()
  httpMethod;

  @attr()
  regex;

  @belongsTo('api/settings', { async: false })
  settings;

  ready() {
    this.setDefaults();
    super.ready();
  }

  setDefaults() {
    if(!this.settings) {
      this.set('settings', this.store.createRecord('api/settings'));
    }
  }
}

SubSettings.reopenClass({
  validationClass: Validations,
});

export default SubSettings;

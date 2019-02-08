import control from '../control'

/**
 * Text input class
 * Output a <input type="text" ... /> form element
 */
export default class tableC extends control {
  /**
   * class configuration
   */
  static get definition() {
    return {
      icon: '#',
      i18n: {
        default: 'Table Form'
      }
    };
  }

  /**
   * build a text DOM element, supporting other jquery text form-control's
   * @return {Object} DOM Element to be injected into the form.
   */
  build() {
    // console.log(this.config)
    // let { name } = this.config
    // name = this.config.multiple ? `${name}[]` : name
    // const inputConfig = Object.assign({}, this.config, { name })
    // this.dom = this.markup('input', null, inputConfig)
    return ''
  }

  /**
   * onRender callback
   */
  onRender() {
    // Set userData if available
    if (this.config.userData) {
      $(this.dom).val(this.config.userData[0])
    }
  }
}

// register this control for the following types & text subtypes
control.register(['table'], tableC)

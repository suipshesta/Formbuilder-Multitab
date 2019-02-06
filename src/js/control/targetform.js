import control from '../control'

/**
 * Text input class
 * Output a <input type="text" ... /> form element
 */
export default class controlTarget extends control {
  /**
 * definition
 * @return {Object} select control definition
 */
  static get definition() {
    return {
      icon: '🌟',
      i18n: {
        default: 'Target Form'
      }
    };
  }


  /**
   * build a text DOM element, supporting other jquery text form-control's
   * @return {Object} DOM Element to be injected into the form.
   */
  build() {
    const tabRand = Math.random().toString(36).substring(2, 15)
    const addDom = '<div id="subTabs_' + tabRand + '"> <ul> <li><a href="#' + tabRand + '"><input type="text" class="tab_input" placeholder="tabname"/></a></li> </ul> <div id="' + tabRand + '"><li><input type="text" class="sub_tab_input" placeholder="tabname"/> <i class="subliRev fa fa-times" aria-hidden="true" data-tabid="1"></i></li></div></div><button id="addParTab">Add Main list</button><button id="addList">Add Sub List</button>'
    $('.asdf-wrap').find('.input-wrap').removeClass('input-wrap').addClass('newInputTab').html(addDom)
    $('#subTabs_' + tabRand)
      .tabs()
      .addClass('ui-tabs-vertical ui-helper-clearfix')
    return this.dom
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
control.register(['targetForm'], controlTarget)
control.register(['targetForm', 'password', 'email', 'color', 'tel'], controlTarget, 'targetForm')

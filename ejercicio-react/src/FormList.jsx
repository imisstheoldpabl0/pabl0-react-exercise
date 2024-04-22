/* ----- PABL0 ----- */

import React, { PureComponent } from 'react'
import FormItem from './FormItem'


export class FormList extends PureComponent {
  render() {
    return (
      <section>
        <h2>Este es el FormList</h2>
        <h4>Aquí abajo va el FormItem</h4>
        <FormItem />
        <FormItem />
        <FormItem />
        <FormItem />
        <FormItem />
      </section>
    )
  }
}

export default FormList
// @see: https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html
// Type definitions for vue-inline-editable
// Project: Additional UI elements for VueJS
// Definitions by: mihnsen <https://github.com/mihnsen/>

/*~ This is the module template file. You should rename it to index.d.ts
 *~ and place it in a folder with the same name as the module.
 *~ For example, if you were writing a file for "super-greeter", this
 *~ file should be 'super-greeter/index.d.ts'
 */

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
import Vue, { PluginObject, PluginFunction } from 'vue'

export default class VueInlineEditablePlugin implements PluginObject<{}>{
  [key: string]: any
  install: PluginFunction<{}>

  static install(pVue: typeof Vue, options?:{} | undefined): void
}

export const VueInlineEditable: object;

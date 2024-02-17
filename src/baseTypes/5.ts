/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

type StringOrNumber = string | number;
let union: StringOrNumber;

type EnableOrDisable = "enable" | "disable";
let literal: EnableOrDisable;

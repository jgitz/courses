/* 

- TYPE ALIASES: we can assign a UNION of TYPES to a CUSTOM TYPE and use it like normal types

  ** used to save commonly used UNIONS of types used in your project to a SINGLE CUSTOM TYPE.... it can be used everywhere INSTEAD of REPEATING the UNION TYPES

  ** syntax 

    type <> = <UNION TYPE EXPRESSION>

    **** CANNOT be used with INTERFACE KEYWORD 

  ** BEST PRACTICE: type alias name DONOT START with UPPERCASE

*/

// EXAMPLES of TYPE ALIASES 

type type_alias_for_string_or_number_union = string | number;

type type_alias_for_array_with_only_string_and_number_type_items = (string | number)[]

// now we can use the TYPE ALIASES anywhere to define the union types like below 

type Student = {
  name: string;
  id : type_alias_for_string_or_number_union
}

// we can also use TYPE ALIASES to create CUSTOM TYPES using TYPE OBJECT NOTATION 

type UserId = type_alias_for_string_or_number_union

/* ***** TYPE ALIASES CANNOT BE assigned to INTERFACES like below 

  interface <> = <type alias>

*/
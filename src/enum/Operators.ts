export enum EOperators {
  RAW_STRING = '"',
  RAW_STRING2 = '\'',
  DOT = '.',
  DOT_DOT = '..',
  DOT_DOT_LESS = '..<',
  DOT_DOT_NOT = '..!',
  DOT_DOT_ASTERISK = '..*',
  BUILT_IN = '?',
  EXISTS = '??',
  EQUALS = '=',
  DOUBLE_EQUALS = '==',
  NOT_EQUALS = '!=',
  PLUS_EQUALS = '+=',
  MINUS_EQUALS = '-=',
  TIMES_EQUALS = '*=',
  DIV_EQUALS = '/=',
  MOD_EQUALS = '%=',
  PLUS_PLUS = '++',
  MINUS_MINUS = '--',

  ESCAPED_LT = 'lt',
  ESCAPED_LTE = 'lte',
  NATURAL_LT = '<',
  NATURAL_LTE = '<=',

  ESCAPED_GT = 'gt',
  ESCAPED_GTE = 'gte',
  NATURAL_GT = '>',
  NATURAL_GTE = '>=',

  PLUS = '+',
  MINUS = '-',
  TIMES = '*',
  DOUBLE_STAR = '**',
  ELLIPSIS = '...',
  DIVIDE = '/',
  PERCENT = '%',
  AND = '&&',
  OR = '||',
  EXCLAM = '!',
  COMMA = ',',
  SEMICOLON = ';',
  COLON = ':',
  OPEN_BRACKET = '[',
  CLOSE_BRACKET = ']',
  OPEN_PAREN = '(',
  CLOSE_PAREN = ')',
  OPENING_CURLY_BRACKET = '{',
  CLOSING_CURLY_BRACKET = '}',
  IN = 'in',
  AS = 'as',
  USING = 'using',
}

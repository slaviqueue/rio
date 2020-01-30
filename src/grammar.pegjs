Program
	= body:(ws expression:Expression ws { return expression })* { return { type: 'PROGRAM', body } }

Expression
    = InfixExpression

InfixExpression
	= InfixFunctionCall
    / UnaryExpression

UnaryExpression
    = PrefixFunctionCall
    / SimpleExpression

SimpleExpression
	= ValueDeclaration
    / PrefixFunctionCall
    / Condition
    / Lambda
    / Group
    / FunctionInvokation
    / ImportStatement
    / PropertyAccess
    / QualifiedIdentifier
    / Identifier
    / Number
    / String

FunctionInvokation
	= CurriedFuncionCall
    / FunctionCall

Group "brace group"
	= "(" ws expr:Expression ws ")" { return { type: 'GROUP', children: expr } }

Condition "condition"
    = "if" strict_ws condition:Expression strict_ws
      "then" strict_ws ifTrue:Expression strict_ws
      "else" strict_ws ifFalse:Expression
      { return { type: 'CONDITION', ifTrue, ifFalse } }

InfixFunctionCall "infix function call"
	= arg1:UnaryExpression strict_ws "'"calee:(QualifiedIdentifier / Identifier / Group)"'" strict_ws arg2:InfixExpression
    { return { type: 'INFIX_FUNCTION_CALL', calee, args: [arg1, arg2] } }

PrefixFunctionCall
	= calee:(QualifiedIdentifier / Identifier / Group)"'" strict_ws arg1:SimpleExpression
    { return { type: 'PREFIX_FUNCTION_CALL', calee, args: [arg1] } }

FunctionCall "function call"
	= callee:(QualifiedIdentifier / Identifier / Group) ws "(" ws args:Arguments? ws ")"
    { return { type: 'FUNCTION_CALL', callee, args } }

CurriedFuncionCall "function call"
	= callee:FunctionCall
    	calls:(ws "(" ws args:Arguments? ws ")"
        	{ return { type: 'FUNCTION_CALL', callee, args  } })+
    { return calls.reduceRight((callee, call) => ({ ...call, callee })) }

ImportStatement "import statement"
	= "use" strict_ws what:Identifier strict_ws "from" strict_ws from:String
    { return { type: 'IMPORT', what, from  } }

Arguments "arguments"
    = arg:Expression args:(ws "," ws innerArg:Expression { return innerArg })*
    { return [arg, ...args] }

LambdaParams "lambda formal parameter list"
    = arg:Identifier args:(ws "," ws innerArg:Identifier { return innerArg })*
    { return [arg, ...args] }

ValueDeclaration "value declaration"
	= "value" strict_ws id:Identifier strict_ws "is" strict_ws value:Expression
    { return { type: 'VALUE_DECLARATION', id, value } }

PropertyAccess "property access"
	= "." Identifier

Lambda "function declaration"
	= "function" strict_ws "of" ws "(" ws args:LambdaParams? ws ")"
    	ws "do" strict_ws body:(expr:Expression strict_ws { return expr })* "end"
    { return { type: 'LAMBDA', args, body } }

QualifiedIdentifier
	= namespace:Identifier "::" id:Identifier { return { type: 'QUALIFIED_IDENTIFIER', namespace, id } }

Identifier "identifier"
	= (! Keyword value:([a-zA-Z_\+\\\*\-])+ { return { type: 'IDENTIFIER', value: value.join('') } })

Number "number"
	= value:(ints:[0-9]+ after_coma:("."digits:[0-9]* { return "." + digits.join('') })?
    { return Number(ints.join('') + (after_coma || '')) }) { return { type: 'NUMBER', value } }

String "string"
	= '"' value:(! '"' char:. { return char })* '"' { return { type: 'STRING', value: value.join('') } }

Keyword "keyword"
	= ("value" / "function" / "of" / "is" / "is not" / "do" / "end" / "use" / "from" / "then" / "if") ![A-Za-z_]

ws "whitespace"
	= [\n\t ]*

strict_ws "whitespace"
	= [\n\t ]+
/* 
DECORATORS: are used to assign METADATAS in components

INPUT DECORATOR : is used inside a CHILD TS file to input PROPERTIES defined inside PARENT HTML...syntax
                    .... input() <parent property variable name> : string | undefined
                    **** this parent property name can be used inside CHILD HTML *NGIF



OUTPUT DECORATOR: is used inside a CHILD TS file to output some CHILD object such as custom USER_DEFINED_EVENTS... which can be used inside PARENT HTML and TS FILE.... syntax e.g to output a USER DEFINED EVENT

@output() event_object_variable = new EventEmitter


*/
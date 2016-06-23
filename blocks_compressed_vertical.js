// Do not edit this file; automatically generated by build.py.
'use strict';

/*

 Visual Blocks Editor

 Copyright 2016 Massachusetts Institute of Technology
 All rights reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
Blockly.Colours={motion:{primary:"#4C97FF",secondary:"#4280D7",tertiary:"#3373CC"},looks:{primary:"#9966FF",secondary:"#855CD6",tertiary:"#774DCB"},sounds:{primary:"#D65CD6",secondary:"#BF40BF",tertiary:"#A63FA6"},control:{primary:"#FFAB19",secondary:"#EC9C13",tertiary:"#CF8B17"},event:{primary:"#FFD500",secondary:"#DBC200",tertiary:"#CCAA00"},operators:{primary:"#4CBF56",secondary:"#489D84",tertiary:"#489D84"},text:"#575E75",workspace:"#F5F8FF",toolbox:"#DDDDDD",toolboxText:"#000000",flyout:"#DDDDDD",
scrollbar:"#CCCCCC",scrollbarHover:"#BBBBBB",textField:"#FFFFFF",insertionMarker:"#949494",insertionMarkerOpacity:.6,dragShadowOpacity:.3,stackGlow:"#FFF200",stackGlowOpacity:1,replacementGlow:"#FFFFFF",replacementGlowOpacity:1,fieldShadow:"rgba(0,0,0,0.1)",dropDownShadow:"rgba(0, 0, 0, .3)",numPadBackground:"#547AB2",numPadBorder:"#435F91",numPadActiveBackground:"#435F91",numPadText:"#FFFFFF"};Blockly.Blocks.control={};Blockly.Blocks.control_forever={init:function(){this.jsonInit({id:"control_forever",message0:"forever %1 %2 %3",lastDummyAlign0:"RIGHT",args0:[{type:"input_dummy"},{type:"input_statement",name:"SUBSTACK"},{type:"field_image",src:Blockly.mainWorkspace.options.pathToMedia+"icons/control_forever.svg",width:10,height:10,alt:"*",flip_rtl:!0}],inputsInline:!0,previousStatement:null,colour:Blockly.Colours.control.primary,colourSecondary:Blockly.Colours.control.secondary,colourTertiary:Blockly.Colours.control.tertiary})}};
Blockly.Blocks.control_repeat={init:function(){this.jsonInit({id:"control_repeat",message0:"repeat %1 %2 %3",lastDummyAlign0:"RIGHT",args0:[{type:"input_value",name:"TIMES",check:"Number"},{type:"input_statement",name:"SUBSTACK"},{type:"field_image",src:Blockly.mainWorkspace.options.pathToMedia+"icons/control_forever.svg",width:10,height:10,alt:"*",flip_rtl:!0}],inputsInline:!0,previousStatement:null,nextStatement:null,colour:Blockly.Colours.control.primary,colourSecondary:Blockly.Colours.control.secondary,
colourTertiary:Blockly.Colours.control.tertiary})}};Blockly.Blocks.control_if={init:function(){this.jsonInit({type:"control_if",message0:"if %1 then %2 %3",args0:[{type:"input_value",name:"CONDITION",check:"Boolean"},{type:"input_dummy"},{type:"input_statement",name:"SUBSTACK"}],inputsInline:!0,previousStatement:null,nextStatement:null,colour:Blockly.Colours.control.primary,colourSecondary:Blockly.Colours.control.secondary,colourTertiary:Blockly.Colours.control.tertiary})}};
Blockly.Blocks.control_if_else={init:function(){this.jsonInit({type:"control_if_else",message0:"if %1 then %2 %3 else %4 %5",args0:[{type:"input_value",name:"CONDITION",check:"Boolean"},{type:"input_dummy"},{type:"input_statement",name:"SUBSTACK"},{type:"input_dummy"},{type:"input_statement",name:"SUBSTACK2"}],inputsInline:!0,previousStatement:null,nextStatement:null,colour:Blockly.Colours.control.primary,colourSecondary:Blockly.Colours.control.secondary,colourTertiary:Blockly.Colours.control.tertiary})}};
Blockly.Blocks.control_stop_menu={init:function(){this.jsonInit({message0:"%1",args0:[{type:"field_dropdown",name:"STOP_OPTION",options:[["all","ALL"],["this script","THIS"],["other scripts in sprite","OTHER"]]}],inputsInline:!0,output:"String",colour:Blockly.Colours.control.secondary,colourSecondary:Blockly.Colours.control.secondary,colourTertiary:Blockly.Colours.control.tertiary})}};
Blockly.Blocks.control_stop={init:function(){this.jsonInit({id:"control_stop",message0:"stop %1",args0:[{type:"input_value",name:"STOP_OPTION",check:"String"}],inputsInline:!0,previousStatement:null,colour:Blockly.Colours.control.primary,colourSecondary:Blockly.Colours.control.secondary,colourTertiary:Blockly.Colours.control.tertiary})}};
Blockly.Blocks.control_wait={init:function(){this.jsonInit({id:"control_wait",message0:"wait %1 secs",args0:[{type:"input_value",name:"DURATION",check:"Number"}],inputsInline:!0,previousStatement:null,nextStatement:null,colour:Blockly.Colours.control.primary,colourSecondary:Blockly.Colours.control.secondary,colourTertiary:Blockly.Colours.control.tertiary})}};
Blockly.Blocks.control_wait_until={init:function(){this.jsonInit({message0:"wait until %1",args0:[{type:"input_value",name:"CONDITION",check:"Boolean"}],inputsInline:!0,previousStatement:null,nextStatement:null,colour:Blockly.Colours.control.primary,colourSecondary:Blockly.Colours.control.secondary,colourTertiary:Blockly.Colours.control.tertiary})}};
Blockly.Blocks.control_repeat_until={init:function(){this.jsonInit({message0:"repeat until %1 %2 %3",lastDummyAlign0:"RIGHT",args0:[{type:"input_value",name:"CONDITION",check:"Boolean"},{type:"input_statement",name:"SUBSTACK"},{type:"field_image",src:Blockly.mainWorkspace.options.pathToMedia+"icons/control_forever.svg",width:10,height:10,alt:"*",flip_rtl:!0}],inputsInline:!0,previousStatement:null,nextStatement:null,colour:Blockly.Colours.control.primary,colourSecondary:Blockly.Colours.control.secondary,
colourTertiary:Blockly.Colours.control.tertiary})}};Blockly.Blocks.control_start_as_clone={init:function(){this.jsonInit({id:"control_start_as_clone",message0:"when I start as a clone",args0:[],inputsInline:!0,nextStatement:null,colour:Blockly.Colours.control.primary,colourSecondary:Blockly.Colours.control.secondary,colourTertiary:Blockly.Colours.control.tertiary})}};
Blockly.Blocks.control_create_clone_of_menu={init:function(){this.jsonInit({message0:"%1",args0:[{type:"field_dropdown",name:"CLONE_OPTION",options:[["myself","MYSELF"]]}],inputsInline:!0,output:"String",colour:Blockly.Colours.control.secondary,colourSecondary:Blockly.Colours.control.secondary,colourTertiary:Blockly.Colours.control.tertiary})}};
Blockly.Blocks.control_create_clone_of={init:function(){this.jsonInit({id:"control_start_as_clone",message0:"create clone of %1",args0:[{type:"input_value",name:"CLONE_OPTION",check:"String"}],inputsInline:!0,previousStatement:null,nextStatement:null,colour:Blockly.Colours.control.primary,colourSecondary:Blockly.Colours.control.secondary,colourTertiary:Blockly.Colours.control.tertiary})}};
Blockly.Blocks.control_delete_this_clone={init:function(){this.jsonInit({message0:"delete this clone",args0:[],inputsInline:!0,previousStatement:null,colour:Blockly.Colours.control.primary,colourSecondary:Blockly.Colours.control.secondary,colourTertiary:Blockly.Colours.control.tertiary})}};Blockly.Blocks.event={};Blockly.Blocks.event_whenflagclicked={init:function(){this.jsonInit({id:"event_whenflagclicked",message0:"when %1 clicked",args0:[{type:"field_image",src:Blockly.mainWorkspace.options.pathToMedia+"icons/event_whenflagclicked.svg",width:24,height:24,alt:"flag",flip_rtl:!0}],inputsInline:!0,nextStatement:null,colour:Blockly.Colours.event.primary,colourSecondary:Blockly.Colours.event.secondary,colourTertiary:Blockly.Colours.event.tertiary})}};
Blockly.Blocks.event_broadcast_menu={init:function(){this.jsonInit({message0:"%1",args0:[{type:"field_dropdown",name:"BROADCAST_OPTION",options:[["message1","MESSAGE1"],["message2","MESSAGE2"],["new message","NEW_MESSAGE"]]}],inputsInline:!0,output:"String",colour:Blockly.Colours.event.secondary,colourSecondary:Blockly.Colours.event.secondary,colourTertiary:Blockly.Colours.event.tertiary})}};
Blockly.Blocks.event_whenbroadcastreceived={init:function(){this.jsonInit({id:"event_whenbroadcastreceived",message0:"when I receive %1",args0:[{type:"input_value",name:"BROADCAST_OPTION",check:"String"}],inputsInline:!0,nextStatement:null,colour:Blockly.Colours.event.primary,colourSecondary:Blockly.Colours.event.secondary,colourTertiary:Blockly.Colours.event.tertiary})}};
Blockly.Blocks.event_broadcast={init:function(){this.jsonInit({id:"event_broadcast",message0:"broadcast %1",args0:[{type:"input_value",name:"BROADCAST_OPTION",check:"String"}],inputsInline:!0,previousStatement:null,nextStatement:null,colour:Blockly.Colours.event.primary,colourSecondary:Blockly.Colours.event.secondary,colourTertiary:Blockly.Colours.event.tertiary})}};
Blockly.Blocks.event_broadcastandwait={init:function(){this.jsonInit({message0:"broadcast %1 and wait",args0:[{type:"input_value",name:"BROADCAST_OPTION",check:"String"}],inputsInline:!0,previousStatement:null,nextStatement:null,colour:Blockly.Colours.event.primary,colourSecondary:Blockly.Colours.event.secondary,colourTertiary:Blockly.Colours.event.tertiary})}};
// Copyright 2012 Google Inc.  Apache License 2.0
Blockly.Blocks.operators={};Blockly.Blocks.operator_add={init:function(){this.jsonInit({message0:"%1 + %2",args0:[{type:"input_value",name:"NUM1",check:"Number"},{type:"input_value",name:"NUM2",check:"Number"}],inputsInline:!0,output:"Number",colour:Blockly.Colours.operators.primary,colourSecondary:Blockly.Colours.operators.secondary,colourTertiary:Blockly.Colours.operators.tertiary})}};
Blockly.Blocks.operator_subtract={init:function(){this.jsonInit({message0:"%1 - %2",args0:[{type:"input_value",name:"NUM1",check:"Number"},{type:"input_value",name:"NUM2",check:"Number"}],inputsInline:!0,output:"Number",colour:Blockly.Colours.operators.primary,colourSecondary:Blockly.Colours.operators.secondary,colourTertiary:Blockly.Colours.operators.tertiary})}};
Blockly.Blocks.operator_multiply={init:function(){this.jsonInit({message0:"%1 * %2",args0:[{type:"input_value",name:"NUM1",check:"Number"},{type:"input_value",name:"NUM2",check:"Number"}],inputsInline:!0,output:"Number",colour:Blockly.Colours.operators.primary,colourSecondary:Blockly.Colours.operators.secondary,colourTertiary:Blockly.Colours.operators.tertiary})}};
Blockly.Blocks.operator_divide={init:function(){this.jsonInit({message0:"%1 / %2",args0:[{type:"input_value",name:"NUM1",check:"Number"},{type:"input_value",name:"NUM2",check:"Number"}],inputsInline:!0,output:"Number",colour:Blockly.Colours.operators.primary,colourSecondary:Blockly.Colours.operators.secondary,colourTertiary:Blockly.Colours.operators.tertiary})}};
Blockly.Blocks.operator_random={init:function(){this.jsonInit({message0:"pick random %1 to %2",args0:[{type:"input_value",name:"FROM",check:"Number"},{type:"input_value",name:"TO",check:"Number"}],inputsInline:!0,output:"Number",colour:Blockly.Colours.operators.primary,colourSecondary:Blockly.Colours.operators.secondary,colourTertiary:Blockly.Colours.operators.tertiary})}};
Blockly.Blocks.operator_lt={init:function(){this.jsonInit({message0:"%1 < %2",args0:[{type:"input_value",name:"OPERAND1"},{type:"input_value",name:"OPERAND2"}],inputsInline:!0,output:"Boolean",colour:Blockly.Colours.operators.primary,colourSecondary:Blockly.Colours.operators.secondary,colourTertiary:Blockly.Colours.operators.tertiary})}};
Blockly.Blocks.operator_equals={init:function(){this.jsonInit({message0:"%1 = %2",args0:[{type:"input_value",name:"OPERAND1"},{type:"input_value",name:"OPERAND2"}],inputsInline:!0,output:"Boolean",colour:Blockly.Colours.operators.primary,colourSecondary:Blockly.Colours.operators.secondary,colourTertiary:Blockly.Colours.operators.tertiary})}};
Blockly.Blocks.operator_gt={init:function(){this.jsonInit({message0:"%1 > %2",args0:[{type:"input_value",name:"OPERAND1"},{type:"input_value",name:"OPERAND2"}],inputsInline:!0,output:"Boolean",colour:Blockly.Colours.operators.primary,colourSecondary:Blockly.Colours.operators.secondary,colourTertiary:Blockly.Colours.operators.tertiary})}};
Blockly.Blocks.operator_and={init:function(){this.jsonInit({message0:"%1 and %2",args0:[{type:"input_value",name:"OPERAND1",check:"Boolean"},{type:"input_value",name:"OPERAND2",check:"Boolean"}],inputsInline:!0,output:"Boolean",colour:Blockly.Colours.operators.primary,colourSecondary:Blockly.Colours.operators.secondary,colourTertiary:Blockly.Colours.operators.tertiary})}};
Blockly.Blocks.operator_or={init:function(){this.jsonInit({message0:"%1 or %2",args0:[{type:"input_value",name:"OPERAND1",check:"Boolean"},{type:"input_value",name:"OPERAND2",check:"Boolean"}],inputsInline:!0,output:"Boolean",colour:Blockly.Colours.operators.primary,colourSecondary:Blockly.Colours.operators.secondary,colourTertiary:Blockly.Colours.operators.tertiary})}};
Blockly.Blocks.operator_not={init:function(){this.jsonInit({message0:"not %1",args0:[{type:"input_value",name:"OPERAND",check:"Boolean"}],inputsInline:!0,output:"Boolean",colour:Blockly.Colours.operators.primary,colourSecondary:Blockly.Colours.operators.secondary,colourTertiary:Blockly.Colours.operators.tertiary})}};
Blockly.Blocks.operator_join={init:function(){this.jsonInit({message0:"join %1 %2",args0:[{type:"input_value",name:"STRING1"},{type:"input_value",name:"STRING2"}],inputsInline:!0,output:"String",colour:Blockly.Colours.operators.primary,colourSecondary:Blockly.Colours.operators.secondary,colourTertiary:Blockly.Colours.operators.tertiary})}};
Blockly.Blocks.operator_letter_of={init:function(){this.jsonInit({message0:"letter %1 of %2",args0:[{type:"input_value",name:"LETTER",check:"Number"},{type:"input_value",name:"STRING"}],inputsInline:!0,output:"String",colour:Blockly.Colours.operators.primary,colourSecondary:Blockly.Colours.operators.secondary,colourTertiary:Blockly.Colours.operators.tertiary})}};
Blockly.Blocks.operator_length={init:function(){this.jsonInit({message0:"length of %1",args0:[{type:"input_value",name:"STRING"}],inputsInline:!0,output:"Number",colour:Blockly.Colours.operators.primary,colourSecondary:Blockly.Colours.operators.secondary,colourTertiary:Blockly.Colours.operators.tertiary})}};
Blockly.Blocks.operator_mod={init:function(){this.jsonInit({message0:"%1 mod %2",args0:[{type:"input_value",name:"NUM1",check:"Number"},{type:"input_value",name:"NUM2",check:"Number"}],inputsInline:!0,output:"Number",colour:Blockly.Colours.operators.primary,colourSecondary:Blockly.Colours.operators.secondary,colourTertiary:Blockly.Colours.operators.tertiary})}};
Blockly.Blocks.operator_round={init:function(){this.jsonInit({message0:"round %1",args0:[{type:"input_value",name:"NUM",check:"Number"}],inputsInline:!0,output:"Number",colour:Blockly.Colours.operators.primary,colourSecondary:Blockly.Colours.operators.secondary,colourTertiary:Blockly.Colours.operators.tertiary})}};
Blockly.Blocks.operator_mathop_menu={init:function(){this.jsonInit({message0:"%1",args0:[{type:"field_dropdown",name:"OPERATOR",options:[["abs","ABS"],["floor","FLOOR"],["ceiling","CEILING"],["sqrt","SQRT"],["sin","SIN"],["cos","COS"],["tan","TAN"],["asin","ASIN"],["acos","ACOS"],["atan","ATAN"],["ln","LN"],["log","LOG"],["e ^","E"],["10 ^","10"]]}],inputsInline:!0,output:"String",colour:Blockly.Colours.operators.secondary,colourSecondary:Blockly.Colours.operators.secondary,colourTertiary:Blockly.Colours.operators.tertiary})}};
Blockly.Blocks.operator_mathop={init:function(){this.jsonInit({message0:"%1 of %2",args0:[{type:"input_value",name:"OPERATOR",check:"String"},{type:"input_value",name:"NUM",check:"Number"}],inputsInline:!0,output:"Number",colour:Blockly.Colours.operators.primary,colourSecondary:Blockly.Colours.operators.secondary,colourTertiary:Blockly.Colours.operators.tertiary})}};Blockly.Blocks.wedo={};Blockly.Blocks.wedo_setcolor={init:function(){this.jsonInit({id:"wedo_setcolor",message0:"set color to ...",args0:[],inputsInline:!0,previousStatement:null,nextStatement:null,colour:Blockly.Colours.looks.primary,colourSecondary:Blockly.Colours.looks.secondary,colourTertiary:Blockly.Colours.looks.tertiary})}};
Blockly.Blocks.wedo_motorclockwise={init:function(){this.jsonInit({id:"wedo_motorclockwise",message0:"turn motor clockwise for %1 secs",args0:[{type:"input_value",name:"DURATION",check:"Number"}],inputsInline:!0,previousStatement:null,nextStatement:null,colour:Blockly.Colours.motion.primary,colourSecondary:Blockly.Colours.motion.secondary,colourTertiary:Blockly.Colours.motion.tertiary})}};
Blockly.Blocks.wedo_motorcounterclockwise={init:function(){this.jsonInit({id:"wedo_motorcounterclockwise",message0:"turn motor counterclockwise for %1 secs",args0:[{type:"input_value",name:"DURATION",check:"Number"}],inputsInline:!0,previousStatement:null,nextStatement:null,colour:Blockly.Colours.motion.primary,colourSecondary:Blockly.Colours.motion.secondary,colourTertiary:Blockly.Colours.motion.tertiary})}};
Blockly.Blocks.wedo_motorspeed={init:function(){this.jsonInit({id:"wedo_motorspeed",message0:"set motor speed to ...",args0:[],inputsInline:!0,previousStatement:null,nextStatement:null,colour:Blockly.Colours.motion.primary,colourSecondary:Blockly.Colours.motion.secondary,colourTertiary:Blockly.Colours.motion.tertiary})}};
Blockly.Blocks.wedo_whentilt={init:function(){this.jsonInit({id:"wedo_whentilt",message0:"when tilted ...",args0:[],inputsInline:!0,nextStatement:null,colour:Blockly.Colours.event.primary,colourSecondary:Blockly.Colours.event.secondary,colourTertiary:Blockly.Colours.event.tertiary})}};
Blockly.Blocks.wedo_whendistanceclose={init:function(){this.jsonInit({id:"wedo_whendistanceclose",message0:"when distance is near",args0:[],inputsInline:!0,nextStatement:null,colour:Blockly.Colours.event.primary,colourSecondary:Blockly.Colours.event.secondary,colourTertiary:Blockly.Colours.event.tertiary})}};
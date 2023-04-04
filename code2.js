gdjs.Scene2_32_406_1268_41Code = {};
gdjs.Scene2_32_406_1268_41Code.GDwhiteObjects1= [];
gdjs.Scene2_32_406_1268_41Code.GDwhiteObjects2= [];
gdjs.Scene2_32_406_1268_41Code.GDb1Objects1= [];
gdjs.Scene2_32_406_1268_41Code.GDb1Objects2= [];
gdjs.Scene2_32_406_1268_41Code.GDb2Objects1= [];
gdjs.Scene2_32_406_1268_41Code.GDb2Objects2= [];
gdjs.Scene2_32_406_1268_41Code.GDb3Objects1= [];
gdjs.Scene2_32_406_1268_41Code.GDb3Objects2= [];
gdjs.Scene2_32_406_1268_41Code.GDb4Objects1= [];
gdjs.Scene2_32_406_1268_41Code.GDb4Objects2= [];
gdjs.Scene2_32_406_1268_41Code.GDditoeduObjects1= [];
gdjs.Scene2_32_406_1268_41Code.GDditoeduObjects2= [];
gdjs.Scene2_32_406_1268_41Code.GDb5Objects1= [];
gdjs.Scene2_32_406_1268_41Code.GDb5Objects2= [];
gdjs.Scene2_32_406_1268_41Code.GDbutton2Objects1= [];
gdjs.Scene2_32_406_1268_41Code.GDbutton2Objects2= [];
gdjs.Scene2_32_406_1268_41Code.GDtap9Objects1= [];
gdjs.Scene2_32_406_1268_41Code.GDtap9Objects2= [];
gdjs.Scene2_32_406_1268_41Code.GDtap10Objects1= [];
gdjs.Scene2_32_406_1268_41Code.GDtap10Objects2= [];
gdjs.Scene2_32_406_1268_41Code.GDtap11Objects1= [];
gdjs.Scene2_32_406_1268_41Code.GDtap11Objects2= [];
gdjs.Scene2_32_406_1268_41Code.GDimg9Objects1= [];
gdjs.Scene2_32_406_1268_41Code.GDimg9Objects2= [];
gdjs.Scene2_32_406_1268_41Code.GDimg10Objects1= [];
gdjs.Scene2_32_406_1268_41Code.GDimg10Objects2= [];
gdjs.Scene2_32_406_1268_41Code.GDimg11Objects1= [];
gdjs.Scene2_32_406_1268_41Code.GDimg11Objects2= [];

gdjs.Scene2_32_406_1268_41Code.conditionTrue_0 = {val:false};
gdjs.Scene2_32_406_1268_41Code.condition0IsTrue_0 = {val:false};
gdjs.Scene2_32_406_1268_41Code.condition1IsTrue_0 = {val:false};
gdjs.Scene2_32_406_1268_41Code.condition2IsTrue_0 = {val:false};


gdjs.Scene2_32_406_1268_41Code.mapOfGDgdjs_46Scene2_9532_95406_951268_9541Code_46GDb1Objects1Objects = Hashtable.newFrom({"b1": gdjs.Scene2_32_406_1268_41Code.GDb1Objects1});
gdjs.Scene2_32_406_1268_41Code.mapOfGDgdjs_46Scene2_9532_95406_951268_9541Code_46GDb2Objects1Objects = Hashtable.newFrom({"b2": gdjs.Scene2_32_406_1268_41Code.GDb2Objects1});
gdjs.Scene2_32_406_1268_41Code.mapOfGDgdjs_46Scene2_9532_95406_951268_9541Code_46GDb3Objects1Objects = Hashtable.newFrom({"b3": gdjs.Scene2_32_406_1268_41Code.GDb3Objects1});
gdjs.Scene2_32_406_1268_41Code.mapOfGDgdjs_46Scene2_9532_95406_951268_9541Code_46GDb4Objects1Objects = Hashtable.newFrom({"b4": gdjs.Scene2_32_406_1268_41Code.GDb4Objects1});
gdjs.Scene2_32_406_1268_41Code.mapOfGDgdjs_46Scene2_9532_95406_951268_9541Code_46GDb5Objects1Objects = Hashtable.newFrom({"b5": gdjs.Scene2_32_406_1268_41Code.GDb5Objects1});
gdjs.Scene2_32_406_1268_41Code.mapOfGDgdjs_46Scene2_9532_95406_951268_9541Code_46GDtap9Objects1Objects = Hashtable.newFrom({"tap9": gdjs.Scene2_32_406_1268_41Code.GDtap9Objects1});
gdjs.Scene2_32_406_1268_41Code.mapOfGDgdjs_46Scene2_9532_95406_951268_9541Code_46GDtap10Objects1Objects = Hashtable.newFrom({"tap10": gdjs.Scene2_32_406_1268_41Code.GDtap10Objects1});
gdjs.Scene2_32_406_1268_41Code.mapOfGDgdjs_46Scene2_9532_95406_951268_9541Code_46GDtap11Objects1Objects = Hashtable.newFrom({"tap11": gdjs.Scene2_32_406_1268_41Code.GDtap11Objects1});
gdjs.Scene2_32_406_1268_41Code.eventsList0 = function(runtimeScene) {

{


gdjs.Scene2_32_406_1268_41Code.condition0IsTrue_0.val = false;
{
gdjs.Scene2_32_406_1268_41Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Scene2_32_406_1268_41Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("img10"), gdjs.Scene2_32_406_1268_41Code.GDimg10Objects1);
gdjs.copyArray(runtimeScene.getObjects("img11"), gdjs.Scene2_32_406_1268_41Code.GDimg11Objects1);
gdjs.copyArray(runtimeScene.getObjects("tap10"), gdjs.Scene2_32_406_1268_41Code.GDtap10Objects1);
gdjs.copyArray(runtimeScene.getObjects("tap11"), gdjs.Scene2_32_406_1268_41Code.GDtap11Objects1);
{for(var i = 0, len = gdjs.Scene2_32_406_1268_41Code.GDimg10Objects1.length ;i < len;++i) {
    gdjs.Scene2_32_406_1268_41Code.GDimg10Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene2_32_406_1268_41Code.GDimg11Objects1.length ;i < len;++i) {
    gdjs.Scene2_32_406_1268_41Code.GDimg11Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene2_32_406_1268_41Code.GDtap10Objects1.length ;i < len;++i) {
    gdjs.Scene2_32_406_1268_41Code.GDtap10Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene2_32_406_1268_41Code.GDtap11Objects1.length ;i < len;++i) {
    gdjs.Scene2_32_406_1268_41Code.GDtap11Objects1[i].hide();
}
}}

}


{


gdjs.Scene2_32_406_1268_41Code.condition0IsTrue_0.val = false;
gdjs.Scene2_32_406_1268_41Code.condition1IsTrue_0.val = false;
{
gdjs.Scene2_32_406_1268_41Code.condition0IsTrue_0.val = gdjs.evtTools.input.isScrollingDown(runtimeScene);
}if ( gdjs.Scene2_32_406_1268_41Code.condition0IsTrue_0.val ) {
{
gdjs.Scene2_32_406_1268_41Code.condition1IsTrue_0.val = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) < 400;
}}
if (gdjs.Scene2_32_406_1268_41Code.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (20), "", 0);
}}

}


{


gdjs.Scene2_32_406_1268_41Code.condition0IsTrue_0.val = false;
gdjs.Scene2_32_406_1268_41Code.condition1IsTrue_0.val = false;
{
gdjs.Scene2_32_406_1268_41Code.condition0IsTrue_0.val = gdjs.evtTools.input.isScrollingUp(runtimeScene);
}if ( gdjs.Scene2_32_406_1268_41Code.condition0IsTrue_0.val ) {
{
gdjs.Scene2_32_406_1268_41Code.condition1IsTrue_0.val = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) >= 50;
}}
if (gdjs.Scene2_32_406_1268_41Code.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (20), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b1"), gdjs.Scene2_32_406_1268_41Code.GDb1Objects1);

gdjs.Scene2_32_406_1268_41Code.condition0IsTrue_0.val = false;
gdjs.Scene2_32_406_1268_41Code.condition1IsTrue_0.val = false;
{
gdjs.Scene2_32_406_1268_41Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene2_32_406_1268_41Code.mapOfGDgdjs_46Scene2_9532_95406_951268_9541Code_46GDb1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene2_32_406_1268_41Code.condition0IsTrue_0.val ) {
{
gdjs.Scene2_32_406_1268_41Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene2_32_406_1268_41Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "home", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b2"), gdjs.Scene2_32_406_1268_41Code.GDb2Objects1);

gdjs.Scene2_32_406_1268_41Code.condition0IsTrue_0.val = false;
gdjs.Scene2_32_406_1268_41Code.condition1IsTrue_0.val = false;
{
gdjs.Scene2_32_406_1268_41Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene2_32_406_1268_41Code.mapOfGDgdjs_46Scene2_9532_95406_951268_9541Code_46GDb2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene2_32_406_1268_41Code.condition0IsTrue_0.val ) {
{
gdjs.Scene2_32_406_1268_41Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene2_32_406_1268_41Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene1 (0~4)", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b3"), gdjs.Scene2_32_406_1268_41Code.GDb3Objects1);

gdjs.Scene2_32_406_1268_41Code.condition0IsTrue_0.val = false;
gdjs.Scene2_32_406_1268_41Code.condition1IsTrue_0.val = false;
{
gdjs.Scene2_32_406_1268_41Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene2_32_406_1268_41Code.mapOfGDgdjs_46Scene2_9532_95406_951268_9541Code_46GDb3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene2_32_406_1268_41Code.condition0IsTrue_0.val ) {
{
gdjs.Scene2_32_406_1268_41Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene2_32_406_1268_41Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene3 (9~15)", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b4"), gdjs.Scene2_32_406_1268_41Code.GDb4Objects1);

gdjs.Scene2_32_406_1268_41Code.condition0IsTrue_0.val = false;
gdjs.Scene2_32_406_1268_41Code.condition1IsTrue_0.val = false;
{
gdjs.Scene2_32_406_1268_41Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene2_32_406_1268_41Code.mapOfGDgdjs_46Scene2_9532_95406_951268_9541Code_46GDb4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene2_32_406_1268_41Code.condition0IsTrue_0.val ) {
{
gdjs.Scene2_32_406_1268_41Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene2_32_406_1268_41Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene4 (16~28)", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b5"), gdjs.Scene2_32_406_1268_41Code.GDb5Objects1);

gdjs.Scene2_32_406_1268_41Code.condition0IsTrue_0.val = false;
gdjs.Scene2_32_406_1268_41Code.condition1IsTrue_0.val = false;
{
gdjs.Scene2_32_406_1268_41Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene2_32_406_1268_41Code.mapOfGDgdjs_46Scene2_9532_95406_951268_9541Code_46GDb5Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene2_32_406_1268_41Code.condition0IsTrue_0.val ) {
{
gdjs.Scene2_32_406_1268_41Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene2_32_406_1268_41Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene5 (29~34)", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tap9"), gdjs.Scene2_32_406_1268_41Code.GDtap9Objects1);

gdjs.Scene2_32_406_1268_41Code.condition0IsTrue_0.val = false;
gdjs.Scene2_32_406_1268_41Code.condition1IsTrue_0.val = false;
{
gdjs.Scene2_32_406_1268_41Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene2_32_406_1268_41Code.mapOfGDgdjs_46Scene2_9532_95406_951268_9541Code_46GDtap9Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene2_32_406_1268_41Code.condition0IsTrue_0.val ) {
{
gdjs.Scene2_32_406_1268_41Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene2_32_406_1268_41Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("img10"), gdjs.Scene2_32_406_1268_41Code.GDimg10Objects1);
gdjs.copyArray(runtimeScene.getObjects("img9"), gdjs.Scene2_32_406_1268_41Code.GDimg9Objects1);
gdjs.copyArray(runtimeScene.getObjects("tap10"), gdjs.Scene2_32_406_1268_41Code.GDtap10Objects1);
/* Reuse gdjs.Scene2_32_406_1268_41Code.GDtap9Objects1 */
{for(var i = 0, len = gdjs.Scene2_32_406_1268_41Code.GDimg9Objects1.length ;i < len;++i) {
    gdjs.Scene2_32_406_1268_41Code.GDimg9Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene2_32_406_1268_41Code.GDtap9Objects1.length ;i < len;++i) {
    gdjs.Scene2_32_406_1268_41Code.GDtap9Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene2_32_406_1268_41Code.GDimg10Objects1.length ;i < len;++i) {
    gdjs.Scene2_32_406_1268_41Code.GDimg10Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene2_32_406_1268_41Code.GDtap10Objects1.length ;i < len;++i) {
    gdjs.Scene2_32_406_1268_41Code.GDtap10Objects1[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tap10"), gdjs.Scene2_32_406_1268_41Code.GDtap10Objects1);

gdjs.Scene2_32_406_1268_41Code.condition0IsTrue_0.val = false;
gdjs.Scene2_32_406_1268_41Code.condition1IsTrue_0.val = false;
{
gdjs.Scene2_32_406_1268_41Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene2_32_406_1268_41Code.mapOfGDgdjs_46Scene2_9532_95406_951268_9541Code_46GDtap10Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene2_32_406_1268_41Code.condition0IsTrue_0.val ) {
{
gdjs.Scene2_32_406_1268_41Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene2_32_406_1268_41Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("img10"), gdjs.Scene2_32_406_1268_41Code.GDimg10Objects1);
gdjs.copyArray(runtimeScene.getObjects("img11"), gdjs.Scene2_32_406_1268_41Code.GDimg11Objects1);
/* Reuse gdjs.Scene2_32_406_1268_41Code.GDtap10Objects1 */
gdjs.copyArray(runtimeScene.getObjects("tap11"), gdjs.Scene2_32_406_1268_41Code.GDtap11Objects1);
{for(var i = 0, len = gdjs.Scene2_32_406_1268_41Code.GDtap10Objects1.length ;i < len;++i) {
    gdjs.Scene2_32_406_1268_41Code.GDtap10Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene2_32_406_1268_41Code.GDimg10Objects1.length ;i < len;++i) {
    gdjs.Scene2_32_406_1268_41Code.GDimg10Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene2_32_406_1268_41Code.GDimg11Objects1.length ;i < len;++i) {
    gdjs.Scene2_32_406_1268_41Code.GDimg11Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene2_32_406_1268_41Code.GDtap11Objects1.length ;i < len;++i) {
    gdjs.Scene2_32_406_1268_41Code.GDtap11Objects1[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tap11"), gdjs.Scene2_32_406_1268_41Code.GDtap11Objects1);

gdjs.Scene2_32_406_1268_41Code.condition0IsTrue_0.val = false;
gdjs.Scene2_32_406_1268_41Code.condition1IsTrue_0.val = false;
{
gdjs.Scene2_32_406_1268_41Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene2_32_406_1268_41Code.mapOfGDgdjs_46Scene2_9532_95406_951268_9541Code_46GDtap11Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene2_32_406_1268_41Code.condition0IsTrue_0.val ) {
{
gdjs.Scene2_32_406_1268_41Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene2_32_406_1268_41Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene3 (9~15)", true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}}

}


};

gdjs.Scene2_32_406_1268_41Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene2_32_406_1268_41Code.GDwhiteObjects1.length = 0;
gdjs.Scene2_32_406_1268_41Code.GDwhiteObjects2.length = 0;
gdjs.Scene2_32_406_1268_41Code.GDb1Objects1.length = 0;
gdjs.Scene2_32_406_1268_41Code.GDb1Objects2.length = 0;
gdjs.Scene2_32_406_1268_41Code.GDb2Objects1.length = 0;
gdjs.Scene2_32_406_1268_41Code.GDb2Objects2.length = 0;
gdjs.Scene2_32_406_1268_41Code.GDb3Objects1.length = 0;
gdjs.Scene2_32_406_1268_41Code.GDb3Objects2.length = 0;
gdjs.Scene2_32_406_1268_41Code.GDb4Objects1.length = 0;
gdjs.Scene2_32_406_1268_41Code.GDb4Objects2.length = 0;
gdjs.Scene2_32_406_1268_41Code.GDditoeduObjects1.length = 0;
gdjs.Scene2_32_406_1268_41Code.GDditoeduObjects2.length = 0;
gdjs.Scene2_32_406_1268_41Code.GDb5Objects1.length = 0;
gdjs.Scene2_32_406_1268_41Code.GDb5Objects2.length = 0;
gdjs.Scene2_32_406_1268_41Code.GDbutton2Objects1.length = 0;
gdjs.Scene2_32_406_1268_41Code.GDbutton2Objects2.length = 0;
gdjs.Scene2_32_406_1268_41Code.GDtap9Objects1.length = 0;
gdjs.Scene2_32_406_1268_41Code.GDtap9Objects2.length = 0;
gdjs.Scene2_32_406_1268_41Code.GDtap10Objects1.length = 0;
gdjs.Scene2_32_406_1268_41Code.GDtap10Objects2.length = 0;
gdjs.Scene2_32_406_1268_41Code.GDtap11Objects1.length = 0;
gdjs.Scene2_32_406_1268_41Code.GDtap11Objects2.length = 0;
gdjs.Scene2_32_406_1268_41Code.GDimg9Objects1.length = 0;
gdjs.Scene2_32_406_1268_41Code.GDimg9Objects2.length = 0;
gdjs.Scene2_32_406_1268_41Code.GDimg10Objects1.length = 0;
gdjs.Scene2_32_406_1268_41Code.GDimg10Objects2.length = 0;
gdjs.Scene2_32_406_1268_41Code.GDimg11Objects1.length = 0;
gdjs.Scene2_32_406_1268_41Code.GDimg11Objects2.length = 0;

gdjs.Scene2_32_406_1268_41Code.eventsList0(runtimeScene);

return;

}

gdjs['Scene2_32_406_1268_41Code'] = gdjs.Scene2_32_406_1268_41Code;

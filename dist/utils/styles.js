Object.defineProperty(exports,"__esModule",{value:true});exports.styles=void 0;var _reactNative=require("react-native");var styles=exports.styles=_reactNative.StyleSheet.create({stepNumber:{marginTop:20,alignItems:'center',position:'absolute'},sliderMainContainer:{zIndex:1,width:'100%'},defaultSlideriOS:{height:40},defaultSlider:{},stepsIndicator:{flex:1,flexDirection:'row',justifyContent:'space-between',top:_reactNative.Platform.OS==='ios'?10:0,zIndex:2},trackMarkContainer:{alignItems:'center',alignContent:'center',alignSelf:'center',justifyContent:'center',position:'absolute',zIndex:3},thumbImageContainer:{position:'absolute',zIndex:3,justifyContent:'center',alignItems:'center',alignContent:'center'},thumbImage:{alignContent:'center',alignItems:'center',position:'absolute'},stepIndicatorElement:{alignItems:'center',alignContent:'center'},defaultIndicatorMarked:{height:20,width:5,backgroundColor:'#CCCCCC'},defaultIndicatorIdle:{height:10,width:2,backgroundColor:'#C0C0C0'}});
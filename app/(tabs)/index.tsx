import CartButton from "@/component/CartButton";
import { images, offers } from "@/constants";
import { Fragment } from "react";
import { FlatList, Image, Pressable, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
export default function Index() {
  return (
   <SafeAreaView className="flex-1 bg-white">
   
    <FlatList data={ offers} 
    ListHeaderComponent={()=>(
       <View className="flex-between flex-row w-full  my-5 ">
      <View className="flex-start">
        <Text className="small-bold text-primary">Deliver To</Text>
       <TouchableOpacity className="flex-center flex-row gap-x-1 mt-0.5">
        <Text className="paragraph-bold text-dark-100" >Pakistan</Text>
         <Image source={images.arrowDown} className="size-4" resizeMode="contain" />
       </TouchableOpacity>
             </View> 
             <View>
              <CartButton />
              </View>
    </View>
    )}
    renderItem={({ item , index}) =>{
    
      return(
      <View>
        <Pressable className="offer-card"  style={{backgroundColor: item.color}} android_ripple={{color:"#ffffff22"}}>
          {({pressed})=>(
             <Fragment>
               {/* <View className={"h-full w-1/2"}>
                <Image source={item.image} className="size-full" resizeMode={"contain"}/>
              </View>  */}
              <View className="offer-card__info">
               <Text className="h1-bold text-white leading-tight"
               >{item.title}</Text>
               <Image source={images.arrowRight} className="size-10" resizeMode="contain" tintColor={'#ffffff'}/>
              </View>
             </Fragment>
          )}
        </Pressable>
      </View>
      )
    }
    }
    contentContainerClassName="pb-28 px-5"
    />
    
   </SafeAreaView>
  );
}

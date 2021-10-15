import React from 'react'
import { BottomModalProvider, useBottomModal } from 'react-native-bottom-modal'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    
  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Post = () => {

    return (
        <BottomModalProvider>
          <Example />
        </BottomModalProvider>
    )
  
}
 
  const Example = () => {
    const { showModal } = useBottomModal()
    return (
        <View
        style={{
          flexDirection: "row",
          height: 100,
          padding: 20
        }}
        >
        <Button
          onPress={() =>
            showModal({
              header: <ModalHeader/>,
              content: (
                <StyledModal>
                  <CartCheckout/>
                </StyledModal>
              ),
            })
          } title='  With handle'
        >
        
        </Button>
      </View>
    )
  }
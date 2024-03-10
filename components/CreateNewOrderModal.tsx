import Colors from "@/constants/Colors";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { Ref, useCallback, useMemo } from "react";
import { useColorScheme } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

type Props = {
  modalRef: Ref<BottomSheetModal> | any;
};

const CreateNewOrderModal = ({ modalProps }: { modalProps: Props }) => {
  const theme = useColorScheme();

  return (
    <BottomSheetModal
      snapPoints={["40%"]}
      index={0}
      ref={modalProps.modalRef}
      backgroundStyle={{
        backgroundColor:
          theme === "dark" ? Colors.dark.background : Colors.light.background,
      }}
    >
      <BottomSheetView style={{ padding: 10, display: "flex", gap: 10 }}>
        <Text variant="bodyMedium">Hello World from Modal</Text>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export default CreateNewOrderModal;

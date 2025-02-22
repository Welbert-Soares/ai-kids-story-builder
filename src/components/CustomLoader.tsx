
import { useEffect } from "react";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from "@heroui/modal";

const CustomLoader = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    onOpen()
  }, [])

  return (
    <Modal
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody>
              <Image
                src={'/loader.gif'}
                alt="Loading"
                width={300}
                height={300}
                className="w-[200px] h-[200px]"
              />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export { CustomLoader }
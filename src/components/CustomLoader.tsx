
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

interface CustomLoaderProps {
  isLoading: boolean
}

const CustomLoader = ({ isLoading }: CustomLoaderProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    onOpen()
  }, [])

  return (
    <div>
      {isLoading &&
        <Modal
          isDismissable={false}
          isKeyboardDismissDisabled={true}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody className="p-10 flex w-full justify-center items-center">
                  <Image
                    src={'/loader.gif'}
                    alt="Loading"
                    width={300}
                    height={300}
                    className="w-[200px] h-[200px]"
                  />
                  <h2 className="font-bold text-2xl text-primary text-center">Gerando sua história...</h2>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      }
    </div>
  )
}

export { CustomLoader }
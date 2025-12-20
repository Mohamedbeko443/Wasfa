import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";
import { useDeleteComment } from "../../hooks/useDeleteComment";
import { useParams } from "react-router-dom";


interface AlertProps {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
    selectedId: string;
}

function Alert({isOpen , onOpenChange , selectedId}: AlertProps) {
    const {id: recipeId} = useParams<{id: string}>();
    const { deleteReview , isPending } = useDeleteComment(recipeId!);

    const handleDelete = () => {
        deleteReview(selectedId);
        onOpenChange(false);
    }

  return (
      <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-lg font-semibold">Alert</ModalHeader>
              <ModalBody>
                <p>
                  Are you sure you want to delete this review?
                </p>
                
              </ModalBody>
              <ModalFooter>
                <Button onPress={handleDelete} disabled={isPending} className="bg-red-500 hover:bg-red-600 font-semibold text-white">
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default Alert
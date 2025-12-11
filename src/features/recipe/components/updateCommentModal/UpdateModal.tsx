import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Spinner,
} from "@heroui/react";
import { useParams } from "react-router-dom";
import { Review } from "@/common/types/Recipe";
import { useState } from "react";
import { useUpdateComment } from "../../hooks/useUpdateComment";


interface UpdateModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  review: Review;
}


function UpdateModal({ isOpen, onOpenChange, review }: UpdateModalProps) {
  const [body, setBody] = useState<string>(review?.body);
  const { id: recipeId } = useParams<{ id: string }>();
  const { EditComment, isPending } = useUpdateComment(recipeId!);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    EditComment({ commentId: review.id, body });
    onOpenChange(false);
  }

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-lg font-semibold">Edit Comment</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2" >
                  <input type="text" value={body} className="border border-gray-300 rounded-lg p-3 w-full  focus:ring-2 focus:ring-orange-400 focus:outline-none" onChange={(e) => setBody(e.target.value)} />
                  <Button type="submit" className="bg-orange-500 w-fit self-end font-semibold hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-gray-400 text-white" disabled={isPending || body.trim() === ''}>
                    {isPending ? <Spinner color='danger' /> : 'Edit'}
                  </Button>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default UpdateModal
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    addToast
} from "@heroui/react";
import { useState } from "react";
import { useUploadImage } from "../hooks/useUploadImage";

interface UploadImageModalProps {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
    selectedId?: string;
    setSelectedId: (id: string | null) => void;
}

function UploadImageModal({
    isOpen,
    onOpenChange,
    selectedId,
    setSelectedId,
}: UploadImageModalProps) {

    const [file, setFile] = useState<File | null>(null);
    const { updateRecipeImage, isPending: isUploadPending } = useUploadImage();

    const handleUpload = () => {
        if (!file) return addToast({
            title: 'Error',
            description: "Please select an image",
            color: 'warning'
        });

        updateRecipeImage({
            id: selectedId!,
            image: file
        }, {
            onSuccess: onClose
        })

    }

    const onClose = () => {
        onOpenChange(false);
        setSelectedId(null);
        setFile(null);
    }

    return (
        <Modal isOpen={isOpen} onOpenChange={onClose} size="lg">
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-lg font-semibold">
                            Upload Image
                        </ModalHeader>
                        <ModalBody>
                            <p>Upload image for recipe with id: {selectedId}</p>
                            <div className="flex flex-col gap-2">
                                <label className="text-small font-medium text-foreground">Recipe Image <span className="text-danger">*</span></label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => setFile(e.target.files![0])}
                                    className="block w-full text-sm text-gray-500
                                            file:mr-4 file:py-2 file:px-4
                                            file:rounded-full file:border-0
                                            file:text-sm file:font-semibold
                                            file:bg-orange-50 file:text-orange-700
                                            hover:file:bg-orange-100"
                                />
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                onPress={onClose}
                                variant="light"
                            >
                                Cancel
                            </Button>
                            <Button
                                onPress={handleUpload}
                                disabled={isUploadPending}
                                className="font-semibold disabled:opacity-50 disabled:cursor-not-allowed  text-white disabled:bg-gray-500 bg-blue-500 hover:bg-blue-700"
                            >
                                {isUploadPending ? 'Uploading...' : 'Upload'}
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

export default UploadImageModal
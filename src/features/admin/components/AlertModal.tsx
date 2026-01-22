import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button
} from "@heroui/react";


interface AlertModalProps {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
    onConfirm: (id: string) => void;
    title?: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    confirmColor?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
    isPending?: boolean;
    selectedId?: string;
}

function AlertModal({
    isOpen,
    onOpenChange,
    onConfirm,
    title = "Alert",
    message,
    confirmText = "Confirm",
    cancelText = "Cancel",
    confirmColor = "danger",
    isPending = false,
    selectedId,
}: AlertModalProps) {

    const handleConfirm = () => {
        onConfirm(selectedId!);
        onOpenChange(false);
    }

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-lg font-semibold">
                            {title}
                        </ModalHeader>
                        <ModalBody>
                            <p>{message}</p>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                onPress={onClose}
                                variant="light"
                                disabled={isPending}
                            >
                                {cancelText}
                            </Button>
                            <Button
                                onPress={handleConfirm}
                                disabled={isPending}
                                color={confirmColor}
                                className="font-semibold"
                            >
                                {isPending ? "Processing..." : confirmText}
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

export default AlertModal
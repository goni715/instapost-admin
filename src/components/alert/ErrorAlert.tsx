import { Alert, AlertDescription } from "../ui/alert";

type TProps = {
    message: string;
};

const ErrorAlert = ({ message }: TProps) => {
    return (
        <>
            <Alert variant="destructive" className="text-center">
                <AlertDescription>{message}</AlertDescription>
            </Alert>
        </>
    );
};

export default ErrorAlert;

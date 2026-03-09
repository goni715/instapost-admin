import { Button } from "../ui/button";

type TProps = {
  onClick: () => void;
};

const NoButton = ({ onClick }: TProps) => {
  return (
    <>
      <Button
        variant="default"
        className="bg-black hover:bg-black/80 cursor-pointer"
        onClick={onClick}
      >
        No
      </Button>
    </>
  );
};

export default NoButton;

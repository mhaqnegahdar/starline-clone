// Iconst
import { BsChatLeftDotsFill } from "react-icons/bs";

const Chat = () => {
  return (
    <button className="chat position-fixed  text-white border border-2 border-white rounded-circle p-4">
      <BsChatLeftDotsFill size={20} />
    </button>
  );
};

export default Chat;

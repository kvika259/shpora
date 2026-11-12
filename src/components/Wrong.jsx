import { Alert } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
const Wrong = ({ children }) => (
  <>
    <Alert
      description={children}
      type="error"
      showIcon
      icon={<ExclamationCircleFilled />}
    />
  </>
);
export default Wrong;
